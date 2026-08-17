import { useEffect, useRef, useState, type PointerEvent } from 'react'
import { Maximize, Pause, Play, Volume2, VolumeX } from 'lucide-react'
import { MARKETING_VIDEO_SRC } from '../config'
import { cn } from '../lib/cn'

type VideoEmbedProps = {
  src?: string
  title?: string
  className?: string
  poster?: string
}

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00'
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

export function VideoEmbed({
  src = MARKETING_VIDEO_SRC,
  title = 'Statasphere in 40 seconds',
  className,
  poster,
}: VideoEmbedProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const frameRef = useRef<HTMLDivElement>(null)
  const [playing, setPlaying] = useState(false)
  const [current, setCurrent] = useState(0)
  const [duration, setDuration] = useState(0)
  const [muted, setMuted] = useState(false)
  const [hovering, setHovering] = useState(false)

  const showChrome = !playing || hovering

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      void video.play()
    } else {
      video.pause()
    }
  }

  const seek = (event: PointerEvent<HTMLDivElement>) => {
    const video = videoRef.current
    if (!video || !duration) return
    const rect = event.currentTarget.getBoundingClientRect()
    const ratio = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width))
    video.currentTime = ratio * duration
    setCurrent(video.currentTime)
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setMuted(video.muted)
  }

  const toggleFullscreen = () => {
    const frame = frameRef.current
    if (!frame) return
    if (document.fullscreenElement) {
      void document.exitFullscreen()
    } else {
      void frame.requestFullscreen()
    }
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    const onTime = () => setCurrent(video.currentTime)
    const onMeta = () => setDuration(video.duration || 0)
    const onEnded = () => {
      setPlaying(false)
      setCurrent(0)
    }

    video.addEventListener('play', onPlay)
    video.addEventListener('pause', onPause)
    video.addEventListener('timeupdate', onTime)
    video.addEventListener('loadedmetadata', onMeta)
    video.addEventListener('ended', onEnded)
    return () => {
      video.removeEventListener('play', onPlay)
      video.removeEventListener('pause', onPause)
      video.removeEventListener('timeupdate', onTime)
      video.removeEventListener('loadedmetadata', onMeta)
      video.removeEventListener('ended', onEnded)
    }
  }, [])

  const progress = duration > 0 ? (current / duration) * 100 : 0

  return (
    <div
      ref={frameRef}
        className={cn(
          'group relative w-full min-w-0 overflow-hidden rounded-2xl bg-soft shadow-[0_28px_64px_-28px_rgba(5,7,23,0.4)] ring-1 ring-navy/10',
          className,
        )}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <video
        ref={videoRef}
        className="aspect-video w-full bg-soft object-cover"
        preload="metadata"
        playsInline
        poster={poster}
        title={title}
        onClick={togglePlay}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <button
        type="button"
        onClick={togglePlay}
        className={cn(
          'absolute inset-0 flex flex-col items-center justify-center gap-4 transition-opacity duration-500',
          playing ? 'pointer-events-none opacity-0' : 'opacity-100',
        )}
        aria-label={`Play ${title}`}
      >
        <span className="flex size-16 items-center justify-center rounded-full bg-navy text-soft shadow-[0_18px_40px_-16px_rgba(5,7,23,0.55)] ring-4 ring-white/70 transition-transform duration-300 hover:scale-[1.04] sm:size-[4.5rem]">
          <Play className="ml-0.5 size-7 fill-current" aria-hidden="true" />
        </span>
      </button>

      <div
        className={cn(
          'absolute inset-x-0 bottom-0 flex items-center gap-2 bg-gradient-to-t from-navy/55 via-navy/20 to-transparent px-3 pb-3 pt-8 transition-opacity duration-300 sm:gap-3 sm:px-4 sm:pb-4 sm:pt-10',
          playing && showChrome ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        <button
          type="button"
          onClick={togglePlay}
          className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-navy"
          aria-label={playing ? 'Pause' : 'Play'}
        >
          {playing ? (
            <Pause className="size-4 fill-current" aria-hidden="true" />
          ) : (
            <Play className="ml-px size-4 fill-current" aria-hidden="true" />
          )}
        </button>

        <div
          role="slider"
          aria-label="Seek"
          aria-valuemin={0}
          aria-valuemax={Math.round(duration)}
          aria-valuenow={Math.round(current)}
          tabIndex={0}
          className="relative h-11 min-w-0 flex-1 cursor-pointer"
          onPointerDown={seek}
          onKeyDown={(event) => {
            const video = videoRef.current
            if (!video) return
            if (event.key === 'ArrowRight') video.currentTime = Math.min(duration, video.currentTime + 2)
            if (event.key === 'ArrowLeft') video.currentTime = Math.max(0, video.currentTime - 2)
          }}
        >
          <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-white/35" />
          <span
            className="absolute left-0 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-accent"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="shrink-0 text-[0.625rem] font-medium tabular-nums tracking-wide text-white sm:min-w-[4.5rem] sm:text-right sm:text-[0.6875rem]">
          {formatTime(current)} / {formatTime(duration)}
        </p>

        <button
          type="button"
          onClick={toggleMute}
          className="flex size-9 shrink-0 items-center justify-center text-white"
          aria-label={muted ? 'Unmute' : 'Mute'}
        >
          {muted ? (
            <VolumeX className="size-4" aria-hidden="true" />
          ) : (
            <Volume2 className="size-4" aria-hidden="true" />
          )}
        </button>

        <button
          type="button"
          onClick={toggleFullscreen}
          className="flex size-9 shrink-0 items-center justify-center text-white"
          aria-label="Fullscreen"
        >
          <Maximize className="size-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}

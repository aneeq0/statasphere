import { heroChannels } from '../lib/channels'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { SphereMark } from './SphereMark'

export function HeroVisual() {
  const reduced = usePrefersReducedMotion()

  return (
    <div className="relative aspect-square w-full">
      <div className="absolute inset-5 sm:inset-4 md:inset-3 lg:inset-0">
        <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="hero-path" x1="0" y1="0" x2="100" y2="100">
            <stop stopColor="#dcaeca" stopOpacity="0.9" />
            <stop offset="1" stopColor="#292b59" stopOpacity="0.55" />
          </linearGradient>
        </defs>

        <circle
          cx="50"
          cy="50"
          r="27"
          className="orb-spin"
          stroke="#292b59"
          strokeOpacity="0.12"
          strokeWidth="0.35"
          strokeDasharray="2 3"
          style={{ transformOrigin: '50px 50px' }}
        />
        <circle cx="50" cy="50" r="16" className="glow-pulse" fill="#dcaeca" fillOpacity="0.12" />
        <circle cx="50" cy="50" r="11" fill="#fbf8f8" stroke="#292b59" strokeOpacity="0.12" strokeWidth="0.4" />

        {heroChannels.map((channel, index) => {
          const d = `M ${channel.x} ${channel.y} Q ${channel.x * 0.4 + 30} ${channel.y * 0.4 + 30} 50 50`
          return (
            <g key={channel.name}>
              <path d={d} stroke="#292b59" strokeOpacity="0.08" strokeWidth="0.35" />
              <path
                d={d}
                stroke="url(#hero-path)"
                strokeWidth="0.4"
                className={reduced ? undefined : 'draw-line'}
                style={{ animationDelay: `${0.55 + index * 0.16}s` }}
                pathLength={1}
              />
              {!reduced ? (
                <circle r="0.7" fill="#dcaeca">
                  <animateMotion
                    dur={`${3.6 + index * 0.35}s`}
                    begin={`${1.2 + index * 0.18}s`}
                    repeatCount="indefinite"
                    path={d}
                  />
                </circle>
              ) : null}
            </g>
          )
        })}
      </svg>

      <div className="absolute left-1/2 top-1/2 z-10 flex w-[44%] -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center">
        <SphereMark size={72} spinning={!reduced} className="mb-2 md:mb-3 md:h-[88px] md:w-[88px]" />
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-navy sm:text-[0.75rem]">
          Statasphere
        </p>
        <p className="mt-1 text-[0.6rem] uppercase tracking-[0.14em] text-muted sm:text-[0.6875rem]">
          Intelligence layer
        </p>
      </div>

      {heroChannels.map((channel, index) => (
        <div
          key={channel.name}
          className="hero-node absolute z-10 -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${channel.x}%`,
            top: `${channel.y}%`,
            animationDelay: `${index * 0.35}s`,
          }}
        >
          <div
            className="rounded-full border border-navy/10 bg-soft/90 px-2.5 py-1.5 shadow-[0_10px_30px_-18px_rgba(5,7,23,0.45)] backdrop-blur-md sm:px-3 sm:py-2"
            style={
              reduced
                ? undefined
                : {
                    animation: 'text-reveal 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
                    animationDelay: `${0.15 + index * 0.1}s`,
                  }
            }
          >
            <p className="text-[0.625rem] font-medium tracking-[-0.02em] text-navy sm:text-[0.75rem]">
              {channel.name}
            </p>
            <p className="text-[0.5625rem] uppercase tracking-[0.12em] text-muted sm:text-[0.625rem]">
              {channel.metric}
            </p>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

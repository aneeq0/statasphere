import { useEffect, useState, type RefObject } from 'react'

export function useScrollProgress(ref: RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const update = () => {
      const rect = element.getBoundingClientRect()
      const total = element.offsetHeight - window.innerHeight
      if (total <= 0) {
        setProgress(rect.top < window.innerHeight * 0.5 ? 1 : 0)
        return
      }
      setProgress(Math.min(1, Math.max(0, -rect.top / total)))
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [ref])

  return progress
}

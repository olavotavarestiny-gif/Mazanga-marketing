'use client'

import { cn } from '@/lib/utils'
import { useMotionValue, animate, motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

type InfiniteSliderProps = {
  children: React.ReactNode
  gap?: number
  duration?: number
  durationOnHover?: number
  direction?: 'horizontal' | 'vertical'
  reverse?: boolean
  className?: string
}

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  direction = 'horizontal',
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState(0)
  const translation = useMotionValue(0)

  useEffect(() => {
    if (!containerRef.current) return
    const obs = new ResizeObserver(([entry]) => {
      setSize(
        direction === 'horizontal'
          ? entry.contentRect.width
          : entry.contentRect.height
      )
    })
    obs.observe(containerRef.current)
    return () => obs.disconnect()
  }, [direction])

  useEffect(() => {
    if (size === 0) return
    const contentSize = size / 2 + gap
    const from = reverse ? -contentSize : 0
    const to = reverse ? 0 : -contentSize
    const controls = animate(translation, [from, to], {
      ease: 'linear',
      duration,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0,
      onRepeat: () => translation.set(from),
    })
    return controls.stop
  }, [translation, duration, size, gap, reverse])

  return (
    <div className={cn('overflow-hidden', className)}>
      <motion.div
        ref={containerRef}
        className="flex w-max"
        style={{
          ...(direction === 'horizontal' ? { x: translation } : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}

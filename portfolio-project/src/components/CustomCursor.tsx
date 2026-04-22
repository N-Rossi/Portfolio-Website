'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 500, damping: 35, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 500, damping: 35, mass: 0.4 })

  useEffect(() => {
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches
    if (!hasFinePointer) return
    setEnabled(true)

    document.documentElement.classList.add('custom-cursor-active')

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const target = e.target as HTMLElement
      const interactive = !!target.closest('a, button, input, textarea, [data-cursor="hover"]')
      setHovering(interactive)
    }

    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.documentElement.classList.remove('custom-cursor-active')
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[100] mix-blend-difference"
        style={{ x: springX, y: springY }}
      >
        <motion.div
          animate={{ scale: hovering ? 1.8 : 1 }}
          transition={{ type: 'spring', stiffness: 500, damping: 28 }}
          className="-translate-x-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-white"
        />
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[99]"
        style={{ x, y }}
      >
        <motion.div
          animate={{ scale: hovering ? 1.4 : 1, opacity: hovering ? 0.25 : 0.15 }}
          className="-translate-x-1/2 -translate-y-1/2 h-12 w-12 rounded-full border border-accent-violet/60 bg-accent-violet/10 blur-[1px]"
        />
      </motion.div>
    </>
  )
}

'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { BsLinkedin, BsGithub, BsArrowDown } from 'react-icons/bs'
import { HiDownload, HiOutlineMail } from 'react-icons/hi'
import { FaJava } from 'react-icons/fa'
import {
  SiReact,
  SiTypescript,
  SiSpringboot,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
} from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'

const roles = [
  'Full-Stack Developer',
  'Java / Spring Boot Engineer',
  'React + React Native Developer',
  'Secret-Cleared Federal Dev',
  'Independent Shipper',
]

function Typewriter({ words }: { words: string[] }) {
  const [idx, setIdx] = useState(0)
  const [sub, setSub] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[idx % words.length]
    const delay = deleting ? 40 : 70
    const pause = !deleting && sub === current.length ? 1600 : deleting && sub === 0 ? 400 : delay

    const t = setTimeout(() => {
      if (!deleting && sub === current.length) {
        setDeleting(true)
        return
      }
      if (deleting && sub === 0) {
        setDeleting(false)
        setIdx((i) => (i + 1) % words.length)
        return
      }
      setSub((s) => s + (deleting ? -1 : 1))
    }, pause)

    return () => clearTimeout(t)
  }, [sub, deleting, idx, words])

  const current = words[idx % words.length].slice(0, sub)
  return (
    <span className="inline-flex items-center">
      <span className="text-gradient font-display">{current}</span>
      <span className="ml-1 inline-block w-[3px] h-[1em] bg-accent-cyan animate-blink" />
    </span>
  )
}

const floatingIcons = [
  { Icon: FaJava, color: '#f89820', top: '10%', left: '6%', delay: 0 },
  { Icon: SiSpringboot, color: '#6db33f', top: '18%', right: '8%', delay: 0.5 },
  { Icon: SiReact, color: '#61dafb', top: '62%', left: '4%', delay: 1.2 },
  { Icon: TbBrandReactNative, color: '#61dafb', top: '70%', right: '6%', delay: 0.8 },
  { Icon: SiTypescript, color: '#3178c6', top: '40%', left: '2%', delay: 1.6 },
  { Icon: SiJavascript, color: '#f7df1e', top: '32%', right: '3%', delay: 2.1 },
  { Icon: SiNextdotjs, color: '#ffffff', top: '78%', left: '14%', delay: 0.4 },
  { Icon: SiTailwindcss, color: '#38bdf8', top: '22%', right: '20%', delay: 1.1 },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center section-padding overflow-hidden pt-32 pb-20"
    >
      <div className="hidden lg:block">
        {floatingIcons.map(({ Icon, color, delay, ...pos }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 0.55, scale: 1 }}
            transition={{ delay: 0.4 + delay * 0.2, duration: 0.8, ease: 'easeOut' }}
            className="absolute pointer-events-none"
            style={pos}
          >
            <div
              className="animate-float-slow"
              style={{ animationDelay: `${delay}s` }}
            >
              <Icon size={48} color={color} style={{ filter: `drop-shadow(0 0 16px ${color}66)` }} />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="container-xl grid lg:grid-cols-[1.2fr_1fr] items-center gap-12 relative z-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inset-0 rounded-full bg-accent-lime animate-pulse-ring" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-accent-lime" />
            </span>
            <span className="text-sm font-mono text-text-secondary">
              Available for full-time opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-5xl sm:text-7xl lg:text-[5.5rem] leading-[1.02] font-bold tracking-tight"
          >
            Hi, I&rsquo;m{' '}
            <span className="relative inline-block">
              <span className="text-gradient">Nicolas Rossi</span>
              <svg
                className="absolute left-0 right-0 -bottom-2 w-full"
                height="14"
                viewBox="0 0 300 14"
                fill="none"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M2 8 Q 80 2 150 8 T 298 6"
                  stroke="url(#under)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.9 }}
                />
                <defs>
                  <linearGradient id="under" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0" stopColor="#22d3ee" />
                    <stop offset="0.5" stopColor="#8b5cf6" />
                    <stop offset="1" stopColor="#d946ef" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 text-2xl sm:text-3xl text-text-primary/90 font-medium min-h-[1.5em]"
          >
            I&rsquo;m a <Typewriter words={roles} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 max-w-2xl text-lg text-text-secondary leading-relaxed"
          >
            3+ years shipping enterprise Java/Spring Boot apps for federal clients, plus
            independent React Native and web products. I hold an{' '}
            <span className="text-accent-cyan font-semibold">active Secret clearance</span>{' '}
            and I like the hard problems — framework migrations, mission-critical codebases,
            and products that have to work the first time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#projects" className="btn-primary group">
              View my work
              <BsArrowDown className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <a href="#contact" className="btn-ghost group">
              <HiOutlineMail size={18} />
              Get in touch
            </a>
            <a
              href="/Nicolas-Rossi-Resume-2026.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost group"
            >
              <HiDownload size={18} />
              Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-10 flex items-center gap-6 text-text-secondary"
          >
            <a
              href="https://github.com/N-Rossi"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center justify-center h-11 w-11 rounded-full hover:text-white hover:bg-white/5 transition-colors"
            >
              <BsGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/nicolas-d-rossi/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center h-11 w-11 rounded-full hover:text-white hover:bg-white/5 transition-colors"
            >
              <BsLinkedin size={22} />
            </a>
            <div className="h-px flex-1 max-w-[160px] bg-gradient-to-r from-white/20 to-transparent" />
            <a
              href="mailto:nick413rossi@gmail.com"
              className="font-mono text-sm hover:text-accent-cyan transition-colors"
            >
              nick413rossi@gmail.com
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="relative aspect-square max-w-[480px] mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-brand opacity-30 blur-3xl animate-pulse" />
            <div className="absolute inset-4 rounded-full border border-white/10 animate-[spin_32s_linear_infinite]">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 h-3 w-3 -mt-1.5 -ml-1.5 rounded-full bg-accent-cyan shadow-glow-cyan"
                  style={{
                    transform: `rotate(${i * 60}deg) translateX(220px)`,
                  }}
                />
              ))}
            </div>
            <div className="absolute inset-12 rounded-full border border-white/5 animate-[spin_18s_linear_infinite_reverse]">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 h-2 w-2 -mt-1 -ml-1 rounded-full bg-accent-fuchsia shadow-glow-violet"
                  style={{
                    transform: `rotate(${i * 90}deg) translateX(150px)`,
                  }}
                />
              ))}
            </div>
            <div className="absolute inset-24 rounded-full glass-strong flex items-center justify-center">
              <div className="text-center p-6">
                <div className="font-display text-6xl font-bold text-gradient">3+</div>
                <div className="text-text-secondary text-sm mt-1">Years of Experience</div>
                <div className="mt-4 h-px w-16 mx-auto bg-white/10" />
                <div className="font-display text-2xl font-semibold text-white mt-4">
                  Secret
                </div>
                <div className="text-text-secondary text-xs mt-1">Clearance · Active</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted hover:text-white transition-colors"
        aria-label="Scroll to about"
      >
        <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <BsArrowDown size={18} />
        </motion.div>
      </motion.a>
    </section>
  )
}

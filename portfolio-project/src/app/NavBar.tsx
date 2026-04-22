'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = ['home', 'about', 'experience', 'projects', 'contact']
      const current = sections.find((id) => {
        const el = document.getElementById(id)
        if (!el) return false
        const rect = el.getBoundingClientRect()
        return rect.top <= 140 && rect.bottom >= 140
      })
      if (current) setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-950/70 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-xl flex items-center justify-between px-6 sm:px-10 lg:px-20 py-4">
        <a href="#home" className="group flex items-center gap-2">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand bg-[length:200%_200%] animate-gradient-x font-display font-bold text-white shadow-glow-violet">
            NR
            <span className="absolute inset-0 rounded-xl ring-2 ring-white/30 opacity-0 group-hover:opacity-100 transition-opacity" />
          </span>
          <span className="hidden sm:block font-display font-semibold text-lg tracking-tight">
            Nicolas <span className="text-gradient">Rossi</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1 rounded-full glass px-2 py-1.5">
          {links.map((l) => {
            const id = l.href.replace('#', '')
            const isActive = active === id
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    isActive ? 'text-white' : 'text-text-secondary hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute inset-0 rounded-full bg-gradient-brand opacity-90"
                    />
                  )}
                  <span className="relative z-10">{l.label}</span>
                </a>
              </li>
            )
          })}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/nicolas-d-rossi/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-text-secondary hover:text-accent-cyan transition-colors"
          >
            <BsLinkedin size={20} />
          </a>
          <a
            href="https://github.com/N-Rossi"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-text-secondary hover:text-accent-cyan transition-colors"
          >
            <BsGithub size={20} />
          </a>
          <a
            href="/Nicolas-Rossi-Resume-2026.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn-primary text-sm px-5 py-2"
          >
            Resume
          </a>
        </div>

        <button
          onClick={() => setOpen((s) => !s)}
          className="md:hidden text-text-primary p-2"
          aria-label="Toggle menu"
        >
          {open ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass-strong border-t border-white/5 px-6 py-6"
          >
            <ul className="flex flex-col gap-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-lg font-medium text-text-primary hover:bg-white/5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="flex gap-3 pt-2">
                <a
                  href="/Nicolas-Rossi-Resume-2026.pdf"
                  target="_blank"
                  className="btn-primary flex-1 text-sm"
                >
                  Resume
                </a>
                <a
                  href="https://www.linkedin.com/in/nicolas-d-rossi/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost px-4"
                  aria-label="LinkedIn"
                >
                  <BsLinkedin size={18} />
                </a>
                <a
                  href="https://github.com/N-Rossi"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost px-4"
                  aria-label="GitHub"
                >
                  <BsGithub size={18} />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

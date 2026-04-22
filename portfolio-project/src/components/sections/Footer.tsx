'use client'

import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'

export default function Footer() {
  return (
    <footer className="relative section-padding pt-16 pb-10 border-t border-white/5">
      <div className="container-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <div className="font-display text-xl font-semibold">
            Nicolas <span className="text-gradient">Rossi</span>
          </div>
          <div className="mt-1 text-sm text-text-muted">
            Designed & built from scratch · Next.js · Framer Motion
          </div>
        </div>

        <div className="flex items-center gap-2 text-text-secondary">
          <a
            href="mailto:nick413rossi@gmail.com"
            className="inline-flex items-center justify-center h-10 w-10 rounded-full hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Email"
          >
            <HiOutlineMail size={20} />
          </a>
          <a
            href="https://github.com/N-Rossi"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center h-10 w-10 rounded-full hover:text-white hover:bg-white/5 transition-colors"
            aria-label="GitHub"
          >
            <BsGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/nicolas-d-rossi/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center h-10 w-10 rounded-full hover:text-white hover:bg-white/5 transition-colors"
            aria-label="LinkedIn"
          >
            <BsLinkedin size={20} />
          </a>
        </div>
      </div>

      <div className="container-xl mt-8 text-xs text-text-muted flex flex-wrap justify-between gap-2">
        <span>© {new Date().getFullYear()} Nicolas Rossi. All rights reserved.</span>
        <span className="font-mono">
          <span className="text-accent-cyan">$</span> thanks for scrolling
        </span>
      </div>
    </footer>
  )
}

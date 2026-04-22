'use client'

import { motion, useMotionValue, useTransform, useMotionTemplate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { FiExternalLink, FiGithub, FiArrowUpRight } from 'react-icons/fi'
import { projects, type Project } from '../../app/data/projects'

const accentClasses: Record<Project['accent'], { border: string; glow: string; text: string }> = {
  violet: { border: 'border-accent-violet/40', glow: 'shadow-glow-violet', text: 'text-accent-violet' },
  cyan: { border: 'border-accent-cyan/40', glow: 'shadow-glow-cyan', text: 'text-accent-cyan' },
  fuchsia: { border: 'border-accent-fuchsia/40', glow: 'shadow-[0_0_40px_-8px_rgba(217,70,239,0.55)]', text: 'text-accent-fuchsia' },
  rose: { border: 'border-accent-rose/40', glow: 'shadow-[0_0_40px_-8px_rgba(244,63,94,0.55)]', text: 'text-accent-rose' },
  lime: { border: 'border-accent-lime/40', glow: 'shadow-[0_0_40px_-8px_rgba(163,230,53,0.55)]', text: 'text-accent-lime' },
}

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)
  const rotX = useTransform(y, [0, 1], [8, -8])
  const rotY = useTransform(x, [0, 1], [-10, 10])
  const bgX = useTransform(x, (v) => `${v * 100}%`)
  const bgY = useTransform(y, (v) => `${v * 100}%`)
  const bg = useMotionTemplate`radial-gradient(400px circle at ${bgX} ${bgY}, rgba(139,92,246,0.25), transparent 40%)`
  const a = accentClasses[project.accent]

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width)
    y.set((e.clientY - rect.top) / rect.height)
  }

  const handleLeave = () => {
    x.set(0.5)
    y.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={featured ? { rotateX: rotX, rotateY: rotY, transformStyle: 'preserve-3d' } : undefined}
      className={`group relative overflow-hidden rounded-3xl glass ${a.border} border transition-shadow duration-500 hover:${a.glow} ${
        featured ? 'lg:col-span-2' : ''
      }`}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: bg }}
      />
      <div className={`flex flex-col ${featured ? 'lg:flex-row' : ''} h-full`}>
        <div
          className={`relative overflow-hidden ${
            featured ? 'lg:w-3/5 aspect-[16/10] lg:aspect-auto' : 'aspect-[16/10]'
          }`}
        >
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent" />
          {project.badge && (
            <div className="absolute top-4 right-4">
              <span className={`tag ${a.text} border-white/20`}>{project.badge}</span>
            </div>
          )}
        </div>

        <div className={`relative p-6 sm:p-8 ${featured ? 'lg:w-2/5 lg:p-10' : ''} flex flex-col`}>
          <h3 className={`font-display font-bold ${featured ? 'text-3xl sm:text-4xl' : 'text-2xl'}`}>
            {project.title}
          </h3>
          <p className={`mt-2 ${a.text} font-medium`}>{project.tagline}</p>
          <p className="mt-3 text-text-secondary leading-relaxed text-sm sm:text-base">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-accent-cyan transition-colors"
              >
                Visit <FiExternalLink />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-accent-cyan transition-colors"
              >
                GitHub <FiGithub />
              </a>
            )}
            <span className="ml-auto text-text-muted group-hover:text-white transition-colors">
              <FiArrowUpRight size={22} />
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function MovingGallery() {
  const images = projects.map((p) => p.image)
  const items = [...images, ...images]
  return (
    <div className="relative mt-20 mask-fade-x overflow-hidden">
      <div className="flex gap-6 animate-marquee-slow w-max hover:[animation-play-state:paused]">
        {items.map((src, i) => (
          <div
            key={i}
            className="relative w-[320px] sm:w-[420px] aspect-[16/10] shrink-0 rounded-2xl overflow-hidden glass group"
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 to-transparent" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="relative section-padding py-28 sm:py-36">
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 max-w-5xl"
        >
          <div>
            <span className="section-eyebrow">03 · Projects</span>
            <h2 className="section-title mt-4">
              Stuff I&rsquo;ve <span className="text-gradient">built</span>
            </h2>
          </div>
          <p className="text-lg text-text-secondary max-w-md">
            A mix of independent products, team builds, and experiments. Hover the cards —
            they move.
          </p>
        </motion.div>

        <div className="mt-14 perspective">
          <div className="grid lg:grid-cols-2 gap-6">
            {featured.map((p) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
              >
                <ProjectCard project={p} featured />
              </motion.div>
            ))}

            {rest.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: i * 0.05 }}
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </div>
        </div>

        <MovingGallery />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="https://github.com/N-Rossi"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            More on GitHub
            <FiArrowUpRight />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

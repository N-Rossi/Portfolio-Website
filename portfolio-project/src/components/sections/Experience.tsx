'use client'

import { motion } from 'framer-motion'
import { experiences, education } from '../../app/data/experience'
import { HiOutlineBriefcase, HiOutlineAcademicCap } from 'react-icons/hi'

export default function Experience() {
  return (
    <section id="experience" className="relative section-padding py-28 sm:py-36">
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="section-eyebrow">02 · Experience</span>
          <h2 className="section-title mt-4">
            The path <span className="text-gradient">so far</span>
          </h2>
          <p className="mt-5 text-lg text-text-secondary max-w-2xl">
            Enterprise federal work by day, independent products by night. Below is where
            I&rsquo;ve shipped.
          </p>
        </motion.div>

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan/40 via-accent-violet/40 to-accent-fuchsia/40"
          />

          <div className="flex flex-col gap-14">
            {experiences.map((exp, i) => {
              const left = i % 2 === 0
              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative md:grid md:grid-cols-2 md:gap-10"
                >
                  <div
                    className={`absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10 flex items-center justify-center h-8 w-8 rounded-full bg-ink-900 border border-white/20`}
                  >
                    <span className="h-3 w-3 rounded-full bg-gradient-brand shadow-glow-violet" />
                    <span className="absolute h-8 w-8 rounded-full border border-accent-violet/40 animate-pulse-ring" />
                  </div>

                  <div
                    className={`pl-14 md:pl-0 ${
                      left
                        ? 'md:pr-10 md:text-right'
                        : 'md:col-start-2 md:pl-10'
                    }`}
                  >
                    <div className="card-glow gradient-border p-6 sm:p-8 text-left">
                      <div
                        className={`flex flex-wrap items-center gap-3 ${
                          left ? 'md:justify-end' : ''
                        }`}
                      >
                        <HiOutlineBriefcase className="text-accent-cyan" size={20} />
                        <span className="font-mono text-xs uppercase tracking-widest text-accent-cyan">
                          {exp.period}
                        </span>
                      </div>
                      <h3
                        className={`mt-3 font-display text-2xl sm:text-3xl font-bold text-white ${
                          left ? 'md:text-right' : ''
                        }`}
                      >
                        {exp.role}
                      </h3>
                      <div
                        className={`mt-1 text-lg text-gradient font-semibold ${
                          left ? 'md:text-right' : ''
                        }`}
                      >
                        {exp.company}
                      </div>
                      <div
                        className={`text-sm text-text-muted ${
                          left ? 'md:text-right' : ''
                        }`}
                      >
                        {exp.location}
                      </div>
                      <p
                        className={`mt-4 text-text-secondary leading-relaxed ${
                          left ? 'md:text-right' : ''
                        }`}
                      >
                        {exp.context}
                      </p>
                      <ul
                        className={`mt-5 space-y-2 text-text-secondary ${
                          left ? 'md:text-right' : ''
                        }`}
                      >
                        {exp.bullets.map((b, bi) => (
                          <li
                            key={bi}
                            className={`flex gap-2 text-sm leading-relaxed ${
                              left ? 'md:flex-row-reverse' : ''
                            }`}
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-violet" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                      <div
                        className={`mt-5 flex flex-wrap gap-2 ${
                          left ? 'md:justify-end' : ''
                        }`}
                      >
                        {exp.tech.map((t) => (
                          <span key={t} className="tag">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="relative md:grid md:grid-cols-2 md:gap-10"
            >
              <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10 flex items-center justify-center h-8 w-8 rounded-full bg-ink-900 border border-white/20">
                <span className="h-3 w-3 rounded-full bg-accent-lime shadow-[0_0_20px_rgba(163,230,53,0.6)]" />
              </div>
              <div
                className={`pl-14 md:pl-0 ${
                  experiences.length % 2 === 0
                    ? 'md:pr-10 md:text-right'
                    : 'md:col-start-2 md:pl-10'
                }`}
              >
                <div className="card-glow gradient-border p-6 sm:p-8 text-left">
                  <div
                    className={`flex flex-wrap items-center gap-3 ${
                      experiences.length % 2 === 0 ? 'md:justify-end' : ''
                    }`}
                  >
                    <HiOutlineAcademicCap className="text-accent-lime" size={20} />
                    <span className="font-mono text-xs uppercase tracking-widest text-accent-lime">
                      {education.period}
                    </span>
                  </div>
                  <h3
                    className={`mt-3 font-display text-2xl sm:text-3xl font-bold text-white ${
                      experiences.length % 2 === 0 ? 'md:text-right' : ''
                    }`}
                  >
                    {education.school}
                  </h3>
                  <p
                    className={`mt-2 text-text-secondary ${
                      experiences.length % 2 === 0 ? 'md:text-right' : ''
                    }`}
                  >
                    {education.degree}
                  </p>
                  <div
                    className={`mt-4 flex flex-wrap gap-2 ${
                      experiences.length % 2 === 0 ? 'md:justify-end' : ''
                    }`}
                  >
                    {education.honors.map((h) => (
                      <span key={h} className="tag">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { skills } from '../../app/data/skills'

const stats = [
  { value: '3+', label: 'Years', sub: 'Professional Software Development Experience' },
  { value: '$250k+', label: 'Revenue generated', sub: 'XRP sniping bot' },
  { value: 'Secret', label: 'Clearance', sub: 'Active · federal' },
  { value: '3.69', label: 'GPA', sub: 'Magna Cum Laude' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: 'easeOut' },
  }),
}

export default function About() {
  const marqueeItems = [...skills, ...skills]

  return (
    <section id="about" className="relative section-padding py-28 sm:py-36">
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="section-eyebrow">01 · About</span>
          <h2 className="section-title mt-4">
            Engineer who likes the <span className="text-gradient">hard problems</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid lg:grid-cols-[1.3fr_1fr] gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-text-secondary leading-relaxed space-y-5"
          >
            <p>
              I&rsquo;m a full-stack developer based in Colorado Springs. I spend my days
              building enterprise Java/Spring Boot applications for federal users at the{' '}
              <span className="text-white font-medium">
                U.S. International Trade Commission
              </span>{' '}
              — delivering major features, leading framework migrations, and coordinating
              releases across production environments.
            </p>
            <p>
              On the side, I develop my own personal projects. I&rsquo;m currently building{' '}
              <span className="text-white font-medium">HedgeLock</span>, a React Native
              sports-betting simulator with live APIs, arbitrage finders, and an MMR ladder.
              Before that I co-developed an XRP sniping bot that generated{' '}
              <span className="text-accent-lime font-semibold">$250,000+</span> over six
              months at the peak of the market. I write fully tested, well documented code, 
              and I have experience leveraging AI to optimize development workflows and solve complex problems.
            </p>
            <p>
              Rowan CS grad, Magna Cum Laude, minor in Math, NCAA track athlete.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="card-glow gradient-border p-6"
              >
                <div className="font-display text-4xl sm:text-5xl font-bold text-gradient">
                  {s.value}
                </div>
                <div className="mt-2 text-white font-semibold">{s.label}</div>
                <div className="text-sm text-text-muted mt-1">{s.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20"
        >
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="section-eyebrow">Stack</span>
              <h3 className="mt-3 font-display text-3xl sm:text-4xl font-bold">
                Tools I have used
              </h3>
            </div>
            <div className="hidden sm:block text-sm text-text-muted font-mono">
              → scroll
            </div>
          </div>

          <div className="relative mask-fade-x overflow-hidden">
            <div className="flex gap-5 animate-marquee w-max hover:[animation-play-state:paused]">
              {marqueeItems.map(({ name, Icon, color }, i) => (
                <div
                  key={`${name}-${i}`}
                  className="group flex items-center gap-3 rounded-2xl glass px-5 py-3 min-w-max transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-violet"
                >
                  <Icon
                    size={28}
                    color={color}
                    style={{
                      filter: `drop-shadow(0 0 10px ${color}55)`,
                    }}
                    className="transition-transform group-hover:scale-110"
                  />
                  <span className="font-medium text-white/90">{name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mask-fade-x overflow-hidden mt-5">
            <div className="flex gap-5 animate-marquee-reverse w-max hover:[animation-play-state:paused]">
              {marqueeItems.map(({ name, Icon, color }, i) => (
                <div
                  key={`r-${name}-${i}`}
                  className="group flex items-center gap-3 rounded-2xl glass px-5 py-3 min-w-max transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-cyan"
                >
                  <Icon
                    size={28}
                    color={color}
                    style={{
                      filter: `drop-shadow(0 0 10px ${color}55)`,
                    }}
                    className="transition-transform group-hover:scale-110"
                  />
                  <span className="font-medium text-white/90">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

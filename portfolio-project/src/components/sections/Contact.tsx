'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'
import { HiOutlineMail, HiOutlineCheckCircle } from 'react-icons/hi'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { FiSend } from 'react-icons/fi'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const form = useRef<HTMLFormElement>(null)

  const serviceKey = process.env.NEXT_PUBLIC_SERVICE_KEY ?? 'err'

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.current) return
    setStatus('sending')
    try {
      emailjs
        .sendForm(serviceKey, 'template_8lm0e45', form.current, 'a8rTC_T5gOyeDESnY')
        .then(
          (_result: EmailJSResponseStatus) => {
            setStatus('sent')
            setName('')
            setEmail('')
            setMsg('')
            setTimeout(() => setStatus('idle'), 4000)
          },
          (_error: EmailJSResponseStatus) => {
            setStatus('error')
          }
        )
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative section-padding py-28 sm:py-36">
      <div className="container-xl">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow">04 · Contact</span>
            <h2 className="section-title mt-4">
              Let&rsquo;s <span className="text-gradient">build something</span>
            </h2>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-lg">
              I&rsquo;m open to full-time roles, especially cleared federal work or
              product-driven teams building things people actually use. Drop a message or
              reach out directly.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href="mailto:nick413rossi@gmail.com"
                className="group flex items-center gap-4 rounded-2xl glass p-4 hover:shadow-glow-violet transition-shadow"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand">
                  <HiOutlineMail className="text-white" size={22} />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-text-muted">
                    Email
                  </div>
                  <div className="font-medium text-white group-hover:text-accent-cyan transition-colors">
                    nick413rossi@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/nicolas-d-rossi/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl glass p-4 hover:shadow-glow-cyan transition-shadow"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0077B5]">
                  <BsLinkedin className="text-white" size={20} />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-text-muted">
                    LinkedIn
                  </div>
                  <div className="font-medium text-white group-hover:text-accent-cyan transition-colors">
                    nicolas-d-rossi
                  </div>
                </div>
              </a>

              <a
                href="https://github.com/N-Rossi"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl glass p-4 hover:shadow-glow-violet transition-shadow"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  <BsGithub className="text-white" size={22} />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-text-muted">
                    GitHub
                  </div>
                  <div className="font-medium text-white group-hover:text-accent-cyan transition-colors">
                    @N-Rossi
                  </div>
                </div>
              </a>
            </div>

            <div className="mt-10 tag">
              <span className="h-2 w-2 rounded-full bg-accent-lime animate-pulse" />
              Based in Colorado Springs, CO · Open to relocation
            </div>
          </motion.div>

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-3xl glass-strong gradient-border p-6 sm:p-10"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <label className="block">
                <span className="block text-xs uppercase tracking-widest text-text-muted mb-2">
                  Name
                </span>
                <input
                  type="text"
                  name="user_name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 text-white placeholder:text-text-muted focus:outline-none focus:border-accent-violet focus:ring-2 focus:ring-accent-violet/20 transition"
                  placeholder="Your name"
                />
              </label>

              <label className="block">
                <span className="block text-xs uppercase tracking-widest text-text-muted mb-2">
                  Email
                </span>
                <input
                  type="email"
                  name="user_email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 text-white placeholder:text-text-muted focus:outline-none focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/20 transition"
                  placeholder="you@company.com"
                />
              </label>
            </div>

            <label className="mt-5 block">
              <span className="block text-xs uppercase tracking-widest text-text-muted mb-2">
                Message
              </span>
              <textarea
                name="message"
                rows={6}
                required
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                className="w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 text-white placeholder:text-text-muted focus:outline-none focus:border-accent-fuchsia focus:ring-2 focus:ring-accent-fuchsia/20 transition resize-none"
                placeholder="What are you working on?"
              />
            </label>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary flex-1 sm:flex-none disabled:opacity-70"
              >
                {status === 'sending' ? (
                  <>Sending...</>
                ) : status === 'sent' ? (
                  <>
                    <HiOutlineCheckCircle size={18} /> Message sent
                  </>
                ) : (
                  <>
                    <FiSend size={16} /> Send message
                  </>
                )}
              </button>
              {status === 'error' && (
                <span className="text-accent-rose text-sm">
                  Couldn&rsquo;t send — email me directly.
                </span>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

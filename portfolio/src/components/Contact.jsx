import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'shivakewat.3537@gmail.com', href: 'mailto:shivakewat.3537@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 81205 93537', href: 'tel:+918120593537' },
  { icon: MapPin, label: 'Location', value: 'India 🇮🇳', href: '#' },
]

const socials = [
  { icon: Github, href: 'https://github.com/shivakewat1', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/shiva-kewat09/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [focused, setFocused] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  const inputStyle = (field) => ({
    width: '100%',
    background: 'rgba(201,181,156,0.04)',
    border: `1px solid ${focused === field ? 'rgba(201,181,156,0.4)' : 'rgba(201,181,156,0.1)'}`,
    borderRadius: '0.75rem',
    padding: '0.875rem 1rem',
    color: '#e8ddd0',
    fontSize: '0.875rem',
    outline: 'none',
    transition: 'border-color 0.2s',
  })

  return (
    <section id="contact" className="py-20 md:py-28 relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,181,156,0.15), transparent)' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="mb-14 md:mb-16">
          <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: '#C9B59C' }}>Contact</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mt-3">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base max-w-md" style={{ color: '#4a4a4a' }}>
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 lg:gap-10">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 }}
            className="md:col-span-2 flex flex-col gap-4"
          >
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <a key={label} href={href} className="flex items-center gap-4 glass glass-hover rounded-2xl p-4 transition-all group">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(201,181,156,0.1)' }}>
                  <Icon size={15} style={{ color: '#C9B59C' }} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs mb-0.5" style={{ color: '#3a3a3a' }}>{label}</div>
                  <div className="text-sm font-medium truncate" style={{ color: '#8a7a6a' }}>{value}</div>
                </div>
              </a>
            ))}

            <div className="glass rounded-2xl p-5">
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#3a3a3a' }}>Find me on</p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-xl glass glass-hover flex items-center justify-center transition-all"
                    style={{ color: '#5a5a5a' }}>
                    <Icon size={15} />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#C9B59C' }} />
                  <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: '#C9B59C' }} />
                </span>
                <span className="text-sm font-medium" style={{ color: '#C9B59C' }}>Available Now</span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: '#3a3a3a' }}>
                Open to freelance & full-time roles. Response within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-6 sm:p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs tracking-wide mb-2 block" style={{ color: '#4a4a4a' }} htmlFor="name">Name</label>
                  <input id="name" type="text" required value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                    placeholder="Your name" style={inputStyle('name')} />
                </div>
                <div>
                  <label className="text-xs tracking-wide mb-2 block" style={{ color: '#4a4a4a' }} htmlFor="email">Email</label>
                  <input id="email" type="email" required value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                    placeholder="your@email.com" style={inputStyle('email')} />
                </div>
              </div>
              <div>
                <label className="text-xs tracking-wide mb-2 block" style={{ color: '#4a4a4a' }} htmlFor="subject">Subject</label>
                <input id="subject" type="text" required value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  onFocus={() => setFocused('subject')} onBlur={() => setFocused(null)}
                  placeholder="Project inquiry..." style={inputStyle('subject')} />
              </div>
              <div>
                <label className="text-xs tracking-wide mb-2 block" style={{ color: '#4a4a4a' }} htmlFor="message">Message</label>
                <textarea id="message" required rows={5} value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                  placeholder="Tell me about your project..."
                  style={{ ...inputStyle('message'), resize: 'none' }} />
              </div>
              <motion.button type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(201,181,156,0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl btn-primary flex items-center justify-center gap-2 text-sm font-bold transition-all">
                {sent ? <><span>✓</span> Message Sent!</> : <><Send size={15} /> Send Message</>}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

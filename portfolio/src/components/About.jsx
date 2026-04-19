import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import shivaImg from '../assets/myprofile.jpeg'
import { Code, Coffee, Zap, Heart, Award, Users, GitCommit, Folder, Download, ArrowRight } from 'lucide-react'

const stats = [
  { value: '2+', label: 'Years Exp.', icon: Award },
  { value: '3+', label: 'Projects', icon: Folder },
  { value: '2+', label: 'Clients', icon: Users },
  { value: '150+', label: 'Commits', icon: GitCommit },
]

const traits = [
  { icon: Code, text: 'Clean Code Advocate' },
  { icon: Coffee, text: 'Coffee Powered Dev' },
  { icon: Zap, text: 'Performance Obsessed' },
  { icon: Heart, text: 'Open Source Lover' },
]

const timeline = [
  { year: '2023', title: 'First Line of Code', desc: 'HTML → CSS → JS. Fell in love instantly.' },
  { year: '2024', title: 'MERN Stack + Freelance', desc: 'Built real apps, served real clients.' },
  { year: '2025', title: 'AI & SaaS Builder', desc: 'Shipped Toolzy AI & Vaani with OpenAI.' },
  { year: '2026', title: 'Scaling Up', desc: '3+ projects, 150+ commits, still going.' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,181,156,0.15), transparent)' }} />

      {/* Subtle bg glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 50% at 30% 50%, rgba(201,181,156,0.03), transparent)' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-14 md:mb-20"
        >
          <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: '#C9B59C' }}>About Me</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mt-3 leading-tight">
            Who <span className="gradient-text">Am I?</span>
          </h2>
        </motion.div>

        {/* Main grid */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">

          {/* Left - Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex justify-center"
          >
            <div className="relative flex items-center justify-center" style={{ width: '100%', maxWidth: '360px' }}>
              {/* Glow */}
              <div className="absolute rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ width: '90%', height: '90%', background: 'radial-gradient(circle, #C9B59C, transparent)' }} />

              {/* Rotating dashed ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute rounded-full"
                style={{ width: '108%', height: '108%', border: '1.5px dashed rgba(201,181,156,0.2)' }}
              />
              {/* Static ring */}
              <div className="absolute rounded-full"
                style={{ width: '102%', height: '102%', border: '1px solid rgba(201,181,156,0.1)' }} />

              {/* Photo circle */}
              <div className="relative rounded-full overflow-hidden w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80"
                style={{ border: '2px solid rgba(201,181,156,0.3)', boxShadow: '0 0 50px rgba(201,181,156,0.15)' }}>
                <img src={shivaImg} alt="Shiva" className="w-full h-full object-cover object-top" />
              </div>

              {/* Floating tag */}
             
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl sm:text-3xl font-black mb-2" style={{ color: '#e8ddd0' }}>
              Shiva Kewat
            </h3>
            <p className="text-sm font-medium mb-5 gradient-text">Full Stack Developer · India 🇮🇳</p>

            <p className="leading-relaxed mb-4 text-sm sm:text-base" style={{ color: '#5a5a5a' }}>
              I&apos;m a passionate full-stack developer who loves turning ideas into
              beautiful, functional web experiences. With expertise in React, Node.js,
              and modern cloud technologies, I build products that are fast, scalable,
              and delightful to use.
            </p>
            <p className="leading-relaxed mb-8 text-sm sm:text-base" style={{ color: '#5a5a5a' }}>
              When I&apos;m not coding, you&apos;ll find me exploring new tech, contributing
              to open source, or sipping chai while debugging at 2 AM. ☕
            </p>

            {/* Traits */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-8">
              {traits.map(({ icon: Icon, text }) => (
                <div key={text}
                  className="flex items-center gap-2 sm:gap-3 glass rounded-xl px-3 py-2.5 text-xs sm:text-sm glass-hover transition-all"
                  style={{ color: '#7a7a7a' }}>
                  <Icon size={13} style={{ color: '#C9B59C', flexShrink: 0 }} />
                  {text}
                </div>
              ))}
            </div>

            {/* CTA row */}
            <div className="flex flex-wrap gap-3">
              <motion.a href="#contact"
                whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(201,181,156,0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full btn-primary text-sm">
                Let&apos;s Talk <ArrowRight size={14} />
              </motion.a>
              <motion.a href="/resume.pdf" download="Shiva_Resume.pdf"
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full glass glass-hover text-sm transition-all"
                style={{ color: '#C9B59C' }}>
                <Download size={14} /> Resume
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-20"
        >
          {stats.map(({ value, label, icon: Icon }, i) => (
            <motion.div key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.08 }}
              whileHover={{ y: -4, boxShadow: '0 0 30px rgba(201,181,156,0.1)' }}
              className="glass glass-hover rounded-2xl p-4 sm:p-6 text-center transition-all relative overflow-hidden group"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: 'radial-gradient(circle at 50% 0%, rgba(201,181,156,0.06), transparent 70%)' }} />
              <Icon size={18} className="mx-auto mb-2" style={{ color: '#C9B59C' }} />
              <div className="text-2xl sm:text-3xl md:text-4xl font-black mb-1 gradient-text">{value}</div>
              <div className="text-xs tracking-widest uppercase" style={{ color: '#4a4a4a' }}>{label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-8" style={{ color: '#C9B59C' }}>My Journey</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 relative">
            {/* connecting line desktop */}
            <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(201,181,156,0.25), rgba(201,181,156,0.25), transparent)' }} />

            {timeline.map(({ year, title, desc }, i) => (
              <motion.div
                key={year + title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 0 30px rgba(201,181,156,0.1)' }}
                className="glass glass-hover rounded-2xl p-4 sm:p-5 text-center relative transition-all group"
              >
                {/* dot */}
                <div className="w-3 h-3 rounded-full mx-auto mb-4 relative z-10"
                  style={{ background: 'linear-gradient(135deg, #C9B59C, #a08060)', boxShadow: '0 0 12px rgba(201,181,156,0.5)' }} />

                <div className="text-xs font-black mb-1.5 gradient-text">{year}</div>
                <div className="text-sm font-bold mb-2" style={{ color: '#e8ddd0' }}>{title}</div>
                <div className="text-xs leading-relaxed" style={{ color: '#5a5a5a' }}>{desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import shivaImg from '../assets/shiva.png'
import { FiCode, FiCoffee, FiZap, FiHeart, FiAward, FiUsers, FiGitCommit, FiFolder } from 'react-icons/fi'

const stats = [
  { value: '2+', label: 'Years Exp.', icon: FiAward },
  { value: '30+', label: 'Projects', icon: FiFolder },
  { value: '15+', label: 'Clients', icon: FiUsers },
  { value: '5K+', label: 'Commits', icon: FiGitCommit },
]

const traits = [
  { icon: FiCode, text: 'Clean Code Advocate' },
  { icon: FiCoffee, text: 'Coffee Powered Dev' },
  { icon: FiZap, text: 'Performance Obsessed' },
  { icon: FiHeart, text: 'Open Source Lover' },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-28 relative" ref={ref}>
      {/* Section divider top */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,181,156,0.15), transparent)' }} />

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: '#C9B59C' }}>About Me</span>
          <h2 className="text-5xl md:text-6xl font-black mt-3 leading-tight">
            Who <span className="gradient-text">Am I?</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative max-w-sm mx-auto flex items-center justify-center">
              {/* Outer glow */}
              <div className="absolute rounded-full blur-3xl opacity-25" style={{ width: '32rem', height: '32rem', background: 'radial-gradient(circle, #C9B59C, transparent)' }} />

              {/* Rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="absolute rounded-full"
                style={{ width: '30rem', height: '30rem', border: '1.5px dashed rgba(201,181,156,0.25)' }}
              />

              {/* Static ring */}
              <div className="absolute rounded-full" style={{ width: '28rem', height: '28rem', border: '1px solid rgba(201,181,156,0.12)' }} />

              {/* Circle image */}
              <div
                className="relative rounded-full overflow-hidden"
                style={{ width: '26rem', height: '26rem', border: '2px solid rgba(201,181,156,0.3)', boxShadow: '0 0 60px rgba(201,181,156,0.2)' }}
              >
                <img
                  src={shivaImg}
                  alt="Shiva"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            <motion.h3 variants={itemVariants} className="text-3xl font-bold mb-5">
              Passionate Developer from{' '}
              <span className="gradient-text">India 🇮🇳</span>
            </motion.h3>

            <motion.p variants={itemVariants} className="leading-relaxed mb-4 text-base" style={{ color: '#5a5a5a' }}>
              I&apos;m a full-stack developer who loves building things for the web.
              With a strong foundation in React, Node.js, and modern web technologies,
              I create digital experiences that are both beautiful and functional.
            </motion.p>

            <motion.p variants={itemVariants} className="leading-relaxed mb-8 text-base" style={{ color: '#5a5a5a' }}>
              When I&apos;m not coding, you&apos;ll find me exploring new technologies,
              contributing to open source, or sipping chai while debugging at 2 AM. ☕
            </motion.p>

            {/* Traits */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3 mb-10">
              {traits.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-3 glass rounded-xl px-4 py-3 text-sm glass-hover transition-all"
                  style={{ color: '#8a8a8a' }}
                >
                  <Icon size={15} style={{ color: '#C9B59C', flexShrink: 0 }} />
                  {text}
                </div>
              ))}
            </motion.div>

            <motion.a
              variants={itemVariants}
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(201,181,156,0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full btn-primary text-sm"
            >
              Let&apos;s Work Together →
            </motion.a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-24"
        >
          {stats.map(({ value, label, icon: Icon }, i) => (
            <motion.div
              key={label}
              whileHover={{ y: -4, boxShadow: '0 0 30px rgba(201,181,156,0.1)' }}
              className="glass glass-hover rounded-2xl p-6 text-center transition-all"
            >
              <Icon size={20} className="mx-auto mb-3" style={{ color: '#C9B59C' }} />
              <div className="text-4xl font-black mb-1 gradient-text">{value}</div>
              <div className="text-xs tracking-widest uppercase" style={{ color: '#4a4a4a' }}>{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

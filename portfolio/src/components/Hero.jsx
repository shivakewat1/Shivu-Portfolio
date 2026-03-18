import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiDownload, FiArrowRight } from 'react-icons/fi'

const socials = [
  { icon: FiGithub, href: 'https://github.com/shivakewat1', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/shiva-kewat09/', label: 'LinkedIn' },
  { icon: FiTwitter, href: 'https://twitter.com', label: 'Twitter' },
]

const roles = ['Full Stack Developer', 'React Specialist', 'UI/UX Enthusiast', 'Problem Solver']

function AnimatedRole({ roles }) {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2800)
    return () => clearInterval(t)
  }, [roles.length])
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        exit={{ opacity: 0, y: -15, filter: 'blur(8px)' }}
        transition={{ duration: 0.5 }}
        className="gradient-text font-bold"
      >
        {roles[index]}
      </motion.span>
    </AnimatePresence>
  )
}

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Orbs - desktop only */}
      <motion.div animate={{ x: [0, 40, 0], y: [0, -40, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute rounded-full blur-3xl pointer-events-none hidden md:block"
        style={{ width: 400, height: 400, top: '10%', left: '5%', background: 'rgba(201,181,156,0.06)' }} />
      <motion.div animate={{ x: [0, -30, 0], y: [0, 30, 0] }} transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute rounded-full blur-3xl pointer-events-none hidden md:block"
        style={{ width: 300, height: 300, bottom: '10%', right: '5%', background: 'rgba(160,128,96,0.08)' }} />

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(201,181,156,0.07) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, #080808 100%)' }} />

      <div className="w-full max-w-4xl mx-auto text-center relative z-10 px-4 pt-20 sm:pt-24 pb-12 sm:pb-16">
        {/* Badge */}
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, type: 'spring' }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full glass mb-6 sm:mb-8 text-xs sm:text-sm"
          style={{ color: '#C9B59C' }}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#C9B59C' }} />
            <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: '#C9B59C' }} />
          </span>
          Available for new projects
        </motion.div>

        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
          <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none mb-1 sm:mb-2 tracking-tight"
            style={{ color: '#f5f0eb' }}>Hi, I&apos;m</h1>
          <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none mb-4 sm:mb-6 tracking-tight gradient-text">
            Shiva</h1>
        </motion.div>

        {/* Role */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="text-base sm:text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-6 h-8 sm:h-9"
          style={{ color: '#6b6b6b' }}>
          <AnimatedRole roles={roles} />
        </motion.div>

        {/* Desc */}
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
          className="max-w-sm sm:max-w-md mx-auto mb-8 sm:mb-10 text-sm sm:text-base leading-relaxed"
          style={{ color: '#4a4a4a' }}>
          I craft beautiful, performant web experiences. Turning complex ideas into
          elegant digital products with clean code and thoughtful design.
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-3 justify-center mb-10 sm:mb-12">
          <motion.a href="#projects"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(201,181,156,0.4)' }} whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full btn-primary text-sm sm:text-base flex items-center justify-center gap-2">
            View My Work <FiArrowRight size={15} />
          </motion.a>
          <motion.a href="/resume.pdf" download="Shiva_Resume.pdf"
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full glass glass-hover font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all"
            style={{ color: '#C9B59C' }}>
            <FiDownload size={15} /> Download CV
          </motion.a>
        </motion.div>

        {/* Socials */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
          className="flex gap-3 justify-center">
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              whileHover={{ scale: 1.2, y: -4 }} whileTap={{ scale: 0.9 }}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full glass glass-hover flex items-center justify-center transition-all"
              style={{ color: '#6b6b6b' }}>
              <Icon size={16} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

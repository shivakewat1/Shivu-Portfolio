import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiDownload, FiArrowRight } from 'react-icons/fi'

const socials = [
  { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
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

function FloatingOrb({ style, animate, transition }) {
  return (
    <motion.div
      animate={animate}
      transition={transition}
      className="absolute rounded-full blur-3xl pointer-events-none"
      style={style}
    />
  )
}

export default function Hero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  useEffect(() => {
    const move = (e) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 30)
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 30)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [mouseX, mouseY])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background orbs */}
      <FloatingOrb
        style={{ width: 600, height: 600, top: '10%', left: '5%', background: 'rgba(201,181,156,0.06)' }}
        animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <FloatingOrb
        style={{ width: 400, height: 400, bottom: '10%', right: '5%', background: 'rgba(160,128,96,0.08)' }}
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
      />
      <FloatingOrb
        style={{ width: 300, height: 300, top: '50%', right: '25%', background: 'rgba(201,181,156,0.04)' }}
        animate={{ x: [0, 20, 0], y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(201,181,156,0.08) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Radial fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, #080808 100%)' }}
      />

      <motion.div
        style={{ x: springX, y: springY }}
        className="max-w-6xl mx-auto px-6 text-center relative z-10 pt-20"
      >
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="inline-flex items-center gap-2.5 px-5 py-2.5  mb-10 text-sm"
          style={{ color: '#C9B59C' }}
        >
          <span className="relative flex h-2 w-2">
            <span className="  " style={{ background: '#C9B59C' }} />
            <span className="relative inline-flex " style={{ background: '#C9B59C' }} />
          </span>
          
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-7xl md:text-9xl font-black leading-none mb-2 tracking-tight">
            <span style={{ color: '#f5f0eb' }}>Hi, I&apos;m</span>
          </h1>
          <h1 className="text-7xl md:text-9xl font-black leading-none mb-6 tracking-tight gradient-text">
            Shiva
          </h1>
        </motion.div>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-2xl md:text-3xl mb-6 h-10"
          style={{ color: '#6b6b6b' }}
        >
          <AnimatedRole roles={roles} />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-lg mx-auto mb-12 text-lg leading-relaxed"
          style={{ color: '#4a4a4a' }}
        >
          I craft beautiful, performant web experiences. Turning complex ideas into
          elegant digital products with clean code and thoughtful design.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap gap-4 justify-center mb-14"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(201,181,156,0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full btn-primary text-base flex items-center gap-2"
          >
            View My Work <FiArrowRight size={16} />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full glass glass-hover font-semibold text-base flex items-center gap-2 transition-all"
            style={{ color: '#C9B59C' }}
          >
            <FiDownload size={16} /> Download CV
          </motion.a>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex gap-4 justify-center mb-20"
        >
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.2, y: -4 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full glass glass-hover flex items-center justify-center transition-all"
              style={{ color: '#6b6b6b' }}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        

       
         
            
        </motion.div>
      </motion.div>
    </section>
  )
}

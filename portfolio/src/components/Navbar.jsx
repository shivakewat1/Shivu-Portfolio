import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['Home', 'About', 'Skills', 'Projects', 'Certificates', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('Home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = links.map((l) => document.getElementById(l.toLowerCase()))
      sections.forEach((sec) => {
        if (sec) {
          const rect = sec.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(sec.id.charAt(0).toUpperCase() + sec.id.slice(1))
          }
        }
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 border-b'
          : 'py-6'
      }`}
      style={scrolled ? {
        background: 'rgba(8,8,8,0.85)',
        backdropFilter: 'blur(20px)',
        borderColor: 'rgba(201,181,156,0.1)'
      } : {}}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-black gradient-text tracking-tight"
        >
          &lt;Shiva /&gt;
        </motion.a>

        <ul className="hidden md:flex gap-1">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setActive(link)}
                className="relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full block"
                style={{ color: active === link ? '#C9B59C' : '#6b6b6b' }}
              >
                {active === link && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full"
                    style={{ background: 'rgba(201,181,156,0.1)', border: '1px solid rgba(201,181,156,0.2)' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link}</span>
              </a>
            </li>
          ))}
        </ul>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(201,181,156,0.35)' }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block px-5 py-2.5 rounded-full btn-primary text-sm"
        >
          Hire Me
        </motion.a>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 rounded-full"
            style={{ background: '#C9B59C' }}
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 rounded-full"
            style={{ background: '#C9B59C' }}
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 rounded-full"
            style={{ background: '#C9B59C' }}
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden px-6 py-4"
            style={{ background: 'rgba(8,8,8,0.95)', borderTop: '1px solid rgba(201,181,156,0.1)' }}
          >
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-sm font-medium transition-colors"
                style={{ color: '#6b6b6b', borderBottom: '1px solid rgba(201,181,156,0.06)' }}
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

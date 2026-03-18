import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiHeart, FiArrowUp } from 'react-icons/fi'

const socials = [
  { icon: FiGithub, href: 'https://github.com/shivakewat1', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/shiva-kewat09/', label: 'LinkedIn' },
  { icon: FiTwitter, href: 'https://twitter.com', label: 'Twitter' },
]

const links = ['Home', 'About', 'Skills', 'Projects', 'Certificates', 'Contact']

export default function Footer() {
  return (
    <footer className="relative pt-14 pb-8" style={{ borderTop: '1px solid rgba(201,181,156,0.08)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-12">
          <div>
            <a href="#home" className="text-2xl font-black gradient-text block mb-3">&lt;Shiva /&gt;</a>
            <p className="text-sm leading-relaxed" style={{ color: '#3a3a3a' }}>
              Full Stack Developer crafting beautiful digital experiences with clean code and thoughtful design.
            </p>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#C9B59C' }}>Navigation</p>
            <div className="grid grid-cols-2 gap-2">
              {links.map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`}
                  className="text-sm transition-colors hover:text-white" style={{ color: '#3a3a3a' }}>
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#C9B59C' }}>Connect</p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-10 h-10 rounded-xl glass glass-hover flex items-center justify-center transition-all"
                  style={{ color: '#4a4a4a' }}>
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(201,181,156,0.06)' }}>
          <p className="text-xs flex items-center gap-1.5" style={{ color: '#2a2a2a' }}>
            Made with <FiHeart size={12} style={{ color: '#C9B59C' }} /> by Shiva &copy; {new Date().getFullYear()}
          </p>
          <motion.a href="#home" whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }}
            className="w-9 h-9 rounded-full glass glass-hover flex items-center justify-center transition-all"
            style={{ color: '#C9B59C' }} aria-label="Back to top">
            <FiArrowUp size={15} />
          </motion.a>
        </div>
      </div>
    </footer>
  )
}

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiAward, FiExternalLink, FiCalendar, FiCheckCircle } from 'react-icons/fi'

const certificates = [
  {
    title: 'Meta Front-End Developer',
    issuer: 'Meta (Coursera)',
    date: 'Jan 2024',
    credentialId: 'META-FE-2024',
    skills: ['React', 'JavaScript', 'HTML/CSS', 'UX/UI'],
    logo: '🏆',
    color: '#0866FF',
    verified: true,
    link: '#',
  },
  {
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Mar 2024',
    credentialId: 'AWS-CP-2024',
    skills: ['Cloud', 'EC2', 'S3', 'Lambda'],
    logo: '☁️',
    color: '#FF9900',
    verified: true,
    link: '#',
  },
  {
    title: 'Node.js Application Developer',
    issuer: 'OpenJS Foundation',
    date: 'Jun 2023',
    credentialId: 'JSNAD-2023',
    skills: ['Node.js', 'Express', 'APIs', 'Testing'],
    logo: '🟢',
    color: '#68A063',
    verified: true,
    link: '#',
  },
  {
    title: 'MongoDB Developer',
    issuer: 'MongoDB University',
    date: 'Aug 2023',
    credentialId: 'MDB-DEV-2023',
    skills: ['MongoDB', 'Aggregation', 'Atlas', 'Indexing'],
    logo: '🍃',
    color: '#00ED64',
    verified: true,
    link: '#',
  },
  {
    title: 'Google UX Design',
    issuer: 'Google (Coursera)',
    date: 'Nov 2023',
    credentialId: 'GOOG-UX-2023',
    skills: ['Figma', 'Wireframing', 'Prototyping', 'Research'],
    logo: '🎨',
    color: '#4285F4',
    verified: true,
    link: '#',
  },
  {
    title: 'Docker & Kubernetes',
    issuer: 'Linux Foundation',
    date: 'Feb 2024',
    credentialId: 'LF-DK-2024',
    skills: ['Docker', 'Kubernetes', 'DevOps', 'CI/CD'],
    logo: '🐳',
    color: '#2496ED',
    verified: false,
    link: '#',
  },
]

function CertCard({ cert, index, inView }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="glass glass-hover rounded-3xl p-6 transition-all relative overflow-hidden group"
    >
      {/* Glow on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{ boxShadow: `inset 0 0 40px rgba(201,181,156,0.06)` }}
          />
        )}
      </AnimatePresence>

      {/* Top accent line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-0.5 rounded-t-3xl"
        style={{ background: `linear-gradient(90deg, transparent, rgba(201,181,156,0.4), transparent)` }}
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: index * 0.08 + 0.3 }}
      />

      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0"
            style={{ background: 'rgba(201,181,156,0.08)', border: '1px solid rgba(201,181,156,0.12)' }}
          >
            {cert.logo}
          </div>
          <div>
            <h3 className="font-bold text-base leading-tight" style={{ color: '#e8ddd0' }}>{cert.title}</h3>
            <p className="text-xs mt-0.5" style={{ color: '#5a5a5a' }}>{cert.issuer}</p>
          </div>
        </div>

        {cert.verified && (
          <div className="shrink-0">
            <FiCheckCircle size={18} style={{ color: '#C9B59C' }} />
          </div>
        )}
      </div>

      {/* Meta */}
      <div className="flex items-center gap-4 mb-5">
        <div className="flex items-center gap-1.5 text-xs" style={{ color: '#4a4a4a' }}>
          <FiCalendar size={12} />
          {cert.date}
        </div>
        <div className="text-xs font-mono" style={{ color: '#3a3a3a' }}>
          ID: {cert.credentialId}
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mb-5">
        {cert.skills.map((skill) => (
          <span
            key={skill}
            className="text-xs px-2.5 py-1 rounded-full"
            style={{ background: 'rgba(201,181,156,0.06)', color: '#7a6a5a', border: '1px solid rgba(201,181,156,0.1)' }}
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Footer */}
      <a
        href={cert.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-xs font-medium transition-colors group/link"
        style={{ color: '#5a5a5a' }}
      >
        <FiAward size={13} style={{ color: '#C9B59C' }} />
        View Credential
        <FiExternalLink size={11} className="group-hover/link:translate-x-0.5 transition-transform" />
      </a>
    </motion.div>
  )
}

export default function Certificates() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="certificates" className="py-28 relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,181,156,0.15), transparent)' }} />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(201,181,156,0.03), transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: '#C9B59C' }}>Achievements</span>
            <h2 className="text-5xl md:text-6xl font-black mt-3">
              My <span className="gradient-text">Certificates</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="glass rounded-2xl px-5 py-3 flex items-center gap-3"
          >
            <FiAward size={20} style={{ color: '#C9B59C' }} />
            <div>
              <div className="text-2xl font-black gradient-text">{certificates.length}</div>
              <div className="text-xs" style={{ color: '#4a4a4a' }}>Certifications</div>
            </div>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <CertCard key={cert.credentialId} cert={cert} index={i} inView={inView} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-xs mt-12 tracking-wide"
          style={{ color: '#2a2a2a' }}
        >
          ✦ All credentials are verifiable via their respective platforms
        </motion.p>
      </div>
    </section>
  )
}

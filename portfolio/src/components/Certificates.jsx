import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiAward, FiExternalLink, FiX, FiCalendar, FiCheckCircle } from 'react-icons/fi'
import aiForBharat from '../assets/certificates/AI_for_Bharat.png'
import certSC from '../assets/certificates/Certificate_SC-EAB3B8879E.png'

const certificates = [
  {
    title: 'AI for Bharat',
    issuer: 'AI for Bharat Program',
    date: '2024',
    tags: ['Artificial Intelligence', 'Machine Learning', 'Python'],
    image: aiForBharat,
    file: aiForBharat,
    type: 'image',
    featured: true,
    emoji: '🤖',
  },
  {
    title: 'Skill Certificate',
    issuer: 'Skill Platform',
    date: '2024',
    tags: ['Technical Skills', 'Development'],
    image: certSC,
    file: certSC,
    type: 'image',
    featured: false,
    emoji: '🏅',
  },
  {
    title: 'Internship Certificate',
    issuer: 'Internship Program',
    date: '2024',
    tags: ['Internship', 'Web Development', 'Real World Experience'],
    image: null,
    file: '/certificates/Internship.pdf',
    type: 'pdf',
    featured: true,
    emoji: '🏢',
  },
  {
    title: 'MERN Stack Development',
    issuer: 'Certification Authority',
    date: '2024',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    image: null,
    file: '/certificates/Mern.pdf',
    type: 'pdf',
    featured: true,
    emoji: '⚡',
  },
  {
    title: 'Python Fundamentals',
    issuer: 'Python Institute',
    date: '2024',
    tags: ['Python', 'Programming', 'Data Structures'],
    image: null,
    file: '/certificates/Python fundamental.pdf',
    type: 'pdf',
    featured: false,
    emoji: '🐍',
  },
  {
    title: 'Generative AI',
    issuer: 'AI Certification Body',
    date: '2024',
    tags: ['Generative AI', 'LLMs', 'Prompt Engineering'],
    image: null,
    file: '/certificates/Shivakewat_GenAI_completion_certificate.pdf',
    type: 'pdf',
    featured: true,
    emoji: '🧠',
  },
  {
    title: 'Completion Certificate',
    issuer: 'Training Program',
    date: '2024',
    tags: ['Full Stack', 'Web Development'],
    image: null,
    file: '/certificates/shiva_completion_certificate.pdf',
    type: 'pdf',
    featured: false,
    emoji: '🎓',
  },
  {
    title: 'Development Certificate',
    issuer: 'Tech Institute',
    date: '2024',
    tags: ['Software Development', 'Best Practices'],
    image: null,
    file: '/certificates/1-6fb7e253-ee46-45dc-ab02-e85e3f71af6d (2).pdf',
    type: 'pdf',
    featured: false,
    emoji: '💻',
  },
]

function Modal({ cert, onClose }) {
  if (!cert) return null
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(16px)' }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 30 }}
          transition={{ type: 'spring', stiffness: 280, damping: 24 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-[calc(100%-2rem)] max-w-3xl rounded-2xl sm:rounded-3xl overflow-hidden"
          style={{ background: 'linear-gradient(145deg, #141414, #0e0e0e)', border: '1px solid rgba(201,181,156,0.18)' }}
        >
          {/* Glow top */}
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,181,156,0.6), transparent)' }} />

          {/* Header */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-5" style={{ borderBottom: '1px solid rgba(201,181,156,0.07)' }}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                style={{ background: 'rgba(201,181,156,0.08)', border: '1px solid rgba(201,181,156,0.15)' }}>
                {cert.emoji}
              </div>
              <div>
                <h3 className="font-black text-lg leading-tight" style={{ color: '#e8ddd0' }}>{cert.title}</h3>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs" style={{ color: '#5a5a5a' }}>{cert.issuer}</span>
                  <span className="flex items-center gap-1 text-xs" style={{ color: '#4a4a4a' }}>
                    <FiCalendar size={10} /> {cert.date}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <motion.a
                href={cert.file} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1.5 text-xs px-4 py-2 rounded-full font-semibold"
                style={{ background: 'linear-gradient(135deg, #C9B59C, #a08060)', color: '#080808' }}
              >
                <FiExternalLink size={12} /> Open
              </motion.a>
              <button onClick={onClose}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ background: 'rgba(255,255,255,0.04)', color: '#6a6a6a', border: '1px solid rgba(255,255,255,0.06)' }}>
                <FiX size={15} />
              </button>
            </div>
          </div>

          <div className="p-3 sm:p-5">
            <div className="rounded-xl sm:rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(201,181,156,0.08)' }}>
              {cert.type === 'image' ? (
                <img src={cert.image} alt={cert.title} className="w-full object-contain max-h-[55vh] sm:max-h-[62vh]" style={{ background: '#0a0a0a' }} />
              ) : (
                <div style={{ height: '55vh' }}>
                  <iframe src={`${cert.file}#toolbar=0&navpanes=0&scrollbar=0`} title={cert.title} className="w-full h-full" style={{ border: 'none' }} />
                </div>
              )}
            </div>
          </div>
          <div className="px-4 sm:px-5 pb-4 sm:pb-5 flex flex-wrap gap-2">
            {cert.tags.map((tag) => (
              <span key={tag} className="text-xs px-3 py-1 rounded-full"
                style={{ background: 'rgba(201,181,156,0.06)', color: '#7a6a5a', border: '1px solid rgba(201,181,156,0.1)' }}>
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function CertCard({ cert, index, inView, onClick }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={() => onClick(cert)}
      className="rounded-3xl overflow-hidden cursor-pointer group relative"
      style={{
        background: 'linear-gradient(145deg, rgba(201,181,156,0.05), rgba(160,128,96,0.02))',
        border: hovered ? '1px solid rgba(201,181,156,0.3)' : '1px solid rgba(201,181,156,0.1)',
        boxShadow: hovered ? '0 20px 60px rgba(201,181,156,0.08), 0 0 0 1px rgba(201,181,156,0.1)' : 'none',
        transition: 'border-color 0.3s, box-shadow 0.3s',
      }}
    >
      {/* Top glow line on hover */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,181,156,0.6), transparent)' }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={hovered ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Preview area */}
      <div className="h-48 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, rgba(201,181,156,0.06), rgba(8,8,8,0.8))' }}
      >
        {cert.image ? (
          <motion.img
            src={cert.image}
            alt={cert.title}
            className="w-full h-full object-cover object-top"
            animate={hovered ? { scale: 1.06 } : { scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        ) : (
          <div className="w-full h-full relative overflow-hidden">
            <iframe
              src={`${cert.file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
              title={cert.title}
              className="absolute top-0 left-0"
              style={{
                width: '200%', height: '300%',
                border: 'none', pointerEvents: 'none',
                transform: 'scale(0.5)', transformOrigin: 'top left',
              }}
            />
          </div>
        )}

        {/* Gradient overlay bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16"
          style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.9), transparent)' }} />

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={hovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.25 }}
          style={{ background: 'rgba(8,8,8,0.55)', backdropFilter: 'blur(4px)' }}
        >
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm"
            style={{ background: 'linear-gradient(135deg, #C9B59C, #a08060)', color: '#080808' }}>
            <FiAward size={15} /> View Certificate
          </div>
        </motion.div>

        {/* Featured badge */}
        {cert.featured && (
          <div className="absolute top-3 right-3 text-xs px-2.5 py-1 rounded-full font-semibold z-10"
            style={{ background: 'rgba(201,181,156,0.15)', color: '#C9B59C', border: '1px solid rgba(201,181,156,0.25)', backdropFilter: 'blur(8px)' }}>
            ✦ Featured
          </div>
        )}

        {/* Type badge */}
        <div className="absolute top-3 left-3 text-xs px-2.5 py-1 rounded-full z-10"
          style={{ background: 'rgba(8,8,8,0.6)', color: '#5a5a5a', backdropFilter: 'blur(8px)' }}>
          {cert.type === 'pdf' ? '📄 PDF' : '🖼️ Image'}
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        {/* Title row */}
        <div className="flex items-start gap-3 mb-3">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg shrink-0 mt-0.5"
            style={{ background: 'rgba(201,181,156,0.08)', border: '1px solid rgba(201,181,156,0.1)' }}>
            {cert.emoji}
          </div>
          <div className="min-w-0">
            <h3 className="font-bold text-sm leading-snug" style={{ color: '#e8ddd0' }}>{cert.title}</h3>
            <div className="flex items-center gap-2 mt-1">
              <FiCheckCircle size={11} style={{ color: '#C9B59C', flexShrink: 0 }} />
              <span className="text-xs truncate" style={{ color: '#4a4a4a' }}>{cert.issuer}</span>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {cert.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-xs px-2.5 py-1 rounded-full"
              style={{ background: 'rgba(201,181,156,0.05)', color: '#6a5a4a', border: '1px solid rgba(201,181,156,0.08)' }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Certificates() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [selected, setSelected] = useState(null)

  return (
    <section id="certificates" className="py-20 md:py-28 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,181,156,0.15), transparent)' }} />

      {/* Background glow */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute rounded-full blur-3xl pointer-events-none"
        style={{ width: 500, height: 500, top: '20%', right: '-10%', background: 'rgba(201,181,156,0.03)' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
            <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: '#C9B59C' }}>Achievements</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mt-3">
              My <span className="gradient-text">Certificates</span>
            </h2>
            <p className="mt-3 text-sm max-w-md" style={{ color: '#3a3a3a' }}>
              Verified credentials from industry-leading platforms
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.3 }}
            className="flex items-center gap-4 self-start sm:self-auto"
          >
            <div className="glass rounded-2xl px-5 py-4 text-center">
              <div className="text-3xl font-black gradient-text">{certificates.length}</div>
              <div className="text-xs mt-0.5" style={{ color: '#4a4a4a' }}>Total</div>
            </div>
            <div className="glass rounded-2xl px-5 py-4 text-center">
              <div className="text-3xl font-black gradient-text">{certificates.filter(c => c.featured).length}</div>
              <div className="text-xs mt-0.5" style={{ color: '#4a4a4a' }}>Featured</div>
            </div>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, i) => (
            <CertCard key={i} cert={cert} index={i} inView={inView} onClick={setSelected} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.9 }}
          className="text-center text-xs mt-12 tracking-widest uppercase" style={{ color: '#2a2a2a' }}
        >
          ✦ Click any certificate to view in full
        </motion.p>
      </div>

      <Modal cert={selected} onClose={() => setSelected(null)} />
    </section>
  )
}

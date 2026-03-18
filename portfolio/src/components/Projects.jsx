import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiArrowRight, FiX } from 'react-icons/fi'
import toolzyImg from '../assets/toolzy.png'
import vaaniImg from '../assets/vaani.png'

const projects = [
  {
    title: 'Toolzy AI - SaaS Platform',
    desc: 'Toolzy AI is an all-in-one AI-powered SaaS platform that brings together multiple intelligent tools for content creation and image processing. It allows users to generate articles, create images, remove backgrounds, erase objects, and review resumes with the help of advanced AI models. Designed with a focus on performance and usability, the platform features a responsive UI, efficient API integration, and scalable backend architecture. It reflects strong full-stack development skills and real-world deployment capabilities.',
    tags: ['React', 'Node.js', 'OpenAI', 'Tailwind', 'MongoDB'],
    image: toolzyImg,
    github: '#',
    live: '#',
    category: 'fullstack',
    featured: true,
  },
  {
    title: 'Vaani - AI Voice Assistant',
    desc: 'Vaani is an AI-powered voice assistant system that enables seamless interaction through natural speech. It captures user voice input, converts it into text, understands user intent, and generates intelligent voice responses in real time using advanced cloud-based AI services. Designed with a focus on real-time performance and smooth user experience, the system integrates speech recognition, natural language processing, backend logic execution, and text-to-speech synthesis into a complete end-to-end workflow. It demonstrates strong understanding of full-stack development, API integration, and scalable cloud architecture.',
    tags: ['React', 'Node.js', 'Speech API', 'OpenAI', 'TTS'],
    image: vaaniImg,
    github: 'https://github.com/shivakewat1/VAANI.git',
    live: '#',
    category: 'fullstack',
    featured: true,
  },
  {
    title: 'Task Manager',
    desc: 'Drag-and-drop Kanban board with team collaboration, deadlines, and progress tracking.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Supabase'],
    emoji: '📋',
    github: '#',
    live: '#',
    category: 'frontend',
    featured: false,
  },
 
  
  
]

const filters = ['all', 'frontend', 'fullstack', 'backend']

function Modal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50"
            style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)' }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] max-w-lg"
          >
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden" style={{ background: '#111', border: '1px solid rgba(201,181,156,0.15)' }}>
              <div className="relative h-40 sm:h-52 overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(201,181,156,0.08), rgba(160,128,96,0.04))' }}>
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-8xl">{project.emoji}</div>
                )}
                {/* Gradient fade bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-16" style={{ background: 'linear-gradient(to top, #111, transparent)' }} />

                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                  style={{ background: 'rgba(0,0,0,0.5)', color: '#C9B59C', border: '1px solid rgba(201,181,156,0.2)' }}
                >
                  <FiX size={16} />
                </button>

                {project.featured && (
                  <div
                    className="absolute top-4 left-4 text-xs px-2.5 py-1 rounded-full font-semibold"
                    style={{ background: 'rgba(201,181,156,0.15)', color: '#C9B59C', border: '1px solid rgba(201,181,156,0.2)' }}
                  >
                    Featured
                  </div>
                )}
              </div>

              <div className="p-5 sm:p-7">
                <h3 className="text-xl sm:text-2xl font-black mb-2 sm:mb-3" style={{ color: '#e8ddd0' }}>{project.title}</h3>
                <p className="text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6" style={{ color: '#6a6a6a' }}>{project.desc}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-7">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 rounded-full font-medium"
                      style={{ background: 'rgba(201,181,156,0.06)', color: '#7a6a5a', border: '1px solid rgba(201,181,156,0.12)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all"
                    style={{ background: 'rgba(201,181,156,0.08)', color: '#C9B59C', border: '1px solid rgba(201,181,156,0.15)' }}
                  >
                    <FiGithub size={15} /> GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold btn-primary transition-all"
                  >
                    <FiExternalLink size={15} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

function ProjectCard({ project, index, onClick }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      whileHover={{ y: -6 }}
      onClick={() => onClick(project)}
      className="glass glass-hover rounded-3xl overflow-hidden group transition-all cursor-pointer"
    >
      {/* Image */}
      <div
        className="h-44 flex items-center justify-center relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, rgba(201,181,156,0.08), rgba(160,128,96,0.04))' }}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <motion.span
            className="text-7xl"
            whileHover={{ scale: 1.15 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {project.emoji}
          </motion.span>
        )}

        {project.featured && (
          <div
            className="absolute top-3 right-3 text-xs px-2.5 py-1 rounded-full font-semibold"
            style={{ background: 'rgba(201,181,156,0.15)', color: '#C9B59C', border: '1px solid rgba(201,181,156,0.2)' }}
          >
            Featured
          </div>
        )}

        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-semibold"
          style={{ background: 'rgba(8,8,8,0.6)', backdropFilter: 'blur(4px)', color: '#C9B59C' }}
        >
          View Details →
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <h3 className="font-bold text-lg mb-3" style={{ color: '#e8ddd0' }}>{project.title}</h3>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full"
              style={{ background: 'rgba(201,181,156,0.06)', color: '#7a6a5a', border: '1px solid rgba(201,181,156,0.1)' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [active, setActive] = useState('all')
  const [selected, setSelected] = useState(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const filtered = active === 'all' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="py-28" ref={ref}>
      <div className="absolute left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,181,156,0.15), transparent)' }} />
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-12"
        >
          <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: '#C9B59C' }}>Portfolio</span>
          <h2 className="text-5xl md:text-6xl font-black mt-3">
            My <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className="px-5 py-2 rounded-full text-sm font-medium capitalize transition-all"
              style={
                active === f
                  ? { background: 'linear-gradient(135deg, #C9B59C, #a08060)', color: '#080808' }
                  : { background: 'rgba(201,181,156,0.05)', color: '#5a5a5a', border: '1px solid rgba(201,181,156,0.1)' }
              }
            >
              {f}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} onClick={setSelected} />
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/shivakewat1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium"
            style={{ color: '#5a5a5a' }}
          >
            View all on GitHub <FiArrowRight size={14} />
          </a>
        </motion.div>
      </div>

      {/* Modal */}
      <Modal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}

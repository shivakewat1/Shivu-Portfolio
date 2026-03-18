import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi'
import toolzyImg from '../assets/toolzy.png'

const projects = [
  {
    title: 'Toolzy AI - SaaS Platform',
    desc: 'Toolzy AI is an all-in-one AI-powered SaaS platform that brings together multiple intelligent tools for content creation and image processing. It allows users to generate articles, create images, remove backgrounds, erase objects, and review resumes with the help of advanced AI models. Designed with a focus on performance and usability, the platform features a responsive UI, efficient API integration, and scalable backend architecture.',
    tags: ['React', 'Node.js', 'OpenAI', 'Tailwind', 'MongoDB'],
    image: toolzyImg,
    github: '#',
    live: '#',
    category: 'fullstack',
    featured: true,
  },
  {
    title: 'AI Chat App',
    desc: 'Real-time chat application with AI integration, rooms, and file sharing using Socket.io.',
    tags: ['React', 'Socket.io', 'OpenAI', 'Express'],
    emoji: '🤖',
    github: '#',
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
  {
    title: 'Weather Dashboard',
    desc: 'Beautiful weather app with 7-day forecast, maps, and location-based alerts.',
    tags: ['React', 'OpenWeather API', 'Chart.js'],
    emoji: '🌤️',
    github: '#',
    live: '#',
    category: 'frontend',
    featured: false,
  },
  {
    title: 'REST API Service',
    desc: 'Scalable REST API with JWT auth, rate limiting, caching, and comprehensive documentation.',
    tags: ['Node.js', 'Express', 'Redis', 'PostgreSQL'],
    emoji: '⚡',
    github: '#',
    live: '#',
    category: 'backend',
    featured: false,
  },
  {
    title: 'Portfolio Builder',
    desc: 'Drag-and-drop portfolio builder with templates, custom domains, and analytics.',
    tags: ['Next.js', 'Prisma', 'Vercel', 'Tailwind'],
    emoji: '🎨',
    github: '#',
    live: '#',
    category: 'fullstack',
    featured: false,
  },
]

const filters = ['all', 'frontend', 'fullstack', 'backend']

function ProjectCard({ project, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      whileHover={{ y: -6 }}
      className="glass glass-hover rounded-3xl overflow-hidden group transition-all"
    >
      {/* Top */}
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
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {project.emoji}
          </motion.span>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: 'rgba(8,8,8,0.7)', backdropFilter: 'blur(4px)' }}
        >
          <motion.a
            href={project.github}
            aria-label="GitHub"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-11 h-11 rounded-full glass flex items-center justify-center transition-colors"
            style={{ color: '#C9B59C' }}
          >
            <FiGithub size={18} />
          </motion.a>
          <motion.a
            href={project.live}
            aria-label="Live Demo"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-11 h-11 rounded-full btn-primary flex items-center justify-center"
          >
            <FiExternalLink size={18} />
          </motion.a>
        </div>

        {project.featured && (
          <div
            className="absolute top-3 right-3 text-xs px-2.5 py-1 rounded-full font-semibold"
            style={{ background: 'rgba(201,181,156,0.15)', color: '#C9B59C', border: '1px solid rgba(201,181,156,0.2)' }}
          >
            Featured
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-6">
        <h3 className="font-bold text-lg mb-2" style={{ color: '#e8ddd0' }}>{project.title}</h3>
        <p className="text-sm leading-relaxed mb-5" style={{ color: '#4a4a4a' }}>{project.desc}</p>
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
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View more */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
            style={{ color: '#5a5a5a' }}
          >
            View all on GitHub <FiArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

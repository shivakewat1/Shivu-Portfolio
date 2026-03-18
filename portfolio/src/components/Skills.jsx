import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const categories = [
  {
    title: 'Frontend', icon: '🎨',
    skills: [
      { name: 'React.js', icon: 'https://cdn.simpleicons.org/react/C9B59C' },
      { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/C9B59C' },
      { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/C9B59C' },
      { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/C9B59C' },
      { name: 'Tailwind', icon: 'https://cdn.simpleicons.org/tailwindcss/C9B59C' },
      { name: 'Framer', icon: 'https://cdn.simpleicons.org/framer/C9B59C' },
    ],
  },
  {
    title: 'Backend', icon: '⚙️',
    skills: [
      { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/C9B59C' },
      { name: 'Express', icon: 'https://cdn.simpleicons.org/express/C9B59C' },
      { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/C9B59C' },
      { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/C9B59C' },
      { name: 'Redis', icon: 'https://cdn.simpleicons.org/redis/C9B59C' },
      { name: 'GraphQL', icon: 'https://cdn.simpleicons.org/graphql/C9B59C' },
    ],
  },
  {
    title: 'Tools & DevOps', icon: '🛠️',
    skills: [
      { name: 'Git', icon: 'https://cdn.simpleicons.org/git/C9B59C' },
      { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/C9B59C' },
      { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/C9B59C' },
      { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/C9B59C' },
      { name: 'Linux', icon: 'https://cdn.simpleicons.org/linux/C9B59C' },
      { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel/C9B59C' },
    ],
  },
]

const proficiency = [
  { label: 'Frontend Development', value: 90 },
  { label: 'Backend Development', value: 80 },
  { label: 'UI/UX Design', value: 72 },
  { label: 'DevOps & Cloud', value: 65 },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-20 md:py-28 relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,181,156,0.15), transparent)' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-14 md:mb-20"
        >
          <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: '#C9B59C' }}>Expertise</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mt-3">
            My <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-10 items-start">
          {/* Skill icon cards */}
          <div className="lg:col-span-3 space-y-5">
            {categories.map((cat, catIdx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: catIdx * 0.12 }}
                className="glass rounded-3xl p-5 sm:p-6"
              >
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-lg">{cat.icon}</span>
                  <h3 className="font-bold text-xs sm:text-sm tracking-widest uppercase" style={{ color: '#C9B59C' }}>{cat.title}</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 sm:gap-3">
                  {cat.skills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: catIdx * 0.1 + i * 0.06 }}
                      whileHover={{ y: -4, scale: 1.05 }}
                      className="flex flex-col items-center gap-1.5 p-2 sm:p-3 rounded-2xl transition-all cursor-default group"
                      style={{ background: 'rgba(201,181,156,0.04)', border: '1px solid rgba(201,181,156,0.08)' }}
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-6 h-6 sm:w-7 sm:h-7 opacity-70 group-hover:opacity-100 transition-opacity"
                        onError={(e) => { e.target.style.display = 'none' }}
                      />
                      <span className="text-xs text-center leading-tight" style={{ color: '#5a5a5a' }}>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Proficiency */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 glass rounded-3xl p-6 sm:p-7 lg:sticky lg:top-28"
          >
            <h3 className="font-bold text-xs sm:text-sm tracking-widest uppercase mb-7" style={{ color: '#C9B59C' }}>Proficiency</h3>
            <div className="space-y-6">
              {proficiency.map(({ label, value }, i) => (
                <div key={label}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs sm:text-sm font-medium" style={{ color: '#c0b0a0' }}>{label}</span>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="text-xs font-bold"
                      style={{ color: '#C9B59C' }}
                    >
                      {value}%
                    </motion.span>
                  </div>
                  <div className="relative h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(201,181,156,0.08)' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${value}%` } : {}}
                      transition={{ duration: 1.4, delay: 0.4 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full rounded-full"
                      style={{ background: 'linear-gradient(90deg, #8a6a4a, #C9B59C, #e8d5bc)' }}
                    />
                    <motion.div
                      initial={{ left: 0, opacity: 0 }}
                      animate={inView ? { left: `calc(${value}% - 4px)`, opacity: 1 } : {}}
                      transition={{ duration: 1.4, delay: 0.4 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
                      style={{ background: '#C9B59C', boxShadow: '0 0 8px #C9B59C' }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="my-7 h-px" style={{ background: 'rgba(201,181,156,0.08)' }} />

            <div>
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#3a3a3a' }}>Currently Learning</p>
              <div className="flex flex-wrap gap-2">
                {['Rust', 'Web3', 'Three.js', 'Go'].map((t) => (
                  <span key={t} className="text-xs px-3 py-1.5 rounded-full font-medium"
                    style={{ background: 'rgba(201,181,156,0.06)', color: '#7a6a5a', border: '1px solid rgba(201,181,156,0.12)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

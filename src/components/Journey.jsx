import { motion } from 'framer-motion'
import { Milestone, Code, Brain, Compass } from 'lucide-react'

export default function Journey() {
  const milestones = [
    {
      year: '2024',
      badge: 'Foundation',
      title: 'Started Building',
      description:
        'Began seriously exploring programming and software development. Focused on syntax, problem solving, algorithms, and understanding how code translates into functional software.',
      icon: <Code size={18} className="text-cyan" />,
      skills: ['Python Fundamentals', 'JavaScript Basics', 'Algorithms', 'Git Versioning'],
    },
    {
      year: '2025',
      badge: 'Expansion',
      title: 'Full-Stack Development',
      description:
        'Started building applications with Python and Django. Developed database schemas, user authentication systems, and integrated REST APIs with dynamic frontend interfaces.',
      icon: <Compass size={18} className="text-indigo" />,
      skills: ['Django Framework', 'Relational Databases', 'RESTful APIs', 'React Components'],
    },
    {
      year: '2026',
      badge: 'Frontier',
      title: 'Exploring AI',
      description:
        'Started focusing more on artificial intelligence, machine learning, and modern web applications. Experimenting with PyTorch, LLM APIs, and intelligent software interfaces.',
      icon: <Brain size={18} className="text-purple" />,
      skills: ['PyTorch Foundations', 'AI APIs & Streaming', 'Intelligent Agents', 'Modern Web Apps'],
    },
  ]

  return (
    <section className="journey-section" id="journey">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Milestone size={14} />
            Evolution
          </span>
          <h2 className="section-title">My Journey</h2>
          <p className="section-subtitle">
            How a curiosity for how computers work transformed into hands-on full-stack development and AI exploration.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container">
          <div className="timeline-spine"></div>

          <div className="timeline-nodes-list">
            {milestones.map((item, index) => (
              <motion.div
                key={item.year}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Year Marker Badge in Spine */}
                <div className="timeline-marker">
                  <div className="marker-core">
                    {item.icon}
                  </div>
                  <span className="marker-year">{item.year}</span>
                </div>

                {/* Content Box */}
                <div className="timeline-content card-glass">
                  <div className="card-highlight-top"></div>
                  
                  <div className="timeline-badge-bar">
                    <span className="stage-pill">{item.badge}</span>
                    <span className="timeline-year-text">{item.year}</span>
                  </div>

                  <h3 className="milestone-title">{item.title}</h3>
                  <p className="milestone-desc">{item.description}</p>

                  <div className="milestone-tags">
                    {item.skills.map((s) => (
                      <span key={s} className="tech-pill">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

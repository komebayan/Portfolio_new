import { motion } from 'framer-motion'
import {
  Code,
  Server,
  Bot,
  Box,
  Layers,
} from 'lucide-react'

export default function Services() {
  const services = [
    {
      id: 'web-apps',
      title: 'Web Applications',
      tagline: 'Frontend Architecture',
      description:
        'Modern responsive applications built with React and modern web technologies. Designed for speed, smooth transitions, and seamless user interaction.',
      icon: <Code size={22} className="service-icon text-cyan" />,
      features: ['Component-driven development', 'Responsive layout engineering', 'Fluid state management'],
      accent: '#38bdf8',
    },
    {
      id: 'backend',
      title: 'Backend Systems',
      tagline: 'Reliable Core Services',
      description:
        'APIs, authentication, databases, and backend systems using Python and Django. Structured for clean data modeling and secure endpoints.',
      icon: <Server size={22} className="service-icon text-indigo" />,
      features: ['Django ORM & schema design', 'REST API contracts & auth', 'Database optimization'],
      accent: '#818cf8',
    },
    {
      id: 'ai-apps',
      title: 'AI Applications',
      tagline: 'Machine Intelligence',
      description:
        'AI-powered features and intelligent application experiences. Integrating language models, streaming completions, and smart assistive tools.',
      icon: <Bot size={22} className="service-icon text-purple" />,
      features: ['LLM API integrations', 'Streaming token generation', 'Context & prompt steering'],
      accent: '#a855f7',
    },
    {
      id: 'digital-products',
      title: 'Digital Products',
      tagline: 'End-to-End Solutions',
      description:
        'Interactive web-based tools and digital products. Transforming concepts into functional, ready-to-use digital tools with thoughtful UX.',
      icon: <Box size={22} className="service-icon text-emerald" />,
      features: ['Product ideation to prototype', 'Interactive workflow utilities', 'Clean design systems'],
      accent: '#34d399',
    },
  ]

  return (
    <section className="services-section" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Layers size={14} />
            Capabilities
          </span>
          <h2 className="section-title">What I Build</h2>
          <p className="section-subtitle">
            Focused on bridging modern frontend experiences with robust backend logic and applied AI features.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="services-grid">
          {services.map((item, index) => (
            <motion.div
              key={item.id}
              className="service-card card-glass"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className="card-highlight-top"></div>

              {/* Ambient Hover Glow behind card */}
              <div
                className="service-card-glow"
                style={{
                  background: `radial-gradient(circle at top right, ${item.accent}18 0%, transparent 70%)`,
                }}
              ></div>

              <div className="service-icon-box">
                {item.icon}
              </div>

              <span className="service-tagline">{item.tagline}</span>
              <h3 className="service-title">{item.title}</h3>
              <p className="service-desc">{item.description}</p>

              <ul className="service-features-list">
                {item.features.map((feat) => (
                  <li key={feat} className="service-feature-item">
                    <span className="check-icon">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

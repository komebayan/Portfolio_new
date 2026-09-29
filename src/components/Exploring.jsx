import { motion } from 'framer-motion'
import { Telescope } from 'lucide-react'

export default function Exploring() {
  const explorationTags = [
    { name: 'Artificial Intelligence', icon: '✦', color: '#c084fc', desc: 'Neural architectures & reasoning' },
    { name: 'Machine Learning', icon: '◈', color: '#818cf8', desc: 'Predictive modeling & training' },
    { name: 'PyTorch', icon: '◆', color: '#f43f5e', desc: 'Deep learning frameworks' },
    { name: 'React', icon: '⚛', color: '#38bdf8', desc: 'Advanced hooks & concurrency' },
    { name: 'Django', icon: '❖', color: '#34d399', desc: 'Scalable service backends' },
    { name: 'APIs', icon: '⬡', color: '#fbbf24', desc: 'Event-driven architectures' },
    { name: 'Automation', icon: '⚡', color: '#38bdf8', desc: 'Workflow scripts & tooling' },
    { name: 'AI Agents', icon: '🤖', color: '#a855f7', desc: 'Autonomous tool-use & context loops' },
  ]

  return (
    <section className="exploring-section" id="exploring">
      <div className="container">
        {/* Exploring Box Container */}
        <div className="exploring-card card-glass">
          <div className="card-highlight-top"></div>

          <div className="exploring-header">
            <span className="section-tag">
              <Telescope size={14} />
              Active Research
            </span>
            <h2 className="section-title">Currently Exploring</h2>
            <p className="section-subtitle">
              Emerging technologies, research topics, and technical domains I am actively studying, prototyping, and integrating into projects.
            </p>
          </div>

          {/* Animated Tags Cloud */}
          <div className="exploring-tags-grid">
            {explorationTags.map((tag, idx) => (
              <motion.div
                key={tag.name}
                className="exploring-tag-item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                whileHover={{
                  y: -5,
                  scale: 1.03,
                  boxShadow: `0 10px 25px -5px ${tag.color}33`,
                }}
              >
                <div className="tag-inner">
                  <span className="tag-symbol" style={{ color: tag.color }}>
                    {tag.icon}
                  </span>
                  <div className="tag-text-block">
                    <span className="tag-name">{tag.name}</span>
                    <span className="tag-sub">{tag.desc}</span>
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

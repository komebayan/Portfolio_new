import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Wrench,
  Layout,
  Server,
  Cpu,
  Terminal,
} from 'lucide-react'
import { skillCategories } from '../data/skills'

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all')

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'frontend':
        return <Layout size={20} className="cat-icon text-cyan" />
      case 'backend':
        return <Server size={20} className="cat-icon text-indigo" />
      case 'ai-ml':
        return <Cpu size={20} className="cat-icon text-purple" />
      case 'tools':
        return <Terminal size={20} className="cat-icon text-emerald" />
      default:
        return <Wrench size={20} className="cat-icon" />
    }
  }

  const filteredCategories =
    activeTab === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeTab)

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Wrench size={14} />
            Competencies
          </span>
          <h2 className="section-title">My Toolkit</h2>
          <p className="section-subtitle">
            Technologies, libraries, and tools I use to build scalable web applications and explore artificial intelligence.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="skills-filter-nav">
          <button
            type="button"
            className={`filter-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Categories
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`filter-btn ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="skills-grid">
          {filteredCategories.map((category, catIdx) => (
            <motion.div
              key={category.id}
              className="skill-category-card card-glass"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            >
              <div className="card-highlight-top"></div>

              {/* Category Header */}
              <div className="category-header">
                <div className="category-icon-box">
                  {getCategoryIcon(category.id)}
                </div>
                <div>
                  <h3 className="category-title">{category.title}</h3>
                  <p className="category-desc">{category.description}</p>
                </div>
              </div>

              {/* Skills List inside Category */}
              <div className="skills-list">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item-row"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.15 }}
                  >
                    <div className="skill-main-info">
                      <div className="skill-dot"></div>
                      <span className="skill-name">{skill.name}</span>
                    </div>

                    <div className="skill-badge-level">
                      <span className="skill-note">{skill.note}</span>
                      <span className="skill-level-pill">{skill.level}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

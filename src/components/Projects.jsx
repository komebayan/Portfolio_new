import { motion } from 'framer-motion'
import {
  FolderGit2,
  ExternalLink,
  ArrowUpRight,
} from 'lucide-react'
import { Github } from './Icons'
import { projects } from '../data/projects'

export default function Projects() {

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <FolderGit2 size={14} />
            Portfolio
          </span>
          <h2 className="section-title">Things I've Built</h2>
          <p className="section-subtitle">
            A collection of projects I've built while learning, experimenting, and solving problems.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <motion.article
              key={project.id}
              className="project-card card-glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
            >
              <div className="card-highlight-top"></div>

              {/* Project Window Mockup Banner */}
              <div className="project-preview-frame">
                <div className="frame-topbar">
                  <div className="frame-dots">
                    <span className="frame-dot"></span>
                    <span className="frame-dot"></span>
                    <span className="frame-dot"></span>
                  </div>
                  <div className="frame-title-tab">{project.id}.app</div>
                  <div className="frame-category-badge">{project.category}</div>
                </div>

                {/* Interactive Project Visual Area */}
                <div className="frame-canvas">
                  <div
                    className="canvas-ambient-glow"
                    style={{
                      background: `radial-gradient(circle, ${project.accentColor}25 0%, transparent 70%)`,
                    }}
                  ></div>

                  {/* Code snippet or architecture preview */}
                  <div className="canvas-code-block">
                    <pre>
                      <code>{project.codeSnippet}</code>
                    </pre>
                  </div>
                </div>
              </div>

              {/* Project Details Content */}
              <div className="project-body">
                <div className="project-meta-line">
                  <span className="project-subtitle-text">{project.subtitle}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>

                <p className="project-description">{project.description}</p>

                {/* Key Features Bullet List */}
                <ul className="project-features-list">
                  {project.features.map((feat) => (
                    <li key={feat} className="feature-item">
                      <span className="feature-marker">›</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="project-tech-stack">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-pill">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action CTA Buttons */}
                <div className="project-actions">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-project-primary"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight size={15} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-project-secondary"
                  >
                    <Github size={15} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="projects-bottom-cta">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary view-all-btn"
          >
            <span>View All Projects on GitHub</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

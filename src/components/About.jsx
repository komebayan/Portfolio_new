import { motion } from 'framer-motion'
import { MapPin, Compass } from 'lucide-react'

export default function About() {
  const floatingBadges = [
    { name: 'React', delay: 0, x: -15, y: -20, color: '#38bdf8' },
    { name: 'Python', delay: 1, x: 25, y: -25, color: '#fbbf24' },
    { name: 'Django', delay: 2, x: 30, y: 15, color: '#34d399' },
    { name: 'JavaScript', delay: 0.5, x: -25, y: 25, color: '#facc15' },
    { name: 'AI', delay: 1.5, x: -20, y: 0, color: '#c084fc' },
    { name: 'Git', delay: 2.2, x: 20, y: -5, color: '#f87171' },
  ]

  return (
    <section className="about-section" id="about">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Compass size={14} />
            Background
          </span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Curiosity-driven software engineering with an emphasis on clarity and performance.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="about-grid">
          {/* Left Column: Personal Narrative */}
          <motion.div
            className="about-story-column"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="story-card card-glass">
              <div className="card-highlight-top"></div>
              
              <div className="story-origin-tag">
                <MapPin size={15} className="origin-icon" />
                <span>Based in Cameroon • Global Mindset</span>
              </div>

              <h3 className="story-headline">
                Crafting software from first principles.
              </h3>

              <div className="story-paragraphs">
                <p>
                  I'm a developer from Cameroon who enjoys building things and
                  understanding how technology works behind the scenes. I started
                  with programming and gradually became interested in full-stack
                  development, artificial intelligence, machine learning, and
                  digital products.
                </p>

                <p>
                  I learn best by building. Every project gives me an opportunity
                  to understand something new, improve my skills, and turn an
                  idea into something functional.
                </p>
              </div>

              {/* Core Tenets */}
              <div className="story-tenets">
                <div className="tenet-item">
                  <div className="tenet-bullet"></div>
                  <div>
                    <h4 className="tenet-title">Understanding the System</h4>
                    <p className="tenet-desc">
                      Digging beneath the abstractions to know what code actually does.
                    </p>
                  </div>
                </div>

                <div className="tenet-item">
                  <div className="tenet-bullet"></div>
                  <div>
                    <h4 className="tenet-title">Practical Execution</h4>
                    <p className="tenet-desc">
                      Prioritizing working prototypes and clean logic over superficial fluff.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Futuristic Profile Card with Floating Tech Badges */}
          <motion.div
            className="about-profile-column"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="profile-futuristic-card card-glass">
              <div className="card-highlight-top"></div>

              {/* Glowing Aura Behind Avatar */}
              <div className="profile-glow-halo"></div>

              {/* Futuristic Avatar Visual */}
              <div className="profile-avatar-container">
                <div className="avatar-frame">
                  <div className="avatar-initials">K</div>
                  <div className="avatar-scanner-line"></div>
                </div>
              </div>

              {/* Identity Info */}
              <div className="profile-info">
                <h3 className="profile-name">Kome</h3>
                <p className="profile-role">Developer / AI Enthusiast</p>
                <div className="profile-status-chip">
                  <span className="chip-indicator"></span>
                  <span>Constantly shipping & learning</span>
                </div>
              </div>

              {/* Floating Technology Badges Field */}
              <div className="floating-badges-field">
                <div className="badges-label">Key Stack:</div>
                <div className="floating-badges-cloud">
                  {floatingBadges.map((badge, index) => (
                    <motion.div
                      key={badge.name}
                      className="floating-tech-badge"
                      animate={{
                        y: [0, index % 2 === 0 ? -6 : 6, 0],
                        x: [0, index % 2 === 0 ? 4 : -4, 0],
                      }}
                      transition={{
                        duration: 4.5 + index * 0.4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: badge.delay,
                      }}
                    >
                      <span
                        className="badge-dot"
                        style={{ backgroundColor: badge.color }}
                      ></span>
                      <span className="badge-name">{badge.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Card Meta Stats Footer */}
              <div className="profile-meta-footer">
                <div className="meta-box">
                  <span className="meta-num">Web + AI</span>
                  <span className="meta-sub">Primary Domains</span>
                </div>
                <div className="meta-divider"></div>
                <div className="meta-box">
                  <span className="meta-num">Clean Code</span>
                  <span className="meta-sub">Core Standard</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

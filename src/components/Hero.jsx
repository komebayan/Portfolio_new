import { motion } from 'framer-motion'
import {
  ArrowRight,
  Terminal,
  Cpu,
  Bot,
} from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section className="hero-section" id="home">
      <div className="container hero-grid">
        {/* Left Column: Typography & CTAs */}
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="hero-badge-wrapper">
            <span className="hero-status-badge">
              <span className="status-dot-pulse"></span>
              Available for work
            </span>
          </motion.div>

          {/* Main Titles */}
          <motion.div variants={itemVariants}>
            <h1 className="hero-greeting">Hi, I'm Kome.</h1>
            <h2 className="hero-main-title">
              I build digital experiences that <span className="text-gradient-accent">actually work.</span>
            </h2>
          </motion.div>

          {/* Role Pill Bar */}
          <motion.div variants={itemVariants} className="hero-roles">
            <span>Full-Stack Developer</span>
            <span className="role-sep">•</span>
            <span>AI Enthusiast</span>
            <span className="role-sep">•</span>
            <span>Problem Solver</span>
          </motion.div>

          {/* Supporting Text */}
          <motion.p variants={itemVariants} className="hero-description">
            I enjoy understanding how technology works, building useful software,
            and turning ideas into real products.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="hero-cta-group">
            <a href="#projects" className="btn-primary btn-glow">
              <span>View My Projects</span>
              <ArrowRight size={17} />
            </a>
            <a href="#contact" className="btn-secondary">
              <span>Let's Work Together</span>
            </a>
          </motion.div>

          {/* Quick tech highlights at bottom */}
          <motion.div variants={itemVariants} className="hero-quick-tech">
            <span className="quick-tech-label">Core Focus:</span>
            <div className="quick-tech-tags">
              <span className="tech-pill">React</span>
              <span className="tech-pill">Python</span>
              <span className="tech-pill">Django</span>
              <span className="tech-pill">AI Models</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Abstract Futuristic Tech Visual */}
        <motion.div
          className="hero-visual-wrapper"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="futuristic-stage">
            {/* Glowing Central Ambient Orb */}
            <div className="cyber-orb-center">
              <div className="cyber-orb-inner"></div>
              <div className="cyber-ring ring-1"></div>
              <div className="cyber-ring ring-2"></div>
            </div>

            {/* Floating Card 1: Code Execution Panel */}
            <motion.div
              className="float-card float-card-code"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <div className="code-header">
                <div className="terminal-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="code-filename">
                  <Terminal size={12} />
                  <span>agent_pipeline.py</span>
                </div>
              </div>
              <div className="code-content">
                <p className="code-line">
                  <span className="c-kw">def</span> <span className="c-fn">solve_task</span>(input_query):
                </p>
                <p className="code-line c-indent">
                  context = agent.retrieve(input_query)
                </p>
                <p className="code-line c-indent">
                  response = <span className="c-fn">generate_solution</span>(context)
                </p>
                <p className="code-line c-indent">
                  <span className="c-kw">return</span> response.stream()
                </p>
                <div className="code-status">
                  <span className="c-indicator"></span>
                  <span>status: pipeline optimal</span>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 2: AI Metrics Telemetry Card */}
            <motion.div
              className="float-card float-card-metrics"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
            >
              <div className="metrics-header">
                <Bot size={15} className="metric-icon" />
                <span className="metric-title">Neural Engine</span>
                <span className="metric-badge">Active</span>
              </div>
              <div className="metric-row">
                <span className="metric-label">Inference Speed</span>
                <span className="metric-val">18ms</span>
              </div>
              <div className="metric-bar-bg">
                <div className="metric-bar-fill" style={{ width: '84%' }}></div>
              </div>
              <div className="metric-meta">
                <span>Tokens/sec: 142</span>
                <span>Accuracy: 99.4%</span>
              </div>
            </motion.div>

            {/* Floating Card 3: Architecture Stack Badge */}
            <motion.div
              className="float-card float-card-badge"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
            >
              <div className="badge-pill-inner">
                <Cpu size={16} className="badge-icon-spin" />
                <div>
                  <div className="badge-name">Full-Stack Logic</div>
                  <div className="badge-sub">Python • React • REST</div>
                </div>
              </div>
            </motion.div>

            {/* Ambient Particle Sparks */}
            <div className="particle-spark p1"></div>
            <div className="particle-spark p2"></div>
            <div className="particle-spark p3"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

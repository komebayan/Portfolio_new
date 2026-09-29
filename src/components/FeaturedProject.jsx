import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Sparkles,
  Bot,
  ArrowRight,
  Zap,
  Cpu,
  Layers,
  X,
} from 'lucide-react'
import { Github } from './Icons'

export default function FeaturedProject() {
  const [caseStudyOpen, setCaseStudyOpen] = useState(false)
  const simulatedPrompt = 'How do we structure an async LLM pipeline in Python?'

  return (
    <section className="featured-section" id="featured">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Sparkles size={14} />
            Spotlight
          </span>
          <h2 className="section-title">Featured Project</h2>
          <p className="section-subtitle">
            An in-depth look at building an end-to-end intelligent conversational system.
          </p>
        </div>

        {/* Featured Showcase Card */}
        <div className="featured-card card-glass">
          <div className="card-highlight-top"></div>

          <div className="featured-grid">
            {/* Left/Top: Deep Interactive Mock App UI */}
            <div className="featured-mockup-wrapper">
              <div className="mockup-window">
                {/* Mockup Titlebar */}
                <div className="mockup-header">
                  <div className="mockup-dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <div className="mockup-app-title">
                    <Bot size={13} className="text-purple" />
                    <span>AI Assistant • Model v2.4 (Active)</span>
                  </div>
                  <div className="mockup-latency">
                    <span className="latency-dot"></span>
                    <span>18ms</span>
                  </div>
                </div>

                {/* Mockup Chat Workspace */}
                <div className="mockup-body">
                  {/* Message 1: User */}
                  <div className="mock-message user-msg">
                    <div className="msg-avatar user-av">U</div>
                    <div className="msg-bubble user-bubble">
                      <p>{simulatedPrompt}</p>
                    </div>
                  </div>

                  {/* Message 2: AI Assistant Streaming */}
                  <div className="mock-message ai-msg">
                    <div className="msg-avatar ai-av">
                      <Bot size={14} />
                    </div>
                    <div className="msg-bubble ai-bubble">
                      <div className="ai-stream-header">
                        <span className="ai-model-tag">FastStream GPT Engine</span>
                        <span className="ai-time">Just now</span>
                      </div>
                      <p>
                        To achieve zero-lag responses, we decouple the API retrieval
                        from the client render using an async event-stream:
                      </p>
                      <div className="mock-code-embed">
                        <code>async for chunk in client.stream_generate(tokens):</code>
                        <code>&nbsp;&nbsp;await ws.send_text(chunk.delta)</code>
                      </div>
                      <div className="ai-typing-indicator">
                        <span className="pulse-dot"></span>
                        <span>Streaming response chunks...</span>
                      </div>
                    </div>
                  </div>

                  {/* Mock Input Bar */}
                  <div className="mock-input-bar">
                    <div className="mock-input-field">
                      <span className="mock-prompt-icon">›</span>
                      <span className="mock-input-text">
                        Ask follow-up question or analyze code...
                      </span>
                    </div>
                    <button type="button" className="mock-send-btn" aria-label="Send">
                      <Zap size={14} />
                    </button>
                  </div>
                </div>

                {/* Mockup Footer Stats */}
                <div className="mockup-footer">
                  <div className="stat-pill">
                    <Cpu size={12} />
                    <span>Memory: 128 MB</span>
                  </div>
                  <div className="stat-pill">
                    <Layers size={12} />
                    <span>Context: 8k Tokens</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right/Bottom: Story & Technical Architecture */}
            <div className="featured-details-wrapper">
              <div className="featured-badge-pill">
                <Bot size={14} />
                <span>AI Assistant</span>
              </div>

              <h3 className="featured-headline">
                Building intelligent experiences
              </h3>

              <p className="featured-text">
                The AI Assistant explores modern AI APIs, conversational interfaces,
                delightful frontend experiences, and resilient backend logic.
                It is engineered to handle context management, streaming token updates,
                and custom system directives with minimal latency.
              </p>

              {/* Technical Pillars */}
              <div className="featured-pillars">
                <div className="pillar-item">
                  <div className="pillar-icon">
                    <Zap size={16} />
                  </div>
                  <div>
                    <h4 className="pillar-title">Real-Time Streaming</h4>
                    <p className="pillar-desc">
                      Sub-millisecond token rendering for instantaneous user feedback.
                    </p>
                  </div>
                </div>

                <div className="pillar-item">
                  <div className="pillar-icon">
                    <Cpu size={16} />
                  </div>
                  <div>
                    <h4 className="pillar-title">Backend Architecture</h4>
                    <p className="pillar-desc">
                      Modular Python & API orchestration with robust error recovery.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div className="featured-tech-chips">
                <span className="tech-pill">Python</span>
                <span className="tech-pill">AI Models</span>
                <span className="tech-pill">APIs</span>
                <span className="tech-pill">React</span>
              </div>

              {/* CTAs */}
              <div className="featured-cta-row">
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => setCaseStudyOpen(true)}
                >
                  <span>View Case Study</span>
                  <ArrowRight size={16} />
                </button>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Modal Dialog */}
      <AnimatePresence>
        {caseStudyOpen && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCaseStudyOpen(false)}
          >
            <motion.div
              className="modal-container card-glass"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <div>
                  <span className="modal-tag">Case Study</span>
                  <h3 className="modal-title">AI Assistant Architecture</h3>
                </div>
                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={() => setCaseStudyOpen(false)}
                  aria-label="Close Case Study"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="modal-content-scroll">
                <h4>Problem & Inspiration</h4>
                <p>
                  Many conversational UI implementations suffer from clunky delays,
                  abrupt jumps during streaming, or fragile error management when
                  API timeouts occur. The goal was to build a fluid, resilient
                  conversational interface from scratch.
                </p>

                <h4>Technical Implementation</h4>
                <p>
                  <strong>Frontend:</strong> React client utilizing custom event
                  listeners to handle token deltas as they arrive, maintaining
                  scroll anchoring without jarring viewport jumps.
                </p>
                <p>
                  <strong>Backend:</strong> Asynchronous Python orchestration
                  layer formatting conversational memory, pruning context windows,
                  and querying state-of-the-art AI endpoints.
                </p>

                <h4>Key Learnings</h4>
                <p>
                  Developing this project deepened my understanding of token usage,
                  API latency budgets, and the importance of immediate optimistic
                  UI updates.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

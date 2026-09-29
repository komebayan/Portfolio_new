import { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { motion } from 'framer-motion'
import {
  Mail,
  Send,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
} from 'lucide-react'
import { Github, Linkedin } from './Icons'

export default function Contact() {
  const [formState, formspreeSubmit, resetForm] = useForm('mzezyrgz')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState({})

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.'
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.'
    }
    if (!formData.message.trim()) {
      errs.message = 'Please include a message.'
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters.'
    }
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e) => {
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      e.preventDefault()
      setErrors(validationErrors)
      return
    }

    setErrors({})
    formspreeSubmit(e)
  }

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        {/* Contact Grid */}
        <div className="contact-grid">
          {/* Left Column: Direct Info & Social Connections */}
          <motion.div
            className="contact-info-col"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">
              <MessageSquare size={14} />
              Get In Touch
            </span>

            <h2 className="contact-title">Let's build something.</h2>

            <p className="contact-lead">
              Have an idea, project, or opportunity? Let's turn it into something real.
            </p>

            <p className="contact-body">
              Whether you're looking to build a full-stack web application, prototype an
              AI integration, or explore engineering collaboration, my inbox is open.
            </p>

            {/* Direct Connect Buttons */}
            <div className="contact-quick-buttons">
              <a
                href="mailto:contact@kome.dev"
                className="quick-contact-btn email-btn"
              >
                <div className="btn-icon-wrapper">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="btn-label">Email Me</span>
                  <span className="btn-subtext">contact@kome.dev</span>
                </div>
                <ArrowUpRight size={16} className="btn-arrow" />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="quick-contact-btn"
              >
                <div className="btn-icon-wrapper">
                  <Github size={18} />
                </div>
                <div>
                  <span className="btn-label">GitHub</span>
                  <span className="btn-subtext">Explore code repositories</span>
                </div>
                <ArrowUpRight size={16} className="btn-arrow" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="quick-contact-btn"
              >
                <div className="btn-icon-wrapper">
                  <Linkedin size={18} />
                </div>
                <div>
                  <span className="btn-label">LinkedIn</span>
                  <span className="btn-subtext">Professional network</span>
                </div>
                <ArrowUpRight size={16} className="btn-arrow" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            className="contact-form-col"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="contact-form-card card-glass">
              <div className="card-highlight-top"></div>

              <h3 className="form-card-title">Send a Direct Message</h3>
              <p className="form-card-subtitle">
                Fill in the details below and I'll get back to you promptly.
              </p>

              {formState.succeeded ? (
                <motion.div
                  className="submission-success-banner"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="success-icon-wrap">
                    <CheckCircle2 size={32} className="text-emerald" />
                  </div>
                  <h4>Message Sent Successfully!</h4>
                  <p>
                    Thank you for reaching out. I've received your note and will
                    reply shortly.
                  </p>
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => {
                      resetForm()
                      setFormData({ name: '', email: '', message: '' })
                      setErrors({})
                    }}
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="contact-form">
                  {/* Name field */}
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className={`form-input ${errors.name ? 'input-error' : ''}`}
                      required
                    />
                    {errors.name && (
                      <span className="form-error-msg">
                        <AlertCircle size={13} /> {errors.name}
                      </span>
                    )}
                    <ValidationError
                      errors={formState.errors}
                      field="name"
                      className="form-error-msg"
                    />
                  </div>

                  {/* Email field */}
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`form-input ${errors.email ? 'input-error' : ''}`}
                      required
                    />
                    {errors.email && (
                      <span className="form-error-msg">
                        <AlertCircle size={13} /> {errors.email}
                      </span>
                    )}
                    <ValidationError
                      errors={formState.errors}
                      field="email"
                      className="form-error-msg"
                    />
                  </div>

                  {/* Message field */}
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell me about your idea, timeline, or question..."
                      value={formData.message}
                      onChange={handleChange}
                      className={`form-input form-textarea ${errors.message ? 'input-error' : ''}`}
                      required
                    ></textarea>
                    {errors.message && (
                      <span className="form-error-msg">
                        <AlertCircle size={13} /> {errors.message}
                      </span>
                    )}
                    <ValidationError
                      errors={formState.errors}
                      field="message"
                      className="form-error-msg"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formState.submitting}
                    className="btn-primary btn-submit-form btn-glow"
                  >
                    {formState.submitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                  <ValidationError
                    errors={formState.errors}
                    className="form-error-msg"
                    role="alert"
                  />
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

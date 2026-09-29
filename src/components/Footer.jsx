import { Code2, Mail, ArrowUp } from 'lucide-react'
import { Github, Linkedin } from './Icons'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer-root">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <a href="#home" className="footer-brand">
              <div className="brand-icon-wrapper">
                <Code2 size={18} className="brand-icon" />
              </div>
              <span className="brand-text">
                Kome<span className="brand-dot">.</span>
              </span>
            </a>
            <p className="footer-tagline">Building. Learning. Creating.</p>
            <p className="footer-subtext">
              Crafting reliable full-stack applications & exploring intelligent systems from Cameroon.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <span className="footer-col-title">Navigation</span>
            <ul className="footer-links-list">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Connections */}
          <div className="footer-social-col">
            <span className="footer-col-title">Connect</span>
            <div className="footer-social-icons">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="social-icon-btn"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="social-icon-btn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:contact@kome.dev"
                aria-label="Email Me"
                className="social-icon-btn"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © 2026 Kome. Built with React.
          </p>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  )
}

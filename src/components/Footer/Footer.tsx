import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import styles from './Footer.module.css'

const quickLinks = [
  { label: 'About Us', path: '/about' },
  { label: 'Our Classes', path: '/classes' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
]

const usefulLinks = [
  { label: 'Privacy Policy', path: '#' },
  { label: 'Terms & Conditions', path: '#' },
  { label: 'FAQ', path: '#' },
  { label: 'Book a Trial', path: '/contact' },
  { label: 'Work With Us', path: '/contact' },
]

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail('')
    alert('Thank you for subscribing!')
  }

  return (
    <footer className={styles.footer}>
      {/* Newsletter Section */}
      <motion.div
        className={styles.newsletterSection}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.newsletterText}>
          <p className={styles.newsletterSub}>
            <span>Subscribe</span> to our newsletter
          </p>
          <h3 className={styles.newsletterTitle}>Join Us</h3>
        </div>
        <form className={styles.newsletterForm} onSubmit={handleNewsletter}>
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.newsletterInput}
            required
          />
          <button type="submit" className={styles.newsletterBtn}>
            JOIN US
          </button>
        </form>
      </motion.div>

      {/* Main Footer Grid */}
      <div className={styles.footerGrid}>
        {/* Brand Column */}
        <motion.div
          className={styles.brandCol}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.footerLogo}>
            <img src="/logo.png" alt="Goodfoot Academy" className={styles.footerLogoImg} />
          </div>
          <p className={styles.footerDesc}>
            Dance classes for your little ones and aspiring dancers of all ages in Kampala.
            We nurture talent, build confidence, and celebrate movement.
          </p>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink} aria-label="Facebook"><FaFacebook /></a>
            <a href="#" className={styles.socialLink} aria-label="Instagram"><FaInstagram /></a>
            <a href="#" className={styles.socialLink} aria-label="Twitter/X"><FaXTwitter /></a>
            <a href="#" className={styles.socialLink} aria-label="YouTube"><FaYoutube /></a>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h4 className={styles.footerColTitle}>Quick Links</h4>
          <ul className={styles.footerLinks}>
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className={styles.footerLink}>
                  › {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Useful Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h4 className={styles.footerColTitle}>Useful Links</h4>
          <ul className={styles.footerLinks}>
            {usefulLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.path} className={styles.footerLink}>
                  › {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact" className={`${styles.footerLinkBtn} ${styles.footerLinkBtnPink}`}>
                Book a Trial
              </Link>
            </li>
            <li>
              <Link to="/about" className={`${styles.footerLinkBtn} ${styles.footerLinkBtnPurple}`}>
                Our Academy
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h4 className={styles.footerColTitle}>Contact Us</h4>
          <div className={styles.contactItem}>
            <MapPin size={16} className={styles.contactIcon} />
            <span>Mawanda Rd, Kampala, Uganda</span>
          </div>
          <div className={styles.contactItem}>
            <Phone size={16} className={styles.contactIcon} />
            <span>0764 335881</span>
          </div>
          <div className={styles.contactItem}>
            <Mail size={16} className={styles.contactIcon} />
            <span>info@goodfootacademy.ug</span>
          </div>
          <div className={styles.contactItem}>
            <Clock size={16} className={styles.contactIcon} />
            <span>Mon–Fri: 9AM–7PM<br />Sat–Sun: 10AM–5PM</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.footerBottom}>
        <p className={styles.copyright}>
          All rights reserved Goodfoot Ballet Dance & Music Academy © 2025
        </p>
        <p className={styles.madeWith}>
          Made & Designed By <a href="https://www.kavotevh.uk" target="_blank" rel="noopener noreferrer">Kavo Technologies</a>
        </p>
      </div>
    </footer>
  )
}

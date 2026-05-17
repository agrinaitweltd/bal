import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Navbar.module.css'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Classes', path: '/classes' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navClass = `${styles.navbar} ${scrolled ? styles.scrolled : styles.transparent}`

  return (
    <>
      <motion.nav
        className={navClass}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className={styles.navInner}>
          {/* Logo */}
          <Link to="/" className={styles.logo}>
            <img src="/logo.png" alt="Goodfoot Academy Logo" className={styles.logoImg} />
            <span className={styles.logoText}>
              <span className={styles.logoName}>Goodfoot</span>
              <span className={styles.logoSub}>Ballet Dance & Music Academy</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className={styles.navLinks}>
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.active : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link to="/contact" className={`${styles.navLink} ${styles.navCta}`}>
                Book a Class
              </Link>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu — partial left-side slide-in */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className={styles.mobileBackdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Panel */}
            <motion.div
              className={styles.mobileMenu}
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            >
              {/* Nav links area */}
              <div className={styles.mobileMenuInner}>
                <div className={styles.mobileMenuLogo}>
                  <img src="/logo.png" alt="Goodfoot" className={styles.mobileMenuLogoImg} />
                  <span className={styles.mobileMenuLogoName}>Goodfoot</span>
                </div>

                <nav className={styles.mobileNavList}>
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.06, duration: 0.35 }}
                    >
                      <NavLink
                        to={item.path}
                        end={item.path === '/'}
                        className={({ isActive }) =>
                          `${styles.mobileNavLink} ${isActive ? styles.active : ''}`
                        }
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </NavLink>
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  className={styles.mobileMenuCta}
                >
                  <Link
                    to="/contact"
                    className="btn btn-secondary"
                    onClick={() => setMenuOpen(false)}
                  >
                    Book a Class
                  </Link>
                </motion.div>
              </div>

              {/* Green close strip on right edge */}
              <button
                className={styles.mobileClose}
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <span className={styles.mobileCloseX}>✕</span>
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

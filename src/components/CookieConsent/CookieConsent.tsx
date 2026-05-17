import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './CookieConsent.module.css'

type Tab = 'consent' | 'details' | 'about'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [activeTab, setActiveTab] = useState<Tab>('consent')
  const [necessary] = useState(true)

  useEffect(() => {
    const consent = localStorage.getItem('gf_cookie_consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = (level: 'all' | 'selection' | 'deny') => {
    localStorage.setItem('gf_cookie_consent', level)
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.backdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => { if (e.target === e.currentTarget) accept('deny') }}
        >
          <motion.div
            className={styles.panel}
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 24 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            role="dialog"
            aria-modal="true"
            aria-label="Cookie consent"
          >
            {/* Tabs */}
            <div className={styles.tabs}>
              {(['consent', 'details', 'about'] as Tab[]).map((tab) => (
                <button
                  key={tab}
                  className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className={styles.body}>
              {activeTab === 'consent' && (
                <>
                  <h2 className={styles.title}>Your Privacy</h2>
                  <p className={styles.text}>
                    We use cookies to personalise content and ads, to provide social media features
                    and to analyse our traffic. We also share information about your use of our site
                    with our social media, advertising and analytics partners who may combine it with
                    other information that you've provided to them or that they've collected from
                    your use of their services.
                  </p>

                  <div className={styles.toggleRow}>
                    <span className={styles.toggleLabel}>Necessary</span>
                    <span className={`${styles.toggle} ${necessary ? styles.toggleOn : ''}`} aria-label="Necessary cookies always enabled" />
                  </div>
                </>
              )}

              {activeTab === 'details' && (
                <>
                  <h2 className={styles.title}>Cookie Details</h2>
                  <p className={styles.text}>
                    <strong>Necessary cookies</strong> enable core site functionality such as security
                    and accessibility. They cannot be disabled.
                  </p>
                  <p className={styles.text}>
                    <strong>Analytics cookies</strong> help us understand how visitors interact with
                    our website by collecting and reporting information anonymously.
                  </p>
                </>
              )}

              {activeTab === 'about' && (
                <>
                  <h2 className={styles.title}>About Cookies</h2>
                  <p className={styles.text}>
                    Cookies are small text files that websites place on your device. They help us
                    remember your preferences and improve your experience on our site.
                  </p>
                  <p className={styles.text}>
                    You can change your cookie preferences at any time by clearing your browser
                    storage and revisiting the site.
                  </p>
                </>
              )}
            </div>

            {/* Buttons */}
            <div className={styles.buttons}>
              <button className={styles.btnDeny} onClick={() => accept('deny')}>
                Deny
              </button>
              <button className={styles.btnSelection} onClick={() => accept('selection')}>
                Allow Selection
              </button>
              <button className={styles.btnAll} onClick={() => accept('all')}>
                Allow All
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

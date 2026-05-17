import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, MessageCircle, Check } from 'lucide-react'
import PageHero from '../../components/PageHero/PageHero'
import styles from './Contact.module.css'

const contactInfo = [
  { icon: '📍', label: 'Address', value: 'Mawanda Rd, Kampala, Uganda' },
  { icon: '📞', label: 'Phone', value: '0764 335881' },
  { icon: '💬', label: 'WhatsApp', value: '0764 335881' },
  { icon: '✉️', label: 'Email', value: 'info@goodfootacademy.ug' },
  { icon: '🕐', label: 'Hours', value: 'Mon–Fri: 9AM–7PM\nSat–Sun: 10AM–5PM' },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    venue: '',
    childDob: '',
    classType: '',
    days: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      <PageHero
        title="Contact"
        subtitle="Get in touch — we'd love to hear from you"
        image="/kids-dance.png"
      />

      <section className={styles.contactSection}>
        <div className={styles.contactGrid}>
          {/* Info Column */}
          <motion.div
            className={styles.infoCol}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.infoCard}>
              <p className="section-label">Get In Touch</p>
              <h2 className={styles.infoTitle}>We're Here to <span>Help</span></h2>
              <p className={styles.infoDesc}>
                Have a question about our classes? Want to book a trial? Simply reach out — 
                our friendly team will respond as quickly as possible.
              </p>

              <div className={styles.contactItems}>
                {contactInfo.map((info) => (
                  <div key={info.label} className={styles.contactItem}>
                    <span className={styles.contactIcon}>{info.icon}</span>
                    <div>
                      <span className={styles.contactLabel}>{info.label}</span>
                      <span className={styles.contactValue} style={{ whiteSpace: 'pre-line' }}>{info.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/256764335881"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-secondary ${styles.whatsappBtn}`}
              >
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>

              {/* Social Links */}
              <div className={styles.socialSection}>
                <p className={styles.socialLabel}>Follow Us</p>
                <div className={styles.socialLinks}>
                  <a href="#" className={styles.socialLink} aria-label="Facebook">f</a>
                  <a href="#" className={styles.socialLink} aria-label="Instagram">ig</a>
                  <a href="#" className={styles.socialLink} aria-label="YouTube">yt</a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className={styles.mapPlaceholder}>
              <div className={styles.mapOverlay}>
              <MapPin size={32} className={styles.mapIcon} />
                <p className={styles.mapText}>Mawanda Rd, Kampala</p>
                <p className={styles.mapSub}>Map integration coming soon</p>
              </div>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            className={styles.formCol}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.formCard}>
              <h3 className={styles.formTitle}>Get in touch</h3>

              {submitted ? (
                <motion.div
                  className={styles.successMsg}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className={styles.successIcon}><Check size={28} strokeWidth={3} /></div>
                  <h4 className={styles.successTitle}>Message Sent!</h4>
                  <p className={styles.successText}>
                    Thank you for getting in touch. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Name <span className={styles.required}>*</span></label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Phone <span className={styles.required}>*</span></label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="+256 7XX XXX XXX"
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>Email <span className={styles.required}>*</span></label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={styles.input}
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>Which class are you interested in?</label>
                    <select
                      name="classType"
                      value={formData.classType}
                      onChange={handleChange}
                      className={styles.input}
                    >
                      <option value="">Select a class type...</option>
                      <option>Baby Ballet</option>
                      <option>Primary Ballet</option>
                      <option>Tap Dance</option>
                      <option>Contemporary Dance</option>
                      <option>Piano Lessons</option>
                      <option>Dance Fitness</option>
                      <option>Drama & Theatre</option>
                      <option>Private Lessons</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Preferred Days</label>
                      <input
                        type="text"
                        name="days"
                        value={formData.days}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="e.g. Mon, Wed"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Child's Date of Birth</label>
                      <input
                        type="date"
                        name="childDob"
                        value={formData.childDob}
                        onChange={handleChange}
                        className={styles.input}
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`${styles.input} ${styles.textarea}`}
                      placeholder="Tell us anything else you'd like us to know..."
                      rows={4}
                    />
                  </div>

                  <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                    Send Message →
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

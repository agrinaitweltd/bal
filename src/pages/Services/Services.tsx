import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero/PageHero'
import styles from './Services.module.css'

const services = [
  {
    icon: '🎓',
    title: 'Private Lessons',
    desc: 'One-on-one instruction tailored entirely to your goals. Private lessons allow for rapid progress and focused attention on individual strengths and areas for improvement.',
    features: ['Flexible scheduling', 'Personalised curriculum', 'Any age or level', 'Dance or music'],
    color: 'turquoise',
    img: '/ballet-teacher.png',
  },
  {
    icon: '👥',
    title: 'Group Classes',
    desc: 'Our vibrant group classes create a sense of community, teamwork, and shared joy. Students thrive in our energetic, carefully structured group sessions.',
    features: ['Ages 18 months+', 'Small class sizes', 'Social development', 'Affordable pricing'],
    color: 'pink',
    img: '/kids-dance.png',
  },
  {
    icon: '🎪',
    title: 'Event Performances',
    desc: 'We bring dance and music to your events! From school shows to corporate events and community celebrations, our students perform with confidence and grace.',
    features: ['Schools & colleges', 'Corporate events', 'Community shows', 'Wedding entertainment'],
    color: 'turquoise',
    img: '/dance-performance.png',
  },
  {
    icon: '🎹',
    title: 'Music Coaching',
    desc: 'Individual music coaching covering piano, rhythm, theory, and performance. Our music teachers nurture a lifelong love of music in every student.',
    features: ['Piano tuition', 'Music theory', 'Exam preparation', 'All ages welcome'],
    color: 'pink',
    img: '/music-class.png',
  },
  {
    icon: '💡',
    title: 'Dance Workshops',
    desc: 'Intensive workshops that dive deep into specific dance styles, techniques, or themes. Perfect for school groups, birthday parties, or holiday programmes.',
    features: ['Holiday programmes', 'School workshops', 'Birthday parties', 'Guest choreographers'],
    color: 'turquoise',
    img: '/academy-gallery-1.png',
  },
  {
    icon: '🏆',
    title: 'Competition Preparation',
    desc: 'For ambitious dancers ready to compete, we offer dedicated preparation coaching — from choreography and costume guidance to mental performance strategies.',
    features: ['Solo choreography', 'Group routines', 'Stage coaching', 'Competition travel support'],
    color: 'pink',
    img: '/academy-gallery-2.png',
  },
]

const process = [
  { step: '01', title: 'Get in Touch', desc: 'Contact us via phone, WhatsApp, or our online form to discuss your needs.' },
  { step: '02', title: 'Free Consultation', desc: 'We\'ll assess the right class or service for you or your child, no obligation.' },
  { step: '03', title: 'Trial Class', desc: 'Enjoy a complimentary trial class to experience Goodfoot firsthand.' },
  { step: '04', title: 'Enrol & Thrive', desc: 'Join our community and begin your dance or music journey with us!' },
]

export default function Services() {
  return (
    <div>
      <PageHero
        title="Our Services"
        subtitle="Everything you need to start your dance and music journey"
        image="/dance-performance.png"
      />

      <section className={styles.introSection}>
        <motion.div
          className={styles.introInner}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label">What We Provide</p>
          <h2 className="section-title">World-Class Services for <span>Every Need</span></h2>
          <p className="section-subtitle">
            From first steps to stage performances, Goodfoot Academy offers a comprehensive 
            range of dance and music services for individuals, groups, schools, and events.
          </p>
        </motion.div>
      </section>

      <section className={styles.servicesSection}>
        <div className={styles.servicesGrid}>
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              className={styles.serviceCard}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <div className={styles.serviceImgWrap}>
                <img src={svc.img} alt={svc.title} />
                <div className={`${styles.serviceIconBadge} ${styles[`badge_${svc.color}`]}`}>
                  {svc.icon}
                </div>
              </div>
              <div className={styles.serviceBody}>
                <h3 className={styles.serviceTitle}>{svc.title}</h3>
                <p className={styles.serviceDesc}>{svc.desc}</p>
                <ul className={styles.serviceFeatures}>
                  {svc.features.map((f) => (
                    <li key={f} className={styles.serviceFeature}>
                      <span className={styles.featureDot} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`btn ${svc.color === 'turquoise' ? 'btn-outline' : 'btn-secondary'}`} style={{ marginTop: '1.25rem', fontSize: '0.85rem', padding: '0.65rem 1.5rem' }}>
                  Enquire Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className={styles.processSection}>
        <div className={styles.processInner}>
          <div className={styles.processSectionHeader}>
            <p className="section-label">How It Works</p>
            <h2 className="section-title">Getting <span>Started</span> is Easy</h2>
          </div>
          <div className={styles.processSteps}>
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                className={styles.processStep}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className={styles.stepNum}>{step.step}</div>
                <h4 className={styles.stepTitle}>{step.title}</h4>
                <p className={styles.stepDesc}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <motion.div
          className={styles.ctaInner}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
          <p className={styles.ctaText}>
            Contact us today and let's find the perfect programme for you or your family.
          </p>
          <div className={styles.ctaActions}>
            <Link to="/contact" className="btn btn-outline-white">Contact Us</Link>
            <Link to="/classes" className="btn btn-secondary">View Classes</Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

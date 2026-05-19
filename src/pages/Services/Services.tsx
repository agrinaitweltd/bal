import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { GraduationCap, Users, Star, Music, Lightbulb, Trophy } from 'lucide-react'
import PageHero from '../../components/PageHero/PageHero'
import styles from './Services.module.css'

type Subsection = { label: string; text: string }

type Service = {
  icon: React.ReactNode
  title: string
  subtitle?: string
  desc: string
  extra?: string
  subsections?: Subsection[]
  color: 'turquoise' | 'pink'
  img: string
}

const services: Service[] = [
  {
    icon: <GraduationCap size={28} />,
    title: '01 — Ballet',
    subtitle: 'Neoclassical Ballet & Contemporary',
    desc: 'Our Ballet classes follow the Royal Academy of Dance (RAD) Syllabus, where students are encouraged to work towards examinations from aged 5 years and above. This syllabus gives dancers a wonderful foundation to develop classical technique whilst enhancing their sense of performance. A variety of music is used in each class including traditional ballet extracts and well known songs.',
    extra: 'The latest RAD syllabus also provides experience in Character work, where students learn traditional steps and movements from countries such as Russia, Hungary and Spain. Many of these styles are seen in classic ballets such as Swan Lake, Little Red Riding Hood and Snow White. The School offers RAD classes from Pre-primary level, where children from 3 years and over can attend.',
    color: 'turquoise',
    img: '/ballet-class.png',
  },
  {
    icon: <Star size={28} />,
    title: '02 — Examination',
    desc: 'Our clearly defined examination structure caters for all types of learners, whether they wish to progress to making dance purely as a leisure activity, all whilst taking place in the context of safe dance practice.',
    subsections: [
      { label: 'Class Examinations', text: 'Class Examinations may be taken in classical ballet (Good Foot Ballet Dance Academy), and Modern Theatre.' },
      { label: 'Medal Tests', text: 'These tests may be taken in Sequence, Freestyle, Jazz, Hip Hop, Contemporary.' },
      { label: 'Other', text: 'Some of our Dance Faculties offer types of qualifications other than those mentioned above. Please refer to individual syllabi for full details.' },
    ],
    color: 'pink',
    img: '/dance-performance.png',
  },
  {
    icon: <Music size={28} />,
    title: '03 — Music',
    desc: 'Our trainer is a renowned professor of music, Professor Stanley, who plays over 14 instruments and is passionate about teaching how to sight read, sight write and sight sing. Classes available for Beginners, Intermediate and Advanced levels. Instruments include Recorder, Piano, Cello, Guitar, Violin and more.',
    color: 'turquoise',
    img: '/music-class.png',
  },
  {
    icon: <Users size={28} />,
    title: '04 — Dance',
    desc: 'Experience the ultimate dance extravaganza with our diverse range of services, including foundational First Dance classes, high-energy Hip Hop sessions, Street Dance, expressive Contemporary and Modern Techniques, vibrant Afro and Amapiano styles. Programs designed to keep you moving and grooving!',
    color: 'pink',
    img: '/kids-dance.png',
  },
  {
    icon: <Trophy size={28} />,
    title: '05 — Skating',
    desc: 'Aiming to build up progressively, ensuring that steps and skills learned at lower levels prepare for more complex movements as the candidate progresses.',
    color: 'turquoise',
    img: '/academy-gallery-1.png',
  },
  {
    icon: <Lightbulb size={28} />,
    title: '06 — Rhythmic Gymnastics',
    desc: 'Aiming to build up progressively, ensuring that steps and skills learned at lower levels prepare for more complex movements as the candidate progresses.',
    color: 'pink',
    img: '/academy-gallery-2.png',
  },
]

const ageGuidelines = [
  { level: 'Pre-school', age: '3 years' },
  { level: 'Pre-primary', age: '5 years' },
  { level: 'Primary', age: '6 years' },
  { level: 'Grade 1', age: '7 years' },
  { level: 'Grade 2', age: '8 years' },
  { level: 'Grade 3+', age: '9 years (with some ballet experience)' },
  { level: 'Discovering Repertoire Level 2', age: '12 years+ (Grade 5)' },
  { level: 'Ballet for Beginners', age: '13–17 years' },
  { level: 'Boys Ballet Level 1', age: '5–8 years' },
  { level: 'Boys Ballet Level 2', age: '9–11 years' },
  { level: 'Contemporary Level 1', age: '9–12 years' },
  { level: 'Contemporary Level 2', age: '13–17 years' },
  { level: 'Street Dance Starters', age: '4–8 years' },
  { level: 'Street Dance Level 1', age: '9–13 years' },
  { level: 'Street Dance Level 2', age: '14–25 years' },
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
        title="Programs & Services"
        subtitle="A comprehensive range of dance, music and gymnastics programmes for all ages"
        image="/dance-performance.png"
      />

      <section className={styles.introSection}>
        <motion.div
          className={styles.introInner}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label">What We Offer</p>
          <h2 className="section-title">World-Class Programmes for <span>Every Student</span></h2>
          <p className="section-subtitle">
            From Ballet and Music to Street Dance, Skating and Rhythmic Gymnastics — Good Foot 
            Dance and Music Academy offers expertly structured programmes for students of all ages and levels.
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
                {svc.subtitle && <p className={styles.serviceSubtitle}>{svc.subtitle}</p>}
                <p className={styles.serviceDesc}>{svc.desc}</p>
                {svc.extra && <p className={styles.serviceDesc}>{svc.extra}</p>}
                {svc.subsections && (
                  <div className={styles.subsections}>
                    {svc.subsections.map((sub) => (
                      <div key={sub.label} className={styles.subsection}>
                        <span className={styles.subsectionLabel}>{sub.label}</span>
                        <p className={styles.subsectionText}>{sub.text}</p>
                      </div>
                    ))}
                  </div>
                )}
                <Link
                  to="/contact"
                  className={`btn ${svc.color === 'turquoise' ? 'btn-outline' : 'btn-secondary'}`}
                  style={{ marginTop: '1.25rem', fontSize: '0.85rem', padding: '0.65rem 1.5rem' }}
                >
                  Enquire Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Age Guidelines */}
      <section className={styles.ageSection}>
        <div className={styles.ageInner}>
          <div className={styles.ageSectionHeader}>
            <p className="section-label">Enrolment Guide</p>
            <h2 className="section-title">Age <span>Guidelines</span></h2>
            <p className="section-subtitle">
              Use the guide below to find the right level for your child.
            </p>
          </div>
          <motion.div
            className={styles.ageTable}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.ageTableHeader}>
              <span>Level / Class</span>
              <span>Recommended Age</span>
            </div>
            {ageGuidelines.map((row, i) => (
              <motion.div
                key={row.level}
                className={`${styles.ageTableRow} ${i % 2 === 0 ? styles.ageRowEven : ''}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <span className={styles.ageLevel}>{row.level}</span>
                <span className={styles.ageValue}>{row.age}</span>
              </motion.div>
            ))}
          </motion.div>
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

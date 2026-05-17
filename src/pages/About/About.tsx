import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero/PageHero'
import styles from './About.module.css'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
}

const instructors = [
  {
    role: 'Principal & Founder',
    name: 'Miss Grace Namukasa',
    bio: 'Having performed across East Africa and trained internationally, Grace founded Goodfoot Academy with a mission to bring world-class dance education to Kampala. She holds qualifications from the Royal Academy of Dance (RAD) and is passionate about nurturing every child\'s potential.',
    img: '/ballet-teacher.png',
  },
  {
    role: 'Music Director',
    name: 'Mr. David Ssemwanga',
    bio: 'David studied music at Makerere University and brings over 15 years of piano teaching experience. His patient, creative approach inspires students of all ages to develop a lifelong love of music.',
    img: '/ballet-teacher.png',
  },
]

const achievements = [
  { num: '500+', label: 'Students Graduated' },
  { num: '12+', label: 'Years of Excellence' },
  { num: '25+', label: 'Awards Won' },
  { num: '15+', label: 'Expert Teachers' },
]

const philosophy = [
  { icon: '🌟', title: 'Nurture Every Talent', desc: 'We believe every child has a unique gift. Our role is to discover, develop, and celebrate it.' },
  { icon: '❤️', title: 'Joy-First Learning', desc: 'Classes should be fun, uplifting, and joyful. Happy students learn faster and love dance deeper.' },
  { icon: '🤝', title: 'Community & Family', desc: 'We\'re more than a dance school — we\'re a family that supports each other through every step.' },
  { icon: '🎯', title: 'Excellence with Heart', desc: 'We pursue technical excellence while keeping the emotional and creative aspects of dance central.' },
]

export default function About() {
  return (
    <div>
      <PageHero
        title="About Us"
        subtitle="Find out more about who we are and what we do"
        image="/kids-dance.png"
      />

      {/* Story Section */}
      <section className={styles.storySection}>
        <div className={styles.storyGrid}>
          <motion.div
            className={styles.storyImg}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.storyImgMain}>
              <img src="/ballet-class.png" alt="Ballet class" />
            </div>
            <motion.div
              className={styles.storyBadge}
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <span className={styles.badgeIcon}>🩰</span>
              <span className={styles.badgeText}>Est. 2012</span>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.storyText}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label">Our Story</p>
            <h2 className="section-title">Built on <span>Passion</span> for Dance</h2>
            <p className={styles.storyBody}>
              Goodfoot Ballet Dance & Music Academy was born from a simple belief: that every child 
              in Kampala deserves access to world-class dance and music education in a safe, 
              nurturing environment.
            </p>
            <p className={styles.storyBody}>
              Founded on Mawanda Road, Kampala, we have grown from a small studio with a handful 
              of students into one of Uganda's most respected performing arts academies. Our journey 
              has been one of passion, dedication, and countless unforgettable moments on stage.
            </p>
            <p className={styles.storyBody}>
              Today, we proudly serve over 500 students across ballet, tap, contemporary, drama, 
              and music disciplines — and our mission remains as clear as ever.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
              Book a Free Trial
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className={styles.achievementsSection}>
        <div className={styles.achievementsInner}>
          {achievements.map((a, i) => (
            <motion.div
              key={a.label}
              className={styles.achievementItem}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className={styles.achievementNum}>{a.num}</div>
              <div className={styles.achievementLabel}>{a.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={styles.missionSection}>
        <div className={styles.missionGrid}>
          <motion.div
            className={styles.missionCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.missionIcon}>🎯</div>
            <h3 className={styles.missionTitle}>Our Mission</h3>
            <p className={styles.missionText}>
              To provide exceptional dance and music education that builds confidence, discipline, 
              creativity, and joy in every student — from their very first step to the concert stage.
            </p>
          </motion.div>
          <motion.div
            className={styles.missionCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className={styles.missionIcon}>🔭</div>
            <h3 className={styles.missionTitle}>Our Vision</h3>
            <p className={styles.missionText}>
              To become East Africa's leading performing arts academy, inspiring a generation of 
              dancers and musicians who carry the spirit of Goodfoot with them throughout their lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Instructors */}
      <section className={styles.instructorsSection}>
        <div className={styles.sectionHeader}>
          <p className="section-label">Meet The Team</p>
          <h2 className="section-title">Our <span>Instructors</span></h2>
          <p className="section-subtitle">
            Talented, qualified, and deeply passionate — our team brings out the best in every student.
          </p>
        </div>
        <div className={styles.instructorsGrid}>
          {instructors.map((inst, i) => (
            <motion.div
              key={inst.name}
              className={styles.instructorCard}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className={styles.instructorImgWrap}>
                <img src={inst.img} alt={inst.name} />
              </div>
              <div className={styles.instructorBody}>
                <p className={styles.instructorRole}>{inst.role}</p>
                <h3 className={styles.instructorName}>{inst.name}</h3>
                <p className={styles.instructorBio}>{inst.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Dance Philosophy */}
      <section className={styles.philosophySection}>
        <div className={styles.sectionHeader}>
          <p className="section-label">Our Values</p>
          <h2 className="section-title">Dance <span>Philosophy</span></h2>
        </div>
        <div className={styles.philosophyGrid}>
          {philosophy.map((p, i) => (
            <motion.div
              key={p.title}
              className={styles.philosophyCard}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <span className={styles.philosophyIcon}>{p.icon}</span>
              <h4 className={styles.philosophyTitle}>{p.title}</h4>
              <p className={styles.philosophyDesc}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

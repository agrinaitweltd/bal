import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Footprints } from 'lucide-react'
import { fadeSide } from '../../lib/variants'
import PageHero from '../../components/PageHero/PageHero'
import styles from './About.module.css'

const fadeUpLocal = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

const instructors = [
  {
    role: 'Principal & Founder',
    name: 'Lugesera Vicent (Tr Bruce)',
    bio: 'Lugesera Vicent, known as Tr Bruce, is a Royal Academy of Dance registered teacher who founded Good Foot Dance and Music Academy in June 2017. With a passion for nurturing the next generation of dancers, he brings world-class dance education to Uganda.',
    img: '/about-instructor.png',
  },
]

const achievements = [
  { num: '500+', label: 'Students Graduated' },
  { num: '12+', label: 'Years of Excellence' },
  { num: '25+', label: 'Awards Won' },
  { num: '15+', label: 'Expert Teachers' },
]

const philosophy = [
  { title: '01 — Innovation', desc: 'We strive to be creative in our thinking and to deliver dynamic solutions that make a difference to dance education.' },
  { title: '02 — Integrity', desc: 'We strive to always do the right thing.' },
  { title: '03 — Passion', desc: 'We are dedicated to inspiring future generations of dancers and teachers.' },
]

export default function About() {
  return (
    <div>
      <PageHero
        title="About Us"
        subtitle="Find out more about who we are and what we do"
        image="/about-hero.png"
      />

      {/* Story Section */}
      <section className={styles.storySection}>
        <div className={styles.storyGrid}>
          <motion.div
            className={styles.storyImg}
            variants={fadeSide}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className={styles.storyImgMain}>
              <img src="/about-story.png" alt="Ballet class" />
            </div>
            <motion.div
              className={styles.storyBadge}
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Footprints size={20} className={styles.badgeIcon} />
              <span className={styles.badgeText}>Est. 2017</span>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.storyText}
            variants={fadeSide}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="section-label">Our Story</p>
            <h2 className="section-title">Built on <span>Passion</span> for Dance</h2>
            <p className={styles.storyBody}>
              Good Foot Dance and Music Academy was founded by Lugesera Vicent (Tr Bruce) in June 2017. 
              A Royal Academy of Dance registered teacher, Tr Bruce established the Academy to offer unique 
              classes designed to inspire the next generation of dancers to flourish and soar.
            </p>
            <p className={styles.storyBody}>
              We offer a comprehensive range of programs and services, tailored to meet the needs of 
              students from beginner to advanced levels. Our faculty comprises highly qualified, 
              industry-experienced professionals committed to delivering personalised instruction and mentorship.
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
              variants={fadeUpLocal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className={styles.missionTitle}>Our Mission</h3>
            <p className={styles.missionText}>
              Good Foot Ballet Dance and Music Academy is dedicated to providing exceptional dance and 
              music education, fostering artistic excellence, and promoting a lifelong appreciation for 
              the performing arts.
            </p>
          </motion.div>
          <motion.div
            className={styles.missionCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className={styles.missionTitle}>Our Vision</h3>
            <p className={styles.missionText}>
              To be a centre of dance excellence in Africa; discovering, creating and nurturing 
              well rounded individuals through dance, qualifications.
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
              variants={fadeUpLocal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
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
          <h2 className="section-title">Core <span>Values</span></h2>
        </div>
        <div className={styles.philosophyGrid}>
          {philosophy.map((p, i) => (
            <motion.div
              key={p.title}
              className={styles.philosophyCard}
              custom={i}
              variants={fadeUpLocal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <span className={styles.philosophyNum}>{p.title.slice(0, 2)}</span>
              <h4 className={styles.philosophyTitle}>{p.title.slice(6)}</h4>
              <p className={styles.philosophyDesc}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

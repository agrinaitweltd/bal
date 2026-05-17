import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Footprints, Sparkles, Music, Activity, Mic2, Sprout, Trophy, User, CalendarDays, Banknote } from 'lucide-react'
import PageHero from '../../components/PageHero/PageHero'
import styles from './Classes.module.css'

const classCategories = [
  {
    id: 'ballet',
    tag: 'Ballet',
    title: 'Ballet Classes',
    desc: 'The perfect introduction to ballet for little dancers. Our ballet programme follows RAD methodology, building technique, posture, and artistry from the ground up.',
    img: '/ballet-class.png',
    ageGroup: '18 months – Adult',
    schedule: 'Mon, Wed, Sat',
    price: 'From UGX 80,000/month',
    emoji: <Footprints size={22} />,
    color: 'turquoise',
    levels: [
      { name: 'Baby Ballet', ages: '18 months – 3 yrs', desc: 'Imaginative movement and gentle ballet introduction.' },
      { name: 'Primary Ballet', ages: '3 – 5 yrs', desc: 'Building coordination, listening skills, and joy.' },
      { name: 'Grade Ballet', ages: '5 – 8 yrs', desc: 'RAD graded syllabus for aspiring young dancers.' },
    ],
  },
  {
    id: 'tap',
    tag: 'Tap',
    title: 'Tap Dance',
    desc: 'Does your child have happy feet? Our Tap classes build rhythm, coordination, and musicality through fun, progressive routines.',
    img: '/kids-dance.png',
    ageGroup: '4 – 16 years',
    schedule: 'Tue, Thu',
    price: 'From UGX 75,000/month',
    emoji: <Footprints size={22} />,
    color: 'pink',
    levels: [
      { name: 'Toe Tips', ages: 'Reception – Year 2', desc: 'First approach — very good fun with basic steps.' },
      { name: 'Heel\'n Toe', ages: 'Year 3 – Year 6', desc: 'More advanced steps, routines, and techniques.' },
    ],
  },
  {
    id: 'contemporary',
    tag: 'Contemporary',
    title: 'Contemporary Dance',
    desc: 'Expressive and free-flowing, our contemporary classes explore modern dance vocabulary, improvisation, and choreography.',
    img: '/dance-performance.png',
    ageGroup: '8 – Adult',
    schedule: 'Wed, Fri',
    price: 'From UGX 85,000/month',
    emoji: <Sparkles size={22} />,
    color: 'turquoise',
    levels: [
      { name: 'Contemporary Juniors', ages: '8 – 12 yrs', desc: 'Creative movement and body awareness.' },
      { name: 'Contemporary Seniors', ages: '13+', desc: 'Advanced technique, composition, and performance.' },
    ],
  },
  {
    id: 'music',
    tag: 'Music',
    title: 'Piano Lessons',
    desc: 'Individual and group piano tuition for all skill levels. Our music programme integrates theory, technique, and performance practice.',
    img: '/music-class.png',
    ageGroup: '4 – Adult',
    schedule: 'Mon – Sat (flexible)',
    price: 'From UGX 100,000/month',
    emoji: <Music size={22} />,
    color: 'pink',
    levels: [
      { name: 'Beginners Piano', ages: '4+', desc: 'Fun, game-based introduction to keys and notes.' },
      { name: 'Intermediate Piano', ages: 'All ages', desc: 'Building repertoire, sight-reading, and expression.' },
      { name: 'Advanced Piano', ages: 'All ages', desc: 'Performance preparation and grade examinations.' },
    ],
  },
  {
    id: 'fitness',
    tag: 'Fitness',
    title: 'Dance Fitness',
    desc: 'High-energy, fun workouts inspired by dance. Perfect for adults who want to stay fit while dancing to great music.',
    img: '/academy-gallery-1.png',
    ageGroup: '16+ years',
    schedule: 'Tue, Thu, Sat',
    price: 'From UGX 60,000/month',
    emoji: <Activity size={22} />,
    color: 'turquoise',
    levels: [
      { name: 'Dance Cardio', ages: 'Adults', desc: 'Energetic cardio dance for all fitness levels.' },
      { name: 'Stretch & Flow', ages: 'Adults', desc: 'Yoga-inspired dance movement and flexibility.' },
    ],
  },
  {
    id: 'drama',
    tag: 'Drama',
    title: 'Drama & Theatre',
    desc: 'Fuelled by adventure with carefully selected exercises designed to ignite your child\'s creativity, confidence, and communication.',
    img: '/academy-gallery-2.png',
    ageGroup: '5 – 15 years',
    schedule: 'Sat mornings',
    price: 'From UGX 70,000/month',
    emoji: <Mic2 size={22} />,
    color: 'pink',
    levels: [
      { name: 'Drama Juniors', ages: '5 – 9 yrs', desc: 'Storytelling, movement, and imaginative play.' },
      { name: 'Theatre Seniors', ages: '10 – 15 yrs', desc: 'Script work, character building, and performance.' },
    ],
  },
  {
    id: 'beginner',
    tag: 'Beginner',
    title: 'Beginner Programs',
    desc: 'Never danced before? No worries! Our beginner programmes are designed to welcome newcomers of all ages with zero pressure and maximum fun.',
    img: '/ballet-class.png',
    ageGroup: 'All ages',
    schedule: 'Mon, Wed, Fri',
    price: 'From UGX 65,000/month',
    emoji: <Sprout size={22} />,
    color: 'turquoise',
    levels: [
      { name: 'Absolute Beginners', ages: 'All ages', desc: 'Start from scratch in a supportive environment.' },
      { name: 'Adult Beginners', ages: '18+', desc: 'It\'s never too late to start dancing!' },
    ],
  },
  {
    id: 'advanced',
    tag: 'Advanced',
    title: 'Advanced Programs',
    desc: 'For dedicated dancers ready to take their skills to the next level — intensive training, competition preparation, and performance opportunities.',
    img: '/dance-performance.png',
    ageGroup: '10 – Adult',
    schedule: 'Mon – Fri (intensive)',
    price: 'From UGX 150,000/month',
    emoji: <Trophy size={22} />,
    color: 'pink',
    levels: [
      { name: 'Advanced Technique', ages: '10+', desc: 'Intensive training in technique and repertoire.' },
      { name: 'Competition Prep', ages: '10+', desc: 'Preparation for regional and national competitions.' },
    ],
  },
]

export default function Classes() {
  return (
    <div>
      <PageHero
        title="Our Classes"
        subtitle="Discover the perfect class for your child or yourself"
        image="/kids-dance.png"
      />

      <section className={styles.introSection}>
        <div className={styles.introInner}>
          <motion.div
            className={styles.introText}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-label">What We Offer</p>
            <h2 className="section-title">Dance & Music for <span>Everyone</span></h2>
            <p className="section-subtitle">
              From toddlers taking their first ballet steps to adults discovering the joy of movement,
              Goodfoot Academy has a class for every age, ability, and aspiration.
            </p>
          </motion.div>
        </div>
      </section>

      <section className={styles.classesSection}>
        <div className={styles.classesInner}>
          {classCategories.map((cls, i) => (
            <motion.div
              key={cls.id}
              className={`${styles.classBlock} ${i % 2 === 1 ? styles.classBlockReverse : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className={styles.classImg}>
                <img src={cls.img} alt={cls.title} />
                <div className={`${styles.classImgBadge} ${styles[`badge_${cls.color}`]}`}>
                  <span>{cls.emoji}</span>
                  <span>{cls.tag}</span>
                </div>
              </div>
              <div className={styles.classInfo}>
                <span className={styles.classTag}>{cls.tag}</span>
                <h2 className={styles.classTitle}>{cls.title}</h2>
                <p className={styles.classDesc}>{cls.desc}</p>

                <div className={styles.classMeta}>
                  <div className={styles.classMetaItem}>
                    <span className={styles.metaIcon}><User size={16} /></span>
                    <div>
                      <span className={styles.metaLabel}>Age Group</span>
                      <span className={styles.metaValue}>{cls.ageGroup}</span>
                    </div>
                  </div>
                  <div className={styles.classMetaItem}>
                    <span className={styles.metaIcon}><CalendarDays size={16} /></span>
                    <div>
                      <span className={styles.metaLabel}>Schedule</span>
                      <span className={styles.metaValue}>{cls.schedule}</span>
                    </div>
                  </div>
                  <div className={styles.classMetaItem}>
                    <span className={styles.metaIcon}><Banknote size={16} /></span>
                    <div>
                      <span className={styles.metaLabel}>Pricing</span>
                      <span className={styles.metaValue}>{cls.price}</span>
                    </div>
                  </div>
                </div>

                <div className={styles.levels}>
                  <h4 className={styles.levelsTitle}>Class Levels</h4>
                  {cls.levels.map((lvl) => (
                    <div key={lvl.name} className={styles.levelItem}>
                      <div className={styles.levelHeader}>
                        <strong className={styles.levelName}>{lvl.name}</strong>
                        <span className={styles.levelAges}>{lvl.ages}</span>
                      </div>
                      <p className={styles.levelDesc}>{lvl.desc}</p>
                    </div>
                  ))}
                </div>

                <Link to="/contact" className={`btn ${cls.color === 'turquoise' ? 'btn-primary' : 'btn-secondary'}`}>
                  Book This Class
                </Link>
              </div>
            </motion.div>
          ))}
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
          <h2 className={styles.ctaTitle}>Not sure which class is right?</h2>
          <p className={styles.ctaText}>Book a free trial class and let us help you find the perfect fit!</p>
          <Link to="/contact" className="btn btn-outline-white">Book a Free Trial</Link>
        </motion.div>
      </section>
    </div>
  )
}

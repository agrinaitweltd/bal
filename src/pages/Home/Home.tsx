import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { GraduationCap, Music2, Users, Trophy, Check, Music } from 'lucide-react'
import { fadeUp, fadeSide, slideNext } from '../../lib/variants'
import styles from './Home.module.css'

const classes = [
  { tag: 'Ballet', title: 'Baby Ballet', desc: 'Gentle introduction to ballet for little ones from 18 months.', img: '/ballet-class.png' },
  { tag: 'Music', title: 'Piano Lessons', desc: 'Individual and group piano tuition for all skill levels.', img: '/music-class.png' },
  { tag: 'Contemporary', title: 'Contemporary Dance', desc: 'Expressive movement exploring modern dance techniques.', img: '/dance-performance.png' },
]

const testimonials = [
  {
    quote: 'Absolutely amazing...',
    text: 'Miss Katie gave my daughter so much confidence and joy! She\'s now a very happy, little dancer!',
    author: 'Olivia Czyzewska',
    img: '/ballet-teacher.png',
  },
  {
    quote: 'Life changing for our family...',
    text: 'Goodfoot Academy has been incredible. My son loves every single class and has grown so much.',
    author: 'James Nkurunziza',
    img: '/ballet-teacher.png',
  },
  {
    quote: 'Highly recommend to everyone!',
    text: 'The teachers are passionate, patient, and wonderful with the children. My daughter adores them.',
    author: 'Sarah Nakato',
    img: '/ballet-teacher.png',
  },
]

const galleryImages = [
  { src: '/academy-gallery-1.png', alt: 'Ballet performance' },
  { src: '/academy-gallery-2.png', alt: 'Dance class' },
  { src: '/kids-dance.png', alt: 'Kids dancing' },
  { src: '/ballet-class.png', alt: 'Ballet class' },
  { src: '/dance-performance.png', alt: 'Performance' },
]

const whyCards = [
  { icon: <GraduationCap size={28} />, title: 'Expert Instructors', desc: 'Qualified, passionate teachers with years of professional experience.' },
  { icon: <Music2 size={28} />, title: 'Music Integration', desc: 'Unique blend of dance and music education for holistic development.' },
  { icon: <Users size={28} />, title: 'All Ages Welcome', desc: 'Classes tailored for everyone from toddlers to adults.' },
  { icon: <Trophy size={28} />, title: 'Award Winning', desc: 'Recognized excellence in dance education across Uganda.' },
]

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  return (
    <div className={styles.page}>
      {/* ===== HERO ===== */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <motion.h1
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              Where Little Dancers{' '}
              <span className={styles.heroTitleSpan}>Find Their Stage</span>
            </motion.h1>

            <motion.p
              className={styles.heroSubtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              Goodfoot Dance and Music Academy — nurturing talent, building confidence,
              and celebrating movement in Kampala since 2017.
            </motion.p>

            <motion.div
              className={styles.heroActions}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to="/classes" className="btn btn-secondary">Explore Classes</Link>
              <Link to="/contact" className="btn btn-outline-white">Book a Free Trial</Link>
            </motion.div>
          </div>

          <motion.div
            className={styles.heroImgWrapper}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.heroImg}>
              <img src="/hero-ballet.png" alt="Ballet dancer" />
            </div>

            <motion.div
              className={styles.heroFloat2}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <div className={styles.floatNum}>12+</div>
              <div className={styles.floatLabel}>Years Experience</div>
            </motion.div>
          </motion.div>
        </div>
        <div className={styles.heroScallop} />
      </section>

      {/* ===== STATS ===== */}
      <section className={styles.statsBar}>
        <div className={styles.statsGrid}>
          {[
            { num: '500+', label: 'Students Enrolled' },
            { num: '12+', label: 'Years of Excellence' },
            { num: '15+', label: 'Expert Teachers' },
            { num: '20+', label: 'Dance Programs' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className={styles.statItem}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className={styles.statNum}>{stat.num}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutGrid}>
          <motion.div
            className={styles.aboutImgGroup}
            variants={fadeSide}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className={styles.aboutImgMain}>
              <img src="/kids-dance.png" alt="Kids dancing" />
            </div>
            <div className={styles.aboutImgSec}>
              <img src="/ballet-class.png" alt="Ballet class" />
            </div>
            <motion.div
              className={styles.aboutImgBadge}
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <Music size={22} className={styles.aboutBadgeNum} />
              <span className={styles.aboutBadgeText}>Music & Dance</span>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.aboutText}
            variants={fadeSide}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="section-label">About Us</p>
            <h2 className="section-title">
              Our passionate teachers enjoy sharing their love of{' '}
              <span>dance</span>
            </h2>
            <p className={styles.aboutBody}>
              Whether your little dancer is a budding Ballet Bunny, a talented Contemporary dancer, 
              or an aspiring pianist — they will feel inspired at Goodfoot Academy. Our classes 
              are unforgettable, adventurous, and bursting with creativity.
            </p>
            <ul className={styles.featureList}>
              {[
                'Classes from 18 months up to adults',
                'RAD-qualified instructors',
                'Safe, encouraging environment',
                'Regular recitals and performances',
              ].map((feat) => (
                <li key={feat} className={styles.featureItem}>
                  <Check size={15} className={styles.featureCheck} />
                  {feat}
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn btn-primary">Discover Our Story</Link>
          </motion.div>
        </div>
      </section>

      {/* ===== FEATURED CLASSES ===== */}
      <section className={styles.classesSection}>
        <div className={styles.sectionHeader}>
          <p className="section-label">What We Offer</p>
          <h2 className="section-title">Our <span>Classes</span></h2>
          <p className="section-subtitle">
            Explore our range of dance and music programmes designed for all ages and abilities.
          </p>
        </div>
        <div className={styles.classesGrid}>
          {classes.map((cls, i) => (
            <motion.div
              key={cls.title}
              className={styles.classCard}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className={styles.classCardImg}>
                <img src={cls.img} alt={cls.title} />
                <div className={styles.classCardOverlay} />
              </div>
              <div className={styles.classCardBody}>
                <span className={styles.classCardTag}>{cls.tag}</span>
                <h3 className={styles.classCardTitle}>{cls.title}</h3>
                <p className={styles.classCardDesc}>{cls.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className={styles.classesViewAll}>
          <Link to="/classes" className="btn btn-outline">View All Classes</Link>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className={styles.whySection}>
        <div className={styles.whyGrid}>
          <motion.div
            variants={fadeSide}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="section-label">Why Goodfoot?</p>
            <h2 className="section-title" style={{ marginBottom: '2rem' }}>
              Why <span>Choose Us</span>
            </h2>
            <div className={styles.whyCards}>
              {whyCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  className={styles.whyCard}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <span className={styles.whyCardIcon}>{card.icon}</span>
                  <h4 className={styles.whyCardTitle}>{card.title}</h4>
                  <p className={styles.whyCardDesc}>{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className={styles.whyImg}
            variants={fadeSide}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className={styles.whyImgMain}>
              <img src="/dance-performance.png" alt="Dance performance" />
            </div>
            <div className={styles.whyImgDecor} />
            <div className={styles.whyImgDecor2} />
          </motion.div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className={styles.testimonialsSection}>
        <div className={styles.testimonialContent}>
          <div className={styles.sectionHeader} style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <p className="section-label">What Parents Say</p>
            <h2 className="section-title">They <span>Love</span> Us</h2>
          </div>
          <div className={styles.testimonialSlider}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                className={styles.testimonialCard}
                {...slideNext}
              >
                <div className={styles.testimonialImgWrap}>
                  <img src={testimonials[activeTestimonial].img} alt="Parent" />
                </div>
                <div className={styles.testimonialBody}>
                  <h3 className={styles.testimonialQuote}>
                    {testimonials[activeTestimonial].quote}
                  </h3>
                  <p className={styles.testimonialText}>
                    "{testimonials[activeTestimonial].text}"
                  </p>
                  <p className={styles.testimonialAuthor}>
                    — {testimonials[activeTestimonial].author}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className={styles.testimonialDots}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === activeTestimonial ? styles.active : ''}`}
                onClick={() => setActiveTestimonial(i)}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className={styles.ctaTitle}>Ready to Find a Class Near You?</h2>
            <p className={styles.ctaText}>
              Join hundreds of happy students at Goodfoot Ballet Dance & Music Academy.
              Book a free trial class today and see why we're Kampala's favourite dance school.
            </p>
            <div className={styles.ctaActions}>
              <Link to="/contact" className="btn btn-outline-white">Book a Free Trial</Link>
              <Link to="/classes" className="btn btn-secondary">View Classes</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== GALLERY PREVIEW ===== */}
      <section className={styles.gallerySection}>
        <div className={styles.sectionHeader}>
          <p className="section-label">Our Moments</p>
          <h2 className="section-title">Gallery <span>Highlights</span></h2>
        </div>
        <div className={styles.galleryGrid}>
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.src}
              className={styles.galleryItem}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img src={img.src} alt={img.alt} />
              <div className={styles.galleryItemOverlay} />
            </motion.div>
          ))}
        </div>
        <div className={styles.galleryViewAll}>
          <Link to="/gallery" className="btn btn-primary">View Full Gallery</Link>
        </div>
      </section>
    </div>
  )
}

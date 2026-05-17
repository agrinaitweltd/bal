import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Home.module.css'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
}

const classes = [
  { tag: 'Ballet', title: 'Baby Ballet', desc: 'Gentle introduction to ballet for little ones from 18 months.', img: '/ballet-class.png' },
  { tag: 'Tap', title: "Tap Dance", desc: 'Energetic tap classes that build rhythm and coordination.', img: '/kids-dance.png' },
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
  { icon: '🩰', title: 'Expert Instructors', desc: 'Qualified, passionate teachers with years of professional experience.' },
  { icon: '🎵', title: 'Music Integration', desc: 'Unique blend of dance and music education for holistic development.' },
  { icon: '⭐', title: 'All Ages Welcome', desc: 'Classes tailored for everyone from toddlers to adults.' },
  { icon: '🏆', title: 'Award Winning', desc: 'Recognized excellence in dance education across Uganda.' },
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
            <motion.div
              className={styles.heroLabel}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className={styles.heroDot} />
              Welcome to Kampala's Premier Dance Academy
            </motion.div>

            <motion.h1
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Where Little Dancers{' '}
              <span className={styles.heroTitleSpan}>Find Their Stage</span>
            </motion.h1>

            <motion.p
              className={styles.heroSubtitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Goodfoot Ballet Dance & Music Academy — nurturing talent, building confidence,
              and celebrating movement in Kampala since our founding.
            </motion.p>

            <motion.div
              className={styles.heroActions}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Link to="/classes" className="btn btn-secondary">Explore Classes</Link>
              <Link to="/contact" className="btn btn-outline-white">Book a Free Trial</Link>
            </motion.div>
          </div>

          <motion.div
            className={styles.heroImgWrapper}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            <div className={styles.heroImg}>
              <img src="/hero-ballet.png" alt="Ballet dancer" />
            </div>
            <motion.div
              className={styles.heroFloat1}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className={styles.floatIcon}>🩰</span>
              <div>
                <div className={styles.floatNum}>500+</div>
                <div className={styles.floatLabel}>Happy Students</div>
              </div>
            </motion.div>
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
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
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
              <span className={styles.aboutBadgeNum}>🎵</span>
              <span className={styles.aboutBadgeText}>Music & Dance</span>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.aboutText}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label">About Us</p>
            <h2 className="section-title">
              Our passionate teachers enjoy sharing their love of{' '}
              <span>dance</span>
            </h2>
            <p className={styles.aboutBody}>
              Whether your little dancer is a budding Ballet Bunny, a talented Tap performer, 
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
                  <span className={styles.featureCheck}>✓</span>
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
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
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
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
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
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5 }}
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
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
              <div className={styles.galleryItemOverlay}>🩰</div>
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

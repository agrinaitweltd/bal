import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHero from '../../components/PageHero/PageHero'
import styles from './Gallery.module.css'

const categories = ['All', 'Ballet', 'Tap', 'Contemporary', 'Music', 'Performances']

const galleryItems = [
  { id: 1, src: '/ballet-class.png', alt: 'Ballet class session', category: 'Ballet', title: 'Ballet Class' },
  { id: 2, src: '/kids-dance.png', alt: 'Kids dancing together', category: 'Ballet', title: 'Little Dancers' },
  { id: 3, src: '/dance-performance.png', alt: 'Dance performance on stage', category: 'Performances', title: 'Annual Showcase' },
  { id: 4, src: '/music-class.png', alt: 'Music lesson', category: 'Music', title: 'Piano Lesson' },
  { id: 5, src: '/ballet-teacher.png', alt: 'Ballet teacher instruction', category: 'Ballet', title: 'Private Coaching' },
  { id: 6, src: '/academy-gallery-1.png', alt: 'Academy gallery photo 1', category: 'Contemporary', title: 'Contemporary Workshop' },
  { id: 7, src: '/academy-gallery-2.png', alt: 'Academy gallery photo 2', category: 'Tap', title: 'Tap Rehearsal' },
  { id: 8, src: '/hero-ballet.png', alt: 'Hero ballet photo', category: 'Performances', title: 'End-of-Year Show' },
  { id: 9, src: '/ballet-class.png', alt: 'Ballet class 2', category: 'Ballet', title: 'Barre Work' },
  { id: 10, src: '/kids-dance.png', alt: 'Group dance', category: 'Contemporary', title: 'Group Routine' },
  { id: 11, src: '/academy-gallery-1.png', alt: 'Academy event', category: 'Performances', title: 'Community Show' },
  { id: 12, src: '/music-class.png', alt: 'Music class group', category: 'Music', title: 'Group Music' },
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightbox, setLightbox] = useState<null | typeof galleryItems[0]>(null)

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((g) => g.category === activeCategory)

  return (
    <div>
      <PageHero
        title="Our Gallery"
        subtitle="Moments of joy, passion, and artistic excellence"
        image="/dance-performance.png"
      />

      <section className={styles.gallerySection}>
        {/* Filter Tabs */}
        <div className={styles.filters}>
          {categories.map((cat) => (
            <motion.button
              key={cat}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterActive : ''}`}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          className={styles.galleryGrid}
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                className={styles.galleryItem}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                onClick={() => setLightbox(item)}
              >
                <img src={item.src} alt={item.alt} />
                <div className={styles.galleryOverlay}>
                  <div className={styles.galleryOverlayContent}>
                    <span className={styles.galleryOverlayIcon}>🔍</span>
                    <p className={styles.galleryOverlayTitle}>{item.title}</p>
                    <span className={styles.galleryOverlayCat}>{item.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className={styles.lightboxContent}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.lightboxClose} onClick={() => setLightbox(null)}>✕</button>
              <img src={lightbox.src} alt={lightbox.alt} />
              <div className={styles.lightboxCaption}>
                <h3 className={styles.lightboxTitle}>{lightbox.title}</h3>
                <span className={styles.lightboxCat}>{lightbox.category}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

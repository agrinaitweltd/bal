import { motion } from 'framer-motion'
import styles from './PageHero.module.css'

interface PageHeroProps {
  title: string
  subtitle?: string
  image?: string
  gradient?: string
}

export default function PageHero({ title, subtitle, image, gradient }: PageHeroProps) {
  return (
    <section
      className={styles.hero}
      style={
        image
          ? { backgroundImage: `url(${image})` }
          : { background: gradient || 'var(--gradient-hero)' }
      }
    >
      <div className={styles.overlay} />
      <div className={styles.content}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
      <div className={styles.scallop} />
    </section>
  )
}

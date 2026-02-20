import { motion } from "framer-motion"

export default function FadeInSection({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}
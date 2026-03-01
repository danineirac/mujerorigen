import { motion } from "framer-motion"

export default function AnimatedRevealContent({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative z-10 max-w-4xl px-6 mx-auto space-y-8 text-beige"
    >
      {children}
    </motion.div>
  )
}
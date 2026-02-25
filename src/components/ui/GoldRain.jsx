import { motion } from "framer-motion"

export default function GoldenRain() {
  const drops = Array.from({ length: 25 })

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-5">
      {drops.map((_, i) => {
        const size = Math.random() * 3 + 2
        const left = Math.random() * 100
        const duration = Math.random() * 6 + 6
        const delay = Math.random() * 5

        return (
          <motion.div
            key={i}
            initial={{ y: "-10vh", opacity: 0 }}
            animate={{
              y: "110vh",
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: delay,
              ease: "linear",
            }}
            className="absolute rounded-full bg-[#f1cda0]"
            style={{
              left: `${left}%`,
              width: `${size}px`,
              height: `${size * 6}px`,
              filter: "blur(1px)",
            }}
          />
        )
      })}
    </div>
  )
}
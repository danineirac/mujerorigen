import { motion } from "framer-motion"

export default function BurgundySunflower({
  side = "left",
  delay = 0,
  scale = 1,
  center = false,
}) {
  return (
    <motion.div
      initial={{ scaleY: 0, opacity: 0 }}
      whileInView={{ scaleY: 1, opacity: 0.25 }}
      transition={{
        duration: 3.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true }}
      className={`
        absolute bottom-0
        ${center ? "left-1/2 -translate-x-1/2" : ""}
        ${!center && side === "left" ? "-left-24" : ""}
        ${!center && side === "right" ? "-right-24" : ""}
      `}
      style={{
        transformOrigin: "bottom",
        scale: scale,
      }}
    >
      <svg
        width="700"
        height="1400"
        viewBox="0 0 700 1400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Tallo largo */}
        <rect
          x="345"
          y="600"
          width="10"
          height="800"
          fill="#6B1F2B"
          opacity="0.35"
        />

        {/* Flor (MUCHO más abajo dentro del SVG) */}
        <g transform="translate(350 550)">
          {Array.from({ length: 18 }).map((_, i) => (
            <ellipse
              key={i}
              cx="0"
              cy="-180"
              rx="65"
              ry="180"
              fill="#6B1F2B"
              opacity="0.3"
              transform={`rotate(${i * 20})`}
            />
          ))}
        </g>

        {/* Centro */}
        <circle
          cx="350"
          cy="550"
          r="95"
          fill="#4a141d"
          opacity="0.45"
        />
      </svg>
    </motion.div>
  )
}
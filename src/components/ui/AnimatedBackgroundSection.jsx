import { motion } from "framer-motion"

export default function AnimatedBackgroundSection({
  image,
  overlayClass = "bg-black/60",
  children,
  minHeight = "min-h-screen"
}) {
  return (
    <section className={`relative ${minHeight} flex items-center justify-center text-center overflow-hidden`}>

      {/* Fondo animado */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 20, ease: "linear" }}
        className="absolute inset-0"
      >
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover"
        />

        <div className={`absolute inset-0 ${overlayClass}`} />
      </motion.div>

      {/* Partículas opcionales */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="particle"></div>
        <div className="particle delay-1"></div>
        <div className="particle delay-2"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 w-full">
        {children}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-black to-transparent" />

    </section>
  )
} 
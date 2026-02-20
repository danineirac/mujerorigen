import { motion } from "framer-motion"
import lobaImage from "../../assets/images/loba.jpg"

export default function LobaSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">

      {/* Imagen fondo con zoom lento */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 20, ease: "linear" }}
        className="absolute inset-0"
      >
        <img
          src={lobaImage}
          alt="La loba - símbolo de Mujer Origen"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-[#6B1F2B]/80 to-black/90"></div>
      </motion.div>

      {/* Partículas flotantes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="particle"></div>
        <div className="particle delay-1"></div>
        <div className="particle delay-2"></div>
      </div>

      {/* Contenido animado */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl px-6 text-beige space-y-8"
      >
        <h2 className="font-serif text-3xl md:text-5xl leading-tight">
          ¿Por qué la loba es el animal de poder
          <br /> de Mujer Origen?
        </h2>

        <p className="text-lg md:text-xl leading-relaxed opacity-90">
          La loba no es símbolo de agresividad.
          Es símbolo de intuición, lealtad y fuerza silenciosa.
        </p>

        <p className="font-serif text-2xl md:text-3xl mt-6">
          Mujer Origen es ese regreso.
        </p>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent"></div>

    </section>
  )
}
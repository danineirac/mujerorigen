import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function RitualImageCarousel({ images }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 5000) // cambio cada 5s

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative w-full flex justify-center">

      <div className="relative w-full max-w-md md:max-w-lg aspect-4/5 overflow-hidden rounded-3xl shadow-2xl">

        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt="Mujer Origen experiencia"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Overlay ritual vino */}
        <div className="absolute inset-0 bg-linear-to-t from-[#3b0f17]/80 via-transparent to-[#3b0f17]/70"></div>

        {/* Glow dorado sutil */}
        <div className="absolute inset-0 bg-[#D4AF37]/5 mix-blend-overlay"></div>
      </div>

      {/* Halo energético */}
      <div className="absolute -z-10 w-150 h-150 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>

    </div>
  )
}
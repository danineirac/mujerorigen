import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Transformacion() {

  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Capa oscura que sube desde abajo
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.8],
    [0, 1]
  )

  const overlayY = useTransform(
    scrollYProgress,
    [0, 1],
    ["100%", "0%"]
  )

  const beneficios = [
    "Volverás a confiar en tu intuición.",
    "Pondrás límites claros sin sentir que estás perdiendo amor.",
    "Sanarás heridas que siguen repitiéndose en tus relaciones.",
    "Reconectarás con tu sabiduría, tu poder y tu belleza.",
    "Activarás tu magnetismo femenino.",
    "Tomarás la decisión de dejar de sobrevivir y empezar a vivir desde tu conciencia."
  ]

  return (
    <section
      ref={ref}
      className="relative bg-[#E8DFD4] py-28 px-6 overflow-hidden"
    >

      {/* Capa oscura que sube */}
      <motion.div
        style={{
          opacity: overlayOpacity,
          y: overlayY
        }}
        className="absolute inset-0 bg-[#4F5D4D]"
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center">

        <h2 className="font-serif text-3xl md:text-5xl text-vino mb-6">
          Lo que cambia después de Mujer Origen
        </h2>

        <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
          Tu energía cambia, y cuando tu energía cambia,
          tus relaciones y todo a tu alrededor también.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {beneficios.map((item, index) => (
            <div
              key={index}
              className={`bg-white/70 backdrop-blur-sm border border-beige rounded-3xl p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2
              ${index % 2 === 0 ? "-rotate-1" : "rotate-1"}`}
            >
              <p className="text-gray-700 text-lg leading-relaxed">
                {item}
              </p>
            </div>
          ))}

        </div>

        <div className="mt-20 space-y-4">
          <p className="font-serif text-xl text-vino">
            No sales motivada.
          </p>
          <p className="font-serif text-2xl md:text-3xl text-vino">
            Sales transformada.
          </p>
        </div>

      </div>

    </section>
  )
}
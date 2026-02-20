import { motion } from "framer-motion"

export default function Metodo() {
  const fases = [
    {
      titulo: "Fase 1 — Ver con claridad",
      texto:
        "Reconoces las heridas que han estado dirigiendo tu vida. Observas los patrones que vienes repitiendo y entiendes desde dónde estás actuando."
    },
    {
      titulo: "Fase 2 — Liberar lo que pesa",
      texto:
        "A través de dinámicas de alto impacto emocional, sueltas, perdonas y empiezas a recordar tu fuerza. Aquí no entiendes solamente. Aquí transformas."
    },
    {
      titulo: "Fase 3 — Activar a la mujer que ya no se traiciona",
      texto:
        "Integras, tomas decisiones y vuelves a tu valor. No sales con una emoción pasajera. Sales con una postura distinta frente a tu vida."
    }
  ]

  return (
    <section className="relative bg-beige py-32 px-6 overflow-hidden">

      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-24">
          <h2 className="font-serif text-3xl md:text-5xl text-vino mb-4">
            Cómo sucede la transformación
          </h2>
          <p className="text-gray-600 text-lg">
            Mujer Origen está estructurado en tres movimientos profundos.
          </p>
        </div>

        <div className="relative">

          {/* Línea vertical */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-salvia/40 h-full"></div>

          <div className="space-y-24">

            {fases.map((fase, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Contenido */}
                <div className="md:w-1/2 px-8 text-center md:text-left">
                  <h3 className="font-serif text-2xl md:text-3xl text-vino mb-6">
                    {fase.titulo}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {fase.texto}
                  </p>
                </div>

                {/* Punto ceremonial */}
                {/* Punto ceremonial animado */}
                <div className="relative z-10 flex items-center justify-center">

                  <motion.div
                    className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl"
                    animate={{
                      background: [
                        "linear-gradient(135deg, #6B1F2B 0%, #E8DFD4 100%)",
                        "linear-gradient(135deg, #E8DFD4 0%, #6B1F2B 100%)",
                        "linear-gradient(135deg, #6B1F2B 0%, #E8DFD4 100%)"
                      ]
                    }}
                    transition={{
                      duration: 6 + index, // cada punto con timing distinto
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <motion.div
                      className="w-6 h-6 rounded-full"
                      animate={{
                        backgroundColor: ["#E8DFD4", "#6B1F2B", "#E8DFD4"]
                      }}
                      transition={{
                        duration: 6 + index,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>

                </div>

                <div className="md:w-1/2"></div>

              </div>
            ))}

          </div>
        </div>
      </div>

      {/* Glow ceremonial */}
      <div className="absolute -top-20 left-1/3 w-80 h-80 bg-vino/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-salvia/10 rounded-full blur-3xl"></div>

    </section>
  )
}

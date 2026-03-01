import { motion } from "framer-motion"
import foto1 from "../../assets/images/danna1.jpg"
import foto2 from "../../assets/images/danna2.jpg"
import foto3 from "../../assets/images/danna3.jpg"
import FadeInSection from "../ui/FadeInSection.jsx"

export default function Identificacion() {
  return (
    <section
      id="Identificacion"
      className="relative py-32 overflow-hidden"
    >
      {/* Degradado base */}
      <div className="absolute inset-0 bg-linear-to-b 
                      from-[##f6f1e9] 
                      via-[#d8d2c4] 
                      to-[#5f6f5c]" />

      {/* Textura */}
      <div
        className="absolute inset-0 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage: "url('/textures/olive-texture.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Contenido */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">

        <div className="bg-[#1e1a1a33]/90 backdrop-blur-md 
                        rounded-3xl 
                        shadow-[0_40px_90px_rgba(0,0,0,0.4)]
                        p-16 
                        grid md:grid-cols-2 gap-12 items-center">
          <FadeInSection>
            {/* Texto */}
            <div className="text-[#6b1f2b]">
              <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
                Esto no es otro evento motivacional.
              </h2>

              <p className="opacity-80 leading-relaxed mb-6">
                No es un espacio para escuchar frases bonitas y volver igual.
                No es espiritualidad desconectada de la vida real.
              </p>

              <p className="opacity-80 leading-relaxed">
                Es un espacio profundo para mirarte con honestidad.
                Para reconocer lo que vienes repitiendo.
                Para sentir lo que has estado evitando.
              </p>
            </div>
          </FadeInSection>


          {/* Fotos desordenadas */}
          <div className="relative h-130 flex items-center justify-center">

            {[foto1, foto2, foto3].map((foto, i) => {

              const rotations = [-10, 8, -4]
              const offsets = [
                { x: -60, y: 0 },
                { x: 40, y: 20 },
                { x: -10, y: -10 },
              ]

              return (
                <motion.img
                  key={i}
                  src={foto}
                  alt="Danna"
                  initial={{
                    y: -400,
                    opacity: 0,
                    rotate: rotations[i],
                    scale: 0.95,
                  }}
                  whileInView={{
                    y: offsets[i].y,
                    x: offsets[i].x,
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 7.5,
                    delay: i * 2.6,
                    ease: [0.22, 1, 0.36, 1], // curva elegante tipo "caída con peso"
                  }}
                  viewport={{ once: true }}
                  className="absolute w-72 md:w-96 
                   rounded-3xl 
                   shadow-[0_35px_80px_rgba(0,0,0,0.6)]
                   object-cover"
                  style={{
                    zIndex: i + 1, // IMPORTANTE: cada una cae encima de la anterior
                  }}
                />
              )
            })}

          </div>
        </div>
      </div>
    </section>
  )
}
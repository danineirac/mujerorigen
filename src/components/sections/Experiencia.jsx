import FadeInSection from "../ui/FadeInSection";

export default function Experiencia() {
  return (
    <section className="w-full py-0 md:py-32 bg-linear-to-b from-[#F6F1EA] via-[#E8DFD4] to-[#6B7A5A]/20 flex justify-center relative overflow-hidden">

      {/* textura suave */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,#ffffff,transparent_70%)]"></div>

      <FadeInSection>

        {/* contenedor central */}
        <div className="flex flex-col items-center max-w-3xl w-full px-6">

          {/* carta */}
          <div className="relative carta-anim w-full bg-white rounded-md shadow-[0_35px_90px_rgba(0,0,0,0.35)] p-12">

            {/* rayas cuaderno */}
            <div className="absolute inset-0 pointer-events-none opacity-40 bg-[repeating-linear-gradient(to_bottom,#e6e6e6_0px,#e6e6e6_1px,transparent_1px,transparent_34px)]"></div>

            {/* linea roja margen */}
            <div className="absolute top-0 bottom-0 left-12 w-0.5 bg-red-300 opacity-60"></div>

            <div className="relative z-10 pl-8">

              <h2 className="text-4xl md:text-5xl text-[#6B1F2B] mb-12 text-center font-[Caveat]">
                Lo que viviremos en Mujer Origen
              </h2>

              <div className="space-y-8 text-gray-700 leading-relaxed text-lg">

                <p>
                  ✨ <strong>Creencias limitantes</strong><br />
                  Identificar y transformar las ideas que hoy limitan tu valor y tu poder.
                </p>

                <p>
                  ✨ <strong>Sanación emocional</strong><br />
                  Liberar emociones y heridas que siguen afectando tu bienestar.
                </p>

                <p>
                  ✨ <strong>Amor propio y límites</strong><br />
                  Aprender a priorizarte y crear relaciones más sanas.
                </p>

                <p>
                  ✨ <strong>Reconocer patrones</strong><br />
                  Entender cómo tus heridas se reflejan en tus relaciones, dinero, salud y decisiones.
                </p>

                <p>
                  ✨ <strong>Despertar tu magnetismo femenino</strong><br />
                  Volver a habitar tu energía femenina con autenticidad.
                </p>

                <p>
                  ✨ <strong>Reconexión profunda contigo</strong><br />
                  Un espacio para volver a tu esencia y sentirte nuevamente en casa dentro de ti.
                </p>

                <p>
                  ✨ <strong>Empoderamiento femenino</strong><br />
                  Salir con más claridad, fuerza interior y conexión contigo misma.
                </p>

              </div>
            </div>
          </div>

          {/* Botón */}
          <a
            href="https://wa.me/573214633040?text=Hola%20Danna,%20quiero%20asegurar%20mi%20cupo%20para%20Mujer%20Origen%20%F0%9F%8C%95"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-16 bg-[#6B1F2B] breathing-btn hover:bg-[#5a1823] transition-all duration-300 px-10 py-4 rounded-full text-[#F6F1EA] font-semibold tracking-wide shadow-lg hover:shadow-2xl hover:scale-105 hover:text-white"
          >
            Aparta tu cupo 2x1 ahora
          </a>

          {/* Texto debajo del botón */}
          <a
            href="https://wa.me/573214633040"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 text-sm text-black/80 hover:text-red-900 underline text-center"
          >
            ⚠️ Promoción de lanzamiento 2x1 por tiempo limitado
          </a>

        </div>

      </FadeInSection>

    </section>
  );
}



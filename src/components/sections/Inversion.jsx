export default function Inversion() {
  return (
    <section id="Inversion" data-nav="dark" className="relative bg-fondo py-32 px-6 overflow-hidden">

      <div className="max-w-6xl mx-auto text-center">

        <h2 className="font-serif text-3xl md:text-5xl text-vino mb-6">
          ¿Cómo quieres vivir Mujer Origen?
        </h2>

        <p className="text-gray-600 mb-20 text-lg">
          Elige la experiencia que resuena contigo.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* GENERAL */}
          <div className="bg-white border border-beige rounded-4xl p-12 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">

            <h3 className="font-serif text-2xl text-vino mb-6">
              🌿 Entrada General
            </h3>

            <p className="text-3xl font-semibold text-vino mb-2">
              $250.000 COP
            </p>

            <p className="text-salvia font-medium mb-8">
              2x1 (Tiempo limitado)
            </p>

            <div className="space-y-4 text-gray-700 text-left mb-10">
              <p>✔ Acceso completo al evento</p>
              <p>✔ Entrada para ti y una persona más</p>
              <p>✔ Guía de Integración Post Evento</p>
            </div>

            {/* Barra de cupos */}
            <div className="mt-6">
              <p className="text-sm text-gray-500 mb-2">
                89% de cupos reservados
              </p>

              <div className="relative h-3 w-full bg-gray-200 rounded-full overflow-hidden">

                {/* Progreso azul */}
                <div className="relative h-full w-[89%] bg-[#1e3a8a] rounded-full overflow-hidden">

                  {/* Destello animado */}
                  <div className="absolute inset-0 shimmer"></div>

                </div>
              </div>
            </div>

          </div>

          {/* VIP */}
          <div className="bg-white border-2 border-vino rounded-4xl p-12 shadow-2xl transition-all duration-500 hover:shadow-3xl hover:-translate-y-2 relative">
            {/* Cinta SOLD OUT */}
            <div className="absolute inset-0 overflow-hidden rounded-4xl pointer-events-none">
              <div className="absolute top-30 -left-70 w-[200%] rotate-[-25deg] bg-blue-700 text-white text-center py-2 font-semibold tracking-widest shadow-lg">
                SOLD OUT
              </div>
            </div>

            {/* Badge */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-vino text-beige px-6 py-2 rounded-full text-sm tracking-wide shadow-lg">
              CUPOS LIMITADOS
            </div>

            <h3 className="font-serif text-2xl text-vino mb-6 mt-6">
              ✨ Entrada VIP
            </h3>

            <p className="text-3xl font-semibold text-vino mb-2">
              $350.000 COP
            </p>

            <p className="text-salvia font-medium mb-8">
              2x1 (Cupos limitados)
            </p>

            <div className="space-y-4 text-gray-700 text-left mb-10">
              <p>✔ Acceso completo al evento</p>
              <p>✔ Almuerzo incluido</p>
              <p>✔ Recordatorio especial</p>
              <p>✔ Guía de Integración Post Evento</p>
              <p>✔ Ubicación preferencial</p>
              <p>✔ Entrada para ti y otra persona</p>
            </div>

            {/* Barra de cupos */}
            <div className="mt-6">
              <p className="text-sm text-gray-500 mb-2">
                100% de cupos reservados
              </p>

              <div className="relative h-3 w-full bg-gray-200 rounded-full overflow-hidden">

                {/* Progreso azul */}
                <div className="relative h-full w-[%] bg-[#811212e5] rounded-full overflow-hidden">

                  {/* Destello animado */}
                  <div className="absolute inset-0 shimmer"></div>

                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Botón grande final */}
        <div className="mt-24 relative z-10">
          <a
            href="https://wa.me/573214633040?text=Hola%20Danna,%20quiero%20asegurar%20mi%20cupo%20para%20Mujer%20Origen%20%F0%9F%8C%95"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-vino hover:bg-[#5a1823] transition-all duration-300 px-14 py-5 rounded-full text-beige text-lg font-semibold tracking-wide shadow-xl hover:shadow-2xl hover:scale-105 hover:text-white"
          >
            ASEGURAR MI CUPO AHORA
          </a>
          {/* Texto debajo del botón */}
          <a
            href="https://wa.me/573214633040"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 text-sm text-black/80 hover:text-red-900 underline"
          >
            ⚠️ Promoción de lanzamiento 2x1 por tiempo limitado

          </a>
        </div>

      </div>

      {/* Glow suave */}
      <div className="absolute -bottom-20 left-1/4 w-80 h-80 bg-salvia/10 rounded-full blur-3xl pointer-events-none z-0"></div>

    </section>
  )
}



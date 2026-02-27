export default function PerfilEvento() {
  return (
    <section
      id="PerfilEvento"
      data-nav="light"
      className="relative py-36 px-6 text-beige overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(90, 30, 45, 0.95), rgba(60, 20, 30, 0.98)),
          url('/textures/olivegreen-texture.webp')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Encabezado */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-6xl mb-6 leading-tight">
            Mujer Origen no es para todas
          </h2>
          <p className="text-xl opacity-80">
            Es para la mujer que siente que ya no puede seguir igual.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-20">

          {/* ES PARA TI */}
          <div className="space-y-8">
            <h3 className="font-serif text-3xl mb-6">
              Es para ti si:
            </h3>

            {[
              "Estás lista para dejar de sobrevivir.",
              "Quieres sanar tus relaciones y poner límites.",
              "Estás dispuesta a mirar tus heridas y hacerte responsable.",
              "Entiendes que tu siguiente nivel es interno."
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <span className="text-2xl text-beige group-hover:scale-110 transition duration-300">
                  ✦
                </span>
                <p className="text-lg opacity-90 leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* NO ES PARA TI */}
          <div className="space-y-8">
            <h3 className="font-serif text-3xl mb-6 opacity-90">
              No es para ti si:
            </h3>

            {[
              "Buscas entretenimiento.",
              "No estás lista para hacer trabajo emocional.",
              "Esperas cambios sin responsabilidad personal."
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <span className="text-2xl text-beige/50 group-hover:scale-110 transition duration-300">
                  —
                </span>
                <p className="text-lg opacity-75 leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Cierre */}
        <div className="text-center mt-32 max-w-3xl mx-auto">
          <p className="font-serif text-3xl md:text-4xl leading-snug">
            Y está lista para elegirse de verdad.
          </p>
        </div>

      </div>

      {/* Glow elegante */}
      <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-black/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-black/30 rounded-full blur-3xl"></div>
    </section>
  )
}
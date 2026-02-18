export default function PerfilEvento() {
  return (
    <section className="relative bg-vino py-32 px-6 text-beige overflow-hidden">

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-20">
          <h2 className="font-serif text-3xl md:text-5xl mb-6">
            Mujer Origen no es para todas
          </h2>
          <p className="text-lg opacity-80">
            Es para la mujer que siente que ya no puede seguir igual.
          </p>
        </div>

        {/* Contenido dividido */}
        <div className="relative grid md:grid-cols-2 gap-16">

          {/* Línea divisoria */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-beige/30"></div>

          {/* ES PARA TI */}
          <div className="space-y-6">

            <h3 className="font-serif text-2xl md:text-3xl mb-8">
              Este espacio es para ti si:
            </h3>

            {[
              "Estás lista para dejar de sobrevivir.",
              "Quieres sanar tus relaciones y poner límites.",
              "Estás dispuesta a mirar tus heridas y hacerte responsable.",
              "Entiendes que tu siguiente nivel es interno."
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-beige text-xl">✔</span>
                <p className="text-lg opacity-90">{item}</p>
              </div>
            ))}

          </div>

          {/* NO ES PARA TI */}
          <div className="space-y-6">

            <h3 className="font-serif text-2xl md:text-3xl mb-8 opacity-80">
              No es para ti si:
            </h3>

            {[
              "Buscas entretenimiento.",
              "No estás lista para hacer trabajo emocional.",
              "Esperas cambios sin responsabilidad personal."
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-beige/60 text-xl">✘</span>
                <p className="text-lg opacity-80">{item}</p>
              </div>
            ))}

          </div>

        </div>

        {/* Cierre estratégico */}
        <div className="text-center mt-24 max-w-3xl mx-auto space-y-6">
          <p className="font-serif text-2xl md:text-3xl">
            Y está lista para elegirse de verdad.
          </p>
        </div>

      </div>

      {/* Glow sutil */}
      <div className="absolute -top-20 left-1/4 w-80 h-80 bg-black/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-black/20 rounded-full blur-3xl"></div>

    </section>
  )
}

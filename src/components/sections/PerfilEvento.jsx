import RitualImageCarousel from "../ui/RitualImageCarousel"


const carouselImages = [
  "/images/retiro1.jpg",
  "/images/retiro2.jpg",
  "/images/retiro3.jpg"
]
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
          <h2 className="font-serif text-4xl md:text-6xl mb-6 leading-tight text-[#ffdf77ab]">
            Mujer Origen no es para todas
          </h2>

          <p className="text-xl text-[#E8DFD4]/80">
            Es para la mujer que siente que ya no puede seguir igual.
          </p>
        </div>



        {/* Grid */}
        <div className="mt-24 grid md:grid-cols-3 gap-16 items-center">

          {/* IZQUIERDA — NO ES PARA TI */}
          <div className="space-y-8 text-right md:text-right">
            <h3 className="font-serif text-3xl mb-6 text-[#ffdf77ab] opacity-90">
              No es para ti si:
            </h3>

            {[
              "Buscas entretenimiento.",
              "No estás lista para hacer trabajo emocional.",
              "Esperas cambios sin responsabilidad personal."
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 justify-end group text-amber-50">
                <p className="text-lg opacity-75 leading-relaxed">
                  {item}
                </p>
                <span className="text-2xl text-[#D4AF37]/50 group-hover:scale-110 transition duration-300">
                  —
                </span>
              </div>
            ))}
          </div>

          {/* CENTRO — CARRUSEL */}
          <div className="flex justify-center">
            <RitualImageCarousel images={carouselImages} />
          </div>

          {/* DERECHA — ES PARA TI */}
          <div className="space-y-8 text-left">
            <h3 className="font-serif text-3xl mb-6 text-[#ffdf77ab]">
              Es para ti si:
            </h3>

            {[
              "Estás lista para dejar de sobrevivir.",
              "Quieres sanar tus relaciones y poner límites.",
              "Estás dispuesta a mirar tus heridas y hacerte responsable.",
              "Entiendes que tu siguiente nivel es interno."
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 group text-amber-50">
                <span className="text-2xl text-[#D4AF37] group-hover:scale-110 transition duration-300">
                  ✦
                </span>
                <p className="text-lg opacity-90 leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Cierre */}
        <div className="text-center mt-32 max-w-3xl mx-auto">
          <p className="font-serif text-3xl md:text-4xl leading-snug text-[#ffdf77ab]">
            Y está lista para elegirse de verdad.
          </p>
        </div>

      </div>

      {/* Glow elegante */}
      <div className="absolute -top-32 left-1/4 w-125 h-125 bg-black/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-125 h-125 bg-black/30 rounded-full blur-3xl"></div>
    </section>
  )
}
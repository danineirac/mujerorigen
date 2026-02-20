import heroImage from "../../assets/images/danna.jpg"
import FadeInSection from "../ui/FadeInSection"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">

      {/* Imagen */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Danna Neira"
          className="w-full h-full object-cover scale-105"
        />

        {/* Overlay más elegante */}
        <div className="absolute inset-0 bg-gradient-to-b 
                        from-black/40 
                        via-black/60 
                        to-black/85" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-4xl px-6 text-white">

        <FadeInSection>

          <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-6">
            No estás rota.
            <br />
            <span className="italic text-[#E8DFD4]">
              Estás agotada de sostener.
            </span>
          </h1>

          {/* Reducimos peso visual aquí */}
          <p className="text-lg md:text-xl font-light leading-relaxed mb-10 opacity-85 max-w-2xl mx-auto">
            Sostener relaciones que te apagan.
            Sostener expectativas que no son tuyas.
            Sostener una vida que funciona… pero no te hace sentir en paz.
          </p>

          <div className="mb-10 text-sm tracking-widest uppercase opacity-70">
            11 de abril · Paipa – Boyacá · 8:00 am a 7:00 pm
          </div>

          {/* Botón ahora dentro del bloque animado */}
          <a
            href="https://wa.me/573007308273?text=Hola%20quiero%20asegurar%20mi%20cupo%20para%20Mujer%20Origen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block 
                       bg-[#6B1F2B] 
                       hover:bg-[#541621] 
                       transition-all duration-300 
                       px-12 py-5 
                       rounded-full 
                       text-white 
                       font-semibold 
                       tracking-wider 
                       shadow-[0_15px_40px_rgba(0,0,0,0.5)] 
                       hover:scale-105"
          >
            QUIERO ASEGURAR MI CUPO
          </a>

        </FadeInSection>

      </div>

      {/* Luz inferior más sutil */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />

    </section>
  )
}
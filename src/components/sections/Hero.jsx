import heroImage from "../../assets/images/danna.jpg"
import FadeInSection from "../ui/FadeInSection"
import GoldRain from "../ui/GoldRain"


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
        <div className="absolute inset-0 bg-linear-to-b 
                        from-black/40 
                        via-black/60 
                        to-black/85" />
      </div>

      {/* Lluvia Dorada */}
      <GoldRain />

      {/* Contenido */}
      <div className="relative z-10 max-w-4xl px-6 text-[#fdf8f8]">

        <FadeInSection>

          {/* TÍTULO PRINCIPAL */}
          <div className="mb-6">
            <h1 className="font-serif text-5xl md:text-8xl tracking-wide text-[#fff0be] mb-2">
              MUJER ORIGEN
            </h1>

            <p className="text-lg md:text-2xl italic text-[#ffa4a4] opacity-90">
              Volver a ti es tu verdadero poder
            </p>
          </div>

          {/* MENSAJE ORIGINAL */}
          <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-6">
            No estás rota.
            <br />
            <span className="italic text-orange-300">
              Estás agotada de sostener.
            </span>
          </h2>

          {/* Reducimos peso visual aquí */}
          <p className="text-lg md:text-xl font-light leading-relaxed mb-10 opacity-85 max-w-2xl mx-auto">
            Sostener relaciones que te apagan.
            Sostener expectativas que no son tuyas.
            Sostener una vida que funciona… pero no te hace sentir en paz.
          </p>

          <div className="mb-10 text-sm tracking-widest uppercase opacity-70">
            11 de abril · Paipa – Boyacá · 8:00 am a 7:00 pm
          </div>

          {/* Botón principal */}
          <a
            href="https://wa.me/573214633040?text=Hola%20quiero%20mi%20cupo%202x1%20para%20Mujer%20Origen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block 
            breathing-btn
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
            🔥 QUIERO MI CUPO 2x1 AHORA
          </a>

          {/* Texto debajo del botón */}
          <a
            href="https://wa.me/573214633040"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 text-sm text-white/80 hover:text-white underline"
          >
            Hablar por WhatsApp
          </a>
        </FadeInSection>

      </div>

      {/* Luz inferior más sutil */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-black/80 to-transparent" />

    </section>
  )
}
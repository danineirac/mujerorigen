import heroImage from "../../assets/images/danna.jpg"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">

      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Danna Neira"
          className="w-full h-full object-cover"
        />
        {/* Overlay ceremonial */}
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-[#6B1F2B]/70 to-black/80"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-4xl px-6 text-beige">

        <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-6">
          No estás rota, <br />
          <span className="text-[#E8DFD4] italic">
            Estás agotada de sostener.
          </span>
        </h1>

        <p className="text-lg md:text-xl font-light leading-relaxed mb-8 opacity-90">
          Sostener relaciones que te apagan. <br />
          Sostener expectativas que no son tuyas. <br />
          Sostener una vida que funciona… pero no te hace sentir en paz.
        </p>

        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-80">
          Mujer Origen es el espacio para sanar heridas emocionales,
          reconectar contigo y volver a tu poder femenino.
        </p>

        <div className="mb-8 text-sm tracking-widest uppercase opacity-70">
          11 de abril · Paipa – Boyacá · 8:00 am a 7:00 pm
        </div>

        <a
            href="https://wa.me/573001234567?text=Hola%20quiero%20asegurar%20mi%20cupo%20para%20Mujer%20Origen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-vino hover:bg-[#5a1823] transition-all duration-300 px-10 py-4 rounded-full text-beige font-semibold tracking-wide shadow-lg hover:shadow-2xl hover:scale-105"
            >
  QUIERO ASEGURAR MI CUPO
</a>

      </div>

      {/* Efecto luz ceremonial inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-black to-transparent"></div>

    </section>
  )
}

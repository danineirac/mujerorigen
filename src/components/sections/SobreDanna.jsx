import heroImage from "../../assets/images/danna.jpg"

export default function SobreDanna() {
  return (
    <section className="relative bg-fondo py-32 px-6 text-center overflow-hidden">

      <div className="max-w-4xl mx-auto">

        <h2 className="font-serif text-3xl md:text-5xl text-vino mb-16">
          Sobre Danna
        </h2>

        {/* Marco ceremonial */}
        <div className="relative flex justify-center mb-16">

          {/* Glow energético */}
          <div className="absolute w-96 h-96 bg-vino/10 rounded-full blur-3xl"></div>

          {/* Marco */}
          <div className="relative p-4 border-2 border-vino rounded-[2rem] shadow-2xl bg-beige">

            <img
              src={heroImage}
              alt="Danna Neira"
              className="rounded-[1.5rem] w-72 md:w-96 object-cover"
            />

          </div>

        </div>

        {/* Texto */}
        <div className="space-y-8 text-gray-700 text-lg leading-relaxed">

          <p>
            <span className="font-semibold text-vino">
              Danna Neira
            </span>, terapeuta holística y facilitadora espiritual,
            experta en sanación emocional y reconexión femenina,
            facilitadora de retiros y círculos de mujeres.
          </p>

          <p>
            Durante años viví noches de soledad, tristeza y profunda desconexión;
            aunque por fuera parecía fuerte, por dentro me sentía pequeña,
            agotada y en modo supervivencia.
          </p>

          <p>
            Mis heridas se reflejaban en mis relaciones, en el miedo al abandono,
            en la autoexigencia constante y en la necesidad de sostenerlo todo.
            El punto de quiebre llegó cuando entendí que no era falta de capacidad,
            era una identidad construida desde la herida.
          </p>

          <p>
            Atravesar esa crisis me llevó a hacerme responsable de mis patrones,
            a dejar de traicionarme para no perder y a sanar lo que venía
            repitiéndose en mi vida.
          </p>

          <p className="font-serif text-xl text-vino">
            Mujer Origen no nace de teoría. <br />
            Nace de transformación vivida.
          </p>

        </div>

        {/* Botón */}
        <a
          href="https://wa.me/573001234567?text=Hola%20Danna,%20quiero%20asegurar%20mi%20cupo%20para%20Mujer%20Origen%20%F0%9F%8C%95"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-16 bg-vino hover:bg-[#5a1823] transition-all duration-300 px-10 py-4 rounded-full text-beige font-semibold tracking-wide shadow-lg hover:shadow-2xl hover:scale-105"
        >
          QUIERO ASEGURAR MI CUPO
        </a>

      </div>

      {/* Glow inferior */}
      <div className="absolute -bottom-20 right-1/3 w-80 h-80 bg-salvia/10 rounded-full blur-3xl"></div>

    </section>
  )
}

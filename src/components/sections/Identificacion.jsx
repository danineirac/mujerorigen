import identiImage from "../../assets/images/danna.jpg"

export default function Identificacion() {
  return (

    <section className="relative py-24 px-6 overflow-hidden">

  {/* Fondo base beige */}
  <div className="absolute inset-0 bg-beige"></div>

  {/* Textura */}
  <div 
    className="absolute inset-0 opacity-30 mix-blend-multiply"
    style={{
      backgroundImage: "url('/textures/paper-texture.webp')",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}
  ></div>

  {/* Contenido */}
  <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* TEXTO IZQUIERDA */}
        <div>
          <h2 className="font-serif text-3xl md:text-5xl text-vino leading-tight mb-8">
            ¿Tu vida funciona… <br />
            pero tú no te sientes bien en ella?
          </h2>

          <div className="space-y-4 text-gray-700 text-lg">

            {[
              "Estás cansada de sostenerlo todo sola.",
              "Has normalizado faltas de respeto, silencios o relaciones que te apagan.",
              "Te exiges más de lo que te cuidas.",
              "Vives en modo control y supervivencia.",
              "Te comparas, dudas de ti y a veces te sientes pequeña.",
              "Sientes que algo te falta, aunque “todo esté bien”.",
              "Quieres sanar y dejar de repetir los mismos patrones.",
              "Sabes que algo tiene que cambiar.",
              "Quieres reconectar con tu sabiduría interna, tu poder y tu valor."
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-salvia text-xl">✔</span>
                <p>{item}</p>
              </div>
            ))}

          </div>

          <p className="mt-10 text-xl font-medium text-vino">
            No es falta de fuerza. <br />
            Es desconexión.
          </p>

          <a
            href="https://wa.me/573001234567?text=Hola%20Danna,%20quiero%20vivir%20Mujer%20Origen%20%F0%9F%8C%95"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 bg-vino hover:bg-[#5a1823] transition-all duration-300 px-8 py-4 rounded-full text-beige font-semibold tracking-wide shadow-md hover:shadow-xl hover:scale-105"
          >
            QUIERO VIVIR MUJER ORIGEN
          </a>

        </div>

        {/* IMAGEN DERECHA */}
        <div className="relative">

          <img
            src={identiImage}
            alt="Mujer introspectiva"
            className="rounded-3xl shadow-2xl object-cover w-full h-125"
          />

          {/* Overlay suave ceremonial */}
          <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent rounded-3xl"></div>

        </div>

      </div>

    </section>
  )
}

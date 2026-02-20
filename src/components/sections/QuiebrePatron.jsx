import FadeInSection from "../ui/FadeInSection"
import dannaImg from "../../assets/images/danna.jpg"

export default function NoEsSection() {
  return (
    <section className="relative py-40 px-6 bg-[#e9e4db]">

      <div className="max-w-6xl mx-auto relative">

        <FadeInSection>
          <div className="relative bg-[#4f5d4d] text-beige rounded-3xl shadow-[0_40px_80px_rgba(0,0,0,0.25)] p-16 md:p-24 overflow-visible">

            <div className="grid md:grid-cols-2 gap-16 items-center">

              {/* TEXTO */}
              <div className="space-y-10 z-10">

                <h2 className="font-serif text-4xl md:text-6xl leading-tight">
                  Esto no es otro <br />
                  evento motivacional.
                </h2>

                <div className="space-y-5 text-lg opacity-70 leading-relaxed">
                  <p>No es un espacio para escuchar frases bonitas y volver igual.</p>
                  <p>No es espiritualidad desconectada de tu vida real.</p>
                  <p>No es una charla que te inspira… y luego se diluye.</p>
                </div>

                <div className="w-16 h-px bg-beige/40"></div>

                <div className="space-y-6 font-serif text-2xl leading-relaxed">
                  <p>Es un espacio seguro y profundo para mirarte con honestidad.</p>
                  <p>Para reconocer los patrones que vienes repitiendo.</p>
                  <p>Para sentir lo que has estado evitando.</p>
                </div>

              </div>

              {/* IMAGEN DESCUADRADA */}
              <div className="relative flex justify-center md:justify-end">

                <img
                  src={dannaImg}
                  alt="Danna Neira en ceremonia"
                  className="w-[320px] md:w-100 rounded-2xl shadow-2xl 
                             md:translate-x-20 md:-translate-y-10 
                             rotate-2 hover:rotate-0 transition duration-700"
                />

              </div>

            </div>

          </div>
        </FadeInSection>

      </div>

    </section>
  )
}
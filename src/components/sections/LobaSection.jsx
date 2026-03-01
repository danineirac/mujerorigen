import lobaImage from "../../assets/images/loba.jpg"
import AnimatedBackgroundSection from "../ui/AnimatedBackgroundSection"
import AnimatedRevealContent from "../ui/AnimatedRevealContent"

export default function LobaSection() {
  return (
    <AnimatedBackgroundSection
      image={lobaImage}
      overlayClass="bg-gradient-to-t from-black/80 via-[#6B1F2B]/80 to-black/90"
    >
      <AnimatedRevealContent>
        <h2 className="font-serif text-3xl md:text-5xl leading-tight text-[#f2ec9cb3]">
          ¿Por qué la loba es el animal de poder
          <br /> de Mujer Origen?
        </h2>

        <p className="text-lg md:text-xl leading-relaxed opacity-90 text-amber-100 mt-6">
          La loba no es símbolo de agresividad.
          Es símbolo de intuición, lealtad y fuerza silenciosa.
        </p>

        <p className="font-serif text-2xl md:text-3xl mt-6 text-amber-100">
          Mujer Origen es ese regreso.
        </p>
      </AnimatedRevealContent>
    </AnimatedBackgroundSection>
  )
}
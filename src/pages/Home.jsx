import Navbar from "../components/layout/Navbar"
import Hero from "../components/sections/Hero"
import Identificacion from "../components/sections/Identificacion"
import QuiebrePatron from "../components/sections/QuiebrePatron"
import Transformacion from "../components/sections/Transformacion"
import Metodo from "../components/sections/Metodo"
import SobreDanna from "../components/sections/SobreDanna"
import PerfilEvento from "../components/sections/PerfilEvento"
import DetallesEvento from "../components/sections/DetallesEvento"
import Inversion from "../components/sections/Inversion"
import LobaSection from "../components/sections/LobaSection"
import Experiencia from "../components/sections/Experiencia"
import Footer from "../components/layout/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Identificacion />
      <Experiencia />
      <QuiebrePatron />
      
      <DetallesEvento />
      <Inversion />
      <Transformacion />
      <Metodo />
      <SobreDanna />
      <PerfilEvento />
      <LobaSection />
      <Footer />
    </>
  )
}




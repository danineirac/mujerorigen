

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
import Footer from "../components/layout/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Identificacion />
      <QuiebrePatron />
      <Transformacion />
      <Metodo />
      <SobreDanna />
      <PerfilEvento />
      <DetallesEvento />
      <Inversion />
      <LobaSection />
      <Footer />
    </>
  )
}




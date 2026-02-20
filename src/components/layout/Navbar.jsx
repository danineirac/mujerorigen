import { useEffect, useState } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-beige/80 backdrop-blur-md shadow-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <div
          className={`font-serif text-xl tracking-wide transition-colors duration-500 ${
            scrolled ? "text-vino" : "text-beige"
          }`}
        >
          Mujer Origen
        </div>

        {/* Botón */}
        <a
          href="https://wa.me/573001234567?text=Hola%20Danna,%20quiero%20asegurar%20mi%20cupo%20para%20Mujer%20Origen%20%F0%9F%8C%95"
          target="_blank"
          rel="noopener noreferrer"
          className={`px-6 py-2 rounded-full text-sm tracking-wide transition-all duration-500 ${
            scrolled
              ? "bg-vino text-beige hover:bg-[#5a1823]"
              : "border border-beige text-beige hover:bg-beige hover:text-vino"
          }`}
        >
          Asegurar cupo
        </a>

      </div>
    </header>
  )
}
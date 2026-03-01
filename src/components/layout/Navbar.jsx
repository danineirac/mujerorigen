import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [navMode, setNavMode] = useState("light")

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")

    const handleScroll = () => {
      let currentMode = "light"

      sections.forEach(section => {
        const rect = section.getBoundingClientRect()
        const navType = section.dataset.nav

        if (rect.top <= 120 && rect.bottom >= 120) {
          currentMode = navType
        }
      })

      setNavMode(currentMode)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      className="fixed top-0 left-0 w-full z-50 py-4 md:py-6 transition-all duration-500"
    >
      <div className="relative max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between">

        {/* LUNA */}
        <div
          className={`w-5 h-5 md:w-6 md:h-6 rounded-full border transition-all duration-500 ${navMode === "dark" ? "border-black" : "border-white"
            }`}
        ></div>

        {/* TEXTO CENTRADO */}
        <div className="absolute md:left-1/2 md:-translate-x-1/2 left-1/2 -translate-x-1/2">
          <div
            className={`font-serif text-base md:text-xl tracking-wide transition-colors duration-500 ${navMode === "dark" ? "text-black" : "text-white"
              }`}
          >
            Mujer Origen
          </div>
        </div>

        {/* BOTÓN */}
        <a
          href="https://wa.me/573214633040?text=Hola%20quiero%20asegurar%20mi%20cupo%20para%20Mujer%20Origen"
          rel="noopener noreferrer"
          target="_blank"
          className={`
        px-4 md:px-6 py-1.5 md:py-2 
        rounded-full text-xs md:text-sm tracking-wide
        transition-all duration-500
        ${navMode === "dark"
              ? "bg-[#6B1F2B] text-white hover:bg-[#541621]"
              : "border border-white text-white hover:bg-[#6B1F2B] hover:border-[#6B1F2B]"
            }
      `}
        >
          <span className="hidden sm:inline">Asegurar cupo</span>
          <span className="sm:hidden">Cupo</span>
        </a>

      </div>
    </motion.header>
  )
}
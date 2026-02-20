import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="relative bg-beige text-vino py-24 px-6 overflow-hidden border-t border-vino/20">

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >

        {/* Logo centrado */}
        <div className="flex justify-center items-center gap-3 mb-16">
          <div className="w-6 h-6 rounded-full border border-vino"></div>
          <p className="font-serif text-2xl tracking-wide">
            Mujer Origen
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">

          {/* Columna 1 */}
          <div className="space-y-4">
            <p className="uppercase tracking-widest text-xs opacity-60">
              Evento
            </p>
            <p className="text-lg">11 de abril</p>
            <p className="text-lg">Paipa – Boyacá</p>
            <p className="text-lg">8:00 am a 7:00 pm</p>
          </div>

          {/* Columna 2 */}
          <div className="space-y-4">
            <p className="uppercase tracking-widest text-xs opacity-60">
              Contacto
            </p>

            <a
              href="https://wa.me/573001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:opacity-70 transition"
            >
              WhatsApp
            </a>

            <a
              href="https://www.instagram.com/dannaneira17"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:opacity-70 transition"
            >
              Instagram
            </a>

            <a
              href="https://www.tiktok.com/@dannaneira17"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:opacity-70 transition"
            >
              TikTok
            </a>
          </div>

          {/* Columna 3 */}
          <div className="space-y-4">
            <p className="uppercase tracking-widest text-xs opacity-60">
              Mensaje
            </p>
            <p className="font-serif text-lg leading-relaxed">
              Cuando una mujer vuelve a su origen,
              su forma de habitar la vida cambia para siempre.
            </p>
          </div>

        </div>

        {/* Línea inferior */}
        <div className="mt-20 pt-8 border-t border-vino/20 text-center text-xs opacity-50">
          © {new Date().getFullYear()} Mujer Origen — Danna Neira
        </div>

      </motion.div>

    </footer>
  )
}
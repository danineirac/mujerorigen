export default function DetallesEvento() {
  return (
    <section className="relative bg-beige py-32 px-6 overflow-hidden">

      <div className="max-w-4xl mx-auto text-center">

        <h2 className="font-serif text-3xl md:text-5xl text-vino mb-16">
          Detalles del Evento
        </h2>

        {/* Tarjeta ceremonial */}
        <div className="relative bg-fondo border border-vino/30 rounded-[2rem] p-12 md:p-16 shadow-2xl">

          <div className="space-y-10 text-lg md:text-xl text-gray-700">

            <div>
              <p className="uppercase tracking-widest text-sm text-vino mb-2">
                Lugar
              </p>
              <p className="font-serif text-2xl text-vino">
                Paipa – Boyacá
              </p>
            </div>

            <div>
              <p className="uppercase tracking-widest text-sm text-vino mb-2">
                Fecha
              </p>
              <p className="font-serif text-2xl text-vino">
                11 de abril
              </p>
            </div>

            <div>
              <p className="uppercase tracking-widest text-sm text-vino mb-2">
                Horario
              </p>
              <p className="font-serif text-2xl text-vino">
                8:00 am a 7:00 pm
              </p>
            </div>

          </div>

          <div className="mt-16">
            <p className="text-gray-600">
              Cuando los cupos se llenen,
            </p>
            <p className="font-serif text-xl text-vino">
              se cierran inscripciones.
            </p>
          </div>

        </div>

      </div>

      {/* Glow suave */}
      <div className="absolute -top-20 right-1/3 w-80 h-80 bg-vino/10 rounded-full blur-3xl"></div>

    </section>
  )
}

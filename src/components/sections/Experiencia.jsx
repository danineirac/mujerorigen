import FadeInSection from "../ui/FadeInSection";

export default function Experiencia() {
    return (
        <section className="w-full py-32 bg-linear-to-b from-[#F6F1EA] via-[#E8DFD4] to-[#f4eee629] flex justify-center relative overflow-hidden">

            {/* textura suave */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,#ffffff,transparent_70%)]"></div>

            <FadeInSection>
                {/* carta */}
                <div className="relative carta-anim max-w-3xl w-full mx-6 bg-white rounded-md shadow-[0_35px_90px_rgba(0,0,0,0.35)] p-12">

                    {/* rayas cuaderno */}
                    <div className="absolute inset-0 pointer-events-none opacity-40 bg-[repeating-linear-gradient(to_bottom,#e6e6e6_0px,#e6e6e6_1px,transparent_1px,transparent_34px)]"></div>

                    {/* linea roja margen */}
                    <div className="absolute top-0 bottom-0 left-12 w-0.5 bg-red-300 opacity-60"></div>

                    <div className="relative z-10 pl-8">

                        <h2 className="text-4xl md:text-5xl text-[#6B1F2B] mb-12 text-center font-[Caveat]">
                            Lo que viviremos en Mujer Origen
                        </h2>

                        <div className="space-y-8 text-gray-700 leading-relaxed text-lg">

                            <p>
                                ✨ <strong>Creencias limitantes</strong><br />
                                Identificar y transformar las ideas que hoy limitan tu valor y tu poder.
                            </p>

                            <p>
                                ✨ <strong>Sanación emocional</strong><br />
                                Liberar emociones y heridas que siguen afectando tu bienestar.
                            </p>

                            <p>
                                ✨ <strong>Amor propio y límites</strong><br />
                                Aprender a priorizarte y crear relaciones más sanas.
                            </p>

                            <p>
                                ✨ <strong>Reconocer patrones</strong><br />
                                Entender cómo tus heridas se reflejan en tus relaciones, dinero, salud y decisiones.
                            </p>

                            <p>
                                ✨ <strong>Despertar tu magnetismo femenino</strong><br />
                                Volver a habitar tu energía femenina con autenticidad.
                            </p>

                            <p>
                                ✨ <strong>Reconexión profunda contigo</strong><br />
                                Un espacio para volver a tu esencia y sentirte nuevamente en casa dentro de ti.
                            </p>

                            <p>
                                ✨ <strong>Empoderamiento femenino</strong><br />
                                Salir con más claridad, fuerza interior y conexión contigo misma.
                            </p>

                        </div>

                    </div>

                </div>
            </ FadeInSection>
        </section>
    )
}
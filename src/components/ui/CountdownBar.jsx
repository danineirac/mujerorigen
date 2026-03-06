import { useEffect, useState } from "react";

export default function CountdownBar() {
  const targetDate = new Date("2026-03-23T23:59:00");

  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full bg-linear-to-r from-[#1e1a1ade] to-[#c1000882] text-white py-3 px-4 z-50 bg-opacity-20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        
        <h2 className="text-sm md:text-base font-bold text-[#f5eee5] tracking-wide">
          CERRAMOS INSCRIPCIONES EN:
        </h2>

        <div className="flex gap-3 text-center">
          {["dias", "horas", "minutos", "segundos"].map((unit) => (
            <div
              key={unit}
              className="bg-[#f5eee5] text-black rounded-lg px-3 py-1 min-w-15"
            >
              <p className="text-sm font-bold">
                {String(timeLeft[unit] || 0).padStart(2, "0")}
              </p>
              <p className="text-[10px] uppercase">{unit}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
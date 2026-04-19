import { Link } from "react-router-dom";
import FireIcon from "../components/FireIcon";
import { useEffect, useState } from "react";

const chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}<>?/";

const generateLine = () =>
  Array.from({ length: 50 })
    .map(() => chars[Math.floor(Math.random() * chars.length)])
    .join("");

const Journal = () => {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const initial = Array.from({ length: 20 }, generateLine);
    setLines(initial);

    const interval = setInterval(() => {
      setLines((prev) =>
        prev.map((line) =>
          line
            .split("")
            .map((char) =>
              Math.random() < 0.015
                ? chars[Math.floor(Math.random() * chars.length)]
                : char,
            )
            .join(""),
        ),
      );
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-2xl lg:max-w-2xl mx-auto">
        {/* 🔥 HEADER */}
        <div className="mb-12">
          {/* TOP ROW */}
          <div className="flex items-center justify-between">
            <FireIcon />

            <div className="flex gap-3 sm:gap-6 text-sm text-teal-400">
              <Link className="relative group" to="/journal">
                JOURNAL
                <span className="absolute left-0 -bottom-1 w-full h-px bg-teal-400"></span>
              </Link>

              <Link className="relative group" to="/projects">
                PROJECTS
                <span className="absolute left-0 -bottom-1 w-0 h-px bg-teal-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>

          {/* TITLE */}
          <h1 className="text-xl sm:text-2xl tracking-[0.3em] mt-6">JOURNAL</h1>

          <p className="text-gray-500 mt-3 text-sm">
            Thoughts, insights, and learnings from my journey as a developer.
          </p>
        </div>

        {/* 🟩 MATRIX BOX */}
        <div className="relative w-full max-w-3xl mx-auto mt-16">
          <div
            className="
              relative
              w-full
              h-55 sm:h-62.5 md:h-70
              px-4 sm:px-5
              py-4
              font-mono
              text-[#00f5d4]
              text-[12px] sm:text-[14px] md:text-[15px]
              leading-[1.3]
              border border-dashed border-teal-400/30
              rounded-xl
              overflow-hidden
            "
          >
            {/* BACKGROUND TEXT */}
            <div className="opacity-70">
              {lines.slice(0, 18).map((line, i) => (
                <p key={i} className="whitespace-nowrap overflow-hidden">
                  {line}
                </p>
              ))}
            </div>

            {/* CENTER TEXT */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-black/60 px-4 py-2 rounded-md backdrop-blur-[2px]">
                <span className="text-white/90 text-[16px] sm:text-[20px] md:text-[22px] tracking-[0.35em]">
                  COMING SOON
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journal;

import GlowCircle from "../components/GlowCircle";
import { useState } from "react";
import { Mail, Copy } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const [active, setActive] = useState("email");

  const socialLinks = [
    { name: "READ.CV", url: "/Naman_Resume.pdf" },
    { name: "LINKEDIN", url: "https://linkedin.com/in/naman-shrivastava1" },
    { name: "GITHUB", url: "https://github.com/NamanShrivastava1" },
    { name: "TWITTER", url: "https://x.com/namanlogs" },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <p className="text-teal-400 tracking-[0.3em] text-sm">
            LE ANH NGOC <span className="text-gray-600">/ @ngocla99</span>
          </p>

          <h1 className="text-3xl mt-6 leading-snug">
            FRONTEND SPECIALIST <br />
            WITH 5+ YEARS EXPERIENCE.
          </h1>

          <p className="text-gray-400 mt-6 leading-relaxed">
            Building responsive applications that deliver exceptional user
            experiences with modern technologies and clean code practices.
          </p>

          <p className="text-gray-400 mt-6">
            I'm the person who can quickly adapt to new technologies and take
            ownership of tasks to deliver high-quality solutions that exceed
            expectations. ✨
          </p>

          <p className="text-orange-400 mt-8 text-sm tracking-widest">
            • OPEN TO EXCITING OPPORTUNITIES GLOBALLY.
          </p>

          <div className="flex items-center gap-4 mt-6 justify-center md:justify-start">
            <a
              href="mailto:namanshrivastava.connect@email.com"
              onMouseEnter={() => setActive("email")}
              className={`w-12 h-12 flex items-center justify-center border border-teal-400 rounded-xl transition
              ${active === "email" ? "shadow-[0_0_15px_#00f5d4]" : ""}`}
            >
              <Mail size={18} />
            </a>

            <button
              onMouseEnter={() => setActive("copy")}
              onClick={() =>
                navigator.clipboard.writeText(
                  "namanshrivastava.connect@email.com",
                )
              }
              className={`w-12 h-12 flex items-center justify-center border border-teal-400 rounded-xl transition
              ${active === "copy" ? "shadow-[0_0_15px_#00f5d4]" : ""}`}
            >
              <Copy size={18} />
            </button>

            <div className="text-gray-400 text-sm ml-2 text-left">
              <p>Want to discuss opportunities?</p>

              <p className="text-white">
                {active === "email"
                  ? "Open your email app."
                  : "Copy address to your clipboard."}
              </p>
            </div>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            YOU CAN{" "}
            <Link
              to="/projects"
              className="text-yellow-400 underline cursor-pointer hover:text-yellow-300"
            >
              SEE MY WORK
            </Link>
          </p>

          <div className="mt-16">
            <div className="flex items-center gap-10 text-sm justify-center md:justify-start">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-teal-400 rounded-full shadow-[0_0_10px_#00f5d4]"></div>
                <div className="w-24 h-0.5 bg-teal-400"></div>
              </div>

              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>

              <Link
                to="/projects"
                className="text-gray-500 ml-auto hidden md:block"
              >
                ALL →
              </Link>
            </div>

            <div className="flex gap-8 mt-6 text-sm justify-center md:justify-start flex-wrap">
              {[
                { name: "Ewoosoft Viet", year: "2023 - NOW" },
                { name: "Viettel Security", year: "2022 - 2023" },
                { name: "FPT Software", year: "2021 - 2022" },
              ].map((item) => (
                <div
                  key={item.name}
                  className="hover:text-teal-400 cursor-pointer transition text-center md:text-left"
                >
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-gray-500 text-xs mt-1">{item.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden md:flex justify-center">
          <GlowCircle />
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-20 text-center">
        <p className="text-gray-600 text-xs mb-6">ELSEWHERE</p>

        <div className="flex justify-center gap-6 text-teal-400 text-sm flex-wrap">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group cursor-pointer"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-px bg-teal-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        <p className="text-gray-700 text-xs mt-10">
          All {"\u00A9"} Copyright Reserved{" "}
          <span className="text-teal-400">NAMAN SHRIVASTAVA</span>.
        </p>
      </div>
    </div>
  );
};

export default Home;

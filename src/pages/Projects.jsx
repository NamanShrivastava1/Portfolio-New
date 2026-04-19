import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Mail, Copy } from "lucide-react";
import FireIcon from "../components/FireIcon";

const experiences = [
  {
    date: "DEC 2025 - PRESENT",
    company: "Ewoosoft",
    role: "Full-stack Developer",
    description:
      "Group Purchase Campaign Platform: An e-commerce solution enabling users to form buying groups.",
  },
  {
    date: "AUG 2022 - MAR 2023",
    company: "Viettel Security",
    role: "Frontend Developer",
    description:
      "Worked on security platform tracking statistics and issuing alerts.",
  },
  {
    date: "JAN 2022 - AUG 2022",
    company: "FPT Software",
    role: "Frontend Developer",
    description: "Migrated legacy system to modern Angular architecture.",
  },
];

const Projects = () => {
  const [active, setActive] = useState("email");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-2xl lg:max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <FireIcon />

          <div className="flex gap-4 sm:gap-6 text-sm text-teal-400">
            <Link className="relative group" to="/journal">
              JOURNAL
              <span className="absolute left-0 -bottom-1 w-0 h-px bg-teal-400 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link className="relative group" to="/projects">
              PROJECTS
              <span className="absolute left-0 -bottom-1 w-full h-px bg-teal-400"></span>
            </Link>
          </div>
        </div>

        <h1 className="text-xl sm:text-2xl tracking-[0.25em]">
          WORK EXPERIENCE
        </h1>

        <p className="text-gray-500 mt-2 text-sm">
          What I've been up to in the last 5+ years.
        </p>

        <div className="relative mt-12">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1 }}
            className="absolute left-4 top-0 w-0.5 bg-teal-400/40"
          />

          <div className="space-y-14 sm:space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex gap-6 sm:gap-10 group"
              >
                <div className="relative min-w-30 sm:min-w-45">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                    className="absolute left-2 top-2 w-3 h-3 bg-teal-400 rounded-full shadow-[0_0_10px_#00f5d4]"
                  />

                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.3 }}
                    className="text-gray-500 text-[10px] sm:text-xs ml-8 tracking-[0.2em]"
                  >
                    {exp.date}
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.4 }}
                >
                  <h3 className="text-base sm:text-lg font-semibold group-hover:text-teal-400 transition">
                    {exp.company}
                    <span className="text-gray-400 text-xs sm:text-sm">
                      {" "}
                      • {exp.role}
                    </span>
                  </h3>

                  <p className="text-gray-500 mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed max-w-xl">
                    {exp.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 sm:mt-24">
          <p className="text-orange-400 text-xs sm:text-sm tracking-widest mb-5 sm:mb-6">
            • OPEN TO EXCITING OPPORTUNITIES GLOBALLY.
          </p>

          <div className="flex items-start gap-3 sm:gap-4">
            <a
              href="mailto:namanshrivastava.connect@email.com"
              onMouseEnter={() => setActive("email")}
              className={`w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center border border-teal-400 rounded-xl transition
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
              className={`w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center border border-teal-400 rounded-xl transition
              ${active === "copy" ? "shadow-[0_0_15px_#00f5d4]" : ""}`}
            >
              <Copy size={18} />
            </button>

            <div className="text-gray-400 text-xs sm:text-sm leading-tight">
              <p>Want to discuss opportunities?</p>

              <p className="text-white">
                {active === "email"
                  ? "Open your email app."
                  : "Copy address to your clipboard."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

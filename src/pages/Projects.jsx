import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Mail, Copy } from "lucide-react";
import FireIcon from "../components/FireIcon";

const projects = [
  {
    name: "Snitch: Luxury Fashion Clothing Platform",
    desc: "Built a full-stack luxury fashion platform using React.js, Tailwind CSS, Node.js, Express.js, and MongoDB, delivering premium shopping experiences with dynamic product discovery and seamless checkout workflows. Designed a variant-based product architecture supporting sizes, colors, stock management, dynamic pricing, and image galleries. Implemented advanced cart management with MongoDB aggregation pipelines and integrated Razorpay for secure order creation, payment verification, and transaction handling.",
    date: "APR-2026 - MAY-2026",
  },
  {
    name: "AI Battle Arena: Multi Agent AI Platform",
    desc: "Built a multi-agent AI evaluation platform using LangGraph, LangChain, TypeScript, and multiple LLM providers including Gemini, Mistral, and Cohere. Designed an AI workflow orchestration system where multiple models generate parallel responses while a dedicated judge agent evaluates outputs using structured scoring and reasoning pipelines. Implemented graph-based state management, concurrent model execution, provider-agnostic abstractions, and schema-validated structured outputs using Zod, enabling reliable AI-to-AI evaluation workflows and scalable multi-agent architectures.",
    date: "MAR-2026 - MAR-2026",
  },
  {
    name: "ScanDine: Smart QR Based Digital Menu Platform",
    desc: "Built a QR-based digital menu platform using React, Tailwind, Node.js, and MongoDB, enabling restaurants to create and manage menus in real time. Implemented authentication, image uploads, and dynamic menu rendering, with deployment on Vercel and SPA routing optimization.",
    date: "MAY-2025 - NOW",
  },
  {
    name: "Veracity AI: Perplexity Style AI Search Platform",
    desc: "Built a full-stack AI search engine using React, Redux, Node.js, Express, and MongoDB with a ChatGPT-like interface and persistent chat history. Designed a custom AI pipeline using LangChain to orchestrate LLMs (Gemini/Mistral), perform intent detection, and fetch real-time data via Tavily API, generating accurate, source-grounded responses while reducing hallucinations.",
    date: "JAN-2026 - MAR-2026",
  },
  {
    name: "PayGrid: Banking and Transaction Processing Backend",
    desc: "Built a banking backend using Node.js, Express, MongoDB, and Redis, handling authentication, transactions, and session management. Implemented secure JWT-based auth with refresh token rotation, Redis-based session storage, and designed scalable APIs for payments, bookings, and user management.",
    date: "NOV-2025 - DEC-2025",
  },
  {
    name: "AI-Powered Code Reviewer",
    desc: "Built a real-time AI code review platform using React, Node.js, and WebSockets for instant feedback. Integrated Gemini AI with a custom backend pipeline to analyze code and generate structured improvement suggestions, enabling live, interactive code evaluation.",
    date: "MAR-2025 - APR-2025",
  },
  {
    name: "StayNest: Vacation Rental Platform",
    desc: "Developed a full-stack vacation rental platform using React, Express, and MongoDB. Implemented booking system, Razorpay payments, and Nodemailer-based email confirmations with a mobile-first UI.",
    date: "JAN-2025 - FEB-2025",
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

        <h1 className="text-xl sm:text-2xl tracking-[0.25em]">PROJECTS</h1>

        <p className="text-gray-500 mt-2 text-sm">
          What I've been up to in the last 2+ years.
        </p>

        <div className="relative mt-12">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1 }}
            className="absolute left-4 top-0 w-0.5 bg-teal-400/40"
          />

          <div className="space-y-14 sm:space-y-16">
            {projects.map((project, index) => (
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
                {/* LEFT */}
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
                    {project.date}
                  </motion.p>
                </div>

                {/* RIGHT */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.4 }}
                >
                  <h3 className="text-base sm:text-lg font-semibold group-hover:text-teal-400 transition">
                    {project.name}
                  </h3>

                  <p className="text-gray-500 mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed max-w-xl">
                    {project.desc}
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

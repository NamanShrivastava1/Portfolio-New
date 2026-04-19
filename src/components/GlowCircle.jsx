import { motion } from "framer-motion";

const GlowCircle = () => {
  return (
    <div className="relative w-80 h-80 group">
      {/* INNER GLOW */}
      <motion.div
        className="absolute inset-0 blur-2xl bg-teal-400/20"
        style={{
          borderRadius: "42% 58% 55% 45% / 45% 40% 60% 55%",
        }}
        animate={{
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />

      {/* MAIN SHAPE */}
      <motion.div
        className="w-full h-full border border-teal-400"
        style={{
          borderRadius: "42% 58% 55% 45% / 45% 40% 60% 55%",
        }}
        animate={{
          rotate: 360,
        }}
        whileHover={{
          scale: 1.08,
          boxShadow: "0 0 120px #00f5d4",
        }}
        transition={{
          rotate: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 0.3,
          },
        }}
      />
    </div>
  );
};

export default GlowCircle;

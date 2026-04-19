import { motion } from "framer-motion";

const FireIcon = () => {
  return (
    <motion.svg
      width="28"
      height="28"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{
        y: [0, -4, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="mb-6 drop-shadow-[0_0_10px_#00f5d4]"
    >
      <defs>
        <linearGradient id="fireGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00f5d4" />
          <stop offset="100%" stopColor="#00bbf9" />
        </linearGradient>
      </defs>

      <path
        d="M32 2C32 2 20 18 20 28C20 38 27 44 32 44C37 44 44 38 44 28C44 18 32 2 32 2Z"
        fill="url(#fireGradient)"
      />

      <path
        d="M32 20C32 20 26 28 26 34C26 40 29 44 32 44C35 44 38 40 38 34C38 28 32 20 32 20Z"
        fill="#000"
        opacity="0.3"
      />
    </motion.svg>
  );
};

export default FireIcon;

import { useEffect, useState } from "react";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

const MatrixText = ({ text = "COMING SOON" }) => {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    let iteration = 0;

    const interval = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        iteration = 0; // 🔥 LOOP AGAIN
      } else {
        iteration += 1 / 2;
      }
    }, 1);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className="text-white tracking-[0.3em] font-mono drop-shadow-[0_0_6px_#ffffff30]">
      {display}
    </span>
  );
};

export default MatrixText;
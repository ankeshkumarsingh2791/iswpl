import React from "react";
import { motion } from "framer-motion";

const CricketCTA = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#014921] via-[#364b00] to-[#125b08] py-20 px-6 text-white text-center">
      {/* Stadium Crowd Background */}
      <div className="absolute inset-0 bg-[url('/Stadium.jpg')] bg-cover bg-center opacity-20"></div>

      {/* Moving stadium lights effect */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 h-64 w-1/3 bg-gradient-to-b from-yellow-400/40 to-transparent blur-3xl"
            style={{ left: `${i * 20}%` }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              y: [0, 30, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3 + i,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Glowing Energy Orbs */}
      <motion.div
        className="absolute top-1/3 left-[-100px] w-[300px] h-[300px] bg-gradient-to-r from-[#FFD700]/40 to-[#FFA500]/10 blur-3xl rounded-full"
        animate={{ x: [0, 400, 0], y: [0, -50, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-[-100px] w-[250px] h-[250px] bg-gradient-to-l from-[#FFD700]/30 to-[#FFA500]/5 blur-3xl rounded-full"
        animate={{ x: [0, -400, 0], y: [0, 60, 0] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
      />

      {/* Flying Cricket Ball with glowing trail */}
      <div className="absolute top-16 left-[-80px]">
        <motion.div
          animate={{
            x: [-100, 1200, 0],
            y: [0, -100, 0],
            rotate: [0, 720, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
          className="relative"
        >
          {/* Trail */}
          <motion.div
            className="absolute -left-10 top-2 h-4 w-24 bg-gradient-to-r from-[#FFD700]/60 to-transparent blur-lg rounded-full"
            animate={{ opacity: [0.2, 1, 0.2], width: [40, 120, 40] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
          {/* Ball */}
          <img
            src="ball.png"
            alt="cricket ball"
            className="w-14 h-14 drop-shadow-[0_0_10px_#FFD700]"
          />
        </motion.div>
      </div>

      {/* CTA Content */}
      <motion.div
        className="relative z-10 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#FFD700] mb-4 drop-shadow-[0_0_10px_rgba(255,215,0,0.4)]">
          Feel the Roar of the ISWPL Arena
        </h2>

        <p className="text-gray-100 text-lg md:text-xl mb-8">
          Lights, energy, and thunderous cheers — the <span className="text-[#FFD700] font-semibold">Indian Single Wicket Premier League</span> is comming!  
          Be part of the movement where legends rise and dreams ignite.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLSflfWpeDkdXvWiQS4JYEhQfFdD0Qags4FP9yNK60PBlkjO6JQ/viewform"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            className="px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-semibold rounded-full shadow-lg hover:shadow-[#FFD700]/40 transition-all"
          >
            Register Your Team
          </motion.a>

          <motion.div
          
            // whileHover={{ scale: 1.05 }}
            className="px-8 py-4 border border-[#FFD700] text-[#FFD700] rounded-full font-semibold  transition-all"
          >
            Watch Highlights
          </motion.div>
        </div>

        <motion.div
          className="mt-10 inline-block px-6 py-3 rounded-full bg-white/10 border border-[#FFD700]/30 text-sm text-gray-200"
          animate={{
            boxShadow: [
              "0 0 0px #FFD700",
              "0 0 12px #FFD700",
              "0 0 0px #FFD700",
            ],
          }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          🏏 Season 2025 • 128 Teams • “One League. One Dream.”
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CricketCTA;

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import NavBar from "./components/NavBar";
import About from "./components/About";
import MissionSection from "./components/MissionSection";
import Footer from "./components/Footer";
import CricketCTA from "./components/CricketCTA";
import ContactSection from "./components/ContactSection";





export default function ISWPLLanding() {
  return (
    <div className="overflow-x-hidden bg-[#0F5132] text-white font-sans">
      {/* NAVBAR */}
     <NavBar />

      {/* HERO SECTION */}
      <header className="pt-28 pb-16 relative overflow-hidden">
        <img
          src="/Herom.jpg"
          alt="Cricket stadium"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F5132]/70 to-black/60" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
              The{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] to-yellow-300">
                Indian Single Wicket Premier League
              </span>
            </h1>
            <p className="mt-4 text-gray-300 max-w-xl">
              A celebration of youth, skill, and sportsmanship — where rising
              stars compete for glory under the golden lights.
            </p>
            <p className="mt-4 text-gray-300 max-w-xl">
              The registration charge is 1200rs for each player.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSflfWpeDkdXvWiQS4JYEhQfFdD0Qags4FP9yNK60PBlkjO6JQ/viewform"
                target="_blank"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-yellow-400 text-black font-semibold hover:scale-105 hover:shadow-lg hover:shadow-[#D4AF37]/40 transition-all"
              >
                Register Now
              </a>
              <a
                href="#about"
                className="px-6 py-3 rounded-full border border-[#D4AF37]/60 text-[#D4AF37] hover:bg-[#D4AF37]/10 transition"
              >
                Learn More
              </a>
            </div>
          </motion.div>

          {/* Right: Stadium + Animated Cricket Ball */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 relative w-full max-w-md"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/Hero1.avif"
                alt="stadium"
                className="w-full h-96 object-cover brightness-75"
              />

              {/* <motion.img
                src={CRICKET_BALL_SVG}
                alt="cricket ball"
                className="absolute left-0 top-12 w-16 h-16"
                animate={{
                  x: [-200, 220],
                  y: [0, -50, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "linear",
                }}
              /> */}

              <div className="absolute bottom-4 left-4 bg-gradient-to-r from-[#D4AF37] to-yellow-400 text-black px-4 py-2 rounded-full font-semibold shadow-md">
                Premium Matches
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* ABOUT */}
      <About />
      <MissionSection />
      <ContactSection />
      <CricketCTA />

      <Footer />
      {/* FOOTER */}
     

    </div>
  );
}

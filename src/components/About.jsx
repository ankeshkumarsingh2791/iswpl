import React from 'react'
import { motion } from "framer-motion";

const GALLERY_1 =
  "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=1000&q=60&auto=format&fit=crop";
const GALLERY_2 =
  "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&q=60&auto=format&fit=crop";

const About = () => {
  return (
    <section id="about" className="py-16 bg-[#0F5132] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-10 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold text-[#D4AF37]">About ISWPL</h2>
              <p className="mt-4 text-gray-200">
                HISTORY IN THE MAKING: ISWPL is India's FIRST-EVER national-level single-wicket league. Scale & Structure: The league will feature a massive 128 TEAMS scouted from 8 ZONES across India (16 teams per zone). It redefines underarm cricket, creating a new professional pathway for raw talent.
              </p>

              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-black flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <div>
                    <div className="font-semibold">Talent Development</div>
                    <div className="text-sm text-gray-300">
                      Coaching clinics & scouting opportunities
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-black flex items-center justify-center font-bold">
                    ★
                  </div>
                  <div>
                    <div className="font-semibold">Premium Broadcasts</div>
                    <div className="text-sm text-gray-300">
                      Live match coverage & highlights
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <img
                src="/Stadium.jpg"
                alt="players"
                className="rounded-2xl w-full h-72 object-cover shadow-lg"
              />
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/Resing.jpg"
                  alt="field"
                  className="rounded-xl h-60 w-60 object-fit"
                />
                <img
                  src="Logo.jpg"
                  alt="fans"
                  className="rounded-xl h-60 w-full object-fit"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
  )
}

export default About
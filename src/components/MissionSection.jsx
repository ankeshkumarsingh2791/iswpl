import React from "react";
import { motion } from "framer-motion";
import { Target, MapPin, Users } from "lucide-react";

const MissionSection = () => {
  return (
    <section className="py-20 bg-[#0F5132] text-white relative overflow-hidden">
      {/* Gold Shimmer Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F5132] via-[#0F5132]/90 to-black/70"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#D4AF37]/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 z-10">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Our <span className="text-[#D4AF37]">Mission</span>
          </h2>
          <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
            Building India’s largest platform for emerging women cricketers —
            empowering talent, promoting inclusivity, and inspiring a new
            generation of champions.
          </p>
        </motion.div>

        {/* Content Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Structure & Reach */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-[#0F5132]/80 border border-[#D4AF37]/30 shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-[#D4AF37] rounded-xl text-black">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-semibold text-[#D4AF37]">
                Structure & Reach
              </h3>
            </div>
            <p className="text-gray-200 leading-relaxed">
              <span className="font-semibold text-[#D4AF37]">Pan-India Footprint:</span> 
              The tournament spans <strong>8+ venues</strong> across the nation
              in a structured, phased format — Regional, Zonal, and National
              Finals. This large-scale reach ensures massive exposure and
              grassroots growth.
            </p>
          </motion.div>

          {/* Empowerment Through Sport */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-[#0F5132]/80 border border-[#D4AF37]/30 shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-[#D4AF37] rounded-xl text-black">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-semibold text-[#D4AF37]">
                Empowerment Through Sport
              </h3>
            </div>
            <p className="text-gray-200 leading-relaxed">
              We focus on <strong>Grassroots & Underprivileged Youth Development</strong>.
              Each player gains access to structured training, a national
              platform, financial stipends based on performance, and professional
              scouting under the{" "}
              <span className="italic text-[#D4AF37]">
                “Kon Hoga Desh ka Champion?”
              </span>{" "}
              initiative.
            </p>
          </motion.div>

          {/* Future Expansion */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-[#0F5132]/80 border border-[#D4AF37]/30 shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-[#D4AF37] rounded-xl text-black">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-semibold text-[#D4AF37]">
                The Vision Ahead
              </h3>
            </div>
            <p className="text-gray-200 leading-relaxed">
              Our goal is to evolve ISWPL into a{" "}
              <strong>global youth cricket ecosystem</strong> — connecting
              players, coaches, and sponsors on one unified platform to build
              champions for tomorrow.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;

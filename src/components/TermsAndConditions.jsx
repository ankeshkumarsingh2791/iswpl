import React from "react";
import { motion } from "framer-motion";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function TermsAndConditions() {
  return (
    <div className="bg-[#0F5132] text-white font-sans overflow-x-hidden">
      {/* NAVBAR */}
      <NavBar />

      {/* HEADER SECTION */}
      <header className="relative h-64 flex items-center justify-center overflow-hidden">
        <img
          src="/Herom.jpg"
          alt="Terms background"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.3]"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-4xl md:text-5xl font-extrabold text-[#D4AF37]"
        >
          Terms & Conditions
        </motion.h1>
      </header>

      {/* CONTENT SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="max-w-5xl mx-auto px-6 py-16"
      >
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-[#D4AF37]/20 shadow-2xl">
          {/* ⚖️ LEGAL NOTE */}
          <h2 className="text-2xl font-bold text-[#D4AF37] mb-3">⚖️ Legal Note</h2>
          <p className="text-gray-200 mb-4">
            This Privacy Policy complies with the <strong>Information Technology Act, 2000 (India)</strong> and applicable data protection regulations.
          </p>

          {/* DISCLAIMER */}
          <h2 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-3">Disclaimer – ISWPL (Indian Single Wicket Premier League)</h2>
          <p className="text-gray-200 mb-4">
            The information provided on the <strong>ISWPL (Indian Single Wicket Premier League)</strong> website — organized by <strong>Rising Entertainment Events</strong> — is for general informational and promotional purposes only.
          </p>
          <p className="text-gray-200 mb-4">
            While we make every effort to keep the information up to date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or availability of the website or the information, products, services, or related graphics contained on the website for any purpose.
          </p>
          <p className="text-gray-200 mb-4">
            Any reliance you place on such information is therefore strictly at your own risk.
          </p>

          {/* 🏏 EVENT & PARTICIPATION */}
          <h2 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-3">🏏 Event & Participation</h2>
          <p className="text-gray-200 mb-4">
            ISWPL reserves the right to make changes to event schedules, venues, rules, or terms without prior notice.
          </p>
          <p className="text-gray-200 mb-4">
            Participation in ISWPL trials or matches is subject to verification, eligibility, and acceptance by the organizers.
          </p>
          <p className="text-gray-200 mb-4">
            <strong>Rising Entertainment Events</strong> and its associates (including <strong>KAAF Films Pvt. Ltd.</strong>) shall not be held responsible for any injury, loss, or damages during or after the event.
          </p>

          {/* 💳 PAYMENTS */}
          <h2 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-3">💳 Payments</h2>
          <p className="text-gray-200 mb-4">
            All registration and franchise fees are non-refundable unless otherwise stated in the Refund Policy.
          </p>
          <p className="text-gray-200 mb-4">
            Payment gateway partners (like <strong>Razorpay</strong>) are third-party service providers, and Rising Entertainment Events is not liable for any technical failures, delays, or transaction issues occurring on their platforms.
          </p>

          {/* 🌐 EXTERNAL LINKS */}
          <h2 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-3">🌐 External Links</h2>
          <p className="text-gray-200 mb-4">
            Through this website, you may be able to link to other websites which are not under the control of Rising Entertainment Events or ISWPL.
          </p>
          <p className="text-gray-200 mb-4">
            We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
          </p>

          {/* 🛡️ LIMITATION OF LIABILITY */}
          <h2 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-3">🛡️ Limitation of Liability</h2>
          <p className="text-gray-200 mb-4">
            Under no circumstances shall Rising Entertainment Events, ISWPL, or any of its partners, associates, or representatives be held liable for any loss or damage — including indirect or consequential loss — arising out of or in connection with the use of this website or participation in ISWPL events.
          </p>

          {/* 📞 CONTACT US */}
          <h2 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-3">📞 Contact Us</h2>
          <p className="text-gray-200 mb-2">
            For any clarification or support, please reach out to:
          </p>
          <div className="text-gray-100 space-y-1">
            <p>📧 <a href="mailto:info@iswpl.in" className="text-[#D4AF37] underline">info@iswpl.in</a></p>
            <p>📞 +91 8595463139</p>
            <p>🏢 Rising Entertainment Events</p>
          </div>
        </div>
      </motion.section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

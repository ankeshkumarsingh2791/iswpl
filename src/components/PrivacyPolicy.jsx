import React from "react";
import { motion } from "framer-motion";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#0F5132] text-white font-sans overflow-x-hidden">
      {/* NAVBAR */}
      <NavBar />

      {/* HEADER SECTION */}
      <header className="relative h-64 flex items-center justify-center overflow-hidden">
        <img
          src="/Herom.jpg"
          alt="Privacy background"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.3]"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-4xl md:text-5xl font-extrabold text-[#D4AF37]"
        >
          Privacy Policy
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
          {/* 1. INTRODUCTION */}
          <h2 className="text-2xl font-bold text-[#D4AF37] mb-3">1. Introduction</h2>
          <p className="text-gray-200 mb-4">
            Welcome to <strong>ISWPL (Indian Single Wicket Premier League)</strong>, organized by{" "}
            <strong>Rising Entertainment Events</strong>. We respect your privacy and are
            committed to protecting your personal information. This Privacy Policy explains how
            we collect, use, and safeguard your data when you visit our website or register for ISWPL tournaments.
          </p>

          {/* 2. INFORMATION WE COLLECT */}
          <h2 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-3">2. Information We Collect</h2>
          <ul className="list-disc ml-6 text-gray-200 space-y-1">
            <li>Full Name</li>
            <li>Contact Number</li>
            <li>Email Address</li>
            <li>Address / City / State</li>
            <li>Player Details (Age, Team, Playing Role, etc.)</li>
            <li>Payment Details (processed via secure gateway)</li>
            <li>Any other information you provide during registration or communication.</li>
          </ul>

          {/* 3. HOW WE USE INFORMATION */}
          <h2 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-3">3. How We Use Your Information</h2>
          <ul className="list-disc ml-6 text-gray-200 space-y-1">
            <li>Process player registrations and tournament entries</li>
            <li>Verify eligibility for ISWPL participation</li>
            <li>Send updates, match schedules, and announcements</li>
            <li>Process payments and issue receipts</li>
            <li>Improve website experience and communication</li>
          </ul>

          {/* 4. DATA SECURITY */}
          <h2 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-3">4. Data Security</h2>
          <p className="text-gray-200 mb-4">
            We take appropriate security measures to protect your personal data from unauthorized
            access or misuse. All online payments are processed through secure, RBI-approved payment
            gateways. We never store your card or bank details on our servers.
          </p>

          {/* 5. DATA SHARING */}
          <h2 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-3">5. Data Sharing</h2>
          <p className="text-gray-200 mb-4">
            We do not sell or rent your personal information. However, your data may be shared
            with our official partners, franchise teams, or event associates (like{" "}
            <strong>KAAF Films Pvt. Ltd.</strong>) only for operational or promotional purposes
            related to ISWPL.
          </p>

          {/* 6. COOKIES */}
          <h2 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-3">6. Cookies</h2>
          <p className="text-gray-200 mb-4">
            Our website may use cookies to enhance your experience and track analytics. You can
            disable cookies through your browser settings at any time.
          </p>

          {/* 7. THIRD-PARTY LINKS */}
          <h2 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-3">7. Third-Party Links</h2>
          <p className="text-gray-200 mb-4">
            Our website may contain links to external sites (e.g., payment gateways or sponsors).
            We are not responsible for their privacy practices and recommend reviewing their
            privacy policies separately.
          </p>

          {/* 8. CONSENT */}
          <h2 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-3">8. Consent</h2>
          <p className="text-gray-200 mb-4">
            By using our website and submitting your data, you consent to this Privacy Policy and
            agree to its terms.
          </p>

          {/* 9. CONTACT US */}
          <h2 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-3">9. Contact Us</h2>
          <p className="text-gray-200">
            If you have any questions or requests related to this Privacy Policy, please contact us at:
          </p>
          <div className="mt-3 text-gray-100 space-y-1">
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

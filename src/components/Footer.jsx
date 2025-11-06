import React from "react";
import { Instagram, Twitter, Youtube, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      
      {/* Footer Section */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-12 md:py-16">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div
                  aria-hidden
                  className="w-12 h-12 rounded-md bg-gradient-to-br from-[#D4AF37] to-yellow-400 flex items-center justify-center shadow-md"
                >
                  <img src="/Logo.jpg" className="rounded-full" />
                </div>

                <div>
                  <div className="text-xl font-extrabold text-[#D4AF37]">
                    ISWPL
                  </div>
                  <div className="text-xs text-gray-200">
                    Indian Single Wicket Premier League
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-200 max-w-sm leading-relaxed">
                Building future champions — promoting grassroots  cricket
                across India with premium events, training and opportunity.
              </p>

              <div className="flex items-center gap-3">
                <a
                  href=" https://www.instagram.com/iswpl_official?igsh=bjZnN2piOGZhY3R1"
                  target="_blank"
                  aria-label="Follow on Instagram"
                  className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition"
                >
                  <Instagram size={18} />
                </a>
               
                <a
                  href=" https://youtube.com/@iswpl?si=J_RSILb1We9ggCbh"
                  target="_blank"
                  aria-label="Follow on YouTube"
                  className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition"
                >
                  <Youtube size={18} />
                </a>
               
              </div>
            </div>

            {/* Quick Links */}
            <nav aria-label="Footer Navigation">
              <h3 className="text-sm font-semibold text-[#D4AF37] mb-4">
                Explore
              </h3>
              <ul className="grid grid-cols-2 gap-2 text-sm text-gray-200">
                <li>
                  <a className="hover:text-white transition" href="#about">
                    About
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition" href="#teams">
                    Teams
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition" href="#schedule">
                    Schedule
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition" href="#gallery">
                    Gallery
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition" href="#contact">
                    Contact
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition" href="#sponsors">
                    Sponsors
                  </a>
                </li>
              </ul>
            </nav>

            {/* Newsletter */}
            <div>
              <h3 className="text-sm font-semibold text-[#D4AF37] mb-4">
                Powered by
              </h3>
              <p className="text-sm text-gray-200 mb-4">
                 RISING ENTERTAINMENT EVENTS
              </p>

              <div>
                <img className="w-60 h-60" src="Resing.jpg" />
              </div>

             
            </div>
          </div>

          {/* Sponsors */}
            {/* <div className="mt-10 border-t border-white/10 pt-8">
                <h4 className="text-sm font-semibold text-[#D4AF37] mb-4">
                Sponsors
                </h4>
                <div className="flex gap-4 items-center overflow-x-auto pb-2">
                {["Sponsor A", "Sponsor B", "Sponsor C", "Sponsor D"].map(
                    (s, i) => (
                    <div
                        key={i}
                        className="flex-none w-32 h-16 rounded-lg bg-white/5 flex items-center justify-center text-sm text-gray-200"
                    >
                        {s}
                    </div>
                    )
                )}
                </div>
            </div> */}

          {/* Bottom Legal Section */}
          <div className="mt-8 md:mt-10 border-t border-white/10 pt-6 flex flex-col md:flex-row md:items-center md:justify-center gap-4">
            <div className="text-sm text-gray-300">
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-[#D4AF37]">ISWPL</span>. Rising Entertainment Events. All rights reserved.
              <div className="mt-2 text-xs text-gray-400">
                <Link className="hover:text-[#D4AF37]" to={"/terms-and-conditions"}>Terms & Conditions</Link>   • <Link target="_top" className="hover:text-[#D4AF37]" to={"/privacy-policy"}>Privacy Policy</Link> • Accessibility
                  
              </div>
            </div>

          
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

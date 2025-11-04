import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative bg-cover bg-center py-20 px-6 md:px-16"
      style={{
        backgroundImage:
          "url('Stadium2.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

      <div className="relative max-w-6xl mx-auto text-white z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
         Let’s Build the Next Big Innings Together 🏆
        </h2>
        <p className="text-center text-gray-300 mb-12">
          ISWPL is here to turn your passion into action — let’s build the next big innings together!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-semibold mb-6 text-center text-white">
              Get In Touch
            </h3>
            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-white/20 border border-white/30 rounded-xl p-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-white/20 border border-white/30 rounded-xl p-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="tel"
                placeholder="Your Phone Number"
                className="bg-white/20 border border-white/30 rounded-xl p-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="bg-white/20 border border-white/30 rounded-xl p-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 transition-all text-white py-3 rounded-xl font-semibold"
              >
                Send Message ✉️
              </button>
            </form>
          </div>

          {/* Social & Info */}
          <div className="flex flex-col justify-center items-center text-center bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-semibold mb-4">Connect With Us</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Stay tuned with ISWPL for updates, collaborations, and innovation stories that inspire change.  
              Join our community on social media.
            </p>

            <div className="flex space-x-6 text-2xl">
             
              <a
                 target="_blank"
                  rel="noopener noreferrer"
                href=" https://www.instagram.com/iswpl_official?igsh=bjZnN2piOGZhY3R1"
                className="p-3 bg-white/20 hover:bg-white/40 rounded-full transition-all"
              >
                <FaInstagram />
              </a>
              <a
               target="_blank"
                rel="noopener noreferrer"
                href=" https://youtube.com/@iswpl?si=J_RSILb1We9ggCbh"
                className="p-3 bg-white/20 hover:bg-white/40 rounded-full transition-all"
              >
                <FaYoutube />
              </a>
             
            </div>

            <div className="mt-8 text-gray-800 text-sm">
              <p>Email: info@iswpl.in</p>
              <p>Phone:  +91 8595463139</p>
              <p>Location: Rising Entertainment Events</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

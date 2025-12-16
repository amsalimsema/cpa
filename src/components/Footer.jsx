'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white font-nunito">
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-12 justify-between">
        {/* Logo + Reassurance */}
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-indigo-600">CA Firm</h1>
          <p className="text-gray-300">
            Trusted by businesses and individuals across the country
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1 flex flex-col gap-4">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-gray-300">
            <li>
              <a href="#home" className="hover:text-indigo-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-indigo-500 transition">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-indigo-500 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-indigo-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div className="flex-1 flex flex-col gap-4">
          <h3 className="text-lg font-semibold mb-2">Socials</h3>
          <ul className="flex flex-col gap-2 text-gray-300">
            <li>
              <a href="#" className="hover:text-indigo-500 transition">
                Linkedin
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-500 transition">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-500 transition">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-500 transition">
                X (Formerly Twitter)
              </a>
            </li>
          </ul>
        </div>

        {/* Say Hello */}
        <div className="flex-1 flex flex-col gap-2">
          <h3 className="text-lg font-semibold mb-2">Say Hello</h3>
          <p className="text-gray-300">
            ✉{' '}
            <a
              href="mailto:info@cafirm.com"
              className="hover:text-indigo-500 transition"
            >
              info@cafirm.com
            </a>
          </p>
          <p className="text-gray-300">
            📞{' '}
            <a
              href="tel:+1234567890"
              className="hover:text-indigo-500 transition"
            >
              +1 234 567 890
            </a>
          </p>
        </div>
      </div>

      {/* Bottom copyright / separator */}
      <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} CA Firm. All rights reserved.
      </div>
    </footer>
  );
}

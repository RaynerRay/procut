import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const exploreLinks = [
    { title: "Home", href: "#" },
    { title: "About Us", href: "about" },
    { title: "Services", href: "services" },
    { title: "Previous Work", href: "work" },
    { title: "Contacts", href: "contact" },
  ];

  const socialLinks = [
    { Icon: Facebook, href: "#" },
    { Icon: Instagram, href: "#" },
    { Icon: Twitter, href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-orange-400 p-2">
                <div className="w-4 h-4 border-2 border-gray-900" />
              </div>
              <span className="text-white text-2xl font-bold">ProCut</span>
            </div>

            <p className="text-gray-400">
              Our team of seasoned professionals boasting extensive industry
              experience, we possess a deep understanding of our clients' needs.
              Our commitment to delivering high-quality products, coupled with
              our dedication to customer satisfaction, sets us apart in the
              industry.
            </p>

            <div className="flex gap-4">
              {socialLinks.map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="bg-orange-400 p-2 hover:bg-orange-500 transition-colors"
                >
                  <Icon className="w-5 h-5 text-gray-900" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore Links */}
          <div className="md:px-8">
            <h3 className="text-orange-400 text-xl font-bold mb-6">Explore</h3>
            <ul className="space-y-4">
              {exploreLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 hover:text-orange-400 transition-colors"
                  >
                    <span className="text-orange-400">+</span>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-orange-400 text-xl font-bold mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-1" />
                <div>
                  <div className="font-medium text-white">Address</div>
                  <div>59 Kelvin Road South, Graniteside, Harare, Zimbabwe</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-orange-400 mt-1" />
                <div>
                  <div className="font-medium text-white">Phone:</div>
                  <div>+263 78 519 4445</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-orange-400 mt-1" />
                <div>
                  <div className="font-medium text-white">Email:</div>
                  <div>procutmetalfab@gmail.com</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-wrap justify-between items-center gap-4">
          <div>
            © All Rights Reserved - 2025 - Website by
            {/* <span className="text-orange-400"></span> */}
            <Link href="https://www.linkedin.com/in/godfrey-rayner-96b81965/" target="_blank" className="text-orange-400 hover:underline ml-1">
              Godfrey Rayner
            </Link>
          </div>
          <a
            href="#top"
            className="bg-orange-400 p-3 rounded-full hover:bg-orange-500 transition-colors"
          >
            <div className="w-4 h-4 border-2 border-gray-900 rotate-45 border-b-0 border-r-0" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

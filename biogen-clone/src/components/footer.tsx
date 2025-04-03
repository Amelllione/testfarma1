import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f5] pt-16 pb-8">
      <div className="container-biogen">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and About */}
          <div className="lg:col-span-2">
            <Link href="/">
              <Image
                src="https://ext.same-assets.com/3893086323/330619687.svg"
                alt="Biogen Logo"
                width={120}
                height={40}
                className="h-10 w-auto mb-6"
              />
            </Link>
            <p className="text-gray-600 mb-6 max-w-md">
              Biogen is a leading global biotechnology company that pioneers science and drives innovations for complex and devastating diseases.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/Biogen/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#0077c8]">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/biogen" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#0077c8]">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/biogen/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#0077c8]">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/channel/UCc1fXF7uZWNkRf1Q-C78Pgg" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#0077c8]">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/biogen/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#0077c8]">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/company/about-us" className="text-gray-600 hover:text-[#0077c8]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/company/leadership" className="text-gray-600 hover:text-[#0077c8]">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="/company/locations" className="text-gray-600 hover:text-[#0077c8]">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/company/contact" className="text-gray-600 hover:text-[#0077c8]">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Science & Innovation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/science/research" className="text-gray-600 hover:text-[#0077c8]">
                  Research Areas
                </Link>
              </li>
              <li>
                <Link href="/science/pipeline" className="text-gray-600 hover:text-[#0077c8]">
                  Pipeline
                </Link>
              </li>
              <li>
                <Link href="/science/clinical-trials" className="text-gray-600 hover:text-[#0077c8]">
                  Clinical Trials
                </Link>
              </li>
              <li>
                <Link href="/science/publications" className="text-gray-600 hover:text-[#0077c8]">
                  Publications
                </Link>
              </li>
            </ul>
          </div>

          {/* Additional Links */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/resources/media" className="text-gray-600 hover:text-[#0077c8]">
                  Media Center
                </Link>
              </li>
              <li>
                <Link href="/resources/events" className="text-gray-600 hover:text-[#0077c8]">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/investor-relations" className="text-gray-600 hover:text-[#0077c8]">
                  Investors
                </Link>
              </li>
              <li>
                <Link href="/suppliers" className="text-gray-600 hover:text-[#0077c8]">
                  Suppliers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Biogen Inc. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link href="/privacy-policy" className="text-gray-500 hover:text-[#0077c8]">
                Privacy Policy
              </Link>
              <Link href="/terms-of-use" className="text-gray-500 hover:text-[#0077c8]">
                Terms of Use
              </Link>
              <Link href="/cookie-policy" className="text-gray-500 hover:text-[#0077c8]">
                Cookie Policy
              </Link>
              <Link href="/site-map" className="text-gray-500 hover:text-[#0077c8]">
                Site Map
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

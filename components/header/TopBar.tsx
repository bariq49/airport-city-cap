"use client";
import { ClientSideStrings } from "../translations/ClientSideTranslations";
import { MdEmail } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import CustomButton from "../customButton/Button";
import { LanguageSelector } from "./LanguageSelector";

export default function TopBar() {
  const { topbar } = ClientSideStrings();

  return (
    <div className="bg-secondary border-t-2 border-purple-800">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 text-primary font-semibold text-[15px]">
        
        <div className="flex items-center">
          {/* Mobile Social Icons */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="https://web.facebook.com/profile.php?id=61575090688352&mibextid=wwXIfr&rdid=pxBA3t12se2UPkJT"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://www.instagram.com/taxigate.nl/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://wa.me/31853332629"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="w-6 h-6"
              />
            </a>
          </div>
          
          {/* Contact info - hidden on mobile */}
          <div className="hidden md:flex items-center gap-8">
            {/* Phone */}
            <a href="tel:+31(0)85 333 26 29" className="flex items-center gap-2 text-textColor transition-colors">
              {/* Use a phone emoji or keep your react icon */}
              <span role="img" aria-label="Phone" className="text-textColor">📞</span>
              <span>+31(0)85 333 26 29</span>
            </a>

            {/* Whatsapp */}
            <a href="https://wa.me/31853332629" target="_blank" className="flex items-center gap-2 text-textColor transition-colors">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="w-6 h-6"
                
              />
              <span>{topbar.whatsapp}</span>
            </a>

            {/* Email */}
            <a href="mailto:info@taxigate.nl" className="flex items-center gap-2 text-textColor transition-colors">
              <MdEmail className="text-textColor" />
              <span>info@taxigate.nl</span>
            </a>
          </div>
        </div>

        {/* Middle Section - Language Selector (only on desktop) */}
        <div className="hidden md:block">
          <LanguageSelector />
        </div>
        
        {/* Right Section */}
        <div className="flex items-center justify-center gap-2 md:gap-8">
          {/* Language Selector (only on mobile) */}
          <div className="block md:hidden">
            <LanguageSelector />
          </div>

          {/* Login Button - hidden on mobile */}
          <div className="hidden md:block">
            <CustomButton leftIcon={<FiUser />} className="bg-primary text-secondary">
              <span>{topbar.login}</span>
            </CustomButton>
          </div>

          {/* Social Icons - only on desktop */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://web.facebook.com/profile.php?id=61575090688352&mibextid=wwXIfr&rdid=pxBA3t12se2UPkJT"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://wa.me/31853332629"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="w-8 h-8"
              />
            </a>
            <a
              href="https://www.instagram.com/taxigate.nl/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

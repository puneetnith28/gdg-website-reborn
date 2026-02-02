"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react"; // Import X icon for Close button
import navlinks from "./navlinks";
import { cn } from "../../lib/utils";

// Social Icons - You can replace these with actual icons if available in your lib
import { IconBrandInstagram, IconBrandTwitter, IconBrandFacebook, IconBrandMedium, IconBrandGithub, IconBrandYoutube } from "@tabler/icons-react";


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      {/* Top Navbar Strip */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 pointer-events-none"
      >
        {/* Left Side: Logo + Brand Name */}
        <Link href="/" className="pointer-events-auto flex items-center gap-4 group">
          <div className="relative w-10 h-10">
             {/* Using the asset found in public/assets/gdg_logo.gif */}
             <Image 
               src="/assets/gdgLogo.gif" 
               alt="GDG Logo" 
               fill
               className="object-contain" // Keep aspect ratio
             />
          </div>
          <div className="border border-neutral-700 bg-black/50 backdrop-blur-md dark:border-neutral-700 rounded-full px-4 py-1.5 transition-colors group-hover:bg-neutral-900/80">
            <span className="text-white font-medium text-sm tracking-wide">
              GDG-NITH
            </span>
          </div>
        </Link>

        {/* Center: Social Icons (Hidden on mobile) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 pointer-events-auto gap-4">
           {/* Reusing SocialLink but slightly smaller or just icons */}
           <a href="#" className="text-white/70 hover:text-white transition-colors"><IconBrandInstagram className="w-5 h-5" /></a>
           <a href="#" className="text-white/70 hover:text-white transition-colors"><IconBrandTwitter className="w-5 h-5" /></a>
           <a href="#" className="text-white/70 hover:text-white transition-colors"><IconBrandGithub className="w-5 h-5" /></a>
           <a href="#" className="text-white/70 hover:text-white transition-colors"><IconBrandYoutube className="w-5 h-5" /></a>
           <a href="#" className="text-white/70 hover:text-white transition-colors"><IconBrandMedium className="w-5 h-5" /></a>
        </div>

        {/* Right Side: Menu Button */}
        <button 
          onClick={() => setIsOpen(true)}
          className="pointer-events-auto border border-white/20 bg-black/50 backdrop-blur-md text-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300"
        >
          Menu
        </button>
      </motion.div>

      {/* Full Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-xl flex flex-col"
          >
            {/* Overlay Header (Logo + Close Button) */}
            <div className="flex items-center justify-between px-6 py-6 md:px-12">
               <div className="flex items-center gap-4">
                  <div className="relative w-10 h-10">
                     <Image 
                       src="/assets/gdgLogo.gif" 
                       alt="GDG Logo" 
                       fill
                       className="object-contain"
                     />
                  </div>
                   <div className="border border-white/20 rounded-full px-4 py-1.5">
                    <span className="text-white font-medium text-sm tracking-wide">
                      GDG-NITH
                    </span>
                  </div>
               </div>

               <button 
                  onClick={() => setIsOpen(false)}
                  className="border border-white/20 text-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2"
                >
                  Close
                </button>
            </div>

            {/* Content Container */}
            <div className="flex-1 flex flex-col md:flex-row max-w-7xl mx-auto w-full p-6 md:p-12">
              
              {/* Left Column: Navigation Links */}
              <div className="flex-1 flex flex-col justify-center space-y-4 md:space-y-6">
                {navlinks.map((link, idx) => {
                  const googleColors = [
                    "#4285F4", // Blue
                    "#EA4335", // Red
                    "#FBBC05", // Yellow
                    "#34A853"  // Green
                  ];
                  const hoverColor = googleColors[idx % 4];

                  return (
                    <motion.div
                      key={link.text}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -50, opacity: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05, duration: 0.4 }}
                    >
                      <Link 
                        href={link.to} 
                        onClick={() => setIsOpen(false)}
                        className="text-4xl md:text-6xl font-bold text-neutral-400 hover:text-[var(--hover-color)] transition-colors duration-300 block w-max"
                        style={{ "--hover-color": hoverColor } as React.CSSProperties}
                      >
                        {link.text}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Right Column: Info & Socials (Hidden on small mobile if needed, or stacked) */}
              <div className="flex-1 flex flex-col justify-center items-start md:items-end mt-12 md:mt-0 text-left md:text-right">
                
                <motion.div
                   initial={{ y: 20, opacity: 0 }}
                   animate={{ y: 0, opacity: 1 }}
                   transition={{ delay: 0.4 }}
                   className="mb-12"
                >
                   <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase leading-tight">
                     We Are <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-red-400 to-yellow-400">GDG-NITH</span>
                   </h2>
                   <p className="text-neutral-400 text-sm md:text-base max-w-md ml-auto leading-relaxed">
                     We think slightly out of the box, we believe that a club's resources must not only be channeled into conducting events but also to propagate learning and teaching, symbiotically.
                   </p>
                </motion.div>

                <motion.div
                   initial={{ y: 20, opacity: 0 }}
                   animate={{ y: 0, opacity: 1 }}
                   transition={{ delay: 0.5 }}
                   className="flex gap-4"
                >
                  {/* Social Icons Placeholder */}
                   <SocialLink href="#" icon={<IconBrandInstagram className="w-6 h-6" />} />
                   <SocialLink href="#" icon={<IconBrandTwitter className="w-6 h-6" />} />
                   <SocialLink href="#" icon={<IconBrandGithub className="w-6 h-6" />} />
                   <SocialLink href="#" icon={<IconBrandYoutube className="w-6 h-6" />} />
                   <SocialLink href="#" icon={<IconBrandMedium className="w-6 h-6" />} />
                </motion.div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => {
  return (
    <a 
      href={href}
      className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-600 transition-all"
    >
      {icon}
    </a>
  );
};

// Exporting these as empty components to prevent breaking existing imports in other files if any
// But optimally we should remove their usage.
export const NavBody = ({ children }: { children: React.ReactNode }) => <>{children}</>;
export const NavItems = ({ items }: { items: any[] }) => <></>;
export const MobileNav = () => <></>; // Placeholder

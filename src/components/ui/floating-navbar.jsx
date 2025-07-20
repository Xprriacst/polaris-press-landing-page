import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import CompassLogo from "./compass-logo";

export const FloatingNav = ({
  navItems,
  className,
  onContactClick
}) => {
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-[95%] sm:max-w-fit fixed top-4 sm:top-6 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-4 sm:px-6 py-2 items-center justify-between sm:justify-center space-x-2 sm:space-x-4",
          className
        )}
      >
        {/* Logo + nom visible sur mobile */}
        <div className="flex sm:hidden items-center space-x-2">
          <CompassLogo className="h-6 w-6 text-blue-600" />
          <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Polaris IA
          </span>
        </div>
        
        {/* Menu icon visible on mobile */}
        <button 
          className="flex sm:hidden items-center p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-5 w-5 text-neutral-600 dark:text-neutral-50" />
          ) : (
            <Menu className="h-5 w-5 text-neutral-600 dark:text-neutral-50" />
          )}
        </button>
        
        {/* Navigation items - hidden on mobile, visible on desktop */}
        <div className="hidden sm:flex items-center space-x-4">
          {navItems.map((navItem, idx) => (
            <a
              key={`link-${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </a>
          ))}
        </div>
        
        <button
          className="hidden sm:block border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full"
          onClick={onContactClick}
        >
          <span>Contact</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </button>
      </motion.div>
      
      {/* Menu mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-4 right-4 bg-white dark:bg-black border border-neutral-200 dark:border-white/[0.2] rounded-2xl shadow-lg z-[5000] sm:hidden"
          >
            <div className="p-4 space-y-3">
              {navItems.map((navItem, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={navItem.link}
                  className="block px-4 py-3 text-neutral-600 dark:text-neutral-50 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {navItem.name}
                </a>
              ))}
              <button
                className="w-full text-left px-4 py-3 text-neutral-600 dark:text-neutral-50 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
                onClick={() => {
                  onContactClick();
                  setIsMenuOpen(false);
                }}
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  );
};


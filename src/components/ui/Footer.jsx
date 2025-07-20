import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => (
  <footer className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-4 gap-8 mb-12">
        {/* Logo et description */}
        <div className="md:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-white">
              Polaris IA
            </h3>
            <p className="text-blue-100 mb-6 text-lg max-w-md">
              L'intelligence artificielle générative au service des rédactions. Formations, audits et accompagnement pour une IA éthique et efficace.
            </p>
            <div className="flex space-x-4">
              <button className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/20">
                Contact
              </button>
              <button className="px-6 py-3 bg-white text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 font-semibold">
                Nos formations
              </button>
            </div>
          </motion.div>
        </div>

        {/* Services */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3 text-blue-100">
              <li><a href="#services" className="hover:text-white transition-colors">Audit IA</a></li>
              <li><a href="#formations" className="hover:text-white transition-colors">Formations IA</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Accompagnement</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Formation sur mesure</a></li>
            </ul>
          </motion.div>
        </div>

        {/* Informations */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-6 text-white">Informations</h4>
            <ul className="space-y-3 text-blue-100">
              <li><a href="#about" className="hover:text-white transition-colors">Nos engagements</a></li>
              <li><a href="#references" className="hover:text-white transition-colors">Nos références</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Séparateur et copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="border-t border-white/20 pt-8"
      >
        <div className="flex flex-col md:flex-row justify-between items-center text-blue-100">
          <p>© 2024 Polaris IA. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">CGV</a>
          </div>
        </div>
      </motion.div>
    </div>
  </footer>
);

export default Footer;

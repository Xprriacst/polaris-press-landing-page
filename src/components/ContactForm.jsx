import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, MessageSquare, Phone } from 'lucide-react';
import { Button } from './ui/moving-border';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    console.log('Form submitted:', formData);
    alert('Votre message a été envoyé avec succès !');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 shadow-lg"
    >
      <h3 className="text-3xl font-bold mb-8 text-white text-center">Contactez-nous</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">
            <User className="inline-block h-4 w-4 mr-2 text-blue-400" />
            Nom complet
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none border border-gray-600 rounded w-full py-3 px-4 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-700/50"
            placeholder="Votre nom"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">
            <Mail className="inline-block h-4 w-4 mr-2 text-purple-400" />
            Adresse email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none border border-gray-600 rounded w-full py-3 px-4 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-700/50"
            placeholder="votre.email@example.com"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-gray-300 text-sm font-bold mb-2">
            <Phone className="inline-block h-4 w-4 mr-2 text-cyan-400" />
            Numéro de téléphone (optionnel)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="shadow appearance-none border border-gray-600 rounded w-full py-3 px-4 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-700/50"
            placeholder="Votre numéro"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">
            <MessageSquare className="inline-block h-4 w-4 mr-2 text-green-400" />
            Votre message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="shadow appearance-none border border-gray-600 rounded w-full py-3 px-4 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-700/50"
            placeholder="Décrivez votre besoin ou votre question..."
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            type="submit"
          >
            Envoyer le message
          </Button>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;


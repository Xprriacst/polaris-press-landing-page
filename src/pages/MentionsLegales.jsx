import React from 'react';
import { motion } from 'framer-motion';
import { FloatingNav } from '../components/ui/floating-navbar';
import Footer from '../components/ui/Footer';

const MentionsLegales = () => {
  const navItems = [
    { name: "Accueil", link: "/" },
    { name: "Services", link: "/#services" },
    { name: "Formations", link: "/#formations" },
    { name: "Contact", link: "/#contact" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <FloatingNav navItems={navItems} />
      
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Mentions Légales
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Éditeur du site</h2>
              <p>
                Le site Polaris IA est édité par :
              </p>
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <p>
                  <strong>KANRA Publishing</strong><br/>
                  Société éditrice de Polaris IA<br/>
                  Spécialisée dans la formation et l'accompagnement en intelligence artificielle générative
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Directeur de publication</h2>
              <p>
                Le directeur de publication du site est le représentant légal de KANRA Publishing.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Hébergement</h2>
              <p>
                Le site est hébergé par Netlify, Inc.<br/>
                Adresse : 2325 3rd Street, Suite 296, San Francisco, CA 94107, États-Unis
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Propriété intellectuelle</h2>
              <p>
                L'ensemble du contenu de ce site (textes, images, vidéos, logos, etc.) est protégé par le droit d'auteur 
                et appartient à KANRA Publishing ou à ses partenaires. Toute reproduction, même partielle, 
                est interdite sans autorisation préalable écrite.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Données personnelles</h2>
              <p>
                Les informations recueillies via les formulaires de contact sont destinées exclusivement à KANRA Publishing 
                pour le traitement de vos demandes. Conformément au RGPD, vous disposez d'un droit d'accès, 
                de rectification et de suppression de vos données personnelles.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Cookies</h2>
              <p>
                Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. 
                Aucun cookie de traçage publicitaire n'est utilisé sans votre consentement.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Responsabilité</h2>
              <p>
                KANRA Publishing s'efforce de fournir des informations exactes et à jour sur ce site. 
                Cependant, elle ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Liens externes</h2>
              <p>
                Ce site peut contenir des liens vers des sites externes. KANRA Publishing n'exerce aucun contrôle 
                sur ces sites et décline toute responsabilité quant à leur contenu.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Droit applicable</h2>
              <p>
                Les présentes mentions légales sont soumises au droit français. 
                Tout litige sera soumis à la compétence des tribunaux français compétents.
              </p>

              <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Date de dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}<br/>
                  <strong>Contact :</strong> Pour toute question relative aux présentes mentions légales, 
                  vous pouvez nous contacter via notre formulaire de contact.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MentionsLegales;

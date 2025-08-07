import React from 'react';
import { motion } from 'framer-motion';
import { FloatingNav } from '../components/ui/floating-navbar';
import Footer from '../components/ui/Footer';

const CGV = () => {
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
              Conditions Générales de Vente
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Objet</h2>
              <p>
                Les présentes conditions générales de vente (CGV) régissent les relations contractuelles entre KANRA Publishing, 
                société éditrice de Polaris IA, et ses clients dans le cadre de la vente de formations et services d'accompagnement 
                en intelligence artificielle.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Identification de l'entreprise</h2>
              <p>
                <strong>KANRA Publishing</strong><br/>
                Société éditrice de Polaris IA<br/>
                Spécialisée dans la formation et l'accompagnement en intelligence artificielle générative
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Prestations proposées</h2>
              <p>
                Polaris IA propose les prestations suivantes :
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Formations en intelligence artificielle générative</li>
                <li>Audits et conseils personnalisés</li>
                <li>Automatisation de processus</li>
                <li>Développement et déploiement d'agents IA sur mesure</li>
                <li>Accompagnement post-formation</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Commandes et devis</h2>
              <p>
                Toute commande de formation ou service doit faire l'objet d'un devis préalable. 
                La signature du devis par le client vaut acceptation des présentes CGV et engagement ferme.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Tarifs et modalités de paiement</h2>
              <p>
                Les tarifs sont indiqués en euros hors taxes. La TVA applicable est celle en vigueur au jour de la facturation.
                Le paiement s'effectue selon les modalités convenues dans le devis, généralement par virement bancaire.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Annulation et report</h2>
              <p>
                Toute annulation doit être notifiée par écrit. Les conditions d'annulation et de report sont précisées 
                dans chaque devis selon la nature de la prestation.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Propriété intellectuelle</h2>
              <p>
                Tous les supports de formation et contenus pédagogiques restent la propriété exclusive de KANRA Publishing. 
                Leur reproduction ou diffusion sans autorisation est interdite.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Responsabilité</h2>
              <p>
                KANRA Publishing s'engage à fournir des prestations conformes aux standards de qualité professionnels. 
                Sa responsabilité est limitée au montant de la prestation concernée.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Droit applicable</h2>
              <p>
                Les présentes CGV sont soumises au droit français. Tout litige sera soumis à la compétence 
                des tribunaux compétents.
              </p>

              <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Date de dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}<br/>
                  <strong>Contact :</strong> Pour toute question relative aux présentes CGV, 
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

export default CGV;

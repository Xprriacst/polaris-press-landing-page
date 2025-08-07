import React from 'react';
import { motion } from 'framer-motion';
import { FloatingNav } from '../components/ui/floating-navbar';
import Footer from '../components/ui/Footer';

const PolitiqueConfidentialite = () => {
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
              Politique de Confidentialité
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-lg text-gray-600 mb-8">
                KANRA Publishing, éditrice de Polaris IA, s'engage à protéger la confidentialité 
                de vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD).
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Responsable du traitement</h2>
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <p>
                  <strong>KANRA Publishing</strong><br/>
                  Société éditrice de Polaris IA<br/>
                  Responsable du traitement des données personnelles collectées sur ce site
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Données collectées</h2>
              <p>Nous collectons les données suivantes :</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Données d'identification :</strong> nom, prénom, adresse e-mail</li>
                <li><strong>Données professionnelles :</strong> entreprise, fonction, secteur d'activité</li>
                <li><strong>Données de contact :</strong> numéro de téléphone (optionnel)</li>
                <li><strong>Données techniques :</strong> adresse IP, cookies techniques</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Finalités du traitement</h2>
              <p>Vos données sont traitées pour :</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Répondre à vos demandes de contact et devis</li>
                <li>Vous proposer nos formations et services</li>
                <li>Assurer le suivi commercial et la relation client</li>
                <li>Améliorer nos services et notre site web</li>
                <li>Respecter nos obligations légales et réglementaires</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Base légale</h2>
              <p>
                Le traitement de vos données repose sur :
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Votre consentement</strong> pour l'envoi d'informations commerciales</li>
                <li><strong>L'intérêt légitime</strong> pour le traitement des demandes de contact</li>
                <li><strong>L'exécution du contrat</strong> pour la fourniture de nos services</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Destinataires des données</h2>
              <p>
                Vos données sont destinées exclusivement aux équipes de KANRA Publishing. 
                Elles ne sont jamais vendues, louées ou transmises à des tiers sans votre consentement explicite.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Durée de conservation</h2>
              <p>Nous conservons vos données :</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Prospects :</strong> 3 ans à compter du dernier contact</li>
                <li><strong>Clients :</strong> 10 ans après la fin de la relation contractuelle</li>
                <li><strong>Cookies techniques :</strong> 13 mois maximum</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Vos droits</h2>
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Droit d'accès :</strong> connaître les données que nous détenons sur vous</li>
                <li><strong>Droit de rectification :</strong> corriger vos données inexactes</li>
                <li><strong>Droit à l'effacement :</strong> supprimer vos données sous certaines conditions</li>
                <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
                <li><strong>Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
                <li><strong>Droit d'opposition :</strong> vous opposer au traitement pour motif légitime</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Sécurité des données</h2>
              <p>
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées 
                pour protéger vos données contre tout accès non autorisé, altération, divulgation ou destruction.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Cookies</h2>
              <p>
                Notre site utilise uniquement des cookies techniques nécessaires au bon fonctionnement du site. 
                Ces cookies ne nécessitent pas votre consentement et ne permettent pas de vous identifier personnellement.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Contact et réclamations</h2>
              <p>
                Pour exercer vos droits ou pour toute question relative à cette politique de confidentialité, 
                vous pouvez nous contacter via notre formulaire de contact.
              </p>
              <p>
                Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation 
                auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés).
              </p>

              <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Date de dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}<br/>
                  <strong>Version :</strong> 1.0
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

export default PolitiqueConfidentialite;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import CompassLogo from '../components/ui/compass-logo';

export default function WebinarLive() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CompassLogo className="h-6 w-6" />
            <p className="text-sm font-semibold text-gray-900 tracking-wide">Polaris IA</p>
          </div>
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Title */}
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Comment développer ses revenus publicitaires en 2026
            </h1>
            <p className="text-lg text-gray-600 font-light">
              Webinaire en direct avec Polaris IA
            </p>
          </div>

          {/* Video Container */}
          <div className="space-y-6">
            {/* WebinarJam Embed */}
            <div className="relative w-full bg-black rounded-xl overflow-hidden shadow-xl">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.webinarjam.com/register/[YOUR_WEBINAR_ID]"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full h-full"
                  title="Webinaire Polaris IA"
                />
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 space-y-6 shadow-lg">
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-gray-900">
                  À propos de ce webinaire
                </h2>
                <p className="text-gray-600 font-light leading-relaxed">
                  Découvrez la méthode utilisée par des éditeurs pour automatiser leur prospection publicitaire et acquérir régulièrement de nouveaux annonceurs sans surcharger leurs équipes.
                </p>
              </div>

              {/* Key Points */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900">Une méthode concrète</h3>
                  <p className="text-sm text-gray-600 font-light">
                    Prospecter efficacement et automatiquement jusqu'à 50 nouveaux prospects par mois
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900">Système facile à mettre en place</h3>
                  <p className="text-sm text-gray-600 font-light">
                    Rapide à déployer pour obtenir de nouveaux contrats dès le lendemain
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900">100% personnalisable</h3>
                  <p className="text-sm text-gray-600 font-light">
                    S'adapte à vos contraintes et à votre manière de travailler
                  </p>
                </div>
              </div>

              {/* Bonus */}
              <div className="border-t border-gray-200 pt-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                    <span className="text-2xl">🎁</span>
                    Bonus exclusif pour les participants
                  </h3>
                  <p className="text-gray-600 font-light">
                    Accès à des ressources, templates et outils pour mettre en place le système immédiatement après le webinaire.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-blue-50 rounded-xl border border-blue-200 p-8 text-center space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Des questions ?
              </h3>
              <p className="text-gray-600 font-light">
                N'hésitez pas à nous contacter si vous avez besoin d'aide.
              </p>
              <button
                onClick={() => navigate("/#contact")}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Nous contacter
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 bg-gray-50 border-t border-gray-200 mt-20">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p>© 2025 Polaris IA. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

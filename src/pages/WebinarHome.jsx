import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, TrendingDown } from 'lucide-react';
import CompassLogo from '../components/ui/compass-logo';

export default function WebinarHome() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (firstName && email) {
      setIsSubmitted(true);
      
      try {
        const response = await fetch('https://polaris-ia.app.n8n.cloud/webhook/webinaire-inscription', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName,
            email
          })
        });

        if (response.ok) {
          setTimeout(() => {
            navigate("/webinaire/confirmation");
          }, 1500);
        } else {
          console.error('Erreur lors de l\'envoi des données');
          setTimeout(() => {
            navigate("/webinaire/confirmation");
          }, 1500);
        }
      } catch (error) {
        console.error('Erreur réseau:', error);
        setTimeout(() => {
          navigate("/webinaire/confirmation");
        }, 1500);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header Branding */}
      <div className="absolute top-0 left-0 right-0 pt-4 z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2">
            <CompassLogo className="h-6 w-6" />
            <p className="text-sm font-semibold text-gray-900 tracking-wide">Polaris IA</p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-8">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&h=900&fit=crop')"
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <TrendingDown className="w-4 h-4" />
                Webinaire gratuit
              </div>

              {/* Main Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Comment développer ses revenus publicitaires en 2026
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-gray-600 leading-relaxed">
                Découvrez la méthode utilisée par des éditeurs pour automatiser leur prospection publicitaire et acquérir régulièrement de nouveaux annonceurs sans surcharger leurs équipes.
              </p>

              {/* Key Benefits */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    <span className="font-semibold">Une méthode concrète</span> pour prospecter efficacement et automatiquement jusqu'à 50 nouveaux prospects par mois
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    <span className="font-semibold">Système facile à mettre en place</span>, rapide à déployer pour obtenir de nouveaux contrats dès le lendemain
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    <span className="font-semibold">100% personnalisable</span> et s'adapte à vos contraintes et à votre manière de travailler
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Registration Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10 border border-gray-200">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-gray-900">
                    Inscrivez-vous gratuitement
                  </h2>
                  <p className="text-gray-600">
                    Réservez votre place maintenant
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Votre prénom"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email professionnel
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="votre@email.com"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitted}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle2 className="w-5 h-5" />
                        Inscription confirmée !
                      </>
                    ) : (
                      <>
                        Je m'inscris gratuitement
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500 text-center">
                    🎁 Bonus exclusif pour les participants
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p>© 2025 Polaris IA. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

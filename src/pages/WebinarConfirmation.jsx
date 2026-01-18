import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Mail } from 'lucide-react';
import CompassLogo from '../components/ui/compass-logo';

export default function WebinarConfirmation() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center py-12 px-4">
      <div className="max-w-2xl w-full space-y-12">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 pt-4 z-10">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2">
              <CompassLogo className="h-6 w-6" />
              <p className="text-sm font-semibold text-gray-900 tracking-wide">Polaris IA</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8 text-center pt-20">
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center">
              <CheckCircle2 className="w-12 h-12 text-blue-600" />
            </div>
          </div>

          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
              Inscription <span className="text-blue-600">confirmée !</span>
            </h1>
            <p className="text-xl text-gray-600 font-light">
              Merci de votre inscription au webinaire
            </p>
          </div>

          {/* Email Notification */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 space-y-4 shadow-lg">
            <div className="flex justify-center">
              <Mail className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Vérifiez votre email
            </h2>
            <p className="text-gray-600 font-light leading-relaxed">
              Nous avons envoyé un email de confirmation à votre adresse. Vous y trouverez :
            </p>

            {/* Details List */}
            <div className="space-y-3 text-left max-w-md mx-auto">
              <div className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <p className="text-gray-900 font-light">Le lien pour accéder au webinaire</p>
              </div>
              <div className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <p className="text-gray-900 font-light">L'heure exacte de la session</p>
              </div>
              <div className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <p className="text-gray-900 font-light">Les détails du bonus exclusif</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="space-y-4 pt-8">
            <button
              onClick={() => navigate("/webinaire/live")}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group inline-flex items-center gap-2"
            >
              Accéder au webinaire
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <div>
              <button
                onClick={() => navigate("/")}
                className="px-8 py-6 text-lg font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition-all"
              >
                Retour à l'accueil
              </button>
            </div>
          </div>

          {/* Footer Note */}
          <div className="pt-12 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Vous ne recevez pas l'email ? Vérifiez votre dossier spam ou <span className="text-blue-600 font-semibold cursor-pointer hover:underline">contactez-nous</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Users, Target, CheckCircle, FileText, Mic } from 'lucide-react';
import { Button } from '../components/ui/moving-border';

const FormationIA01 = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="py-6 px-4 border-b border-gray-200 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span>Retour à l'accueil</span>
          </a>
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Polaris IA
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              IA01 - Rédaction d'articles & retranscription d'audio
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Maîtrisez l'IA pour rédiger plus vite et mieux, tout en retranscrivant automatiquement vos interviews
            </p>
          </motion.div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-lg">
              <Clock className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-4">Durée</h3>
              <p className="text-gray-600">3 heures</p>
            </div>
            <div className="bg-white backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-lg">
              <Users className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold mb-4">Participants</h3>
              <p className="text-gray-600">8-12 personnes</p>
            </div>
            <div className="bg-white backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-lg">
              <Target className="h-8 w-8 text-cyan-600 mb-4" />
              <h3 className="text-lg font-semibold mb-4">Prérequis</h3>
              <p className="text-gray-600">Aucun prérequis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Objectifs */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Objectifs de la formation</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <FileText className="h-5 w-5 text-blue-600 mr-2" />
                  1ère partie : Rédaction d'articles assistée par l'IA
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Maîtriser l'Agent IA Deep Research pour ses recherches documentaires et optimiser ses prompts à l'aide de techniques avancées</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Contrôler les sources utilisées par l'IA et éviter les hallucinations et fake news</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Apprendre des méthodes pour enrichir et perfectionner ses brouillons d'articles</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Mic className="h-5 w-5 text-purple-600 mr-2" />
                  2ème partie : Retranscription d'interview automatique
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Présenter les meilleures solutions de retranscription automatiques d'audios</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Sélectionner et prendre en main une solution</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Bénéfices */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Bénéfices clés</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Rédaction d'articles assistée par l'IA</h3>
                  <p className="text-gray-600">Rédaction d'articles entre 3 et 5 fois plus rapide</p>
                </div>
                
                <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                  <h3 className="text-xl font-semibold mb-3 text-purple-600">Retranscription d'interview automatique</h3>
                  <p className="text-gray-600">Jusqu'à 80 % de gain de temps sur la transcription d'audio</p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Public cible</h3>
                <p className="text-gray-600 mb-4">
                  Journalistes, rédacteurs, producteurs TV/Radio, responsables digitaux, créatifs, équipes marketing & pub
                </p>
                
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Méthodologie</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Ateliers de prise en main</li>
                  <li>• Ateliers de prompt engineering</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intervenants */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Expertise des intervenants</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-lg">
                <h3 className="text-lg font-semibold mb-2 text-blue-600">Experts en IA Générative</h3>
                <p className="text-gray-600">Spécialistes reconnus dans le domaine de l'intelligence artificielle appliquée au journalisme</p>
              </div>
              <div className="bg-white backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-lg">
                <h3 className="text-lg font-semibold mb-2 text-purple-600">Rédacteur indépendant</h3>
                <p className="text-gray-600">Professionnel expérimenté du terrain journalistique</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Prêt à transformer votre façon de rédiger ?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Rejoignez notre formation et découvrez comment l'IA peut révolutionner votre productivité éditoriale
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-gray-900 border-neutral-200 dark:border-slate-800"
              >
                S'inscrire à la formation
              </Button>
              <button className="px-8 py-4 rounded-full border-2 border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300">
                Demander plus d'informations
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FormationIA01;


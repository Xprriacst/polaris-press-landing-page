import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Users, Target, CheckCircle, Image, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/moving-border';

const FormationIA02 = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="py-6 px-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span>Retour à l'accueil</span>
          </a>
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Polaris IA
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              IA02 - Génération & amélioration d'images
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Créez des visuels percutants et améliorez la qualité de vos images grâce à l'intelligence artificielle
            </p>
          </motion.div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <Clock className="h-8 w-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Durée</h3>
              <p className="text-gray-400">2 heures</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <Users className="h-8 w-8 text-cyan-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Participants</h3>
              <p className="text-gray-400">8-12 personnes</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <Target className="h-8 w-8 text-pink-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Prérequis</h3>
              <p className="text-gray-400">Aucun prérequis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Objectifs */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Objectifs de la formation</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Image className="h-5 w-5 text-purple-400 mr-2" />
                  1ère partie : Génération d'images d'illustrations
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Présenter les meilleures solutions de génération d'images selon le cas d'usage</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Apprendre les méthodes de prompting pour obtenir les meilleurs résultats</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Sparkles className="h-5 w-5 text-cyan-400 mr-2" />
                  2ème partie : Amélioration de la qualité d'images
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Présenter les meilleures solutions d'améliorations de la qualité d'images selon le cas d'usage</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Apprendre les méthodes de prompting pour obtenir les meilleurs résultats</span>
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
              <h2 className="text-3xl font-bold mb-6 text-white">Bénéfices clés</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl p-6 border border-purple-500/20">
                  <h3 className="text-xl font-semibold mb-3 text-purple-400">Génération d'images d'illustrations</h3>
                  <p className="text-gray-300">Réduction des coûts de design</p>
                </div>
                
                <div className="bg-gradient-to-r from-cyan-500/10 to-pink-500/10 rounded-xl p-6 border border-cyan-500/20">
                  <h3 className="text-xl font-semibold mb-3 text-cyan-400">Amélioration de la qualité des images</h3>
                  <p className="text-gray-300">Réduction des coûts de traitement d'images</p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-white">Public cible</h3>
                <p className="text-gray-300 mb-4">
                  Chefs photo, iconographes, graphistes, journalistes web/social, maquettistes
                </p>
                
                <h3 className="text-xl font-semibold mb-4 text-white">Méthodologie</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Démonstrations en direct de l'outil</li>
                  <li>• Ateliers pédagogiques</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intervenants */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Expertise des intervenants</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold mb-2 text-purple-400">Experts en IA Générative</h3>
                <p className="text-gray-400">Spécialistes reconnus dans le domaine de l'intelligence artificielle appliquée à la création visuelle</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold mb-2 text-cyan-400">Rédacteur indépendant</h3>
                <p className="text-gray-400">Professionnel expérimenté du terrain journalistique</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-t from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Révolutionnez votre création visuelle</h2>
            <p className="text-xl text-gray-400 mb-8">
              Maîtrisez les outils d'IA pour créer et améliorer vos visuels sans faire appel à des prestataires
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                S'inscrire à la formation
              </Button>
              <button className="px-8 py-4 rounded-full border border-gray-600 text-white hover:bg-white hover:text-black transition-all duration-300">
                Demander plus d'informations
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FormationIA02;


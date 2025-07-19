import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Users, Target, CheckCircle, Settings, Puzzle, Users2 } from 'lucide-react';
import { Button } from '../components/ui/moving-border';

const FormationSurMesure = () => {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Formation sur-mesure
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Une formation personnalisée adaptée à vos besoins spécifiques et à votre environnement éditorial
            </p>
          </motion.div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <Clock className="h-8 w-8 text-orange-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Durée</h3>
              <p className="text-gray-400">À définir selon vos besoins</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <Users className="h-8 w-8 text-red-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Participants</h3>
              <p className="text-gray-400">Nombre à définir</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <Target className="h-8 w-8 text-yellow-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Prérequis</h3>
              <p className="text-gray-400">Audit préalable</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Approche */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Notre approche sur-mesure</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Settings className="h-5 w-5 text-orange-400 mr-2" />
                  Formation personnalisée après audit
                </h3>
                <p className="text-gray-300 mb-4">
                  Formation sur-mesure après audit de vos besoins éditoriaux et techniques
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Puzzle className="h-5 w-5 text-red-400 mr-2" />
                  Co-construction du parcours
                </h3>
                <p className="text-gray-300 mb-4">
                  Co-construction du parcours, cas pratiques issus de vos workflows
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Users2 className="h-5 w-5 text-yellow-400 mr-2" />
                  Accompagnement renforcé
                </h3>
                <p className="text-gray-300">
                  Accompagnement post-formation renforcé pour garantir l'adoption des outils
                </p>
              </div>
            </motion.div>

            {/* Avantages */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Avantages de la formation sur-mesure</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl p-6 border border-orange-500/20">
                  <h3 className="text-xl font-semibold mb-3 text-orange-400">Adaptation totale</h3>
                  <p className="text-gray-300">Formation adaptée à votre environnement technique et éditorial spécifique</p>
                </div>
                
                <div className="bg-gradient-to-r from-red-500/10 to-yellow-500/10 rounded-xl p-6 border border-red-500/20">
                  <h3 className="text-xl font-semibold mb-3 text-red-400">Cas pratiques réels</h3>
                  <p className="text-gray-300">Exercices basés sur vos propres workflows et contenus</p>
                </div>

                <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl p-6 border border-yellow-500/20">
                  <h3 className="text-xl font-semibold mb-3 text-yellow-400">Suivi personnalisé</h3>
                  <p className="text-gray-300">Accompagnement post-formation pour assurer l'adoption des outils</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Processus de création</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-black font-bold text-xl mb-4 mx-auto">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-3 text-orange-400">Audit initial</h3>
                <p className="text-gray-400">Analyse de vos besoins éditoriaux et techniques actuels</p>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-black font-bold text-xl mb-4 mx-auto">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-3 text-red-400">Co-construction</h3>
                <p className="text-gray-400">Élaboration du programme avec vos équipes</p>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-xl mb-4 mx-auto">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-3 text-yellow-400">Formation & suivi</h3>
                <p className="text-gray-400">Déploiement et accompagnement post-formation</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modules possibles */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-white text-center">Modules disponibles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold mb-3 text-blue-400">IA01 - Rédaction & Audio</h3>
                <p className="text-gray-400 text-sm">Rédaction d'articles assistée par l'IA et retranscription automatique</p>
              </div>
              
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold mb-3 text-purple-400">IA02 - Images</h3>
                <p className="text-gray-400 text-sm">Génération et amélioration d'images avec l'IA</p>
              </div>
              
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold mb-3 text-cyan-400">IA03 - Vidéos</h3>
                <p className="text-gray-400 text-sm">Édition et automatisation de vidéos</p>
              </div>
              
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold mb-3 text-green-400">Modules personnalisés</h3>
                <p className="text-gray-400 text-sm">Contenus spécifiques selon vos besoins</p>
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
            <h2 className="text-3xl font-bold mb-6 text-white">Créons ensemble votre formation idéale</h2>
            <p className="text-xl text-gray-400 mb-8">
              Discutons de vos besoins spécifiques pour concevoir une formation parfaitement adaptée
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                Demander un audit
              </Button>
              <button className="px-8 py-4 rounded-full border border-gray-600 text-white hover:bg-white hover:text-black transition-all duration-300">
                Prendre rendez-vous
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FormationSurMesure;


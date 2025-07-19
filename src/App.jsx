import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles } from './components/ui/sparkles';
import { FloatingNav } from './components/ui/floating-navbar';
import { TextGenerateEffect } from './components/ui/text-generate-effect';
import { BentoGrid, BentoGridItem } from './components/ui/bento-grid';
import { Button } from './components/ui/moving-border';
import ContactForm from './components/ContactForm';
import AnimatedGradientText from './components/ui/animated-gradient-text';
import FormationIA01 from './pages/FormationIA01';
import FormationIA02 from './pages/FormationIA02';
import FormationIA03 from './pages/FormationIA03';
import FormationSurMesure from './pages/FormationSurMesure';
import './App.css';
import { 
  Search, 
  GraduationCap, 
  Users, 
  CheckCircle, 
  FileText, 
  Brain, 
  Video, 
  Shield, 
  Heart, 
  Crown, 
  Target 
} from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();

  const navItems = [
    { name: "Accueil", link: "#home" },
    { name: "Services", link: "#services" },
    { name: "Formations", link: "#formations" },
    { name: "À propos", link: "#about" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Sparkles />
      <FloatingNav navItems={navItems} />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Polaris IA
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-300">
              L'intelligence artificielle générative au service des rédactions
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              Notre mission : transformer l'IA en levier de performance éditoriale, sans compromis sur la rigueur journalistique.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => scrollToSection('services')}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Découvrir nos services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 rounded-full border border-gray-600 text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                Prendre rendez-vous
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Nos Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Une approche structurée, éthique et opérationnelle pour que vos équipes puissent tirer parti de l'IA en toute confiance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <CheckCircle className="h-12 w-12 text-blue-400 mr-4" />
                <h3 className="text-2xl font-bold text-white">Audit IA</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Diagnostiquer. Comprendre. Agir. Une vision objective de l'usage de l'IA dans votre rédaction avec une feuille de route priorisée.
              </p>
              <div className="bg-blue-500/20 rounded-lg p-4">
                <p className="text-blue-300 font-semibold">✓ État des lieux complet</p>
                <p className="text-blue-300 font-semibold">✓ Recommandations personnalisées</p>
                <p className="text-blue-300 font-semibold">✓ Feuille de route priorisée</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <GraduationCap className="h-12 w-12 text-purple-400 mr-4" />
                <h3 className="text-2xl font-bold text-white">Formations IA</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Des modules concrets pour des résultats immédiats. Formations conçues par et pour les journalistes.
              </p>
              <div className="bg-purple-500/20 rounded-lg p-4">
                <p className="text-purple-300 font-semibold">✓ Modules pratiques et opérationnels</p>
                <p className="text-purple-300 font-semibold">✓ Cas d'usage journalistiques réels</p>
                <p className="text-purple-300 font-semibold">✓ Support et ressources inclus</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gradient-to-br from-cyan-500/10 to-green-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <Users className="h-12 w-12 text-cyan-400 mr-4" />
                <h3 className="text-2xl font-bold text-white">Accompagnement</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Conseil personnalisé et suivi post-formation pour une adoption réussie de l'IA dans vos processus éditoriaux.
              </p>
              <div className="bg-cyan-500/20 rounded-lg p-4">
                <p className="text-cyan-300 font-semibold">✓ Suivi personnalisé post-formation</p>
                <p className="text-cyan-300 font-semibold">✓ Intégration dans vos workflows</p>
                <p className="text-cyan-300 font-semibold">✓ Support technique continu</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Formations Section */}
      <section id="formations" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Formations IA
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Des modules concrets pour des résultats immédiats
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 cursor-pointer"
              onClick={() => {
                navigate('/formation-ia01');
                window.scrollTo(0, 0);
              }}
            >
              <FileText className="h-12 w-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">IA01 – Rédaction & retranscription</h3>
              <p className="text-gray-400 mb-6">Rédiger plus vite, mieux, en s'appuyant sur des agents IA fiables. Retranscrire automatiquement ses interviews en un temps record.</p>
              <div className="text-blue-400 font-semibold">3 heures</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300 cursor-pointer"
              onClick={() => {
                navigate('/formation-ia02');
                window.scrollTo(0, 0);
              }}
            >
              <Brain className="h-12 w-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">IA02 – Images générées & améliorées</h3>
              <p className="text-gray-400 mb-6">Créer des visuels percutants sans faire appel à des prestataires, et améliorer la qualité d'images pour vos publications.</p>
              <div className="text-purple-400 font-semibold">2 heures</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-cyan-500 transition-all duration-300 cursor-pointer"
              onClick={() => {
                navigate('/formation-ia03');
                window.scrollTo(0, 0);
              }}
            >
              <Video className="h-12 w-12 text-cyan-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">IA03 – Automatisation vidéo</h3>
              <p className="text-gray-400 mb-6">Gagner du temps en montage et publier facilement des extraits courts adaptés aux formats sociaux.</p>
              <div className="text-cyan-400 font-semibold">2 heures</div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-500/20 cursor-pointer hover:border-blue-500/40 transition-all duration-300"
                 onClick={() => {
                   navigate('/formation-sur-mesure');
                   window.scrollTo(0, 0);
                 }}>
              <h3 className="text-2xl font-bold mb-4 text-white">Formation sur mesure</h3>
              <p className="text-gray-400 mb-6 max-w-3xl mx-auto">
                À la suite de notre audit, nous co-construisons des parcours adaptés à vos besoins : cas pratiques issus de vos propres contenus, 
                outils compatibles avec votre environnement, accompagnement renforcé post-formation.
              </p>
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                Demander un devis
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Engagements Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Nos Engagements
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Une IA responsable, encadrée, au service du journalisme
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-8">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Notre conviction :
                </span>
                <br />
                <span className="text-white">
                  L'IA ne remplace pas le journaliste, elle l'assiste
                </span>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Shield className="h-8 w-8 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Contrôle éditorial final</h3>
                    <p className="text-gray-400 leading-relaxed">Aucun contenu généré n'est publié sans validation humaine.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Heart className="h-8 w-8 text-red-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Approche éthique</h3>
                    <p className="text-gray-400 leading-relaxed">Intégration des enjeux éthiques, déontologiques et syndicaux dès la conception.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Crown className="h-8 w-8 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Souveraineté des rédactions</h3>
                    <p className="text-gray-400 leading-relaxed">Transparence, qualité de l'information et indépendance face aux technologies.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-500/20"
            >
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
                <Target className="h-8 w-8 text-blue-400 mr-3" />
                Pourquoi choisir Polaris IA ?
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                  Expertise croisée IA / journalisme
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                  Approche personnalisée et pragmatique
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                  Accompagnement post-formation inclus
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                  Veille continue sur les outils et cas d'usage
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                  Intervenants reconnus dans le secteur
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nos Références Section */}
      <section id="references" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Nos Références
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Ils nous font confiance pour leur transformation IA
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:bg-white/20 transition-all duration-300">
              <img src="/logo-lui.png" alt="Lui Magazine" className="h-12 w-auto filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity" />
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:bg-white/20 transition-all duration-300">
              <img src="/logo-voyage-de-luxe.png" alt="Voyage de Luxe" className="h-12 w-auto filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity" />
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:bg-white/20 transition-all duration-300">
              <img src="/logo-cuisine-ad.png" alt="Cuisine A&D" className="h-12 w-auto filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity" />
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:bg-white/20 transition-all duration-300">
              <img src="/logo-florentin.png" alt="Florentin" className="h-12 w-auto filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity" />
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:bg-white/20 transition-all duration-300 col-span-2 md:col-span-1">
              <img src="/logo-point.png" alt="Point" className="h-12 w-auto filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Questions fréquentes
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Retrouvez les réponses aux questions les plus courantes sur nos formations IA
            </p>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-3 text-white">Faut-il avoir des connaissances techniques pour suivre les formations ?</h3>
              <p className="text-gray-300">
                Non, aucun prérequis technique n'est nécessaire. Nos formations sont conçues pour être accessibles à tous les journalistes, quel que soit leur niveau technique. Nous partons des bases et progressons étape par étape.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-3 text-white">L'IA va-t-elle remplacer les journalistes ?</h3>
              <p className="text-gray-300">
                L'IA est un outil au service des journalistes, pas un remplaçant. Elle permet d'automatiser certaines tâches répétitives pour libérer du temps pour le travail d'investigation, d'analyse et de création de valeur qui reste l'apanage des journalistes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-3 text-white">Comment éviter les hallucinations de l'IA ?</h3>
              <p className="text-gray-300">
                Nos formations incluent des modules spécifiques sur la vérification des sources et les techniques pour contrôler la fiabilité des contenus générés par l'IA. Nous enseignons les bonnes pratiques pour éviter les erreurs factuelles.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-3 text-white">Quels gains de productivité peut-on espérer ?</h3>
              <p className="text-gray-300">
                Selon nos études, les journalistes formés gagnent 4 heures sur un article moyen, réduisent de 4 fois le temps de retranscription audio et diminuent jusqu'à 95% les coûts de création de visuels illustratifs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-3 text-white">Proposez-vous un suivi après la formation ?</h3>
              <p className="text-gray-300">
                Oui, nous proposons un accompagnement post-formation pour assurer l'adoption des outils dans vos workflows. Pour les formations sur-mesure, cet accompagnement est renforcé et personnalisé.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-3 text-white">Les formations peuvent-elles être adaptées à notre rédaction ?</h3>
              <p className="text-gray-300">
                Absolument ! Nous proposons des formations sur-mesure après audit de vos besoins éditoriaux et techniques. Le parcours est co-construit avec vos équipes et inclut des cas pratiques issus de vos workflows.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-t from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Discutons de votre stratégie IA
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Prenez contact avec notre équipe pour organiser un audit ou construire un parcours sur mesure
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <ContactForm />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-semibold mb-4 text-white">Pourquoi nous choisir ?</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Expertise croisée IA / journalisme</li>
                  <li>• Approche personnalisée et pragmatique</li>
                  <li>• Accompagnement post-formation inclus</li>
                  <li>• Veille continue sur les outils et cas d'usage</li>
                  <li>• Intervenants reconnus dans le secteur</li>
                </ul>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-semibold mb-4 text-white">Nos services</h3>
                <div className="space-y-2 text-gray-300">
                  <p>🔍 <strong>Audit IA</strong> - Diagnostic complet de vos besoins</p>
                  <p>🎓 <strong>Formations</strong> - Modules sur étagère ou sur-mesure</p>
                  <p>🤝 <strong>Accompagnement</strong> - Suivi personnalisé post-formation</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Polaris IA
            </h3>
            <p className="text-gray-400 mb-6">
              L'intelligence artificielle générative au service des rédactions
            </p>
            <div className="flex justify-center space-x-6 text-gray-400">
              <span>© 2024 Polaris IA. Tous droits réservés.</span>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/formation-ia01" element={<FormationIA01 />} />
      <Route path="/formation-ia02" element={<FormationIA02 />} />
      <Route path="/formation-ia03" element={<FormationIA03 />} />
      <Route path="/formation-sur-mesure" element={<FormationSurMesure />} />
    </Routes>
  );
}

export default App;


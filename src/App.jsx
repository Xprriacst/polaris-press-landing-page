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
    <div className="min-h-screen bg-white text-gray-900 relative overflow-hidden">
      <FloatingNav navItems={navItems} />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4">
              <AnimatedGradientText>
                <span className="inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-sm font-semibold">
                  ✨ Nouveau : Formations IA personnalisées
                </span>
              </AnimatedGradientText>
            </div>
            <TextGenerateEffect 
              words="Polaris IA" 
              className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent"
            />
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-600">
              L'intelligence artificielle générative au service des rédactions
            </h2>
            <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto mb-12">
              Notre mission : transformer l'IA en levier de performance éditoriale, sans compromis sur la rigueur journalistique.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => scrollToSection('services')}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-700 text-white font-semibold hover:from-blue-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Découvrir nos services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 rounded-full border-2 border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Prendre rendez-vous
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <TextGenerateEffect 
              words="Nos Services" 
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche structurée, éthique et opérationnelle pour que vos équipes puissent tirer parti de l'IA en toute confiance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white backdrop-blur-sm rounded-2xl p-8 border border-blue-200 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center mb-6">
                <CheckCircle className="h-12 w-12 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Audit IA</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Diagnostiquer. Comprendre. Agir. Une vision objective de l'usage de l'IA dans votre rédaction avec une feuille de route priorisée.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                <p className="text-blue-700 font-semibold">✓ État des lieux complet</p>
                <p className="text-blue-700 font-semibold">✓ Recommandations personnalisées</p>
                <p className="text-blue-700 font-semibold">✓ Feuille de route priorisée</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white backdrop-blur-sm rounded-2xl p-8 border border-purple-200 hover:border-purple-300 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center mb-6">
                <GraduationCap className="h-12 w-12 text-purple-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Formations IA</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Des modules concrets pour des résultats immédiats. Formations conçues par et pour les journalistes.
              </p>
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                <p className="text-purple-700 font-semibold">✓ Modules pratiques et opérationnels</p>
                <p className="text-purple-700 font-semibold">✓ Cas d'usage journalistiques réels</p>
                <p className="text-purple-700 font-semibold">✓ Support et ressources inclus</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white backdrop-blur-sm rounded-2xl p-8 border border-cyan-200 hover:border-cyan-300 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center mb-6">
                <Users className="h-12 w-12 text-cyan-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Accompagnement</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Conseil personnalisé et suivi post-formation pour une adoption réussie de l'IA dans vos processus éditoriaux.
              </p>
              <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-100">
                <p className="text-cyan-700 font-semibold">✓ Suivi personnalisé post-formation</p>
                <p className="text-cyan-700 font-semibold">✓ Intégration dans vos workflows</p>
                <p className="text-cyan-700 font-semibold">✓ Support technique continu</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Formations Section */}
      <section id="formations" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <TextGenerateEffect 
              words="Formations IA" 
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent"
            />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des modules concrets pour des résultats immédiats
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-blue-400 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
              onClick={() => navigate('/formation-ia01')}
            >
              <FileText className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">IA01 – Rédaction & retranscription</h3>
              <p className="text-gray-600 mb-6">Rédiger plus vite, mieux, en s'appuyant sur des agents IA fiables. Retranscrire automatiquement ses interviews en un temps record.</p>
              <div className="text-blue-600 font-semibold">3 heures</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-purple-400 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
              onClick={() => navigate('/formation-ia02')}
            >
              <Brain className="h-12 w-12 text-purple-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">IA02 – Images générées & améliorées</h3>
              <p className="text-gray-600 mb-6">Créer des visuels percutants sans faire appel à des prestataires, et améliorer la qualité d'images pour vos publications.</p>
              <div className="text-purple-600 font-semibold">2 heures</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-cyan-400 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
              onClick={() => navigate('/formation-ia03')}
            >
              <Video className="h-12 w-12 text-cyan-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">IA03 – Automatisation vidéo</h3>
              <p className="text-gray-600 mb-6">Gagner du temps en montage et publier facilement des extraits courts adaptés aux formats sociaux.</p>
              <div className="text-cyan-600 font-semibold">2 heures</div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200 cursor-pointer hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl"
                 onClick={() => navigate('/formation-sur-mesure')}>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Formation sur mesure</h3>
              <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
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
      <section id="about" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <TextGenerateEffect 
              words="Nos Engagements" 
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"
            />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une IA responsable, encadrée, au service du journalisme
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Notre conviction :
                </span>
                <br />
                <span className="text-gray-900">
                  L'IA ne remplace pas le journaliste, elle l'assiste
                </span>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Shield className="h-8 w-8 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Contrôle éditorial final</h3>
                    <p className="text-gray-600 leading-relaxed">Aucun contenu généré n'est publié sans validation humaine.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Heart className="h-8 w-8 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Approche éthique</h3>
                    <p className="text-gray-600 leading-relaxed">Intégration des enjeux éthiques, déontologiques et syndicaux dès la conception.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Crown className="h-8 w-8 text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Souveraineté des rédactions</h3>
                    <p className="text-gray-600 leading-relaxed">Transparence, qualité de l'information et indépendance face aux technologies.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 border border-blue-200 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
                <Target className="h-8 w-8 text-blue-600 mr-3" />
                Pourquoi choisir Polaris IA ?
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  Expertise croisée IA / journalisme
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  Approche personnalisée et pragmatique
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  Accompagnement post-formation inclus
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  Veille continue sur les outils et cas d'usage
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  Intervenants reconnus dans le secteur
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nos Références Section */}
      <section id="references" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <TextGenerateEffect 
              words="Nos Références" 
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ils nous font confiance pour leur transformation IA
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center"
          >
            <div className="bg-gray-50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:bg-gray-100 transition-all duration-300 shadow-md">
              <img src="/logo-playboy.svg" alt="Playboy" className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity mx-auto" />
            </div>
            <div className="bg-gray-50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:bg-gray-100 transition-all duration-300 shadow-md">
              <img src="/logo-lui.svg" alt="Lui Magazine" className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity mx-auto" />
            </div>
            <div className="bg-gray-50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:bg-gray-100 transition-all duration-300 shadow-md">
              <img src="/logo-voyage-de-luxe.svg" alt="Voyage de Luxe" className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity mx-auto" />
            </div>
            <div className="bg-gray-50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:bg-gray-100 transition-all duration-300 shadow-md">
              <img src="/logo-cuisine-ad.svg" alt="Cuisine A&D" className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity mx-auto" />
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:bg-white/20 transition-all duration-300 col-span-2 md:col-span-1">
              <img src="/logo-florentin.svg" alt="Florentin" className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity mx-auto" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <TextGenerateEffect 
              words="Questions fréquentes" 
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Retrouvez les réponses aux questions les plus courantes sur nos formations IA
            </p>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-md"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Faut-il avoir des connaissances techniques pour suivre les formations ?</h3>
              <p className="text-gray-600">
                Non, aucun prérequis technique n'est nécessaire. Nos formations sont conçues pour être accessibles à tous les journalistes, quel que soit leur niveau technique. Nous partons des bases et progressons étape par étape.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-md"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900">L'IA va-t-elle remplacer les journalistes ?</h3>
              <p className="text-gray-600">
                L'IA est un outil au service des journalistes, pas un remplaçant. Elle permet d'automatiser certaines tâches répétitives pour libérer du temps pour le travail d'investigation, d'analyse et de création de valeur qui reste l'apanage des journalistes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-md"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Comment éviter les hallucinations de l'IA ?</h3>
              <p className="text-gray-600">
                Nos formations incluent des modules spécifiques sur la vérification des sources et les techniques pour contrôler la fiabilité des contenus générés par l'IA. Nous enseignons les bonnes pratiques pour éviter les erreurs factuelles.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-md"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Quels gains de productivité peut-on espérer ?</h3>
              <p className="text-gray-600">
                Selon nos études, les journalistes formés gagnent 4 heures sur un article moyen, réduisent de 4 fois le temps de retranscription audio et diminuent jusqu'à 95% les coûts de création de visuels illustratifs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-md"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Proposez-vous un suivi après la formation ?</h3>
              <p className="text-gray-600">
                Oui, nous proposons un accompagnement post-formation pour assurer l'adoption des outils dans vos workflows. Pour les formations sur-mesure, cet accompagnement est renforcé et personnalisé.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-md"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Les formations peuvent-elles être adaptées à notre rédaction ?</h3>
              <p className="text-gray-600">
                Absolument ! Nous proposons des formations sur-mesure après audit de vos besoins éditoriaux et techniques. Le parcours est co-construit avec vos équipes et inclut des cas pratiques issus de vos workflows.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <TextGenerateEffect 
              words="Discutons de votre stratégie IA" 
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
              <div className="bg-gray-50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Pourquoi nous choisir ?</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Expertise croisée IA / journalisme</li>
                  <li>• Approche personnalisée et pragmatique</li>
                  <li>• Accompagnement post-formation inclus</li>
                  <li>• Veille continue sur les outils et cas d'usage</li>
                  <li>• Intervenants reconnus dans le secteur</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Nos services</h3>
                <div className="space-y-2 text-gray-600">
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
      <footer className="py-12 px-4 border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Polaris IA
            </h3>
            <p className="text-gray-600 mb-6">
              L'intelligence artificielle générative au service des rédactions
            </p>
            <div className="flex justify-center space-x-6 text-gray-600">
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


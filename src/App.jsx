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
import AnimatedCounter from './components/ui/animated-counter';
import CompassLogo from './components/ui/compass-logo';
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
  Target,
  Lightbulb,
  TrendingUp,
  Zap,
  AlertTriangle,
  ExternalLink
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
      {/* Logo fixe en haut à gauche */}
      <div className="fixed top-4 left-4 z-50">
        <div className="flex items-center space-x-3 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-200">
          <CompassLogo className="h-8 w-8" />
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Polaris IA
          </span>
        </div>
      </div>
      <FloatingNav navItems={navItems} />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <TextGenerateEffect 
              words="Polaris IA" 
              className="text-8xl md:text-9xl lg:text-[12rem] font-black mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent leading-none"
            />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-800 max-w-5xl mx-auto leading-tight">
              L'intelligence artificielle générative au service des rédactions
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              Transformez l'IA en levier de performance éditoriale, sans compromis sur la rigueur journalistique.
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

      {/* Chiffres Clés Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Des résultats <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">mesurables</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              L'impact concret de l'IA sur la productivité journalistique
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="p-8 rounded-2xl shadow-xl bg-blue-50 border border-blue-100 hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <AnimatedCounter 
                end="4h" 
                duration={2.5}
                className="text-6xl font-black text-blue-700 mb-3"
              />
              <div className="font-bold text-xl text-gray-900 mb-2">gagnées</div>
              <div className="text-gray-600 mb-4">sur un article moyen</div>
              <div className="text-xs text-gray-400 flex items-center">
                Source : <a href="https://www.journalism.ai" target="_blank" rel="noopener" className="ml-1 text-blue-600 hover:text-blue-800 flex items-center">
                  JournalismAI <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-8 rounded-2xl shadow-xl bg-purple-50 border border-purple-100 hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <AnimatedCounter 
                end="x4" 
                duration={2.5}
                className="text-6xl font-black text-purple-700 mb-3"
              />
              <div className="font-bold text-xl text-gray-900 mb-2">audio plus rapide</div>
              <div className="text-gray-600 mb-4">Retranscription d'interview</div>
              <div className="text-xs text-gray-400">Source : Associated Press</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="p-8 rounded-2xl shadow-xl bg-green-50 border border-green-100 hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <AnimatedCounter 
                end="95%" 
                duration={2.5}
                className="text-6xl font-black text-green-700 mb-3"
              />
              <div className="font-bold text-xl text-gray-900 mb-2">d'économie</div>
              <div className="text-gray-600 mb-4">sur les visuels illustratifs</div>
              <div className="text-xs text-gray-400">Source : Accenture</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pourquoi Former Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 relative"
          >
            {/* Badge statistique en haut à droite */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute top-0 right-0 md:right-16 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-2xl p-4 border border-orange-200 shadow-lg max-w-xs"
            >
              <div className="flex items-center space-x-2 mb-2">
                <TrendingUp className="h-5 w-5 text-orange-600" />
                <span className="font-bold text-orange-800">80%</span>
              </div>
              <p className="text-sm text-gray-700 leading-tight">
                des journalistes utilisent déjà ChatGPT ou des outils similaires
              </p>
              <p className="text-xs text-gray-500 mt-1">Source : Reuters Institute, 2024</p>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 max-w-4xl mx-auto leading-tight">
              Pourquoi former vos équipes à l'
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                IA Générative
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              L'IA générative transforme le journalisme. Anticipez le changement plutôt que de le subir.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <motion.div 
                className="mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Shield className="h-12 w-12 text-blue-600" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Réduire les inquiétudes</h3>
              <p className="text-gray-600 leading-relaxed">
                Démystifier l'IA, comprendre ses limites et maîtriser les bonnes pratiques pour une utilisation sereine.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <motion.div 
                className="mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Zap className="h-12 w-12 text-green-600" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Gagner en efficacité</h3>
              <p className="text-gray-600 leading-relaxed">
                Automatiser les tâches répétitives pour se concentrer sur l'enquête, l'analyse et la création de valeur.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <motion.div 
                className="mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <TrendingUp className="h-12 w-12 text-purple-600" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Rester compétitif</h3>
              <p className="text-gray-600 leading-relaxed">
                S'adapter aux nouvelles méthodes de travail et maintenir son avantage concurrentiel dans un secteur en mutation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <motion.div 
                className="mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <AlertTriangle className="h-12 w-12 text-red-600" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Réduire les risques</h3>
              <p className="text-gray-600 leading-relaxed">
                Éviter les erreurs factuelles, les biais et les problèmes déontologiques liés à un usage non maîtrisé.
              </p>
            </motion.div>
          </div>

          {/* Note sur les hallucinations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg max-w-4xl mx-auto mb-8"
          >
            <div className="flex items-start space-x-3">
              <Lightbulb className="h-5 w-5 text-yellow-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-700 italic leading-relaxed">
                  <strong>Qu'est-ce qu'une hallucination IA ?</strong> Lorsqu'une IA génère des informations fausses mais présentées de manière convaincante. 
                  Par exemple, en mai 2023, The Irish Times a dû retirer un article entier après avoir découvert qu'il avait été généré par ChatGPT 
                  et contenait plusieurs inexactitudes factuelles.
                </p>
                <p className="text-xs text-gray-500 mt-2">Source : The Irish Times, mai 2023</p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <button 
              onClick={() => scrollToSection('formations')}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-700 text-white font-semibold hover:from-blue-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
            >
              Découvrir nos formations
            </button>
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
      <footer className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Logo et description */}
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-3xl font-bold mb-4 text-white">
                  Polaris IA
                </h3>
                <p className="text-blue-100 mb-6 text-lg max-w-md">
                  L'intelligence artificielle générative au service des rédactions. Formations, audits et accompagnement pour une IA éthique et efficace.
                </p>
                <div className="flex space-x-4">
                  <button className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/20">
                    Contact
                  </button>
                  <button className="px-6 py-3 bg-white text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 font-semibold">
                    Nos formations
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Services */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <h4 className="text-xl font-semibold mb-6 text-white">Services</h4>
                <ul className="space-y-3 text-blue-100">
                  <li><a href="#services" className="hover:text-white transition-colors">Audit IA</a></li>
                  <li><a href="#formations" className="hover:text-white transition-colors">Formations IA</a></li>
                  <li><a href="#services" className="hover:text-white transition-colors">Accompagnement</a></li>
                  <li><a href="#contact" className="hover:text-white transition-colors">Formation sur mesure</a></li>
                </ul>
              </motion.div>
            </div>

            {/* Informations */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h4 className="text-xl font-semibold mb-6 text-white">Informations</h4>
                <ul className="space-y-3 text-blue-100">
                  <li><a href="#about" className="hover:text-white transition-colors">Nos engagements</a></li>
                  <li><a href="#references" className="hover:text-white transition-colors">Nos références</a></li>
                  <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                  <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Séparateur et copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="border-t border-white/20 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center text-blue-100">
              <p>© 2024 Polaris IA. Tous droits réservés.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
                <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
                <a href="#" className="hover:text-white transition-colors">CGV</a>
              </div>
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


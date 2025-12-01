import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
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
import PageAccueilPME from './pages/PageAccueilPME';
import CGV from './pages/CGV';
import MentionsLegales from './pages/MentionsLegales';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';

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
  ExternalLink,
  Linkedin,
  Instagram,
  Twitter,
  DollarSign,
  Layout,
  PenTool,
  Monitor,
  Play
} from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();

  const navItems = [
    { name: "Accueil", link: "/#home" },
    { name: "Services", link: "/#services" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 relative overflow-hidden">
      {/* Logo fixe en haut à gauche - masqué en mobile car présent dans FloatingNav */}
      <div className="hidden sm:block fixed top-4 left-4 z-50">
        <div className="flex items-center space-x-3 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-200">
          <CompassLogo className="h-8 w-8" />
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Polaris IA
          </span>
        </div>
      </div>
      <FloatingNav navItems={navItems} onContactClick={() => scrollToSection('contact')} />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 max-w-5xl mx-auto leading-tight">
              L'intelligence artificielle au service des éditeurs de presse
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              Développez vos revenus, automatisez votre mise en page et générez du contenu éditorial grâce à l'IA.
            </p>
            <div className="flex flex-col items-center gap-8">
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
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col items-center"
              >
                <p className="text-gray-600 mb-4 text-sm">Nous sommes fiers d'être ambassadeurs</p>
                <img 
                  src="/logo-osez-ia.png" 
                  alt="Osez l'IA - Ambassadeur" 
                  className="h-20 md:h-24 w-auto rounded-2xl shadow-lg"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

{/* Nos Services (moved up per new order) */}
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
              className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous aidons les éditeurs de presse à développer leur activité grâce à l'intelligence artificielle.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white backdrop-blur-sm rounded-2xl p-8 border border-green-200 hover:border-green-300 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
              onClick={() => document.getElementById('revenus')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="flex items-center mb-6">
                <DollarSign className="h-12 w-12 text-green-600 mr-4" />
                <h3 className="text-xl font-semibold text-gray-900">Développer vos revenus</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Identifiez et prospectez de nouveaux annonceurs grâce à notre solution d'IA qui cible les entreprises les plus pertinentes pour votre magazine.
              </p>
              <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                <p className="text-green-700 font-semibold">✓ Identification d'annonceurs ciblés</p>
                <p className="text-green-700 font-semibold">✓ Prospection automatisée</p>
                <p className="text-green-700 font-semibold">✓ ROI immédiat et mesurable</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white backdrop-blur-sm rounded-2xl p-8 border border-blue-200 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
              onClick={() => document.getElementById('mise-en-page')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="flex items-center mb-6">
                <Layout className="h-12 w-12 text-blue-600 mr-4" />
                <h3 className="text-xl font-semibold text-gray-900">Automatiser la mise en page</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Automatisez la mise en page de votre magazine directement dans InDesign. Gagnez des heures de travail sur chaque numéro.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                <p className="text-blue-700 font-semibold">✓ Intégration directe avec InDesign</p>
                <p className="text-blue-700 font-semibold">✓ Maquettes générées automatiquement</p>
                <p className="text-blue-700 font-semibold">✓ Gain de temps considérable</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white backdrop-blur-sm rounded-2xl p-8 border border-purple-200 hover:border-purple-300 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
              onClick={() => document.getElementById('contenu')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="flex items-center mb-6">
                <PenTool className="h-12 w-12 text-purple-600 mr-4" />
                <h3 className="text-xl font-semibold text-gray-900">Générer du contenu éditorial</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Créez des articles de blog et des posts pour les réseaux sociaux dans votre style rédactionnel, grâce à une IA entraînée sur vos contenus.
              </p>
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                <p className="text-purple-700 font-semibold">✓ IA entraînée à votre style</p>
                <p className="text-purple-700 font-semibold">✓ Articles de blog automatisés</p>
                <p className="text-purple-700 font-semibold">✓ Posts réseaux sociaux</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 1: Développer vos revenus */}
      <section id="revenus" className="py-24 px-4 bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Développez vos <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">revenus publicitaires</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre IA identifie et prospecte automatiquement les annonceurs les plus pertinents pour votre magazine.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-green-100">
                <div className="flex items-center mb-6">
                  <DollarSign className="h-12 w-12 text-green-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Approche personnalisée</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Nous analysons votre méthode de prospection existante et la répliquons pour coller parfaitement 
                  aux attentes de vos annonceurs cibles.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Analyse approfondie de vos approches actuelles
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Réplication de votre style et de vos méthodes
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Adaptation aux spécificités de chaque annonceur
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Force de proposition stratégique</h3>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-3xl font-bold">50 mails/jour</p>
                    <p className="text-green-100">personnalisés et automatiques</p>
                  </div>
                  <p className="text-green-100">
                    Pour un client, nous avons mis en place un système qui envoie jusqu'à 50 mails personnalisés par jour. 
                    Vous choisissez : validation manuelle ou mode pilote automatique.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-16"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
              <Target className="h-8 w-8 text-green-600 mr-3" />
              CRM personnalisé inclus
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-green-50 rounded-lg p-4 mb-3">
                  <Search className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">Suivi des prospects</h4>
                </div>
                <p className="text-gray-600 text-sm">Vision claire de votre pipeline et des opportunités</p>
              </div>
              <div className="text-center">
                <div className="bg-green-50 rounded-lg p-4 mb-3">
                  <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">Résultats mesurables</h4>
                </div>
                <p className="text-gray-600 text-sm">Tableaux de bord pour suivre vos performances</p>
              </div>
              <div className="text-center">
                <div className="bg-green-50 rounded-lg p-4 mb-3">
                  <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">Gestion client</h4>
                </div>
                <p className="text-gray-600 text-sm">Historique complet des interactions et relances</p>
              </div>
            </div>
          </motion.div>

          <div className="text-center">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold hover:from-green-700 hover:to-emerald-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Booster mes revenus publicitaires
            </button>
          </div>
        </div>
      </section>

      {/* Section 2: Mise en page automatique */}
      <section id="mise-en-page" className="py-24 px-4 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Automatisez votre <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">mise en page</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre outil génère automatiquement vos maquettes directement dans InDesign. 
              Gagnez des heures de travail sur chaque numéro.
            </p>
          </motion.div>

          {/* Video avec mockup Mac */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="relative max-w-4xl mx-auto">
              {/* Mac mockup frame */}
              <div className="bg-gray-800 rounded-t-xl pt-6 pb-2 px-4">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="bg-gray-900 rounded-b-xl overflow-hidden shadow-2xl">
                <div className="relative" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src="https://www.loom.com/embed/2e02ed6eaabe4921a53ef78301029775?sid=auto"
                    frameBorder="0"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                </div>
              </div>
              {/* Mac stand */}
              <div className="flex justify-center">
                <div className="w-24 h-4 bg-gray-300 rounded-b-lg"></div>
              </div>
              <div className="flex justify-center">
                <div className="w-40 h-2 bg-gray-400 rounded-b-lg"></div>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100"
            >
              <Layout className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Intégration InDesign</h3>
              <p className="text-gray-600">Notre outil se connecte directement à InDesign. Le format de sortie est natif, prêt à être utilisé.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100"
            >
              <Monitor className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Prérequis simple</h3>
              <p className="text-gray-600">Il suffit d'avoir InDesign installé sur votre poste pour utiliser notre solution.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100"
            >
              <Zap className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Gain de temps</h3>
              <p className="text-gray-600">Réduisez drastiquement le temps passé sur la mise en page de chaque numéro.</p>
            </motion.div>
          </div>

          <div className="text-center">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Automatiser ma mise en page
            </button>
          </div>
        </div>
      </section>

      {/* Section 3: Contenu éditorial */}
      <section id="contenu" className="py-24 px-4 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Générez du <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">contenu éditorial</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Articles de blog, posts pour les réseaux sociaux... Notre IA écrit dans votre style, pas celui de ChatGPT.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-purple-100">
                <div className="flex items-center mb-6">
                  <Brain className="h-12 w-12 text-purple-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Une IA entraînée à votre style</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  ChatGPT est une IA standardisée qui copie le ton et le style de milliers de blogs génériques. 
                  Notre approche est différente : nous entraînons l'IA sur vos propres articles.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-3" />
                    IA formée sur vos articles existants
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-3" />
                    Respect de votre ton et style rédactionnel
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-3" />
                    Utilisation des meilleurs modèles d'IA du marché
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                <p className="text-xl leading-relaxed text-gray-800">
                  Imaginez : vous terminez votre article, vous allez prendre un café.
                </p>
                <p className="mt-3 text-lg leading-relaxed text-gray-800">
                  À votre retour, trois brouillons vous attendent :
                </p>
                <ul className="mt-4 space-y-3 text-gray-800">
                  <li className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-blue-600" />
                    <span>un post LinkedIn</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Instagram className="h-5 w-5 text-pink-600" />
                    <span>un post Instagram</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Twitter className="h-5 w-5 text-cyan-600" />
                    <span>un post X — rédigés dans <strong>votre style</strong></span>
                  </li>
                </ul>
                <p className="mt-6 text-lg text-gray-700 italic">
                  Vous validez, ajustez quelques détails, et <strong>en un clic</strong>, vous publiez.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="text-center">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Automatiser ma création de contenu
            </button>
          </div>
        </div>
      </section>

      
      {/* Section Ils nous ont fait confiance */}
      <section id="references" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <TextGenerateEffect 
              words="Ils nous ont fait confiance" 
              className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des magazines de renom nous font confiance pour leur transformation digitale
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-start justify-items-center"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-3 rounded-xl shadow-lg border border-gray-200 overflow-hidden"
            >
              <img 
                src="/cover-lui.jpg" 
                alt="Lui Magazine" 
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-3 rounded-xl shadow-lg border border-gray-200 overflow-hidden"
            >
              <img 
                src="/cover-playboy.jpg" 
                alt="Playboy France" 
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-3 rounded-xl shadow-lg border border-gray-200 overflow-hidden"
            >
              <img 
                src="/cover-maison-jardin.jpg" 
                alt="Maison & Jardin Magazine" 
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-3 rounded-xl shadow-lg border border-gray-200 overflow-hidden"
            >
              <img 
                src="/cover-maison-actuelle.jpg" 
                alt="Maison Actuelle" 
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
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
              words="Notre Approche" 
              className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une IA responsable, encadrée, au service des éditeurs de presse
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Notre conviction :
                </span>
                <br />
                <span className="text-gray-900">
                  L'IA amplifie votre expertise, elle ne la remplace pas
                </span>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Shield className="h-8 w-8 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Contrôle total</h3>
                    <p className="text-gray-600 leading-relaxed">Vous gardez la main sur chaque étape. L'IA propose, vous validez.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <TrendingUp className="h-8 w-8 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">ROI mesurable</h3>
                    <p className="text-gray-600 leading-relaxed">Des solutions conçues pour être rentabilisées dès le premier mois.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Heart className="h-8 w-8 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Accompagnement dédié</h3>
                    <p className="text-gray-600 leading-relaxed">Support continu pour maximiser vos résultats sur le long terme.</p>
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
              <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                <Target className="h-8 w-8 text-blue-600 mr-3" />
                Pourquoi choisir Polaris IA ?
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  Expertise spécifique presse et édition
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  Solutions à ROI immédiat et mesurable
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  Intégration avec vos outils existants (InDesign...)
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  IA personnalisée à votre style rédactionnel
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  Accompagnement continu inclus
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <TextGenerateEffect 
              words="Questions fréquentes" 
              className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Retrouvez les réponses aux questions les plus courantes sur nos services
            </p>
          </motion.div>

          <div className="space-y-6">
            {/* Questions sur les droits d'auteur */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="bg-gray-50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-md"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Qu'en est-il des droits d'auteur pour les images générées par IA ?</h3>
              <p className="text-gray-600">
                Sous certaines conditions, les images générées par IA peuvent être utilisées sans aucun problème juridique. 
                Nous nous assurons que toutes les images respectent ces conditions. Cet aspect est détaillé dans notre accompagnement : 
                nous vous guidons sur les bonnes pratiques et les paramètres à respecter pour une utilisation sereine et conforme.
              </p>
            </motion.div>

            {/* Questions sur la mise en page InDesign */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-gray-50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-md"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Quel est le format de sortie pour la mise en page automatique ?</h3>
              <p className="text-gray-600">
                Notre outil génère des maquettes directement au format InDesign natif. Nous nous connectons directement à InDesign, 
                ce qui signifie que vous récupérez un fichier prêt à l'emploi. Le seul prérequis est d'avoir InDesign installé sur votre poste 
                pour utiliser notre solution.
              </p>
            </motion.div>

            {/* Questions sur le ROI / prix */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="bg-gray-50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-md"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Quel est le retour sur investissement de vos solutions ?</h3>
              <p className="text-gray-600">
                Nos solutions sont conçues pour être rentabilisées immédiatement. Prenons un exemple concret : si vous facturez une annonce 
                3 000€ dans votre magazine, il suffit d'un seul nouvel annonceur par mois pour couvrir largement le coût de notre solution 
                de prospection. C'est un investissement, pas une dépense — et le ROI est directement mesurable dès le premier mois.
              </p>
            </motion.div>

            {/* Questions sur ChatGPT vs IA personnalisée */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-md"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Quelle est la différence entre ChatGPT et votre IA de rédaction ?</h3>
              <p className="text-gray-600">
                ChatGPT est une IA standardisée : quand vous lui demandez d'écrire un article, elle copie le ton et le style de milliers 
                de blogs génériques auxquels elle a été exposée. Le résultat manque souvent de personnalité. Notre approche est radicalement différente : 
                nous entraînons l'IA sur vos propres articles, votre manière de parler, d'évoquer les sujets. Nous utilisons le "cerveau" de ChatGPT 
                ou d'autres IA encore plus performantes en rédaction, mais nous les formons à votre style rédactionnel unique.
              </p>
            </motion.div>

            {/* Questions sur l'automatisation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="bg-gray-50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-md"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-900">C'est quoi exactement une automatisation ?</h3>
              <p className="text-gray-600">
                Une automatisation est un enchaînement de tâches répétitives confiées à des outils (IA + intégrations) pour gagner du temps et fiabiliser le rendu.
                Exemple concret : à la fin d'un article, génération automatique des posts LinkedIn, Instagram et X dans votre style, prêts à être validés et publiés en un clic.
              </p>
            </motion.div>

            {/* Questions sur les prérequis techniques */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gray-50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-md"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Faut-il des compétences techniques pour utiliser vos solutions ?</h3>
              <p className="text-gray-600">
                Non, aucun prérequis technique n'est nécessaire. Nos solutions sont conçues pour être accessibles à tous les éditeurs, 
                quel que soit leur niveau technique. Nous vous accompagnons dans la prise en main et nous assurons que tout fonctionne 
                parfaitement dans votre environnement de travail.
              </p>
            </motion.div>

            {/* Questions sur le délai de mise en place */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="bg-gray-50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-md"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Combien de temps faut-il pour mettre en place une solution ?</h3>
              <p className="text-gray-600">
                Le délai varie selon la solution : de 2-3 semaines pour la prospection d'annonceurs ou la génération de contenu, 
                à 4-6 semaines pour l'automatisation complète de la mise en page. Nous procédons par étapes avec des livrables intermédiaires 
                pour que vous puissiez bénéficier rapidement des premiers résultats.
              </p>
            </motion.div>

            {/* Questions sur l'accompagnement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-md"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Proposez-vous un accompagnement après la mise en place ?</h3>
              <p className="text-gray-600">
                Oui, nous proposons un accompagnement continu pour assurer le bon fonctionnement des solutions et vous aider à en tirer 
                le maximum. Nous restons disponibles pour ajuster les paramètres, former vos équipes et optimiser les résultats au fil du temps.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <TextGenerateEffect 
              words="Parlons de votre projet" 
              className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Prenez contact avec notre équipe pour découvrir comment booster vos revenus et automatiser vos processus
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
              <div className="bg-white backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-md">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Pourquoi nous choisir ?</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Expertise spécifique presse et édition</li>
                  <li>• Solutions à ROI immédiat et mesurable</li>
                  <li>• Accompagnement personnalisé inclus</li>
                  <li>• Intégration avec vos outils existants</li>
                  <li>• Support continu après mise en place</li>
                </ul>
              </div>
              
              <div className="bg-white backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-md">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Nos services</h3>
                <div className="space-y-2 text-gray-600">
                  <p>� <strong>Revenus publicitaires</strong> - Prospection d'annonceurs automatisée</p>
                  <p>📐 <strong>Mise en page</strong> - Automatisation InDesign</p>
                  <p>✍️ <strong>Contenu éditorial</strong> - Articles et posts réseaux sociaux</p>
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
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Polaris IA
                </h3>
                <p className="text-blue-100 mb-6 text-lg max-w-md">
                  L'intelligence artificielle au service des éditeurs de presse. Développez vos revenus, automatisez votre mise en page et générez du contenu éditorial.
                </p>
                <div className="flex space-x-4">
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/20"
                  >
                    Contact
                  </button>
                  <button 
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-6 py-3 bg-white text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 font-semibold"
                  >
                    Nos services
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
                  <li><a href="/#revenus" className="hover:text-white transition-colors">Revenus publicitaires</a></li>
                  <li><a href="/#mise-en-page" className="hover:text-white transition-colors">Mise en page automatique</a></li>
                  <li><a href="/#contenu" className="hover:text-white transition-colors">Contenu éditorial</a></li>
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
                  <li><a href="/#references" className="hover:text-white transition-colors">Nos références</a></li>
                  <li><a href="/#faq" className="hover:text-white transition-colors">FAQ</a></li>
                  <li><a href="/#contact" className="hover:text-white transition-colors">Contact</a></li>
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
              <p>© 2024 Polaris IA - KANRA Publishing. Tous droits réservés.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</a>
                <a href="/politique-confidentialite" className="hover:text-white transition-colors">Politique de confidentialité</a>
                <a href="/cgv" className="hover:text-white transition-colors">CGV</a>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  // Désactiver la restauration automatique du défilement du navigateur
  React.useLayoutEffect(() => {
    // Désactiver la restauration automatique du navigateur
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // S'assurer que la page est tout en haut au chargement initial
    window.scrollTo(0, 0);

    // Nettoyage
    return () => {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    };
  }, []);

  // Gestion du défilement personnalisée pour les changements de route
  const location = useLocation();
  
  React.useEffect(() => {
    // S'assurer que le défilement est en haut pour chaque changement de route de manière instantanée
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    // Si l'URL contient un hash, faire défiler jusqu'à l'élément correspondant
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        // Petit délai pour s'assurer que le composant est monté
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/page-d-accueil" element={<PageAccueilPME />} />
        <Route path="/formation-ia01" element={<FormationIA01 />} />
        <Route path="/formation-ia02" element={<FormationIA02 />} />
        <Route path="/formation-ia03" element={<FormationIA03 />} />
        <Route path="/formation-sur-mesure" element={<FormationSurMesure />} />
        <Route path="/cgv" element={<CGV />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
      </Routes>
    </>
  );
}

export default App;


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
  Twitter
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
              L'intelligence artificielle générative au service des rédactions
            </h1>
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
              Une approche structurée, éthique et opérationnelle pour que vos équipes puissent tirer parti de l'IA en toute confiance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white backdrop-blur-sm rounded-2xl p-8 border border-cyan-200 hover:border-cyan-300 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center mb-6">
                <Users className="h-12 w-12 text-cyan-600 mr-4" />
                <h3 className="text-xl font-semibold text-gray-900">Automatisation & Agents IA</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Implémentation d'automatisations de processus et déploiement d'agents IA personnalisés pour optimiser vos workflows éditoriaux.
              </p>
              <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-100">
                <p className="text-cyan-700 font-semibold">✓ Automatisation des processus répétitifs</p>
                <p className="text-cyan-700 font-semibold">✓ Agents IA sur mesure</p>
                <p className="text-cyan-700 font-semibold">✓ Intégration dans vos outils existants</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white backdrop-blur-sm rounded-2xl p-8 border border-blue-200 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center mb-6">
                <CheckCircle className="h-12 w-12 text-blue-600 mr-4" />
                <h3 className="text-xl font-semibold text-gray-900">Audit IA</h3>
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
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white backdrop-blur-sm rounded-2xl p-8 border border-purple-200 hover:border-purple-300 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center mb-6">
                <GraduationCap className="h-12 w-12 text-purple-600 mr-4" />
                <h3 className="text-xl font-semibold text-gray-900">Formations IA</h3>
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
          </div>
        </div>
      </section>

      {/* Automatisation et Agents IA Section (moved after Services) */}
      <section id="automatisation" className="py-24 px-4 bg-gradient-to-br from-purple-50 via-indigo-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Automatisation & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Agents IA</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transformez vos processus éditoriaux avec des solutions d'automatisation intelligentes 
              et des agents IA personnalisés qui s'intègrent parfaitement à vos workflows existants.
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
                  <Zap className="h-12 w-12 text-purple-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Automatisation de Processus</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Libérez vos équipes des tâches répétitives grâce à des automatisations intelligentes 
                  qui s'adaptent à vos besoins spécifiques.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Génération de contenus sur les réseaux sociaux
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Prospection automatisée d'annonceurs
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Automatisation de la rédaction d'articles de blogs
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-indigo-100">
                <div className="flex items-center mb-6">
                  <Brain className="h-12 w-12 text-indigo-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Agents IA Personnalisés</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Déployez des assistants IA spécialisés qui comprennent votre métier et 
                  s'adaptent à votre ligne éditoriale.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Assistant mise en page automatique de magazine
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Agents de recherche et veille
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Agent spécialisé (campagnes de crowdfunding, dossier de presse, facturation...)
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Prêt à automatiser vos processus ?</h3>
            <p className="text-lg mb-6 opacity-90">
              Découvrez comment nos solutions d'automatisation et nos agents IA peuvent 
              transformer votre productivité et optimiser vos workflows éditoriaux.
            </p>
            <Button
              borderRadius="1.75rem"
              className="bg-white text-purple-600 hover:bg-gray-50 font-semibold px-8 py-3"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Demander une démonstration
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Automatisations concrètes Section (moved after Automatisation & Agents IA) */}
      <section id="automatisations" className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Imaginez<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">...</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                <p className="text-xl leading-relaxed text-gray-800">
                  ...vous terminez votre article, vous allez prendre un café.
                </p>
                <p className="mt-3 text-lg leading-relaxed text-gray-800">
                  À votre retour, trois brouillons vous attendent sur votre bureau&nbsp;:
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
                    <span>un post X — rédigés dans votre <strong>style</strong></span>
                  </li>
                </ul>
                <p className="mt-6 text-lg text-gray-700 italic">
                  Vous validez, ajustez quelques détails, et <strong>en un clic</strong>, vous publiez sur les trois réseaux.
                </p>
                <p className="mt-4 text-sm text-gray-500">
                  C'est exactement ce que nous appelons une automatisation.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                  alt="Journaliste soulagé·e au bureau après automatisation"
                  className="rounded-2xl shadow-2xl border border-gray-200 object-cover w-full h-[320px] md:h-[420px]"
                />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-tr from-purple-200 to-blue-200 rounded-2xl blur-md opacity-60" />
                <div className="absolute -top-4 -right-4 w-28 h-28 bg-gradient-to-tr from-blue-200 to-purple-200 rounded-2xl blur-md opacity-60" />
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-700 text-white font-semibold hover:from-blue-700 hover:to-purple-800 transition-all transform hover:scale-105 shadow-lg"
            >
              Mettre en place cette automatisation
            </button>
          </div>
        </div>
      </section>

      {/* Nouvelle section Audit IA (après Services) */}
      <section id="audit" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Audit <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">IA</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Un diagnostic complet de vos usages et besoins pour identifier des gains rapides et bâtir une feuille de route priorisée.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="font-semibold text-gray-900 mb-2">Cartographie des workflows</h3>
              <p className="text-gray-600">Repérage des tâches automatisables et des points de friction éditoriaux.</p>
            </div>
            <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
              <h3 className="font-semibold text-gray-900 mb-2">Sécurité & éthique</h3>
              <p className="text-gray-600">Conformité, risques de biais, gouvernance et transparence des usages.</p>
            </div>
            <div className="bg-cyan-50 rounded-2xl p-6 border border-cyan-100">
              <h3 className="font-semibold text-gray-900 mb-2">Feuille de route</h3>
              <p className="text-gray-600">Actions court terme et chantiers moyen terme, avec indicateurs de succès.</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-700 text-white font-semibold hover:from-blue-700 hover:to-purple-800 transition-all shadow-lg"
            >
              Demander un audit
            </button>
          </div>
        </div>
      </section>

      {/* Pourquoi Former Section (moved below Formations) */}

      {/* Services Section (moved above) */}

      {/* Automatisation & Agents IA section moved below Formations */}

      {/* Formations Section (consolidated) */}
      <section id="formations" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Formations <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">IA</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              L'IA générative transforme le journalisme. Anticipez le changement plutôt que de le subir.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Formations sur étagère */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200"
            >
              <div className="flex items-center mb-6">
                <GraduationCap className="h-12 w-12 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Formations sur étagère</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Des modules concrets pour des résultats immédiats. Formations conçues par et pour les journalistes.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FileText className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">IA01 – Rédaction & retranscription</h4>
                    <p className="text-gray-600 text-sm">Rédiger plus vite, mieux, en s'appuyant sur des agents IA fiables</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Brain className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">IA02 – Images générées & améliorées</h4>
                    <p className="text-gray-600 text-sm">Créer des visuels percutants sans faire appel à des prestataires</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Video className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">IA03 – Vidéo & audio</h4>
                    <p className="text-gray-600 text-sm">Créer des contenus vidéo et audio de qualité professionnelle</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Formations sur mesure */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200"
            >
              <div className="flex items-center mb-6">
                <Users className="h-12 w-12 text-purple-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Formations sur mesure</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Des parcours adaptés à vos besoins spécifiques et à votre contexte éditorial.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Audit préalable</h4>
                    <p className="text-gray-600 text-sm">Analyse de vos besoins et workflows existants</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Contenu personnalisé</h4>
                    <p className="text-gray-600 text-sm">Modules adaptés à votre ligne éditoriale</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Suivi post-formation</h4>
                    <p className="text-gray-600 text-sm">Accompagnement dans la mise en pratique</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-700 text-white font-semibold hover:from-blue-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
            >
              Découvrir nos formations
            </button>
          </motion.div>
        </div>
      </section>

      {/* Pourquoi Former Section (now after Formations) */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 max-w-4xl mx-auto leading-tight">
              Pourquoi former vos équipes à l'
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                IA Générative
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
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
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Réduire les inquiétudes</h3>
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
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Gagner en efficacité</h3>
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
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Rester compétitif</h3>
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
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Réduire les risques</h3>
              <p className="text-gray-600 leading-relaxed">
                Éviter les erreurs factuelles, les biais et les problèmes déontologiques liés à un usage non maîtrisé.
              </p>
            </motion.div>
          </div>


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
              className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
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
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
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
              <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
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

      {/* Automatisations Concrètes Section (relocated below the Automatisation & Agents IA section) */}

      {/* Section Nos Références masquée temporairement
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
              className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
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
            <div className="p-6">
              <img src="/logo-playboy.svg" alt="Playboy" className="h-[82px] w-auto opacity-60 hover:opacity-100 transition-opacity mx-auto" />
            </div>
            <div className="p-6">
              <img src="/logo-lui.svg" alt="Lui Magazine" className="h-[82px] w-auto opacity-60 hover:opacity-100 transition-opacity mx-auto" />
            </div>
            <div className="p-6">
              <img src="/logo-voyage.png" alt="Voyage de Luxe" className="h-[82px] w-auto opacity-60 hover:opacity-100 transition-opacity mx-auto" />
            </div>
            <div className="p-6">
              <img src="/logo-cuisine-ad.jpg" alt="Cuisine A&D" className="h-[82px] w-auto opacity-60 hover:opacity-100 transition-opacity mx-auto" />
            </div>
            <div className="p-6 col-span-2 md:col-span-1">
              <img src="/logo-florentin.png" alt="Florentin" className="h-[82px] w-auto opacity-60 hover:opacity-100 transition-opacity mx-auto" />
            </div>
          </motion.div>
        </div>
      </section>
      */}

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
              className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Retrouvez les réponses aux questions les plus courantes sur nos formations IA
            </p>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="bg-white backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-md"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-900">C'est quoi un agent IA ?</h3>
              <p className="text-gray-600">
                Un agent IA est un assistant intelligent capable d’exécuter des tâches de bout en bout en autonomie partielle :
                il comprend un objectif (par ex. « préparer un post LinkedIn à partir d’un article »), planifie les étapes, utilise des outils
                (moteurs de génération, API, CMS), et rend un livrable conforme à votre ligne éditoriale avec contrôle humain final.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08 }}
              className="bg-white backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-md"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-900">C'est quoi une automatisation ?</h3>
              <p className="text-gray-600">
                Une automatisation est un enchaînement de tâches répétitives confiées à des outils (IA + intégrations) pour gagner du temps et fiabiliser le rendu.
                Exemple concret : à la fin d’un article, génération et préparation des posts LinkedIn, Instagram et X dans votre style, prêts à être validés et publiés en un clic.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-md"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Faut-il avoir des connaissances techniques pour suivre les formations ?</h3>
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
              <h3 className="text-lg font-semibold mb-4 text-gray-900">J'utilise déjà ChatGPT, est-ce que ça va vraiment me servir ?</h3>
              <p className="text-gray-600">
                Oui, nos formations vont bien au-delà de l'utilisation basique de ChatGPT. Nous vous montrons comment intégrer l'IA dans vos workflows éditoriaux, automatiser des tâches complexes, générer des contenus fiables et gagner en efficacité sur l'ensemble de la chaîne de production journalistique.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-md"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Quel est le format des formations ?</h3>
              <p className="text-gray-600">
                Nos formations sont proposées en présentiel, à distance ou en format hybride. Elles alternent théorie, démonstrations, ateliers pratiques et accompagnement personnalisé pour garantir une montée en compétences concrète et applicable immédiatement dans votre rédaction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-md"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Proposez-vous un suivi après la formation ?</h3>
              <p className="text-gray-600">
                Oui, nous proposons un accompagnement post-formation pour assurer l'adoption des outils dans vos workflows. Pour les formations sur-mesure, cet accompagnement est renforcé et personnalisé.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-md"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Qu'est-ce que l'automatisation de processus éditoriaux ?</h3>
              <p className="text-gray-600">
                L'automatisation consiste à déléguer à l'IA les tâches répétitives de votre workflow : génération de contenus, mise en forme, publication multi-canaux, veille automatique, etc. Cela libère du temps pour les tâches à plus forte valeur ajoutée comme l'investigation et l'analyse.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-md"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Comment fonctionnent les agents IA personnalisés ?</h3>
              <p className="text-gray-600">
                Nos agents IA sont des assistants spécialisés formés sur votre ligne éditoriale, vos sources et vos processus. Ils peuvent rédiger dans votre style, effectuer de la veille thématique, répondre aux lecteurs ou même gérer des workflows complexes en autonomie, tout en respectant vos standards qualité.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="bg-white backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-md"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Les formations peuvent-elles être adaptées à notre rédaction ?</h3>
              <p className="text-gray-600">
                Absolument ! Nous proposons des formations sur-mesure après audit de vos besoins éditoriaux et techniques. Le parcours est co-construit avec vos équipes et inclut des cas pratiques issus de vos workflows.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-md"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Combien de temps faut-il pour déployer une solution d'automatisation ?</h3>
              <p className="text-gray-600">
                Le délai varie selon la complexité : de 2-4 semaines pour des automatisations simples à 2-3 mois pour des agents IA complexes. Nous procédons par étapes avec des livrables intermédiaires pour que vous puissiez bénéficier rapidement des premiers gains de productivité.
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
              className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
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
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Pourquoi nous choisir ?</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Expertise croisée IA / journalisme</li>
                  <li>• Approche personnalisée et pragmatique</li>
                  <li>• Accompagnement post-formation inclus</li>
                  <li>• Veille continue sur les outils et cas d'usage</li>
                  <li>• Intervenants reconnus dans le secteur</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-md">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Nos services</h3>
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
                <h3 className="text-2xl font-bold mb-4 text-white">
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
                  <li><a href="/#services" className="hover:text-white transition-colors">Audit IA</a></li>
                  <li><a href="/#formations" className="hover:text-white transition-colors">Formations IA</a></li>
                  <li><a href="/#services" className="hover:text-white transition-colors">Accompagnement</a></li>
                  <li><a href="/#contact" className="hover:text-white transition-colors">Formation sur mesure</a></li>
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
                  <li><a href="/#about" className="hover:text-white transition-colors">Nos engagements</a></li>

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


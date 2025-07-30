import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles } from '../components/ui/sparkles';
import { FloatingNav } from '../components/ui/floating-navbar';
import { TextGenerateEffect } from '../components/ui/text-generate-effect';
import { BentoGrid, BentoGridItem } from '../components/ui/bento-grid';
import { Button } from '../components/ui/moving-border';
import ContactForm from '../components/ContactForm';
import AnimatedGradientText from '../components/ui/animated-gradient-text';
import AnimatedCounter from '../components/ui/animated-counter';
import CompassLogo from '../components/ui/compass-logo';

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
  Building2,
  BarChart3,
  Clock,
  Briefcase
} from 'lucide-react';

const PageAccueilPME = () => {
  const navigate = useNavigate();

  const navItems = [
    { name: "Accueil", link: "/page-d-accueil#home" },
    { name: "Services", link: "/page-d-accueil#services" },
    { name: "Formations", link: "/page-d-accueil#formations" },
    { name: "À propos", link: "/page-d-accueil#about" },
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
              L'intelligence artificielle générative au service de votre PME
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              Transformez l'IA en levier de performance pour votre entreprise, sans compromis sur la qualité et l'efficacité.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Des résultats <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">mesurables</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              L'impact concret de l'IA sur la productivité des PME
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
                end="40%" 
                duration={2.5}
                className="text-6xl font-black text-blue-700 mb-3"
              />
              <div className="font-bold text-xl text-gray-900 mb-2">de temps gagné</div>
              <div className="text-gray-600 mb-4">sur les tâches administratives</div>
              <div className="text-xs text-gray-400">Source : McKinsey Global Institute</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-8 rounded-2xl shadow-xl bg-purple-50 border border-purple-100 hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <AnimatedCounter 
                end="1h30" 
                duration={2.5}
                className="text-6xl font-black text-purple-700 mb-3"
              />
              <div className="font-bold text-xl text-gray-900 mb-2">économisées par jour</div>
              <div className="text-gray-600 mb-4">et par collaborateur en moyenne</div>
              <div className="text-xs text-gray-400">Source : Yes We Prompt 2025</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="p-8 rounded-2xl shadow-xl bg-green-50 border border-green-100 hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <AnimatedCounter 
                end="54%" 
                duration={2.5}
                className="text-6xl font-black text-green-700 mb-3"
              />
              <div className="font-bold text-xl text-gray-900 mb-2">des PME interrogées</div>
              <div className="text-gray-600 mb-4">déclarent amélioration efficacité</div>
              <div className="text-xs text-gray-400">Source : Étude Gedia-McKinsey 2025</div>
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 max-w-4xl mx-auto leading-tight">
              Pourquoi former votre équipe à l'
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                IA Générative
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              L'IA générative transforme le monde des affaires. Anticipez le changement plutôt que de le subir.
            </p>
            
            {/* Badge statistique centré sous le sous-titre */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-flex items-center bg-gradient-to-r from-orange-100 to-yellow-100 rounded-2xl px-6 py-4 border border-orange-200 shadow-lg"
            >
              <TrendingUp className="h-5 w-5 text-orange-600 mr-3" />
              <div className="text-left">
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-2xl text-orange-800">73%</span>
                  <span className="text-gray-700">des dirigeants de PME considèrent l'IA comme prioritaire</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Source : Étude Deloitte PME, 2024</p>
              </div>
            </motion.div>
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
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Réduire les coûts</h3>
              <p className="text-gray-600 leading-relaxed">
                Automatiser les tâches répétitives et réduire les coûts opérationnels grâce à une utilisation maîtrisée de l'IA.
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
                Libérer du temps pour les activités à forte valeur ajoutée en automatisant les processus métier.
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
                S'adapter aux nouvelles technologies et maintenir son avantage concurrentiel face aux entreprises transformées.
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
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Éviter les risques</h3>
              <p className="text-gray-600 leading-relaxed">
                Former vos équipes pour éviter les erreurs coûteuses et les problèmes de conformité liés à l'IA.
              </p>
            </motion.div>
          </div>

          {/* Note sur l'importance de la formation */}
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
                  <strong>Pourquoi la formation est essentielle ?</strong> Selon une étude MIT, les entreprises qui forment leurs collaborateurs à l'IA 
                  voient leur productivité augmenter de 14% en moyenne, contre seulement 3% pour celles qui adoptent l'IA sans formation préalable.
                </p>
                <p className="text-xs text-gray-500 mt-2">Source : MIT Technology Review, 2024</p>
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
              className="bg-white backdrop-blur-sm rounded-2xl p-8 border border-blue-200 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center mb-6">
                <CheckCircle className="h-12 w-12 text-blue-600 mr-4" />
                <h3 className="text-xl font-semibold text-gray-900">Audit IA</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Diagnostiquer. Comprendre. Agir. Une vision objective de l'usage de l'IA dans votre entreprise avec une feuille de route priorisée.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                <p className="text-blue-700 font-semibold">✓ Évaluation des processus métier</p>
                <p className="text-blue-700 font-semibold">✓ Identification des cas d'usage prioritaires</p>
                <p className="text-blue-700 font-semibold">✓ Plan de déploiement personnalisé</p>
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
                <h3 className="text-xl font-semibold text-gray-900">Formations IA</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Des modules concrets pour des résultats immédiats. Formations conçues pour les équipes de PME.
              </p>
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                <p className="text-purple-700 font-semibold">✓ Modules pratiques et opérationnels</p>
                <p className="text-purple-700 font-semibold">✓ Cas d'usage métier adaptés aux PME</p>
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
                <Zap className="h-12 w-12 text-cyan-600 mr-4" />
                <h3 className="text-xl font-semibold text-gray-900">Automatisation</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Mise en place d'automatisations intelligentes pour transformer vos processus métier et libérer le potentiel de vos équipes.
              </p>
              <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-100">
                <p className="text-cyan-700 font-semibold">✓ Automatisation des tâches répétitives</p>
                <p className="text-cyan-700 font-semibold">✓ Workflows intelligents sur-mesure</p>
                <p className="text-cyan-700 font-semibold">✓ Intégration avec vos outils existants</p>
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
              className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des modules concrets adaptés aux besoins des PME
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
              <Briefcase className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">IA01 – Communication & Contenus</h3>
              <p className="text-gray-600 mb-6">Créer du contenu marketing efficace, automatiser la communication client et optimiser votre présence digitale.</p>
              <div className="text-blue-600 font-semibold">3 heures</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-purple-400 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
              onClick={() => navigate('/formation-ia02')}
            >
              <BarChart3 className="h-12 w-12 text-purple-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">IA02 – Analyse & Automatisation</h3>
              <p className="text-gray-600 mb-6">Automatiser l'analyse de données, optimiser les processus métier et prendre de meilleures décisions.</p>
              <div className="text-purple-600 font-semibold">2 heures</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-cyan-400 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
              onClick={() => navigate('/formation-ia03')}
            >
              <Clock className="h-12 w-12 text-cyan-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">IA03 – Productivité & Gestion</h3>
              <p className="text-gray-600 mb-6">Optimiser la gestion de projets, automatiser les tâches administratives et améliorer la collaboration.</p>
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
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Formation sur mesure</h3>
              <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
                À la suite de notre audit, nous co-construisons des parcours adaptés à votre secteur d'activité : cas pratiques issus de vos propres processus, 
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
              className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une IA responsable, encadrée, au service de votre entreprise
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
                  L'IA ne remplace pas l'humain, elle l'assiste
                </span>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Shield className="h-8 w-8 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Contrôle humain final</h3>
                    <p className="text-gray-600 leading-relaxed">Aucune décision importante n'est déléguée entièrement à l'IA sans validation.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Heart className="h-8 w-8 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Approche éthique</h3>
                    <p className="text-gray-600 leading-relaxed">Intégration des enjeux éthiques et de conformité dès la conception des solutions.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Crown className="h-8 w-8 text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Souveraineté des données</h3>
                    <p className="text-gray-600 leading-relaxed">Transparence, sécurité des données et indépendance face aux technologies.</p>
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
                  Expertise croisée IA / entreprises
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
              Retrouvez les réponses aux questions les plus courantes sur nos formations IA pour PME
            </p>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-md"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Faut-il avoir des connaissances techniques pour suivre les formations ?</h3>
              <p className="text-gray-600">
                Non, aucun prérequis technique n'est nécessaire. Nos formations sont conçues pour être accessibles à tous les collaborateurs, quel que soit leur niveau technique. Nous partons des bases et progressons étape par étape.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-md"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Comment l'IA peut-elle s'adapter à notre secteur d'activité ?</h3>
              <p className="text-gray-600">
                Chaque secteur a ses spécificités. Nos formations incluent des cas d'usage adaptés à votre domaine d'activité, et nos formations sur-mesure sont entièrement personnalisées selon votre contexte métier.
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
                Nos formations sont proposées en présentiel, à distance ou en format hybride. Elles alternent théorie, démonstrations, ateliers pratiques et accompagnement personnalisé pour garantir une montée en compétences applicable immédiatement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-md"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Quel est le retour sur investissement ?</h3>
              <p className="text-gray-600">
                Nos formations sont conçues pour générer un ROI rapide. En moyenne, nos clients observent des gains de productivité mesurables dès les premières semaines d'application des techniques apprises.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-md"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Proposez-vous un accompagnement post-formation ?</h3>
              <p className="text-gray-600">
                Oui, nous proposons systématiquement un accompagnement post-formation pour assurer l'adoption des outils dans vos processus. Pour les formations sur-mesure, cet accompagnement est renforcé et personnalisé.
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
                  <li>• Expertise croisée IA / entreprises</li>
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
                  L'intelligence artificielle générative au service des PME. Formations, audits et accompagnement pour une IA éthique et efficace.
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
                  <li><a href="/page-d-accueil#services" className="hover:text-white transition-colors">Audit IA</a></li>
                  <li><a href="/page-d-accueil#formations" className="hover:text-white transition-colors">Formations IA</a></li>
                  <li><a href="/page-d-accueil#services" className="hover:text-white transition-colors">Accompagnement</a></li>
                  <li><a href="/page-d-accueil#contact" className="hover:text-white transition-colors">Formation sur mesure</a></li>
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
                  <li><a href="/page-d-accueil#about" className="hover:text-white transition-colors">Nos engagements</a></li>
                  <li><a href="/page-d-accueil#references" className="hover:text-white transition-colors">Nos références</a></li>
                  <li><a href="/page-d-accueil#faq" className="hover:text-white transition-colors">FAQ</a></li>
                  <li><a href="/page-d-accueil#contact" className="hover:text-white transition-colors">Contact</a></li>
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

export default PageAccueilPME;
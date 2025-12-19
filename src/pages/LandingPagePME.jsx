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
  Briefcase,
  Mail,
  Workflow,
  PenTool,
  Sparkle
} from 'lucide-react';

const LandingPagePME = () => {
  const navigate = useNavigate();

  const navItems = [
    { name: "Accueil", link: "/landing-page#home" },
    { name: "Services", link: "/landing-page#services" },
    { name: "Cas d'usage", link: "/landing-page#use-cases" },
    { name: "À propos", link: "/landing-page#about" },
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
              L'agence IA qui transforme votre TPE/PME
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              Automatisez votre prospection, optimisez vos processus métier et générez du contenu de qualité grâce à l'intelligence artificielle.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => scrollToSection('use-cases')}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-700 text-white font-semibold hover:from-blue-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Découvrir nos solutions
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
              L'impact concret de l'IA sur la productivité des TPE/PME
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
              <div className="text-6xl font-black text-purple-700 mb-3">1h30</div>
              <div className="font-bold text-xl text-gray-900 mb-2">gagnées par jour</div>
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
              <div className="text-gray-600 mb-4">déclarent une amélioration d'activité</div>
              <div className="text-xs text-gray-400">Source : Étude Gedia-McKinsey 2025</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cas d'usage Section */}
      <section id="use-cases" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <TextGenerateEffect
              words="Nos solutions IA pour votre entreprise"
              className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trois cas d'usage concrets pour booster votre activité
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Prospection automatisée */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white backdrop-blur-sm rounded-2xl p-8 border border-green-200 hover:border-green-300 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center mb-6">
                <Mail className="h-12 w-12 text-green-600 mr-4" />
                <h3 className="text-xl font-semibold text-gray-900">Prospection automatisée</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Développez votre chiffre d'affaires avec une prospection intelligente et personnalisée. L'IA identifie vos prospects idéaux et les contacte automatiquement.
              </p>
              <div className="bg-green-50 rounded-lg p-4 border border-green-100 space-y-2">
                <p className="text-green-700 font-semibold">✓ Identification automatique de prospects</p>
                <p className="text-green-700 font-semibold">✓ Jusqu'à 50 emails personnalisés/jour</p>
                <p className="text-green-700 font-semibold">✓ CRM intégré et suivi automatique</p>
                <p className="text-green-700 font-semibold">✓ Relances intelligentes</p>
              </div>
              <div className="mt-6 p-4 bg-green-50/50 rounded-lg border border-green-100">
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Exemple concret :</strong>
                </p>
                <p className="text-sm text-gray-600">
                  Un cabinet de conseil a généré 15 nouveaux clients en 3 mois grâce à notre système de prospection automatisée, avec un taux de conversion de 8%.
                </p>
              </div>
            </motion.div>

            {/* Automatisation de processus */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white backdrop-blur-sm rounded-2xl p-8 border border-blue-200 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center mb-6">
                <Workflow className="h-12 w-12 text-blue-600 mr-4" />
                <h3 className="text-xl font-semibold text-gray-900">Automatisation de processus</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Libérez du temps pour vos activités stratégiques. Automatisez vos tâches répétitives et optimisez vos workflows métier.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100 space-y-2">
                <p className="text-blue-700 font-semibold">✓ Traitement automatique de documents</p>
                <p className="text-blue-700 font-semibold">✓ Workflows intelligents sur-mesure</p>
                <p className="text-blue-700 font-semibold">✓ Intégration avec vos outils (Excel, CRM...)</p>
                <p className="text-blue-700 font-semibold">✓ Réduction des erreurs humaines</p>
              </div>
              <div className="mt-6 p-4 bg-blue-50/50 rounded-lg border border-blue-100">
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Exemple concret :</strong>
                </p>
                <p className="text-sm text-gray-600">
                  Une entreprise de services a économisé 20h/semaine en automatisant le traitement de ses devis et factures, avec une précision de 99%.
                </p>
              </div>
            </motion.div>

            {/* Génération de contenu */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white backdrop-blur-sm rounded-2xl p-8 border border-purple-200 hover:border-purple-300 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center mb-6">
                <PenTool className="h-12 w-12 text-purple-600 mr-4" />
                <h3 className="text-xl font-semibold text-gray-900">Génération de contenu</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Créez du contenu de qualité en un temps record. L'IA s'adapte à votre ton et votre identité de marque pour produire du contenu authentique.
              </p>
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-100 space-y-2">
                <p className="text-purple-700 font-semibold">✓ Articles de blog personnalisés</p>
                <p className="text-purple-700 font-semibold">✓ Publications réseaux sociaux</p>
                <p className="text-purple-700 font-semibold">✓ Propositions commerciales</p>
                <p className="text-purple-700 font-semibold">✓ IA formée à votre style éditorial</p>
              </div>
              <div className="mt-6 p-4 bg-purple-50/50 rounded-lg border border-purple-100">
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Exemple concret :</strong>
                </p>
                <p className="text-sm text-gray-600">
                  Une agence immobilière produit désormais 12 articles de blog par mois (vs 2 avant), augmentant son trafic web de 300%.
                </p>
              </div>
            </motion.div>
          </div>
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
              words="Notre accompagnement"
              className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De l'audit à la mise en œuvre, nous vous accompagnons à chaque étape de votre transformation IA
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
                Des modules concrets pour des résultats immédiats. Formations conçues pour les équipes de TPE/PME.
              </p>
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                <p className="text-purple-700 font-semibold">✓ Modules pratiques et opérationnels</p>
                <p className="text-purple-700 font-semibold">✓ Cas d'usage métier adaptés</p>
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
                <h3 className="text-xl font-semibold text-gray-900">Mise en œuvre</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Déploiement clé en main de solutions IA adaptées à votre contexte. Nous gérons tout, de la configuration à l'intégration.
              </p>
              <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-100">
                <p className="text-cyan-700 font-semibold">✓ Configuration et paramétrage</p>
                <p className="text-cyan-700 font-semibold">✓ Intégration avec vos outils</p>
                <p className="text-cyan-700 font-semibold">✓ Support technique continu</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Preuve sociale / Ambassadeurs */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Ils nous font <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">confiance</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center justify-center p-4"
            >
              <img
                src="/osez-lia.png"
                alt="Osez l'IA"
                className="h-20 md:h-24 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-center p-4"
            >
              <img
                src="/activateur-france-num.png"
                alt="Activateur France Num"
                className="h-20 md:h-24 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center justify-center p-4"
            >
              <img
                src="/logo-azure-ai-900.svg"
                alt="Microsoft Certified: Azure AI Fundamentals"
                className="h-20 md:h-24 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          </div>
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
                  L'IA amplifie votre expertise, elle ne la remplace pas
                </span>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Zap className="h-8 w-8 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">ROI rapide et mesurable</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Nos solutions génèrent des résultats concrets dès les premières semaines : gain de temps, réduction des coûts, augmentation du CA.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Shield className="h-8 w-8 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Contrôle total</h3>
                    <p className="text-gray-600 leading-relaxed">
                      L'IA propose, vous validez. Vous gardez toujours la main sur vos processus métier et vos contenus.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Users className="h-8 w-8 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Accompagnement dédié</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Formation, support technique et suivi personnalisé tout au long de votre transformation IA.
                    </p>
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
                  Expertise IA appliquée aux TPE/PME
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  Solutions clé en main et sur-mesure
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  Accompagnement de A à Z
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  ROI garanti et mesurable
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  Intervenants certifiés et reconnus
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
              Retrouvez les réponses aux questions les plus courantes
            </p>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-md"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Combien coûte une solution d'automatisation IA ?</h3>
              <p className="text-gray-600">
                Le coût varie selon vos besoins spécifiques. Nous proposons un audit gratuit pour évaluer votre situation et vous fournir un devis personnalisé. En moyenne, nos clients constatent un retour sur investissement en moins de 3 mois.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-md"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-900">L'IA va-t-elle remplacer mes employés ?</h3>
              <p className="text-gray-600">
                Non. L'IA est conçue pour assister vos équipes, pas les remplacer. Elle automatise les tâches répétitives et chronophages, libérant ainsi du temps pour des activités à forte valeur ajoutée nécessitant l'expertise humaine.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-md"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Combien de temps faut-il pour mettre en place une solution IA ?</h3>
              <p className="text-gray-600">
                Cela dépend de la complexité de votre projet. Pour une solution de prospection automatisée ou de génération de contenu, comptez 2 à 4 semaines. Pour des automatisations plus complexes, cela peut prendre 1 à 2 mois.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-md"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Mes données sont-elles sécurisées ?</h3>
              <p className="text-gray-600">
                Absolument. Nous utilisons uniquement des solutions conformes au RGPD et nous ne stockons jamais vos données sensibles. Toutes nos solutions respectent les plus hauts standards de sécurité.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-md"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Proposez-vous un support après la mise en place ?</h3>
              <p className="text-gray-600">
                Oui, nous proposons un accompagnement continu incluant : formation de vos équipes, support technique, optimisation des performances et veille sur les nouvelles fonctionnalités IA.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <TextGenerateEffect
              words="Prêt à transformer votre entreprise ?"
              className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discutons de vos besoins et découvrez comment l'IA peut booster votre activité
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
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Ce qui vous attend</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Audit gratuit de vos besoins IA</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Démonstration personnalisée de nos solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Estimation du ROI pour votre entreprise</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Plan d'action sur-mesure</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200 shadow-md">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Nos solutions</h3>
                <div className="space-y-2 text-gray-600">
                  <p>🎯 <strong>Prospection automatisée</strong> - Générez plus de leads</p>
                  <p>⚡ <strong>Automatisation de processus</strong> - Gagnez du temps</p>
                  <p>✍️ <strong>Génération de contenu</strong> - Boostez votre visibilité</p>
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
                  L'agence IA qui transforme les TPE/PME. Prospection automatisée, automatisation de processus et génération de contenu.
                </p>
                <div className="flex space-x-4">
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/20"
                  >
                    Contact
                  </button>
                  <button
                    onClick={() => scrollToSection('use-cases')}
                    className="px-6 py-3 bg-white text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 font-semibold"
                  >
                    Nos solutions
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Solutions */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <h4 className="text-xl font-semibold mb-6 text-white">Solutions</h4>
                <ul className="space-y-3 text-blue-100">
                  <li><a href="/landing-page#use-cases" className="hover:text-white transition-colors">Prospection automatisée</a></li>
                  <li><a href="/landing-page#use-cases" className="hover:text-white transition-colors">Automatisation de processus</a></li>
                  <li><a href="/landing-page#use-cases" className="hover:text-white transition-colors">Génération de contenu</a></li>
                  <li><a href="/landing-page#services" className="hover:text-white transition-colors">Audit IA</a></li>
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
                  <li><a href="/landing-page#about" className="hover:text-white transition-colors">Nos engagements</a></li>
                  <li><a href="/landing-page#faq" className="hover:text-white transition-colors">FAQ</a></li>
                  <li><a href="/landing-page#contact" className="hover:text-white transition-colors">Contact</a></li>
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

export default LandingPagePME;

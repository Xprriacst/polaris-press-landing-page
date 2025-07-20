import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // Si pas de hash, on scroll en haut de la page
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    } 
    // Sinon, on laisse le navigateur gérer le scroll vers l'ancre
    // après un court délai pour s'assurer que le DOM est prêt
    else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        // Petit délai pour s'assurer que le composant est monté
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        
        return () => clearTimeout(timer);
      }
    }
  }, [pathname, hash, key]);

  return null;
}

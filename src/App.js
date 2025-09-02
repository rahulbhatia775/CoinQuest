import { useState , useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AuctionSection from './components/AuctionSection';
import HowItWorksSection from './components/HowItWorksSection';
import ProtectionSection from './components/ProtectionSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';
import MarqueeBanner from './components/MarqueeBanner';

const CoinQuestWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'how-it-works', 'auction', 'themes', 'protect', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <MarqueeBanner count={8} position="top" />
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} activeSection={activeSection} scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <AuctionSection />
      <HowItWorksSection />
      <ProtectionSection />
      <NewsletterSection email={email} setEmail={setEmail} />
      <Footer scrollToSection={scrollToSection} />
      <MarqueeBanner count={6} position="bottom" />
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default CoinQuestWebsite;
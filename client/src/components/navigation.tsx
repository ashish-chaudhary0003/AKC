import { useState, useEffect } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-sm border-b border-border' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className={`font-bold text-xl cursor-pointer transition-colors ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
            onClick={() => scrollToSection('home')}
            data-testid="logo-home"
          >
            AKC
          </div>
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className={`transition-colors ${
                isScrolled ? 'text-muted-foreground hover:text-primary' : 'text-white/80 hover:text-white'
              }`}
              data-testid="nav-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className={`transition-colors ${
                isScrolled ? 'text-muted-foreground hover:text-primary' : 'text-white/80 hover:text-white'
              }`}
              data-testid="nav-projects"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className={`transition-colors ${
                isScrolled ? 'text-muted-foreground hover:text-primary' : 'text-white/80 hover:text-white'
              }`}
              data-testid="nav-skills"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`transition-colors ${
                isScrolled ? 'text-muted-foreground hover:text-primary' : 'text-white/80 hover:text-white'
              }`}
              data-testid="nav-contact"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

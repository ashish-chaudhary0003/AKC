import { motion } from "framer-motion";
import profileImage from "@assets/Gemini_Generated_Image_7df8zk7df8zk7df8 (1)_1757949343708.png";

export default function HeroSection() {
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
    <section id="home" className="min-h-screen hero-gradient flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-white order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-6xl lg:text-8xl font-black mb-6 leading-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              ASHISH<br/>
              KUMAR<br/>
              <span className="text-accent-foreground">CHAUDHARY</span>
            </motion.h1>
            <motion.h2 
              className="text-2xl lg:text-3xl font-medium mb-6 text-primary-foreground/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Tech Leader & Change Maker
            </motion.h2>
            <motion.p 
              className="text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Driving digital transformation and social impact with innovative leadership, technical expertise, and community empowerment.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition-colors text-center"
                data-testid="button-view-journey"
              >
                View Leadership Journey
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-colors text-center"
                data-testid="button-connect"
              >
                Let's Connect
              </button>
            </motion.div>
            <motion.div 
              className="mt-8 text-primary-foreground/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <p className="flex items-center gap-2">
                <i className="fas fa-map-marker-alt"></i>
                Delhi, India • Available: Full Time / Freelance / Project
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-primary-foreground/20 shadow-2xl">
                <img 
                  src={profileImage} 
                  alt="Professional headshot of Ashish Kumar Chaudhary" 
                  className="w-full h-full object-cover"
                  data-testid="img-profile"
                />
              </div>
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-card text-primary px-4 py-2 rounded-full shadow-lg border border-border"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <span className="font-semibold">Available Now</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

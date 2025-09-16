import { motion } from "framer-motion";
import CreatiQLogo from "./creatiq-logo";
import KalyanMitraLogo from "./kalyan-mitra-logo";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-primary mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground">Leading impactful initiatives in technology and social change</p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* CreatiQ.Tech Project */}
          <motion.div 
            className="bg-card rounded-3xl overflow-hidden shadow-xl border border-border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            data-testid="project-creatiq"
          >
            <div className="relative h-64 bg-gradient-to-br from-primary to-accent">
              {/* Modern UI dashboard visualization */}
              <div className="absolute inset-0 p-8 flex items-center justify-center">
                <div className="w-full max-w-sm bg-white/10 backdrop-blur rounded-xl p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <CreatiQLogo size="sm" />
                      <div className="text-white font-semibold">CreatiQ Dashboard</div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="text-white text-sm">Active Projects</div>
                      <div className="text-white text-xl font-bold">20+</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="text-white text-sm">Team Members</div>
                      <div className="text-white text-xl font-bold">25</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 text-sm text-accent mb-2">
                <i className="fas fa-calendar"></i>
                Jul 2024 – Sep 2025
              </div>
              <h3 className="text-2xl font-bold mb-3">CreatiQ.Tech</h3>
              <div className="text-muted-foreground text-sm mb-4 font-medium">Software Engineer & Product Lead</div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Led end-to-end development for 20+ team members, architected technical solutions, delivered 99% success rate for digital transformation projects, and expanded services into video production and social media marketing.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Leadership</span>
                <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Full-Stack</span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">Product Strategy</span>
              </div>
            </div>
          </motion.div>
          
          {/* Kalyan Mitra Foundation Project */}
          <motion.div 
            className="bg-card rounded-3xl overflow-hidden shadow-xl border border-border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            data-testid="project-kalyan-mitra"
          >
            <div className="relative h-64 bg-gradient-to-br from-green-500 to-blue-500">
              {/* Community impact visualization */}
              <div className="absolute inset-0 p-8 flex items-center justify-center">
                <div className="w-full max-w-sm">
                  <div className="text-center text-white mb-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <KalyanMitraLogo size="sm" />
                      <h4 className="font-bold text-lg">Community Impact</h4>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-white/20 backdrop-blur rounded-lg p-2">
                      <div className="text-white text-xs">Centers</div>
                      <div className="text-white font-bold">5+</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur rounded-lg p-2">
                      <div className="text-white text-xs">Volunteers</div>
                      <div className="text-white font-bold">50+</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur rounded-lg p-2">
                      <div className="text-white text-xs">Communities</div>
                      <div className="text-white font-bold">10+</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 text-sm text-green-600 mb-2">
                <i className="fas fa-calendar"></i>
                Jul 2024 – Present
              </div>
              <h3 className="text-2xl font-bold mb-3">Kalyan Mitra Foundation</h3>
              <div className="text-muted-foreground text-sm mb-4 font-medium">Founder & Director</div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Launched educational centers in East Delhi, led planning for 50+ volunteers, coordinated health and literacy campaigns, and empowered women in underserved communities.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Social Impact</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">Community Building</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">Leadership</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

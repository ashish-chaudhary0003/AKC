import { motion } from "framer-motion";

interface ContactCardProps {
  href: string;
  icon: string;
  iconColor: string;
  title: string;
  subtitle: string;
  delay: number;
  testId: string;
}

function ContactCard({ href, icon, iconColor, title, subtitle, delay, testId }: ContactCardProps) {
  return (
    <motion.a 
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="bg-card rounded-2xl p-6 text-center shadow-lg border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group block"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      data-testid={testId}
    >
      <i className={`${icon} text-3xl ${iconColor} mb-4 group-hover:scale-110 transition-transform`}></i>
      <div className="font-semibold mb-2">{title}</div>
      <div className="text-sm text-muted-foreground">{subtitle}</div>
    </motion.a>
  );
}

export default function ContactSection() {
  const contactMethods = [
    {
      href: "mailto:work.ashishchaudhary@gmail.com",
      icon: "fas fa-envelope", 
      iconColor: "text-primary",
      title: "Email",
      subtitle: "work.ashishchaudhary@gmail.com",
      delay: 0,
      testId: "contact-email"
    },
    {
      href: "tel:+91-8810336018",
      icon: "fas fa-phone",
      iconColor: "text-accent", 
      title: "Phone",
      subtitle: "+91-8810336018",
      delay: 0.1,
      testId: "contact-phone"
    },
    {
      href: "https://linkedin.com/in/ashish-chaudhary-z3",
      icon: "fab fa-linkedin",
      iconColor: "text-blue-600",
      title: "LinkedIn", 
      subtitle: "Connect with me",
      delay: 0.2,
      testId: "contact-linkedin"
    },
    {
      href: "https://github.com/ashish-chaudhary0003",
      icon: "fab fa-github",
      iconColor: "text-secondary",
      title: "GitHub",
      subtitle: "View my code", 
      delay: 0.3,
      testId: "contact-github"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-primary mb-6">Let's Create Impact Together</h2>
          <p className="text-2xl text-muted-foreground mb-8 leading-relaxed">
            Ready to drive digital transformation or create social impact together?
          </p>
          <p className="text-lg text-muted-foreground mb-12">
            Open to leadership opportunities, partnerships, and innovative projects.
          </p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <ContactCard key={method.title} {...method} />
          ))}
        </div>
        
        <motion.div 
          className="bg-primary/5 rounded-2xl p-8 border border-primary/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          data-testid="availability-notice"
        >
          <div className="flex items-center justify-center gap-2 text-primary mb-2">
            <i className="fas fa-clock"></i>
            <span className="font-semibold">Availability</span>
          </div>
          <p className="text-muted-foreground">Available for new opportunities within the next few weeks</p>
        </motion.div>
      </div>
    </section>
  );
}

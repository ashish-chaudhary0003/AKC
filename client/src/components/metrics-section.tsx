import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface MetricProps {
  number: number;
  suffix: string;
  label: string;
  description: string;
  color: string;
  delay: number;
}

function AnimatedMetric({ number, suffix, label, description, color, delay }: MetricProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            let start = 0;
            const increment = number / 60;
            
            const updateCounter = () => {
              if (start < number) {
                start += increment;
                setCount(Math.ceil(start));
                requestAnimationFrame(updateCounter);
              } else {
                setCount(number);
              }
            };
            
            setTimeout(() => updateCounter(), delay);
          }
        });
      },
      { threshold: 0.7 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [number, delay, hasAnimated]);

  return (
    <motion.div 
      ref={elementRef}
      className="bg-card rounded-2xl p-8 text-center shadow-lg border border-border hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      viewport={{ once: true }}
      data-testid={`metric-${label.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className={`text-5xl font-black ${color} mb-2`} data-testid={`metric-number-${label.toLowerCase().replace(/\s+/g, '-')}`}>
        {count}
      </div>
      <div className="text-sm text-muted-foreground mb-2">{suffix}</div>
      <div className="text-lg font-semibold mb-2">{label}</div>
      <div className="text-sm text-muted-foreground">{description}</div>
    </motion.div>
  );
}

export default function MetricsSection() {
  const metrics = [
    {
      number: 99,
      suffix: "%",
      label: "Success Rate",
      description: "Project delivery success across all client engagements",
      color: "text-primary",
      delay: 200
    },
    {
      number: 40,
      suffix: "%",
      label: "Efficiency Gain",
      description: "Reduction in delivery times through process optimization",
      color: "text-accent",
      delay: 400
    },
    {
      number: 70,
      suffix: "+",
      label: "Team Size",
      description: "Combined team members across technology and social ventures",
      color: "text-secondary",
      delay: 600
    },
    {
      number: 2,
      suffix: "+",
      label: "Years Experience",
      description: "Leading digital transformation initiatives",
      color: "text-primary",
      delay: 800
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-primary mb-6">Impact by Numbers</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Measurable results from leading digital transformation initiatives and social impact projects
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <AnimatedMetric key={index} {...metric} />
          ))}
        </div>
      </div>
    </section>
  );
}

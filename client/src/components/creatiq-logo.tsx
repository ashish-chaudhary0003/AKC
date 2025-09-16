import { motion } from "framer-motion";

interface CreatiQLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function CreatiQLogo({ size = "md", className = "" }: CreatiQLogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12", 
    lg: "w-16 h-16"
  };

  return (
    <motion.div 
      className={`${sizeClasses[size]} ${className} cursor-pointer`}
      whileHover={{ 
        scale: 1.2,
        rotate: 5,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* CreatiQ Logo - Abstract geometric design */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            rotate: [0, 1, -1, 0]
          }}
          transition={{ 
            duration: 0.5,
            rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          {/* Main C shape */}
          <motion.path
            d="M20 20 Q20 10 30 10 L70 10 Q80 10 80 20 L80 30 Q80 40 70 40 L30 40 Q20 40 20 30 Z"
            fill="#3B82F6"
            className="hover:fill-blue-600 transition-colors"
            whileHover={{ 
              fill: "#1D4ED8",
              filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))"
            }}
          />
          {/* Q dot */}
          <motion.circle
            cx="60"
            cy="25"
            r="4"
            fill="#1E40AF"
            className="hover:fill-blue-800 transition-colors"
            whileHover={{ 
              fill: "#1E3A8A",
              scale: 1.2
            }}
          />
          {/* Tech accent lines */}
          <rect x="25" y="15" width="30" height="2" fill="#1E40AF" opacity="0.7" />
          <rect x="25" y="20" width="20" height="1" fill="#1E40AF" opacity="0.5" />
          <rect x="25" y="23" width="15" height="1" fill="#1E40AF" opacity="0.3" />
        </motion.g>
      </svg>
    </motion.div>
  );
}

import { motion } from "framer-motion";

interface KalyanMitraLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function KalyanMitraLogo({ size = "md", className = "" }: KalyanMitraLogoProps) {
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
        rotate: -5,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Kalyan Mitra Logo - Community/Foundation symbol */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -2, 0]
          }}
          transition={{ 
            duration: 0.5,
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          {/* Main foundation building */}
          <motion.rect
            x="25"
            y="40"
            width="50"
            height="35"
            fill="#10B981"
            rx="3"
            className="hover:fill-green-600 transition-colors"
            whileHover={{ 
              fill: "#059669",
              filter: "drop-shadow(0 0 8px rgba(16, 185, 129, 0.5))"
            }}
          />
          {/* Roof */}
          <motion.path
            d="M20 40 L50 20 L80 40 Z"
            fill="#059669"
            className="hover:fill-green-700 transition-colors"
            whileHover={{ 
              fill: "#047857",
              filter: "drop-shadow(0 0 6px rgba(5, 150, 105, 0.5))"
            }}
          />
          {/* Windows */}
          <rect x="35" y="50" width="8" height="8" fill="#F3F4F6" />
          <rect x="57" y="50" width="8" height="8" fill="#F3F4F6" />
          {/* Door */}
          <rect x="45" y="60" width="10" height="15" fill="#6B7280" />
          {/* Community symbol - people */}
          <circle cx="30" cy="30" r="6" fill="#F59E0B" />
          <circle cx="50" cy="25" r="6" fill="#F59E0B" />
          <circle cx="70" cy="30" r="6" fill="#F59E0B" />
          {/* Connecting lines */}
          <path d="M30 30 L50 25 L70 30" stroke="#F59E0B" strokeWidth="2" fill="none" />
        </motion.g>
      </svg>
    </motion.div>
  );
}

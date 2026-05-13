import React from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  padding?: string;
  style?: React.CSSProperties;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  hoverEffect = false,
  padding = "24px",
  style = {},
}) => {
  return (
    <motion.div
      whileHover={
        hoverEffect
          ? {
              scale: 1.02,
              y: -5,
            }
          : undefined
      }
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className={`glass-card ${className}`.trim()}
      style={{
        padding,
        overflow: "hidden",
        position: "relative",
        width: "100%",
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
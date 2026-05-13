import React from "react";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  style = {},
  disabled = false,
  type = "button",
  ...props
}) => {
  const baseStyles: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 600,
    borderRadius: "var(--radius-lg)",
    transition: "all 0.3s ease",
    gap: "8px",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.6 : 1,
    border: "none",
    outline: "none",
  };

  const variants: Record<string, React.CSSProperties> = {
    primary: {
      background: "var(--gradient-primary)",
      color: "#ffffff",
      boxShadow:
        "0 4px 15px rgba(103, 80, 164, 0.3)",
    },

    secondary: {
      background: "rgba(255, 255, 255, 0.05)",
      color: "#ffffff",
      border:
        "1px solid rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(10px)",
    },

    ghost: {
      background: "transparent",
      color: "var(--primary)",
    },
  };

  const sizes: Record<string, React.CSSProperties> = {
    sm: {
      padding: "8px 16px",
      fontSize: "14px",
    },

    md: {
      padding: "12px 24px",
      fontSize: "16px",
    },

    lg: {
      padding: "16px 32px",
      fontSize: "18px",
    },
  };

  return (
    <motion.button
      whileHover={
        !disabled
          ? {
              scale: 1.05,
            }
          : undefined
      }
      whileTap={
        !disabled
          ? {
              scale: 0.95,
            }
          : undefined
      }
      style={{
        ...baseStyles,
        ...variants[variant],
        ...sizes[size],
        ...style,
      }}
      className={className}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
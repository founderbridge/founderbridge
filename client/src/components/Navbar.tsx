import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, Menu, X } from "lucide-react";
import { Button } from "./Button";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkStyle: React.CSSProperties = {
    fontWeight: 500,
    opacity: 0.85,
    textDecoration: "none",
    color: "white",
    transition: "0.3s ease",
  };

  return (
    <nav
      className="glass-nav"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        height: "80px",
        display: "flex",
        alignItems: "center",
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          width: "100%",
          padding: "0 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "24px",
            fontWeight: 800,
            color: "white",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              background: "var(--gradient-primary)",
              padding: "8px",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Rocket size={22} />
          </div>

          FounderBridge
        </Link>

        {/* Desktop Menu */}
        <div
          className="desktop-menu"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
          }}
        >
          <div
            className="desktop-links"
            style={{
              display: "flex",
              gap: "24px",
            }}
          >
            <Link to="/discovery" style={navLinkStyle}>
              Discovery
            </Link>

            <Link to="/dashboard" style={navLinkStyle}>
              Dashboard
            </Link>

            <Link to="/messages" style={navLinkStyle}>
              Messages
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              gap: "12px",
            }}
          >
            <Link to="/auth">
              <Button variant="secondary" size="sm">
                Log In
              </Button>
            </Link>

            <Link to="/auth">
              <Button variant="primary" size="sm">
                Join Now
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          style={{
            background: "transparent",
            border: "none",
            color: "white",
            cursor: "pointer",
            display: "none",
          }}
          className="mobile-menu-btn"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "absolute",
              top: "80px",
              left: 0,
              right: 0,
              background: "rgba(15,15,25,0.95)",
              backdropFilter: "blur(14px)",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <Link to="/discovery" style={navLinkStyle}>
              Discovery
            </Link>

            <Link to="/dashboard" style={navLinkStyle}>
              Dashboard
            </Link>

            <Link to="/messages" style={navLinkStyle}>
              Messages
            </Link>

            <Link to="/auth">
              <Button variant="secondary">Log In</Button>
            </Link>

            <Link to="/auth">
              <Button variant="primary">Join Now</Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Search,
  MessageSquare,
  Sparkles,
  User,
  Settings,
  HelpCircle,
  LogOut,
  Menu,
  X,
} from "lucide-react";

interface SidebarLayoutProps {
  children: React.ReactNode;
}

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  path: string;
}

export const SidebarLayout: React.FC<SidebarLayoutProps> = ({
  children,
}) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems: MenuItem[] = [
    {
      icon: <LayoutDashboard size={20} />,
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: <Search size={20} />,
      label: "Discovery",
      path: "/discovery",
    },
    {
      icon: <MessageSquare size={20} />,
      label: "Messages",
      path: "/messages",
    },
    {
      icon: <Sparkles size={20} />,
      label: "Pitch Generator",
      path: "/pitch-generator",
    },
    {
      icon: <User size={20} />,
      label: "Profile",
      path: "/profile",
    },
  ];

  const bottomItems: MenuItem[] = [
    {
      icon: <Settings size={20} />,
      label: "Settings",
      path: "/settings",
    },
    {
      icon: <HelpCircle size={20} />,
      label: "Help",
      path: "/help",
    },
  ];

  const linkStyle = (
    active: boolean
  ): React.CSSProperties => ({
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px 16px",
    borderRadius: "var(--radius-md)",
    background: active
      ? "rgba(103, 80, 164, 0.15)"
      : "transparent",
    color: active
      ? "var(--primary)"
      : "rgba(255,255,255,0.7)",
    fontWeight: 500,
    transition: "all 0.25s ease",
    textDecoration: "none",
  });

  return (
    <div
      style={{
        display: "flex",
        minHeight: "calc(100vh - 80px)",
      }}
    >
      {/* Mobile Toggle */}
      <button
        className="sidebar-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Sidebar"
        style={{
          position: "fixed",
          top: "90px",
          left: "16px",
          zIndex: 1200,
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "12px",
          padding: "10px",
          color: "white",
          cursor: "pointer",
          display: "none",
        }}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Sidebar */}
      <AnimatePresence>
        <motion.aside
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`sidebar ${isOpen ? "open" : ""}`}
          style={{
            width: "260px",
            borderRight:
              "1px solid rgba(255,255,255,0.1)",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            position: "sticky",
            top: "80px",
            height: "calc(100vh - 80px)",
            background: "rgba(10,10,20,0.9)",
            backdropFilter: "blur(14px)",
          }}
        >
          {/* Main Menu */}
          {menuItems.map((item) => {
            const active =
              location.pathname.startsWith(item.path);

            return (
              <Link
                key={item.path}
                to={item.path}
                style={linkStyle(active)}
              >
                {item.icon}
                {item.label}
              </Link>
            );
          })}

          {/* Bottom Section */}
          <div
            style={{
              marginTop: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {bottomItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={linkStyle(false)}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}

            <button
              type="button"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px 16px",
                borderRadius: "var(--radius-md)",
                color: "rgba(255,255,255,0.5)",
                fontSize: "14px",
                marginTop: "8px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                transition: "0.3s ease",
              }}
            >
              <LogOut size={20} />
              Logout
            </button>
          </div>
        </motion.aside>
      </AnimatePresence>

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          padding: "40px",
          width: "100%",
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default SidebarLayout;
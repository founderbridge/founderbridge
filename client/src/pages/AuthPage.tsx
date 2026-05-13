import React, { useState } from "react";
import { motion } from "framer-motion";

import { GlassCard } from "../components/GlassCard";
import { Button } from "../components/Button";

import {
  Mail,
  Lock,
  User,
  Globe,
} from "lucide-react";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 16px 12px 48px",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "var(--radius-md)",
  color: "white",
  outline: "none",
  fontSize: "14px",
  transition: "all 0.3s ease",
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "8px",
  fontSize: "14px",
  opacity: 0.8,
  fontWeight: 500,
};

const iconStyle: React.CSSProperties = {
  position: "absolute",
  left: "16px",
  top: "50%",
  transform: "translateY(-50%)",
  opacity: 0.5,
};

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div
      style={{
        minHeight: "calc(100vh - 80px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow */}
      <div
        className="glow-effect"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "600px",
          height: "600px",
          opacity: 0.4,
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />

      {/* Main Container */}
      <div
        className="auth-container"
        style={{
          display: "flex",
          maxWidth: "1100px",
          width: "100%",
          gap: "48px",
          alignItems: "center",
          flexWrap: "wrap",
          zIndex: 2,
        }}
      >
        {/* Left Content */}
        <div
          style={{
            flex: 1,
            minWidth: "300px",
          }}
        >
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <h1
              style={{
                fontSize: "56px",
                lineHeight: "1.1",
                marginBottom: "24px",
                fontWeight: 800,
              }}
            >
              Connect.
              <br />
              Scale.
              <br />
              Invest.
            </h1>

            <p
              style={{
                fontSize: "18px",
                opacity: 0.7,
                marginBottom: "40px",
                lineHeight: "1.7",
                maxWidth: "520px",
              }}
            >
              Join the premier network connecting ambitious
              founders with strategic investors and capital.
            </p>

            {/* Stats */}
            <div
              style={{
                display: "flex",
                gap: "28px",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <h2
                  style={{
                    fontSize: "36px",
                    marginBottom: "6px",
                  }}
                >
                  500+
                </h2>

                <p
                  style={{
                    fontSize: "14px",
                    opacity: 0.6,
                  }}
                >
                  Founders
                </p>
              </div>

              <div
                style={{
                  width: "1px",
                  height: "50px",
                  background:
                    "rgba(255,255,255,0.1)",
                }}
              />

              <div style={{ textAlign: "center" }}>
                <h2
                  style={{
                    fontSize: "36px",
                    marginBottom: "6px",
                  }}
                >
                  $2B+
                </h2>

                <p
                  style={{
                    fontSize: "14px",
                    opacity: 0.6,
                  }}
                >
                  Capital Raised
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Auth Card */}
        <div
          style={{
            flex: 1,
            minWidth: "350px",
            maxWidth: "500px",
            width: "100%",
          }}
        >
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <GlassCard hoverEffect>
              {/* Heading */}
              <h2
                style={{
                  marginBottom: "8px",
                  fontSize: "30px",
                }}
              >
                {isLogin
                  ? "Welcome Back"
                  : "Create Account"}
              </h2>

              <p
                style={{
                  opacity: 0.6,
                  marginBottom: "32px",
                  fontSize: "14px",
                }}
              >
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}{" "}
                <span
                  onClick={() =>
                    setIsLogin(!isLogin)
                  }
                  style={{
                    color: "var(--primary)",
                    cursor: "pointer",
                    fontWeight: 600,
                  }}
                >
                  {isLogin
                    ? "Sign up"
                    : "Log in"}
                </span>
              </p>

              {/* Form */}
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                {/* Name */}
                {!isLogin && (
                  <div>
                    <label style={labelStyle}>
                      Full Name
                    </label>

                    <div
                      style={{
                        position: "relative",
                      }}
                    >
                      <User
                        size={18}
                        style={iconStyle}
                      />

                      <input
                        type="text"
                        placeholder="John Doe"
                        style={inputStyle}
                      />
                    </div>
                  </div>
                )}

                {/* Email */}
                <div>
                  <label style={labelStyle}>
                    Email Address
                  </label>

                  <div
                    style={{
                      position: "relative",
                    }}
                  >
                    <Mail
                      size={18}
                      style={iconStyle}
                    />

                    <input
                      type="email"
                      placeholder="name@company.com"
                      style={inputStyle}
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label style={labelStyle}>
                    Password
                  </label>

                  <div
                    style={{
                      position: "relative",
                    }}
                  >
                    <Lock
                      size={18}
                      style={iconStyle}
                    />

                    <input
                      type="password"
                      placeholder="••••••••"
                      style={inputStyle}
                    />
                  </div>
                </div>

                {/* Forgot Password */}
                {isLogin && (
                  <div
                    style={{
                      textAlign: "right",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "13px",
                        color: "var(--primary)",
                        cursor: "pointer",
                      }}
                    >
                      Forgot password?
                    </span>
                  </div>
                )}

                {/* Submit */}
                <Button
                  style={{
                    width: "100%",
                    marginTop: "10px",
                  }}
                >
                  {isLogin
                    ? "Log In"
                    : "Create Account"}
                </Button>

                {/* Divider */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    margin: "12px 0",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      height: "1px",
                      background:
                        "rgba(255,255,255,0.1)",
                    }}
                  />

                  <span
                    style={{
                      fontSize: "12px",
                      opacity: 0.5,
                    }}
                  >
                    OR
                  </span>

                  <div
                    style={{
                      flex: 1,
                      height: "1px",
                      background:
                        "rgba(255,255,255,0.1)",
                    }}
                  />
                </div>

                {/* Social Buttons */}
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    flexWrap: "wrap",
                  }}
                >
                  <Button
                    variant="secondary"
                    style={{
                      flex: 1,
                      minWidth: "140px",
                    }}
                  >
                    <Globe size={18} />
                    Google
                  </Button>

                  {/* <Button
                    variant="secondary"
                    style={{
                      flex: 1,
                      minWidth: "140px",
                    }}
                  >
                    <GitHub size={18} />
                    GitHub
                  </Button> */}
                </div>
              </form>

              {/* Footer */}
              <p
                style={{
                  marginTop: "24px",
                  fontSize: "11px",
                  opacity: 0.5,
                  textAlign: "center",
                  lineHeight: "1.6",
                }}
              >
                By continuing, you agree to our Terms
                of Service and Privacy Policy.
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
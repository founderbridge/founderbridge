import React from "react";
import { motion } from "framer-motion";

import { GlassCard } from "../components/GlassCard";
import { Button } from "../components/Button";

import {
  TrendingUp,
  Shield,
  Zap,
  ArrowRight,
} from "lucide-react";

const featuredDeals = [
  {
    title: "Nova Metrics",
    desc:
      "AI-driven predictive analytics platform for mid-market e-commerce, reducing churn by 30%.",
    tag: "E-commerce",
  },

  {
    title: "Aura Fin",
    desc:
      "Decentralized cross-border payment protocol minimizing transaction fees for emerging markets.",
    tag: "FinTech",
  },

  {
    title: "Synapse Bio",
    desc:
      "Next-generation neural interface hardware accelerating brain-computer interaction research.",
    tag: "HealthTech",
  },
];

const processSteps = [
  {
    icon: <TrendingUp />,
    title: "1. Build Profile",
    desc:
      "Create a secure data room or set your investment thesis parameters.",
  },

  {
    icon: <Shield />,
    title: "2. Smart Match",
    desc:
      "Our algorithm scores compatibility based on stage, sector, and vision.",
  },

  {
    icon: <Zap />,
    title: "3. Close Deal",
    desc:
      "Review diligence documents and initiate terms in a streamlined portal.",
  },
];

const LandingPage: React.FC = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
      }}
    >
      {/* HERO */}
      <section
        style={{
          padding: "120px 24px 80px",
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Glow */}
        <div
          className="glow-effect"
          style={{
            position: "absolute",
            top: "10%",
            left: "50%",
            width: "400px",
            height: "400px",
            zIndex: -1,
            transform: "translateX(-50%)",
          }}
        />

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          {/* Badge */}
          <span
            style={{
              background:
                "rgba(207, 188, 255, 0.1)",
              color: "var(--primary)",
              padding: "8px 16px",
              borderRadius:
                "var(--radius-full)",
              fontSize: "14px",
              fontWeight: 600,
              border:
                "1px solid rgba(207, 188, 255, 0.2)",
            }}
          >
            The Sophisticated Catalyst
          </span>

          {/* Title */}
          <h1
            className="hero-title"
            style={{
              fontSize: "64px",
              marginTop: "24px",
              lineHeight: "1.1",
              background:
                "linear-gradient(to right, #fff, #948e9c)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor:
                "transparent",
            }}
          >
            Turn Your Idea
            <br />
            Into Reality
          </h1>

          {/* Subtitle */}
          <p
            style={{
              maxWidth: "700px",
              margin: "24px auto",
              fontSize: "20px",
              opacity: 0.8,
              lineHeight: "1.7",
            }}
          >
            Bridging ambitious founders with
            high-net-worth investors.
            Experience transparent, secure, and
            data-driven deal flow.
          </p>

          {/* Buttons */}
          <div
            className="hero-buttons"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              marginTop: "40px",
              flexWrap: "wrap",
            }}
          >
            <Button size="lg">
              Get Started
              <ArrowRight size={20} />
            </Button>

            <Button
              variant="secondary"
              size="lg"
            >
              Watch Demo
            </Button>
          </div>
        </motion.div>
      </section>

      {/* FEATURED DEALS */}
      <section
        style={{
          padding: "80px 24px",
          maxWidth: "var(--container-max)",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            marginBottom: "48px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              marginBottom: "12px",
            }}
          >
            Featured Deals
          </h2>

          <p
            style={{
              opacity: 0.7,
            }}
          >
            High-potential startups matching your
            investment thesis.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {featuredDeals.map((deal, i) => (
            <GlassCard
              key={i}
              hoverEffect
            >
              <div
                style={{
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{
                    fontSize: "12px",
                    color: "var(--primary)",
                    fontWeight: 700,
                  }}
                >
                  {deal.tag}
                </span>

                <h3
                  style={{
                    marginTop: "8px",
                  }}
                >
                  {deal.title}
                </h3>
              </div>

              <p
                style={{
                  opacity: 0.75,
                  marginBottom: "24px",
                  fontSize: "15px",
                  lineHeight: "1.7",
                }}
              >
                {deal.desc}
              </p>

              <Button
                variant="ghost"
                size="sm"
                style={{
                  padding: 0,
                }}
              >
                View Details
                <ArrowRight size={16} />
              </Button>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section
        style={{
          padding: "80px 24px",
          background:
            "rgba(255,255,255,0.02)",
        }}
      >
        <div
          style={{
            maxWidth: "var(--container-max)",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "60px",
            }}
          >
            The Transparent Process
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "40px",
            }}
          >
            {processSteps.map((step, i) => (
              <div
                key={i}
                style={{
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    background:
                      "var(--gradient-primary)",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin:
                      "0 auto 24px",
                    boxShadow:
                      "0 8px 20px rgba(103, 80, 164, 0.2)",
                  }}
                >
                  {step.icon}
                </div>

                <h3>{step.title}</h3>

                <p
                  style={{
                    opacity: 0.7,
                    marginTop: "12px",
                    lineHeight: "1.7",
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "100px 24px",
          textAlign: "center",
        }}
      >
        <GlassCard
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "60px",
          }}
        >
          <h2
            className="cta-title"
            style={{
              fontSize: "40px",
            }}
          >
            Ready to Scale?
          </h2>

          <p
            style={{
              margin: "24px 0 40px",
              opacity: 0.8,
              fontSize: "18px",
              lineHeight: "1.7",
            }}
          >
            Join thousands of founders and
            investors already using FounderBridge.
          </p>

          <div
            className="cta-buttons"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <Button size="lg">
              Join as Founder
            </Button>

            <Button
              variant="secondary"
              size="lg"
            >
              Join as Investor
            </Button>
          </div>
        </GlassCard>
      </section>
    </div>
  );
};

export default LandingPage;
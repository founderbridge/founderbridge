import React, { useState } from "react";
import { SidebarLayout } from "../components/SidebarLayout";
import { GlassCard } from "../components/GlassCard";
import { Button } from "../components/Button";

import {
  Sparkles,
  Download,
  Share2,
  Edit3,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  DollarSign,
  Megaphone,
} from "lucide-react";

const AIPitchGenerator: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const inputSteps = [
    {
      step: 1,
      label: "Problem",
      value:
        "B2B SaaS companies struggle to align their sales and marketing data, resulting in a 20% loss in potential lead conversion.",
    },
    {
      step: 2,
      label: "Audience",
      value:
        "Mid-market B2B SaaS companies with fragmented tech stacks.",
    },
    {
      step: 3,
      label: "Solution",
      value:
        "An AI-driven data unification platform that automatically maps CRM and marketing automation schemas in real-time.",
    },
    {
      step: 4,
      label: "Funding",
      value:
        "Raising $2.5M Seed to scale GTM operations and expand the engineering team for SOC2 compliance.",
    },
  ];

  const sectionStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  };

  const paragraphStyle: React.CSSProperties = {
    fontSize: "15px",
    lineHeight: "1.8",
    opacity: 0.9,
  };

  return (
    <SidebarLayout>
      {/* Header */}
      <header
        style={{
          marginBottom: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "12px",
          }}
        >
          <Sparkles color="var(--primary)" />
          AI Pitch Generator
        </h1>

        <p
          style={{
            opacity: 0.65,
            maxWidth: "700px",
            lineHeight: "1.7",
          }}
        >
          Your compelling startup narrative, synthesized by AI.
          Review, refine, and distribute your generated pitch
          to potential investors.
        </p>
      </header>

      {/* Main Layout */}
      <div
        className="pitch-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.5fr",
          gap: "32px",
        }}
      >
        {/* Left Column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              marginBottom: "8px",
            }}
          >
            Your Inputs
          </h3>

          {inputSteps.map((item) => (
            <div
              key={item.step}
              style={{
                padding: "18px",
                background: "rgba(255,255,255,0.03)",
                borderRadius: "var(--radius-md)",
                border:
                  "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                <span
                  style={{
                    fontSize: "12px",
                    color: "var(--primary)",
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                  }}
                >
                  STEP {item.step}: {item.label}
                </span>

                <Edit3
                  size={15}
                  style={{
                    opacity: 0.5,
                    cursor: "pointer",
                  }}
                />
              </div>

              <p
                style={{
                  fontSize: "14px",
                  opacity: 0.82,
                  lineHeight: "1.6",
                }}
              >
                {item.value}
              </p>
            </div>
          ))}

          <Button
            variant="secondary"
            style={{
              marginTop: "12px",
            }}
            onClick={() => setLoading(true)}
          >
            {loading
              ? "Generating..."
              : "Regenerate Narrative"}
          </Button>
        </div>

        {/* Right Column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <GlassCard
            className="glow-effect"
            hoverEffect
            style={{
              border:
                "1px solid rgba(103, 80, 164, 0.3)",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "32px",
                flexWrap: "wrap",
                gap: "16px",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "12px",
                    opacity: 0.5,
                    letterSpacing: "1px",
                  }}
                >
                  GENERATED NARRATIVE
                </span>

                <h2
                  style={{
                    fontSize: "28px",
                    marginTop: "6px",
                  }}
                >
                  NexusData AI
                </h2>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "8px",
                }}
              >
                <Button variant="secondary" size="sm">
                  <Download size={16} />
                </Button>

                <Button variant="secondary" size="sm">
                  <Share2 size={16} />
                </Button>
              </div>
            </div>

            {/* Sections */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "32px",
              }}
            >
              <section style={sectionStyle}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: "var(--primary)",
                  }}
                >
                  <Megaphone size={18} />

                  <h4
                    style={{
                      fontWeight: 700,
                      fontSize: "16px",
                    }}
                  >
                    The Hook
                  </h4>
                </div>

                <p style={paragraphStyle}>
                  Right now, mid-market B2B SaaS companies
                  are burning millions because their sales
                  and marketing data speak completely
                  different languages. We are NexusData AI,
                  and we translate that chaos into revenue.
                </p>
              </section>

              <section style={sectionStyle}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: "#ffb4ab",
                  }}
                >
                  <AlertCircle size={18} />

                  <h4
                    style={{
                      fontWeight: 700,
                      fontSize: "16px",
                    }}
                  >
                    The Problem & Market
                  </h4>
                </div>

                <p style={paragraphStyle}>
                  CMOs and CROs face a systemic issue:
                  misaligned data schemas between CRM
                  platforms and marketing automation tools.
                  This friction results in an estimated 20%
                  loss in potential lead conversion.
                </p>
              </section>

              <section style={sectionStyle}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: "#e7c365",
                  }}
                >
                  <Lightbulb size={18} />

                  <h4
                    style={{
                      fontWeight: 700,
                      fontSize: "16px",
                    }}
                  >
                    The Solution
                  </h4>
                </div>

                <p style={paragraphStyle}>
                  NexusData AI is a unified AI-driven data
                  layer that automatically understands,
                  maps, and normalizes schema differences
                  in real time.
                </p>
              </section>

              <section style={sectionStyle}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: "#81c784",
                  }}
                >
                  <DollarSign size={18} />

                  <h4
                    style={{
                      fontWeight: 700,
                      fontSize: "16px",
                    }}
                  >
                    The Ask
                  </h4>
                </div>

                <p style={paragraphStyle}>
                  We are raising a $2.5M Seed round to
                  accelerate GTM expansion and finalize
                  SOC2 compliance for enterprise adoption.
                </p>
              </section>
            </div>

            {/* Footer Status */}
            <div
              style={{
                marginTop: "40px",
                padding: "16px",
                background:
                  "rgba(16, 185, 129, 0.1)",
                borderRadius: "var(--radius-md)",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                border:
                  "1px solid rgba(16, 185, 129, 0.2)",
              }}
            >
              <CheckCircle2
                size={20}
                color="#10b981"
              />

              <p
                style={{
                  fontSize: "14px",
                  color: "#10b981",
                  fontWeight: 600,
                }}
              >
                AI generation complete. Ready for
                distribution.
              </p>
            </div>
          </GlassCard>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default AIPitchGenerator;
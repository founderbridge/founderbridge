import React from "react";

import {
  Globe,
  Target,
  Award,
  History,
  ExternalLink,
  Edit,
  MapPin,
} from "lucide-react";

import { SidebarLayout } from "../components/SidebarLayout";
import { GlassCard } from "../components/GlassCard";
import { Button } from "../components/Button";

const expertiseTags = [
  "FinTech",
  "B2B SaaS",
  "DeFi",
  "GTM Strategy",
  "Product Led Growth",
];

const engagements = [
  {
    name: "Nexus Ledger",
    role: "Board Member",
    sector:
      "B2B Cross-border Payments",
  },

  {
    name: "CloudScale AI",
    role: "Advisor",
    sector: "Infrastructure",
  },
];

const tagStyle: React.CSSProperties = {
  padding: "8px 16px",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "var(--radius-full)",
  fontSize: "13px",
  opacity: 0.9,
};

const UserProfile: React.FC = () => {
  return (
    <SidebarLayout>
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {/* HEADER */}
        <header
          className="profile-header"
          style={{
            display: "flex",
            justifyContent:
              "space-between",

            alignItems: "center",

            gap: "24px",

            marginBottom: "40px",

            flexWrap: "wrap",
          }}
        >
          {/* Left */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              flexWrap: "wrap",
            }}
          >
            {/* Avatar */}
            <div
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "30px",
                background:
                  "var(--gradient-primary)",

                display: "flex",

                alignItems: "center",

                justifyContent:
                  "center",

                fontSize: "36px",

                fontWeight: 800,

                color: "white",

                boxShadow:
                  "0 10px 30px rgba(103, 80, 164, 0.4)",

                flexShrink: 0,
              }}
            >
              EV
            </div>

            {/* Info */}
            <div>
              <h1
                style={{
                  fontSize: "38px",
                  marginBottom: "10px",
                }}
              >
                Elias Vance
              </h1>

              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  opacity: 0.65,
                  fontSize: "14px",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    alignItems:
                      "center",

                    gap: "6px",
                  }}
                >
                  <Target size={14} />
                  Angel Investor
                </span>

                <span
                  style={{
                    display: "flex",
                    alignItems:
                      "center",

                    gap: "6px",
                  }}
                >
                  <MapPin size={14} />
                  San Francisco, CA
                </span>
              </div>
            </div>
          </div>

          {/* Edit */}
          <Button variant="secondary">
            <Edit size={16} />
            Edit Profile
          </Button>
        </header>

        {/* CONTENT */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          {/* ABOUT */}
          <section>
            <h3
              style={{
                fontSize: "20px",
                marginBottom: "16px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Award
                size={20}
                color="var(--primary)"
              />
              About
            </h3>

            <GlassCard>
              <p
                style={{
                  opacity: 0.82,
                  lineHeight: "1.9",
                  fontSize: "16px",
                }}
              >
                Former FinTech founder turned
                active angel investor. I focus
                on early-stage B2B SaaS and
                decentralized finance
                platforms.
              </p>

              {/* Links */}
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  marginTop: "24px",
                  flexWrap: "wrap",
                }}
              >

                <a
                  href="https://vance-capital.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems:
                      "center",

                    gap: "8px",

                    color:
                      "var(--primary)",

                    fontSize: "14px",

                    fontWeight: 600,
                  }}
                >
                  <Globe size={16} />
                  vance-capital.io
                </a>
              </div>
            </GlassCard>
          </section>

          {/* GRID */}
          <div
            className="profile-grid"
            style={{
              display: "grid",
              gridTemplateColumns:
                "1fr 1fr",

              gap: "32px",
            }}
          >
            {/* Expertise */}
            <section>
              <h3
                style={{
                  fontSize: "20px",
                  marginBottom: "16px",
                }}
              >
                Expertise
              </h3>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                {expertiseTags.map(
                  (tag) => (
                    <span
                      key={tag}
                      style={tagStyle}
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </section>

            {/* Thesis */}
            <section>
              <h3
                style={{
                  fontSize: "20px",
                  marginBottom: "16px",
                }}
              >
                Investment Thesis
              </h3>

              <GlassCard
                style={{
                  padding: "20px",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                    opacity: 0.75,
                    lineHeight: "1.7",
                  }}
                >
                  Targeting Pre-Seed to Seed
                  rounds in sectors disrupting
                  traditional financial
                  infrastructure using
                  automation and AI.
                </p>
              </GlassCard>
            </section>
          </div>

          {/* ENGAGEMENTS */}
          <section>
            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",

                alignItems: "center",

                gap: "16px",

                marginBottom: "16px",

                flexWrap: "wrap",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <History
                  size={20}
                  color="var(--primary)"
                />
                Active Engagements
              </h3>

              <Button
                variant="ghost"
                size="sm"
              >
                View All
              </Button>
            </div>

            {/* Cards */}
            <div
              className="engagement-grid"
              style={{
                display: "grid",
                gridTemplateColumns:
                  "1fr 1fr",

                gap: "20px",
              }}
            >
              {engagements.map(
                (item, i) => (
                  <GlassCard
                    key={i}
                    style={{
                      padding: "20px",
                    }}
                    hoverEffect
                  >
                    <div
                      style={{
                        display:
                          "flex",

                        justifyContent:
                          "space-between",

                        alignItems:
                          "flex-start",

                        gap: "16px",
                      }}
                    >
                      <div>
                        <h4
                          style={{
                            fontSize:
                              "18px",

                            marginBottom:
                              "4px",
                          }}
                        >
                          {
                            item.name
                          }
                        </h4>

                        <p
                          style={{
                            fontSize:
                              "13px",

                            color:
                              "var(--primary)",

                            marginBottom:
                              "8px",
                          }}
                        >
                          {
                            item.sector
                          }
                        </p>

                        <span
                          style={{
                            fontSize:
                              "12px",

                            opacity:
                              0.5,
                          }}
                        >
                          {
                            item.role
                          }
                        </span>
                      </div>

                      <Button
                        variant="secondary"
                        size="sm"
                        style={{
                          width: "32px",
                          padding: 0,
                        }}
                      >
                        <ExternalLink
                          size={14}
                        />
                      </Button>
                    </div>
                  </GlassCard>
                )
              )}
            </div>
          </section>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default UserProfile;
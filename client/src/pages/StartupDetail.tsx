import React from "react";

import { useNavigate } from "react-router-dom";

import { SidebarLayout } from "../components/SidebarLayout";
import { GlassCard } from "../components/GlassCard";
import { Button } from "../components/Button";

import {
  ArrowLeft,
  Mail,
  MessageSquare,
  FileText,
  Sparkles,
  BarChart2,
  Users,
  ChevronRight,
} from "lucide-react";

const tags = [
  "FinTech",
  "Series A",
  "Singapore",
];

const moatAnalysis = [
  "Proprietary Routing Algorithm",
  "Banking License Foothold (APAC)",
  "High Switching Cost Integrations",
];

const riskAnalysis = [
  "Regulatory Compliance Changes",
  "Institutional Adoption Speed",
];

const similarStartups = [
  {
    name: "AeroTransact",
    stage: "Seed",
    location: "Berlin",
  },

  {
    name: "VaultFlow",
    stage: "Series A",
    location: "New York",
  },
];

const badgeStyle: React.CSSProperties = {
  fontSize: "12px",
  background: "rgba(255,255,255,0.05)",
  padding: "4px 12px",
  borderRadius: "var(--radius-full)",
  border: "1px solid rgba(255,255,255,0.1)",
};

const StartupDetail: React.FC = () => {
  const navigate = useNavigate();

  return (
    <SidebarLayout>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            opacity: 0.6,
            marginBottom: "24px",
            color: "white",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          <ArrowLeft size={16} />
          Back to Discovery
        </button>

        {/* HEADER */}
        <header
          className="startup-header"
          style={{
            display: "flex",
            justifyContent:
              "space-between",
            alignItems: "flex-start",
            gap: "24px",
            marginBottom: "40px",
            flexWrap: "wrap",
          }}
        >
          {/* Left */}
          <div
            style={{
              display: "flex",
              gap: "24px",
              flexWrap: "wrap",
            }}
          >
            {/* Logo */}
            <div
              style={{
                width: "80px",
                height: "80px",
                background:
                  "var(--gradient-primary)",
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent:
                  "center",
                fontSize: "32px",
                fontWeight: 800,
                flexShrink: 0,
              }}
            >
              N
            </div>

            {/* Info */}
            <div>
              <h1
                style={{
                  fontSize: "40px",
                  marginBottom: "12px",
                }}
              >
                NexusPay
              </h1>

              {/* Tags */}
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                {tags.map((tag) => (
                  <span
                    key={tag}
                    style={badgeStyle}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <Button variant="secondary">
              <MessageSquare size={18} />
              Message Founder
            </Button>

            <Button>
              <FileText size={18} />
              Access Data Room
            </Button>
          </div>
        </header>

        {/* MAIN GRID */}
        <div
          className="startup-grid"
          style={{
            display: "grid",
            gridTemplateColumns:
              "1.5fr 1fr",
            gap: "32px",
          }}
        >
          {/* LEFT SIDE */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "32px",
            }}
          >
            {/* Pitch */}
            <section>
              <h3
                style={{
                  fontSize: "22px",
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Sparkles
                  size={20}
                  color="var(--primary)"
                />
                The Pitch
              </h3>

              <GlassCard>
                <p
                  style={{
                    opacity: 0.9,
                    lineHeight: "1.9",
                    fontSize: "16px",
                    marginBottom: "20px",
                  }}
                >
                  NexusPay is redefining
                  cross-border B2B
                  transactions by leveraging
                  a proprietary
                  blockchain-agnostic routing
                  protocol.
                </p>

                <p
                  style={{
                    opacity: 0.9,
                    lineHeight: "1.9",
                    fontSize: "16px",
                    marginBottom: "20px",
                  }}
                >
                  Our solution provides
                  instant, guaranteed
                  settlement with full fee
                  transparency upfront.
                </p>

                {/* Traction */}
                <div
                  style={{
                    padding: "20px",
                    background:
                      "rgba(103, 80, 164, 0.05)",
                    borderRadius:
                      "var(--radius-lg)",
                    border:
                      "1px solid rgba(103, 80, 164, 0.1)",
                  }}
                >
                  <h4
                    style={{
                      color:
                        "var(--primary)",
                      marginBottom:
                        "8px",
                    }}
                  >
                    Traction
                  </h4>

                  <p
                    style={{
                      fontSize: "14px",
                      opacity: 0.8,
                      lineHeight: "1.7",
                    }}
                  >
                    Since our Seed round 14
                    months ago, we have
                    processed over $120M in
                    annualized volume,
                    secured 45 enterprise
                    clients, and achieved a
                    0% churn rate.
                  </p>
                </div>
              </GlassCard>
            </section>

            {/* AI Analysis */}
            <section>
              <h3
                style={{
                  fontSize: "22px",
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <BarChart2
                  size={20}
                  color="var(--primary)"
                />
                AI Analysis
              </h3>

              <GlassCard>
                <div
                  style={{
                    display: "flex",
                    flexDirection:
                      "column",
                    gap: "20px",
                  }}
                >
                  {/* Competitor */}
                  <div>
                    <h4
                      style={{
                        fontSize: "16px",
                        marginBottom:
                          "8px",
                      }}
                    >
                      Competitor Summary
                    </h4>

                    <p
                      style={{
                        fontSize: "14px",
                        opacity: 0.75,
                        lineHeight: "1.7",
                      }}
                    >
                      Operates in a crowded
                      space, but their
                      technological approach
                      bypasses traditional
                      correspondent banking
                      entirely.
                    </p>
                  </div>

                  <div
                    style={{
                      height: "1px",
                      background:
                        "rgba(255,255,255,0.1)",
                    }}
                  />

                  {/* Grid */}
                  <div
                    className="analysis-grid"
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "1fr 1fr",
                      gap: "20px",
                    }}
                  >
                    {/* Moat */}
                    <div>
                      <h4
                        style={{
                          fontSize:
                            "16px",
                          marginBottom:
                            "12px",
                        }}
                      >
                        Moat Analysis
                      </h4>

                      <ul
                        style={{
                          paddingLeft:
                            "20px",
                          fontSize:
                            "14px",
                          opacity: 0.75,
                          display: "flex",
                          flexDirection:
                            "column",
                          gap: "8px",
                          lineHeight:
                            "1.6",
                        }}
                      >
                        {moatAnalysis.map(
                          (item) => (
                            <li
                              key={item}
                            >
                              {item}
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    {/* Risks */}
                    <div>
                      <h4
                        style={{
                          fontSize:
                            "16px",
                          marginBottom:
                            "12px",
                        }}
                      >
                        Potential Risks
                      </h4>

                      <ul
                        style={{
                          paddingLeft:
                            "20px",
                          fontSize:
                            "14px",
                          opacity: 0.75,
                          display: "flex",
                          flexDirection:
                            "column",
                          gap: "8px",
                          lineHeight:
                            "1.6",
                        }}
                      >
                        {riskAnalysis.map(
                          (item) => (
                            <li
                              key={item}
                            >
                              {item}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </section>
          </div>

          {/* RIGHT SIDE */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "32px",
            }}
          >
            {/* ROUND */}
            <GlassCard
              style={{
                border:
                  "1px solid var(--primary)",
                background:
                  "rgba(103, 80, 164, 0.05)",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  marginBottom: "24px",
                }}
              >
                Series A Round
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection:
                    "column",
                  gap: "16px",
                }}
              >
                {[
                  [
                    "Target Raise",
                    "$12.0M",
                  ],

                  [
                    "Min Investment",
                    "$250K",
                  ],

                  [
                    "Committed",
                    "$4.2M",
                  ],
                ].map(
                  ([label, value]) => (
                    <div
                      key={label}
                      style={{
                        display:
                          "flex",
                        justifyContent:
                          "space-between",
                      }}
                    >
                      <span
                        style={{
                          opacity:
                            0.5,
                        }}
                      >
                        {label}
                      </span>

                      <span
                        style={{
                          fontWeight:
                            700,
                          color:
                            label ===
                            "Committed"
                              ? "var(--primary)"
                              : undefined,
                        }}
                      >
                        {value}
                      </span>
                    </div>
                  )
                )}

                {/* Progress */}
                <div
                  style={{
                    height: "8px",
                    width: "100%",
                    background:
                      "rgba(255,255,255,0.05)",
                    borderRadius:
                      "4px",
                    overflow:
                      "hidden",
                    marginTop:
                      "8px",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: "35%",
                      background:
                        "var(--gradient-primary)",
                    }}
                  />
                </div>
              </div>

              <Button
                style={{
                  width: "100%",
                  marginTop: "32px",
                }}
              >
                Express Interest
              </Button>
            </GlassCard>

            {/* TEAM */}
            <section>
              <h3
                style={{
                  fontSize: "20px",
                  marginBottom: "16px",
                }}
              >
                The Team
              </h3>

              <GlassCard
                style={{
                  padding: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius:
                        "12px",
                      background:
                        "rgba(255,255,255,0.05)",
                      display: "flex",
                      alignItems:
                        "center",
                      justifyContent:
                        "center",
                    }}
                  >
                    <Users size={20} />
                  </div>

                  <div>
                    <h4
                      style={{
                        fontSize:
                          "16px",
                      }}
                    >
                      Elena Rostova
                    </h4>

                    <p
                      style={{
                        fontSize:
                          "12px",
                        opacity:
                          0.5,
                      }}
                    >
                      CEO & Co-Founder
                    </p>
                  </div>
                </div>

                {/* Socials */}
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    marginTop: "16px",
                  }}
                >
                 

                  <Button
                    variant="secondary"
                    size="sm"
                    style={{
                      width: "36px",
                      padding: 0,
                    }}
                  >
                    <Mail
                      size={14}
                    />
                  </Button>
                </div>
              </GlassCard>
            </section>

            {/* Similar */}
            <section>
              <h3
                style={{
                  fontSize: "20px",
                  marginBottom: "16px",
                }}
              >
                Similar Startups
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection:
                    "column",
                  gap: "12px",
                }}
              >
                {similarStartups.map(
                  (item, i) => (
                    <div
                      key={i}
                      style={{
                        padding:
                          "16px",
                        background:
                          "rgba(255,255,255,0.03)",
                        borderRadius:
                          "var(--radius-md)",
                        border:
                          "1px solid rgba(255,255,255,0.05)",

                        display:
                          "flex",

                        justifyContent:
                          "space-between",

                        alignItems:
                          "center",

                        cursor:
                          "pointer",

                        transition:
                          "0.3s ease",
                      }}
                    >
                      <div>
                        <h4
                          style={{
                            fontSize:
                              "14px",
                          }}
                        >
                          {
                            item.name
                          }
                        </h4>

                        <p
                          style={{
                            fontSize:
                              "11px",
                            opacity:
                              0.4,
                          }}
                        >
                          {
                            item.stage
                          }{" "}
                          •{" "}
                          {
                            item.location
                          }
                        </p>
                      </div>

                      <ChevronRight
                        size={16}
                        opacity={0.3}
                      />
                    </div>
                  )
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default StartupDetail;
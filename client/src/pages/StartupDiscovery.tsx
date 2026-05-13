import React from "react";

import { Link } from "react-router-dom";

import { SidebarLayout } from "../components/SidebarLayout";
import { GlassCard } from "../components/GlassCard";
import { Button } from "../components/Button";

import {
  Search,
  Filter,
  ArrowUpRight,
} from "lucide-react";

const startups = [
  {
    name: "NovaPay",

    desc:
      "NovaPay is revolutionizing cross-border B2B payments using decentralized liquidity pools. Reducing transaction fees by up to 80% for mid-market enterprise clients while ensuring instant settlement.",

    target: "$2.5M (Seed)",

    cap: "$12M (SAFE)",

    sector: "FinTech",

    match: "98%",

    tags: [
      "Blockchain",
      "B2B",
      "Payments",
    ],
  },

  {
    name: "AeroSync",

    desc:
      "Enterprise SaaS platform optimizing supply chain logistics for aerospace manufacturers. AeroSync uses predictive models to anticipate component shortages and route alternative suppliers automatically.",

    target: "$5.0M (Series A)",

    cap: "$25M (Equity)",

    sector: "SaaS",

    match: "92%",

    tags: [
      "Logistics",
      "AI",
      "Manufacturing",
    ],
  },

  {
    name: "VitaGen",

    desc:
      "Developing personalized preventative care regimens using proprietary genomic analysis and continuous biomarker tracking via non-invasive wearables.",

    target: "$1.2M (Pre-Seed)",

    cap: "$8M (SAFE)",

    sector: "HealthTech",

    match: "85%",

    tags: [
      "Genomics",
      "Wearables",
      "Care",
    ],
  },
];

const tagStyle: React.CSSProperties = {
  fontSize: "12px",
  background: "rgba(255,255,255,0.05)",
  padding: "4px 12px",
  borderRadius: "var(--radius-full)",
  opacity: 0.75,
  border: "1px solid rgba(255,255,255,0.1)",
};

const StartupDiscovery: React.FC = () => {
  return (
    <SidebarLayout>
      {/* HEADER */}
      <header
        className="discovery-header"
        style={{
          display: "flex",
          justifyContent:
            "space-between",
          alignItems: "flex-end",
          gap: "20px",
          marginBottom: "40px",
          flexWrap: "wrap",
        }}
      >
        {/* Left */}
        <div>
          <h1
            style={{
              fontSize: "34px",
              marginBottom: "8px",
            }}
          >
            Startup Discovery
          </h1>

          <p
            style={{
              opacity: 0.65,
              lineHeight: "1.7",
            }}
          >
            Explore high-potential ventures
            curated by our AI
            thesis-matching engine.
          </p>
        </div>

        {/* Search */}
        <div
          className="discovery-actions"
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          {/* Search Box */}
          <div
            style={{
              position: "relative",
            }}
          >
            <Search
              size={18}
              style={{
                position: "absolute",
                left: "12px",
                top: "50%",
                transform:
                  "translateY(-50%)",
                opacity: 0.5,
              }}
            />

            <input
              type="text"
              placeholder="Search sectors, stages..."
              style={{
                padding:
                  "10px 16px 10px 40px",

                background:
                  "rgba(255,255,255,0.05)",

                border:
                  "1px solid rgba(255,255,255,0.1)",

                borderRadius:
                  "var(--radius-md)",

                color: "white",

                outline: "none",

                width: "300px",

                maxWidth: "100%",
              }}
            />
          </div>

          {/* Filters */}
          <Button
            variant="secondary"
            size="sm"
          >
            <Filter size={16} />
            Filters
          </Button>
        </div>
      </header>

      {/* LIST */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        {startups.map((startup, i) => (
          <GlassCard
            key={i}
            hoverEffect
            style={{
              padding: "32px",
            }}
          >
            {/* CARD GRID */}
            <div
              className="startup-card-grid"
              style={{
                display: "grid",
                gridTemplateColumns:
                  "1fr 320px",

                gap: "40px",
              }}
            >
              {/* LEFT */}
              <div>
                {/* Top */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    marginBottom: "18px",
                    flexWrap: "wrap",
                  }}
                >
                  {/* Logo */}
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      background:
                        "var(--gradient-primary)",

                      borderRadius:
                        "14px",

                      display: "flex",

                      alignItems:
                        "center",

                      justifyContent:
                        "center",

                      fontWeight: 800,

                      fontSize: "20px",

                      flexShrink: 0,
                    }}
                  >
                    {startup.name[0]}
                  </div>

                  {/* Info */}
                  <div>
                    <h2
                      style={{
                        fontSize:
                          "26px",
                      }}
                    >
                      {startup.name}
                    </h2>

                    <span
                      style={{
                        fontSize:
                          "12px",

                        color:
                          "var(--primary)",

                        fontWeight:
                          700,
                      }}
                    >
                      {
                        startup.sector
                      }
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p
                  style={{
                    opacity: 0.82,
                    fontSize: "16px",
                    lineHeight: "1.8",
                    marginBottom: "24px",
                  }}
                >
                  {startup.desc}
                </p>

                {/* Tags */}
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    flexWrap: "wrap",
                  }}
                >
                  {startup.tags.map(
                    (tag) => (
                      <span
                        key={tag}
                        style={
                          tagStyle
                        }
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* RIGHT PANEL */}
              <div
                style={{
                  background:
                    "rgba(255,255,255,0.02)",

                  borderRadius:
                    "var(--radius-lg)",

                  padding: "24px",

                  border:
                    "1px solid rgba(255,255,255,0.05)",

                  display: "flex",

                  flexDirection:
                    "column",

                  justifyContent:
                    "space-between",
                }}
              >
                {/* Stats */}
                <div
                  style={{
                    display: "flex",
                    flexDirection:
                      "column",

                    gap: "18px",
                  }}
                >
                  {[
                    [
                      "Target Raise",
                      startup.target,
                    ],

                    [
                      "Valuation Cap",
                      startup.cap,
                    ],

                    [
                      "Match Strength",
                      startup.match,
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

                          alignItems:
                            "center",

                          gap: "16px",
                        }}
                      >
                        <span
                          style={{
                            opacity:
                              0.5,

                            fontSize:
                              "14px",
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
                              "Match Strength"
                                ? "var(--primary)"
                                : undefined,

                            fontSize:
                              label ===
                              "Match Strength"
                                ? "18px"
                                : undefined,
                          }}
                        >
                          {value}
                        </span>
                      </div>
                    )
                  )}
                </div>

                {/* Buttons */}
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    marginTop: "24px",
                  }}
                >
                  <Link
                    to={`/discovery/${i}`}
                    style={{
                      flex: 1,
                    }}
                  >
                    <Button
                      style={{
                        width:
                          "100%",
                      }}
                      size="sm"
                    >
                      View Details
                    </Button>
                  </Link>

                  <Button
                    variant="secondary"
                    size="sm"
                    style={{
                      width: "48px",
                      padding: 0,
                    }}
                  >
                    <ArrowUpRight
                      size={18}
                    />
                  </Button>
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </SidebarLayout>
  );
};

export default StartupDiscovery;
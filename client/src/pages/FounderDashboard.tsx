import React from "react";

import { SidebarLayout } from "../components/SidebarLayout";
import { GlassCard } from "../components/GlassCard";
import { Button } from "../components/Button";

import {
  Sparkles,
  ChevronRight,
  FileText,
  MessageSquare,
} from "lucide-react";

const stats = [
  {
    label: "PITCH DECK VIEWS",
    value: "124",
  },
  {
    label: "INVESTOR INTEREST",
    value: "86%",
    color: "var(--primary)",
  },
  {
    label: "DATA ROOM ACCESS",
    value: "12",
  },
];

const activities = [
  {
    icon: <FileText size={16} />,
    text: "Sequoia Capital viewed your pitch deck.",
    time: "2 hours ago",
  },
  {
    icon: <MessageSquare size={16} />,
    text: "New message from Angel Syndicate XYZ.",
    time: "5 hours ago",
  },
  {
    icon: <Sparkles size={16} />,
    text: "AI analyzed your updated financials document.",
    time: "Yesterday",
  },
];

const insights = [
  {
    title: "Clarify Go-to-Market",
    desc:
      "Your pitch lacks specific customer acquisition channels for Q3. Investors in SaaS look for clear CAC metrics.",
  },
  {
    title: "Highlight Technical Moat",
    desc:
      "Emphasize the proprietary LLM orchestration engine in slide 4 to differentiate from standard wrapper products.",
  },
  {
    title: "Add Team Credentials",
    desc:
      "Link your CTO's past exit directly in the executive summary to build immediate trust.",
  },
];

const FounderDashboard: React.FC = () => {
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
            fontSize: "34px",
            marginBottom: "8px",
          }}
        >
          Welcome back, Alex.
        </h1>

        <p
          style={{
            opacity: 0.6,
            fontSize: "15px",
          }}
        >
          Here is your startup's performance overview.
        </p>
      </header>

      {/* Grid */}
      <div
        className="dashboard-grid"
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(12, minmax(0, 1fr))",
          gap: "24px",
        }}
      >
        {/* Startup Pitch */}
        <GlassCard
          className="glow-effect"
          style={{
            gridColumn: "span 8",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "24px",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <span
                style={{
                  fontSize: "12px",
                  color: "var(--primary)",
                  fontWeight: 700,
                  letterSpacing: "0.5px",
                }}
              >
                MY STARTUP PITCH
              </span>

              <h2
                style={{
                  marginTop: "8px",
                  fontSize: "28px",
                }}
              >
                NexusFlow AI
              </h2>
            </div>

            <Button
              variant="secondary"
              size="sm"
            >
              Edit Deck
            </Button>
          </div>

          <p
            style={{
              opacity: 0.8,
              fontSize: "16px",
              lineHeight: "1.7",
              maxWidth: "700px",
            }}
          >
            An automated workflow orchestration
            platform that leverages LLMs to connect
            disparate SaaS tools without requiring
            traditional API integration or engineering
            resources.
          </p>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: "32px",
              marginTop: "32px",
              flexWrap: "wrap",
            }}
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p
                  style={{
                    fontSize: "12px",
                    opacity: 0.5,
                    marginBottom: "4px",
                  }}
                >
                  {stat.label}
                </p>

                <h3
                  style={{
                    fontSize: "24px",
                    color: stat.color,
                  }}
                >
                  {stat.value}
                </h3>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Recent Activity */}
        <GlassCard
          style={{
            gridColumn: "span 4",
          }}
        >
          <h3
            style={{
              fontSize: "20px",
              marginBottom: "24px",
            }}
          >
            Recent Activity
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {activities.map((activity, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    background:
                      "rgba(255,255,255,0.05)",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--primary)",
                    flexShrink: 0,
                  }}
                >
                  {activity.icon}
                </div>

                <div>
                  <p
                    style={{
                      fontSize: "14px",
                      opacity: 0.9,
                      lineHeight: "1.5",
                    }}
                  >
                    {activity.text}
                  </p>

                  <p
                    style={{
                      fontSize: "12px",
                      opacity: 0.4,
                      marginTop: "4px",
                    }}
                  >
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Button
            variant="ghost"
            size="sm"
            style={{
              width: "100%",
              marginTop: "24px",
              fontSize: "13px",
            }}
          >
            View All Activity
            <ChevronRight size={14} />
          </Button>
        </GlassCard>

        {/* AI Coach */}
        <GlassCard
          style={{
            gridColumn: "span 12",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "28px",
            }}
          >
            <div
              style={{
                background: "var(--gradient-primary)",
                padding: "10px",
                borderRadius: "12px",
              }}
            >
              <Sparkles
                size={20}
                color="white"
              />
            </div>

            <div>
              <h3
                style={{
                  fontSize: "22px",
                }}
              >
                AI Coach
              </h3>

              <p
                style={{
                  fontSize: "14px",
                  opacity: 0.6,
                }}
              >
                Actionable insights to increase your
                investor match strength.
              </p>
            </div>
          </div>

          {/* Insights */}
          <div
            className="insights-grid"
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(3, minmax(0, 1fr))",
              gap: "24px",
            }}
          >
            {insights.map((insight, i) => (
              <div
                key={i}
                style={{
                  padding: "20px",
                  background:
                    "rgba(255,255,255,0.02)",
                  border:
                    "1px solid rgba(255,255,255,0.05)",
                  borderRadius:
                    "var(--radius-lg)",
                }}
              >
                <h4
                  style={{
                    fontSize: "16px",
                    color: "var(--primary)",
                    marginBottom: "10px",
                  }}
                >
                  {insight.title}
                </h4>

                <p
                  style={{
                    fontSize: "14px",
                    opacity: 0.75,
                    lineHeight: "1.7",
                  }}
                >
                  {insight.desc}
                </p>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </SidebarLayout>
  );
};

export default FounderDashboard;
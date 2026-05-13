import React from "react";

import { SidebarLayout } from "../components/SidebarLayout";
import { GlassCard } from "../components/GlassCard";
import { Button } from "../components/Button";

import {
  Send,
  Search,
  MoreVertical,
  Paperclip,
  Smile,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const contacts = [
  {
    name: "Elena Rostova",
    role: "Founder",
    lastMsg:
      "The updated deck is in the secure room.",
    active: true,
    match: "98%",
  },

  {
    name: "Marcus Vance",
    role: "VC Partner",
    lastMsg:
      "Let's discuss the Series A valuation.",
    active: false,
    match: "92%",
  },

  {
    name: "FinTech Syndicate",
    role: "Group",
    lastMsg:
      "Sarah: Approved the term sheet draft.",
    active: false,
    match: "85%",
  },
];

const messages = [
  {
    type: "received",
    text:
      "Hi there. Thanks for taking the time to review our preliminary data room.",
    time: "10:24 AM",
  },

  {
    type: "received",
    text:
      "As requested, the updated Q2 financial deck is now in the secure room. Let me know if you need any specific drill-downs.",
    time: "10:25 AM",
  },

  {
    type: "sent",
    text:
      "Excellent, I'll review the updated deck this afternoon.",
    time: "10:30 AM",
  },
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 16px 10px 36px",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "var(--radius-md)",
  color: "white",
  outline: "none",
  fontSize: "14px",
};

const Messages: React.FC = () => {
  return (
    <SidebarLayout>
      <div
        className="messages-layout"
        style={{
          display: "flex",
          gap: "24px",
          height: "calc(100vh - 160px)",
        }}
      >
        {/* CONTACTS */}
        <GlassCard
          className="contacts-panel"
          style={{
            width: "320px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Header */}
          <div
            style={{
              marginBottom: "20px",
            }}
          >
            <h2
              style={{
                fontSize: "22px",
                marginBottom: "16px",
              }}
            >
              Messages
            </h2>

            {/* Search */}
            <div
              style={{
                position: "relative",
              }}
            >
              <Search
                size={16}
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
                placeholder="Search..."
                style={inputStyle}
              />
            </div>
          </div>

          {/* Contact List */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {contacts.map((contact, i) => (
              <div
                key={i}
                style={{
                  padding: "14px",
                  borderRadius:
                    "var(--radius-md)",
                  background:
                    i === 0
                      ? "rgba(103, 80, 164, 0.1)"
                      : "transparent",
                  border:
                    i === 0
                      ? "1px solid rgba(103, 80, 164, 0.2)"
                      : "1px solid transparent",
                  cursor: "pointer",
                  transition:
                    "all 0.2s ease",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent:
                      "space-between",
                    marginBottom: "6px",
                    gap: "10px",
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontWeight: 600,
                        fontSize: "14px",
                      }}
                    >
                      {contact.name}
                    </span>

                    <p
                      style={{
                        fontSize: "11px",
                        opacity: 0.45,
                        marginTop: "2px",
                      }}
                    >
                      {contact.role}
                    </p>
                  </div>

                  <span
                    style={{
                      fontSize: "10px",
                      color:
                        "var(--primary)",
                      fontWeight: 700,
                    }}
                  >
                    {contact.match}
                  </span>
                </div>

                <p
                  style={{
                    fontSize: "12px",
                    opacity: 0.65,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow:
                      "ellipsis",
                  }}
                >
                  {contact.lastMsg}
                </p>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* CHAT WINDOW */}
        <GlassCard
          style={{
            flex: 1,
            padding: 0,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          {/* TOP HEADER */}
          <div
            style={{
              padding: "20px",
              borderBottom:
                "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              justifyContent:
                "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "16px",
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
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  background:
                    "var(--gradient-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent:
                    "center",
                  fontWeight: 700,
                }}
              >
                ER
              </div>

              <div>
                <h3
                  style={{
                    fontSize: "16px",
                  }}
                >
                  Elena Rostova
                </h3>

                <span
                  style={{
                    fontSize: "12px",
                    color: "#10b981",
                  }}
                >
                  ● Active now
                </span>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: "12px",
              }}
            >
              <Button
                variant="secondary"
                size="sm"
              >
                Data Room
              </Button>

              <Button
                variant="secondary"
                size="sm"
                style={{
                  width: "36px",
                  padding: 0,
                }}
              >
                <MoreVertical
                  size={18}
                />
              </Button>
            </div>
          </div>

          {/* AI HEADER */}
          <div
            style={{
              background:
                "rgba(103, 80, 164, 0.05)",
              padding: "12px 20px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              borderBottom:
                "1px solid rgba(103, 80, 164, 0.1)",
            }}
          >
            <Sparkles
              size={16}
              color="var(--primary)"
            />

            <p
              style={{
                fontSize: "12px",
                opacity: 0.85,
                lineHeight: "1.5",
              }}
            >
              <span
                style={{
                  fontWeight: 700,
                  color:
                    "var(--primary)",
                }}
              >
                AI Suggestion:
              </span>{" "}
              Elena's SaaS metrics strongly
              align with your thesis.
              Suggest asking about their Q3
              Enterprise retention rates.
            </p>
          </div>

          {/* MESSAGES */}
          <div
            style={{
              flex: 1,
              padding: "24px",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            {messages.map(
              (message, index) => (
                <div
                  key={index}
                  style={{
                    alignSelf:
                      message.type ===
                      "sent"
                        ? "flex-end"
                        : "flex-start",

                    maxWidth: "70%",
                  }}
                >
                  <div
                    style={{
                      padding:
                        "12px 16px",

                      background:
                        message.type ===
                        "sent"
                          ? "var(--gradient-primary)"
                          : "rgba(255,255,255,0.05)",

                      border:
                        message.type ===
                        "received"
                          ? "1px solid rgba(255,255,255,0.1)"
                          : "none",

                      borderRadius:
                        message.type ===
                        "sent"
                          ? "16px 0 16px 16px"
                          : "0 16px 16px 16px",

                      color:
                        message.type ===
                        "sent"
                          ? "white"
                          : "inherit",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: "1.6",
                      }}
                    >
                      {message.text}
                    </p>
                  </div>

                  <span
                    style={{
                      fontSize: "10px",
                      opacity: 0.4,
                      marginTop: "4px",
                      display: "block",

                      textAlign:
                        message.type ===
                        "sent"
                          ? "right"
                          : "left",
                    }}
                  >
                    {message.time}
                  </span>
                </div>
              )
            )}
          </div>

          {/* INPUT */}
          <div
            style={{
              padding: "20px",
              borderTop:
                "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "12px",
              }}
            >
              <div
                style={{
                  flex: 1,
                  position: "relative",
                }}
              >
                <input
                  type="text"
                  placeholder="Type a message..."
                  style={{
                    width: "100%",
                    padding:
                      "12px 90px 12px 16px",
                    background:
                      "rgba(255,255,255,0.05)",
                    border:
                      "1px solid rgba(255,255,255,0.1)",
                    borderRadius:
                      "var(--radius-md)",
                    color: "white",
                    outline: "none",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    right: "12px",
                    top: "50%",
                    transform:
                      "translateY(-50%)",

                    display: "flex",
                    gap: "12px",
                    opacity: 0.5,
                  }}
                >
                  <Paperclip
                    size={18}
                    cursor="pointer"
                  />

                  <Smile
                    size={18}
                    cursor="pointer"
                  />
                </div>
              </div>

              <Button
                style={{
                  width: "48px",
                  padding: 0,
                }}
              >
                <Send size={18} />
              </Button>
            </div>

            {/* Footer */}
            <p
              style={{
                textAlign: "center",
                fontSize: "11px",
                opacity: 0.4,
                marginTop: "12px",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
              }}
            >
              <ShieldCheck size={12} />
              Messages are end-to-end
              encrypted for secure diligence.
            </p>
          </div>
        </GlassCard>
      </div>
    </SidebarLayout>
  );
};

export default Messages;
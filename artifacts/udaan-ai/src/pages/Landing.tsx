import { useLocation } from "wouter";
import { StarField } from "@/components/StarField";
import logoPath from "/logo.png";

export default function Landing() {
  const [, setLocation] = useLocation();

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #02020c 0%, #060618 30%, #0a0a24 50%, #0e0828 70%, #02020c 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <StarField />

      {/* ── Nebula Glows & Shooting Stars ── */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, bottom: 0, overflow: "hidden", pointerEvents: "none", zIndex: 1
      }}>
        <div style={{
          position: "absolute", width: "100%", height: "100%",
          backgroundImage: `
            radial-gradient(1px 1px at 15% 25%, #ffffff 100%, transparent),
            radial-gradient(1.5px 1.5px at 45% 15%, rgba(255,255,255,0.8) 100%, transparent),
            radial-gradient(2px 2px at 75% 35%, rgba(255,255,255,0.6) 100%, transparent),
            radial-gradient(1px 1px at 25% 65%, #ffffff 100%, transparent),
            radial-gradient(1.5px 1.5px at 85% 75%, rgba(255,255,255,0.8) 100%, transparent),
            radial-gradient(2px 2px at 55% 85%, rgba(255,255,255,0.6) 100%, transparent),
            radial-gradient(1px 1px at 10% 80%, #ffffff 100%, transparent),
            radial-gradient(1.5px 1.5px at 90% 20%, rgba(255,255,255,0.7) 100%, transparent)
          `,
          backgroundSize: "300px 300px",
          opacity: 0.6
        }} />
        <div style={{
          position: "absolute", top: "10%", left: "-15%", width: "50%", height: "80%",
          background: "radial-gradient(circle, rgba(45,212,191,0.08) 0%, transparent 60%)",
          filter: "blur(60px)",
        }} />
        <div style={{
          position: "absolute", top: "20%", right: "-15%", width: "50%", height: "80%",
          background: "radial-gradient(circle, rgba(217,70,239,0.08) 0%, transparent 60%)",
          filter: "blur(60px)",
        }} />
        <div className="shooting-star" style={{ top: "15%", left: "70%", animationDelay: "1s", animationDuration: "5s" }} />
        <div className="shooting-star" style={{ top: "45%", left: "90%", animationDelay: "4s", animationDuration: "7s" }} />
      </div>

      {/* ── Inline keyframes for the landing page entrance & ambience ── */}
      <style>{`
        /* ─── Entrance sequence (background handled by StarField CSS) ─── */
        @keyframes logoEntrance {
          0%   { opacity: 0; transform: scale(0.72) translateY(28px); }
          65%  { opacity: 1; transform: scale(1.05) translateY(-6px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes textFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes btnFadeGlow {
          0%   { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes btnGlowRamp {
          0%   { box-shadow: 0 0 0 rgba(168,85,247,0); border-color: rgba(168,85,247,0.2); }
          100% { box-shadow: 0 0 6px rgba(168,85,247,0.45), 0 0 18px rgba(168,85,247,0.28), 0 0 42px rgba(168,85,247,0.14); border-color: rgba(168,85,247,0.55); }
        }
        @keyframes badgeFadeIn {
          from { opacity: 0; transform: translateX(-16px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes neonTextGlow {
          0%, 100% {
            filter: drop-shadow(0 0 4px rgba(216,180,254,0.6))
                    drop-shadow(0 0 12px rgba(168,85,247,0.35));
          }
          50% {
            filter: drop-shadow(0 0 8px rgba(216,180,254,0.85))
                    drop-shadow(0 0 20px rgba(168,85,247,0.5));
          }
        }

        /* ─── Persistent ambient ─── */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%      { transform: translateY(-12px); }
        }
        @keyframes neonPulse {
          0%, 100% {
            box-shadow:
              0 0 6px rgba(168,85,247,0.45),
              0 0 18px rgba(168,85,247,0.28),
              0 0 42px rgba(168,85,247,0.14),
              inset 0 0 12px rgba(168,85,247,0.04);
          }
          50% {
            box-shadow:
              0 0 12px rgba(168,85,247,0.65),
              0 0 32px rgba(168,85,247,0.4),
              0 0 64px rgba(168,85,247,0.2),
              inset 0 0 16px rgba(168,85,247,0.06);
          }
        }
        @keyframes logoGlow {
          0%, 100% {
            filter: brightness(0) invert(1)
              drop-shadow(0 0 22px rgba(245,158,11,0.9))
              drop-shadow(0 0 48px rgba(245,158,11,0.5))
              drop-shadow(0 0 80px rgba(251,191,36,0.25));
          }
          50% {
            filter: brightness(0) invert(1)
              drop-shadow(0 0 30px rgba(251,191,36,1))
              drop-shadow(0 0 64px rgba(245,158,11,0.6))
              drop-shadow(0 0 100px rgba(245,158,11,0.32));
          }
        }
        
        /* ─── Shooting Star ─── */
        @keyframes shootingStar {
          0% { transform: translateX(0) translateY(0) rotate(-45deg); opacity: 1; height: 2px; width: 0; }
          70% { width: 120px; opacity: 1; }
          100% { transform: translateX(-600px) translateY(600px) rotate(-45deg); opacity: 0; width: 0; }
        }
        .shooting-star {
          position: absolute;
          width: 120px;
          height: 1px;
          background: linear-gradient(90deg, rgba(255,255,255,0.8), transparent);
          transform-origin: left center;
          animation: shootingStar linear infinite;
          opacity: 0;
        }

        /* ─── Media Queries ─── */
        @media (max-width: 768px) {
          .badges-container {
            top: 1.5rem !important;
            left: 0 !important;
            width: 100% !important;
            flex-direction: row !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
            gap: 0.6rem !important;
          }
          .badge-item {
            gap: 0.4rem !important;
          }
          .badge-label {
            font-size: 0.7rem !important;
          }
        }
      `}</style>

      {/* ── Badges — top-left, stacked vertically ── */}
      <div
        className="badges-container"
        style={{
          position: "absolute",
          top: "2rem",
          left: "2rem",
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
          gap: "0.85rem",
        }}
      >
        {[
          { label: "AI-Powered", letter: "A" },
          { label: "Personalized", letter: "P" },
          { label: "Certified", letter: "C" },
        ].map((item, i) => (
          <div
            key={item.label}
            className="badge-item"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.65rem",
              opacity: 0,
              animation: `badgeFadeIn 0.55s cubic-bezier(0.34,1.2,0.64,1) ${1.85 + i * 0.18}s forwards`,
            }}
          >
            <div
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, rgba(99,102,241,0.3), rgba(168,85,247,0.15))",
                border: "1px solid rgba(168,85,247,0.45)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.65rem",
                fontWeight: 700,
                color: "#ddd6fe",
                fontFamily: "'Space Grotesk', sans-serif",
                flexShrink: 0,
                boxShadow: "0 0 8px rgba(168,85,247,0.2)",
              }}
            >
              {item.letter}
            </div>
            <span
              className="badge-label"
              style={{
                fontSize: "0.78rem",
                fontWeight: 500,
                color: "rgba(255,255,255,0.6)",
                fontFamily: "'Space Grotesk', sans-serif",
                letterSpacing: "0.04em",
              }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* ── Main centred content ── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.25rem",
          padding: "2rem",
          paddingTop: "3rem",
          textAlign: "center",
        }}
      >
        {/* Logo — enlarged, center-top, overlapping top edge with warm glow */}
        <div
          style={{
            opacity: 0,
            animation:
              "logoEntrance 1s cubic-bezier(0.34,1.45,0.64,1) 0.55s forwards",
            marginTop: "-5rem",
            marginBottom: "-0.5rem",
          }}
        >
          <div
            style={{
              animation: "float 5.5s ease-in-out infinite",
            }}
          >
            <img
              src={logoPath}
              alt="Udaan AI Logo"
              data-testid="img-logo"
              style={{
                width: "280px",
                height: "280px",
                objectFit: "contain",
                animation: "logoGlow 4.5s ease-in-out infinite",
              }}
            />
          </div>
        </div>

        {/* Heading */}
        <div
          style={{
            opacity: 0,
            animation: "textFadeUp 0.75s ease-in-out 1.15s forwards",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(3rem, 8vw, 5rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              background:
                "linear-gradient(135deg, #ffffff 0%, #c084fc 40%, #f59e0b 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "0.5rem",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Udaan AI
          </h1>
        </div>

        {/* Subtext */}
        <div
          style={{
            opacity: 0,
            animation: "textFadeUp 0.75s ease-in-out 1.35s forwards",
            marginTop: "-1rem",
          }}
        >
          <p
            style={{
              fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
              fontWeight: 700,
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: "0.01em",
              maxWidth: "560px",
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.9)",
              WebkitTextFillColor: "initial",
            }}
          >
            Turn your{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #6366f1, #818cf8, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              now
            </span>{" "}
            into your{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #f59e0b, #f97316, #fb923c)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              next.
            </span>
          </p>
        </div>

        {/* "Get Started" button — neon outline pill */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "0.75rem",
            opacity: 0,
            animation: "btnFadeGlow 0.85s ease-in-out 1.6s forwards",
          }}
        >
          <button
            data-testid="button-get-started"
            onClick={() => setLocation("/signup")}
            style={{
              padding: "1rem 2.8rem",
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "transparent",
              background: "rgba(6,4,16,0.75)",
              border: "1.5px solid rgba(168,85,247,0.55)",
              borderRadius: "50px",
              cursor: "pointer",
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: "0.04em",
              transition: "transform 0.2s ease, box-shadow 0.3s ease, border-color 0.3s ease",
              animation:
                "btnGlowRamp 0.85s ease-in-out 1.6s forwards, neonPulse 3s ease-in-out 2.45s infinite",
              backgroundClip: "padding-box",
              position: "relative",
              overflow: "visible",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.borderColor = "rgba(168,85,247,0.85)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.borderColor = "rgba(168,85,247,0.55)";
            }}
          >
            <span
              style={{
                background:
                  "linear-gradient(135deg, #c4b5fd 0%, #ffffff 45%, #e9d5ff 70%, #ffffff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                position: "relative",
                zIndex: 1,
                animation: "neonTextGlow 3s ease-in-out infinite",
              }}
            >
              Get Started
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

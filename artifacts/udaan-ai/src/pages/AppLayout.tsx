import { useState, type ReactNode } from "react";
import { Sidebar } from "@/components/Sidebar";
import { ChatBot } from "@/components/ChatBot";
import { StarField } from "@/components/StarField";

export default function AppLayout({ children }: { children: ReactNode }) {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0d0b1e 0%, #151030 50%, #0d0b1e 100%)",
        display: "flex",
        position: "relative",
      }}
    >
      <StarField />

      <div style={{ position: "relative", zIndex: 5, display: "flex", width: "100%" }}>
        <Sidebar onChatOpen={() => setChatOpen(!chatOpen)} />

        <main
          style={{
            flex: 1,
            overflowY: "auto",
            minHeight: "100vh",
            maxHeight: "100vh",
          }}
        >
          {children}
        </main>
      </div>

      <ChatBot isOpen={chatOpen} onClose={() => setChatOpen(false)} />
    </div>
  );
}

"use client";

import Link from "next/link";

export default function OfflinePage() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px",
        fontSize: "22px",
        fontFamily: "Arial",
        background: "#f5f5f5",
        minHeight: "100vh"
      }}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>📴 You're Offline</h1>
      <p style={{ color:"#555", marginBottom: "25px" }}>
        This page still opens even without internet.
      </p>

      {/* Buttons */}
      <div style={{ display: "flex", flexDirection:"column", gap:"15px", width:"200px", margin:"0 auto" }}>
        
        <Link href="/">
          <button style={btnStyle}>Go to Homepage</button>
        </Link>

        <Link href="/test-page">
          <button style={btnStyle}>Test Navigation Page</button>
        </Link>

        <button style={btnStyle} onClick={() => alert("Offline Buttons Are Working ✓")}>
          Click Me Offline
        </button>

      </div>

      {/* Footer */}
      <p style={{marginTop:"60px", fontSize:"14px", color:"#777"}}>Try turning internet off and reopen the app.</p>
    </div>
  );
}

const btnStyle: React.CSSProperties = {
  padding:"12px 16px",
  border:"none",
  background:"#000",
  color:"#fff",
  borderRadius:"8px",
  cursor:"pointer",
  fontSize:"16px"
};

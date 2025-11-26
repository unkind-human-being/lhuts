import Image from "next/image";
export default function OfflinePage() {
  return (
    <div style={{ textAlign:"center", padding:"50px", fontSize:"24px" }}>
      <h1>📴 Offline Mode</h1>
      <p>This page loads even without internet.</p>
    </div>
  );
}

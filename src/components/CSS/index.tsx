import GlassCard from "./GlassCard";

export default function Css() {
  return (
    <>
      <GlassCards />
    </>
  );
}

// Demo Components in Rows
function GlassCards() {
  return (
    <>
      <h2>Glassmorphic Card Component</h2>
      <div className="cards-container">
        <GlassCard title="Card without Tilt" />
        <GlassCard tilt={true} title="Card with Tilt" />
      </div>
    </>
  );
}

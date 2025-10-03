import React from "react";
import RandomVerse from "./RandomVerse";
import SpecificVerse from "./SpecificVerse";

function App() {
  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h1>📖 Bible Verse App</h1>
      <RandomVerse />
      <SpecificVerse />
    </div>
  );
}

export default App;

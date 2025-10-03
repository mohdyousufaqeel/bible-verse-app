import React, { useState } from "react";

const SpecificVerse = () => {
  const [verse, setVerse] = useState("");
  const [input, setInput] = useState("John 3:16");

  const getSpecificVerse = async () => {
    try {
      const passage = input.replace(" ", "+");
      const response = await fetch(
        `https://labs.bible.org/api/?passage=${passage}&type=json`
      );
      const data = await response.json();
      setVerse(`${data[0].bookname} ${data[0].chapter}:${data[0].verse} - ${data[0].text}`);
    } catch (error) {
      console.error(error);
      setVerse("Error fetching verse.");
    }
  };

  return (
    <div style={{ margin: "20px", padding: "20px", border: "1px solid #ccc" }}>
      <h2>Get Specific Verse</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Example: John 3:16"
      />
      <button onClick={getSpecificVerse} style={{ marginLeft: "10px" }}>
        Get Verse
      </button>
      <p style={{ marginTop: "10px" }}>{verse}</p>
    </div>
  );
};

export default SpecificVerse;

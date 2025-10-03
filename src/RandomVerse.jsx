import React, { useState } from "react";

const RandomVerse = () => {
  const [verse, setVerse] = useState("");

  const getRandomVerse = async () => {
    try {
      const response = await fetch(
        "https://labs.bible.org/api/?passage=random&type=json"
      );
      const data = await response.json();
      // API returns an array of objects
      setVerse(`${data[0].bookname} ${data[0].chapter}:${data[0].verse} - ${data[0].text}`);
    } catch (error) {
      console.error(error);
      setVerse("Error fetching verse.");
    }
  };

  return (
    <div style={{ margin: "20px", padding: "20px", border: "1px solid #ccc" }}>
      <h2>Random Bible Verse</h2>
      <button onClick={getRandomVerse}>Get Random Verse</button>
      <p style={{ marginTop: "10px" }}>{verse}</p>
    </div>
  );
};

export default RandomVerse;

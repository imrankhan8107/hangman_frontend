import React, { useState } from "react";
// import "../styles/start.css";

export default function Start({ onStart }) {
  const [name, setname] = useState("");
  // const [gameId, setgameId] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setname(e.target.value)}
        value={name}
        className="input-space"
      />
      <br />
      <button onClick={() => onStart(name)} className={`start-button`}>
        Start
      </button>
    </div>
  );
}

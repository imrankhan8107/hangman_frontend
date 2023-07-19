import React, { useState } from "react";
// import "../styles/start.css";

export default function Start({ onStart, isRunning }) {
  const [name, setname] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setname(e.target.value)}
        value={name}
      />
      <button onClick={() => onStart(name)} className={`start-button`}>
        Start
      </button>
    </div>
  );
}

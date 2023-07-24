import React from "react";
// import "../styles/lives.css";

export default function Lives({ livesLeft }) {
  return (
    <div>
      <div className="hangman-container">
        <div className="pole"></div>
        <div className={`hangman hangman-${6 - livesLeft}`}>
          <div className="hangman__element"></div>
          <div className="hangman__element"></div>
          <div className="hangman__element"></div>
          <div className="hangman__element"></div>
          <div className="hangman__element"></div>
          <div className="hangman__element"></div>
        </div>
        <div className="lives">Lives: {livesLeft}</div>
      </div>
    </div>
  );
}

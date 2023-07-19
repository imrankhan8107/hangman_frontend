import React from "react";
// import "../styles/letters.css";

const ALL_ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");

export default function Letters({ onSelect, playedLetters }) {
  return (
    <div className="display-flex justify-content-center">
      {ALL_ALPHABET.map((letter, index) => {
        return (
          <button
            key={index}
            onClick={() => onSelect(letter)}
            disabled={playedLetters.has(letter)}
            className="start-button start-button--letters"
          >
            {letter.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}

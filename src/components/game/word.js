import React from "react";
// import "../styles/word.css";

export default function Word({ maskedWord }) {
  return (
    <div className="word display-flex justify-content-evenly ">
      {maskedWord.map((letter, index) => {
        return (
          <>
            &nbsp;
            <span>{letter}</span>
            &nbsp;
          </>
        );
      })}
    </div>
  );
}

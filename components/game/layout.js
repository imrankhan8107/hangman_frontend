import React from "react";
import Word from "./word";
import Lives from "./lives";
import Start from "./start";
import Letters from "./letters";

export default function Layout({ session, guess, start }) {
  const isRunning = !!session;
  return (
    <div className="game-wrapper">
      {isRunning && (
        <>
          <div className="left-pane">
            <Lives livesLeft={session.livesLeft} />
          </div>
          <div className="right-pane">
            <Word maskedWord={session.maskedWord} />
            <Letters onSelect={guess} playedLetters={new Set()} />
          </div>
        </>
      )}
      {!isRunning && <Start onStart={start} isRunning={isRunning} />}
    </div>
  );
}

import React from "react";
import Word from "./word";
import Lives from "./lives";
import Start from "./start";
import Letters from "./letters";

export default function Layout({ session, guess, start }) {
  // const [result, setresult] = useState(false);
  const isRunning = !!session;
  // console.log(session);
  // setresult(session.result === true || !(session.livesLeft <= 0));
  return (
    <div className="game-wrapper">
      {isRunning && !session.result && session.livesLeft > 0 && (
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
      {isRunning &&
        (session.livesLeft === 0 || !session.maskedWord.includes("_")) && (
          <div className="result">
            {session.result === true || !(session.livesLeft <= 0)
              ? "You won!"
              : "You lost!"}
            <div>
              <button
                onClick={() => {
                  window.location.reload();
                }}
                className={`start-button`}
              >
                Restart Game
              </button>
            </div>
          </div>
        )}
      {!isRunning && <Start onStart={start} isRunning={isRunning} />}
    </div>
  );
}

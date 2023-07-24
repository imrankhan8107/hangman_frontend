import React, { useState } from "react";
import Layout from "./layout";
import playInSession from "../../api/sessions";
import createSession from "../../api/sessions";

export default function Game() {
  const [session, setSession] = useState(null);

  const guess = async (letter) => {
    const updatedSession = await playInSession(session.id, letter);
    setSession(updatedSession);
  };

  const start = async (name) => {
    const session = await createSession(name);
    setSession(session);
  };
  return <Layout session={session} guess={guess} start={start} />;
}

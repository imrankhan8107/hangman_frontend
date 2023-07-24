const BASE_URL = "https://hangman-backend-t6nf.onrender.com/api/sessions";

async function createSession(name) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });
  return response.json();
}

async function playInSession(id, letter) {
  const response = await fetch(`${BASE_URL}/${id}/play`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ letter }),
  });
  return response.json();
}

export default {
  createSession,
  playInSession,
};

const BASE_URL = "https://hangman-backend-t6nf.onrender.com/api/sessions";

export async function createSession(name) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });
  return response.json();
}

export async function playInSession(id, letter) {
  const response = await fetch(`${BASE_URL}/${id}/play`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ letter }),
  });
  return response.json();
}


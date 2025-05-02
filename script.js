// Memuat dotenv untuk membaca file .env
require('dotenv').config();

// Ambil API key dari .env
const apiKey = process.env.OPENAI_API_KEY;

// Fungsi untuk mengirim pesan ke API OpenAI
async function sendMessage(message) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }]
    })
  });

  const data = await response.json();
  return data.choices?.[0]?.message?.content || "Maaf, aku tidak mengerti.";
}

// Uji fungsi dengan mengirimkan pesan
sendMessage("Hello, Nabila!").then(reply => {
  console.log("Reply:", reply);
});

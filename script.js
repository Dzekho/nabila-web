const apiKey = 'sk-abc123xyz456...'; // Gantilah dengan API key yang valid dari OpenAI

async function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const userMessage = input.value;
  if (!userMessage.trim()) return;

  chatBox.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
  input.value = "";

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userMessage }]
    })
  });

  const data = await response.json();
  const reply = data.choices?.[0]?.message?.content || "Sorry, I didn't get that.";
  chatBox.innerHTML += `<p><strong>Nabila:</strong> ${reply}</p>`;
  chatBox.scrollTop = chatBox.scrollHeight;
}

document.getElementById("user-input").addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});

document.getElementById("reset-button").addEventListener("click", function() {
  document.getElementById("chat-box").innerHTML = "";
});

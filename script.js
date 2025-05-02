const express = require('express');
const brain = require('brain.js');
const app = express();
const net = new brain.NeuralNetwork();

app.use(express.json());

// Melatih model
net.train([
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [1, 1], output: [0] }
]);

// Endpoint untuk prediksi
app.post('/predict', (req, res) => {
  const input = req.body.input;
  const output = net.run(input);
  res.json({ output });
});

// Jalankan server
app.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
});

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
// Pour traiter les requêtes JSON
app.use(express.json()); 

// Route test
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello depuis le backend !" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

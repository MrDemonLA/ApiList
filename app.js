const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

// Tableau initial vide pour stocker vos éléments
let TabList = ["soda", "test", "test2"];

// Middleware pour permettre à Express de parser les requêtes JSON
app.use(express.json());

// Middleware CORS pour permettre les requêtes depuis tous les origines
app.use(cors());

// Route pour ajouter un élément au tableau
app.post("/ajouter", (req, res) => {
  const { element } = req.body;
  TabList.push(element);
  res.json({ message: "Élément ajouté avec succès", TabList });
});

// Route pour supprimer un élément du tableau
app.delete("/supprimer/:index", (req, res) => {
  const { index } = req.params;
  TabList.splice(index, 1);
  res.json({ message: "Élément supprimé avec succès", TabList });
});

// Route pour supprimer tous les éléments du tableau
app.delete("/supprimer-tout", (req, res) => {
  TabList = []; // Assigner un nouveau tableau vide à TabList
  res.json({
    message: "Tous les éléments ont été supprimés avec succès",
    TabList,
  });
});

// Route pour afficher le tableau
app.get("/afficher", (req, res) => {
  res.json({ TabList });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});

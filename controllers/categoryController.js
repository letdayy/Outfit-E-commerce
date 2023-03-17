const express = require("express");
const db = require("../database/db");
const router = express.Router();

router.get("/", (_req, res) => {
  const q = "SELECT * FROM category";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.put("/:id", (req, res) => {
  const categoryId = req.params.id;
  const q =
    "UPDATE category SET `name` = ?, `description`= ? WHERE id = ?";

  const values = [
    req.body.name,
    req.body.description
  ];

  db.query(q, [...values, categoryId], (err) => {
    if (err) return res.json(err);
    return res.json("atualizado com sucesso");
  });
});

router.post("/", (req, res) => {
  const q =
    "INSERT INTO category (`name`, `description`) VALUES (?)";
  const values = [
    req.body.name,
    req.body.description
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);
    return res.json({ message: "Produto criado com sucesso", Product: values });
  });
});

router.delete("/:id", (req, res) => {
  const categoryId = req.params.id;
  const q = "DELETE FROM category WHERE id = ?";

  db.query(q, [categoryId], (err) => {
    if (err) return res.json(err);
    return res.json("Deletado com sucesso!");
  });
});

module.exports = router;

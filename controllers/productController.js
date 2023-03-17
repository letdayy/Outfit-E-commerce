const express = require("express");
const db = require('../database/db');
const router = express.Router();

router.get("/", (req, res) => {
  const q = "SELECT * FROM products";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.put("/:id", (req, res) => {
  const productsId = req.params.id;
  const q =
    "UPDATE products SET `name` = ?, `description`= ?, `retailValue`= ?, `wholesaleValue`= ? WHERE id = ?";

  const values = [
    req.body.name,
    req.body.description,
    req.body.retailValue,
    req.body.wholesaleValue,
  ];

  db.query(q, [...values, productsId], (err, data) => {
    if (err) return res.json(err);
    return res.json("atualizado com sucesso");
  });
});

router.post("/", (req, res) => {
  const q =
    "INSERT INTO products (`name`, `description`, `retailValue`, `wholesaleValue`) VALUES (?)";
  const values = [
    req.body.name,
    req.body.description,
    req.body.retailValue,
    req.body.wholesaleValue,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json({ message: "Produto criado com sucesso", Product: values });
  });
});

router.delete("/:id", (req, res) => {
  const productsId = req.params.id;
  const q = "DELETE FROM products WHERE id = ?";

  db.query(q, [productsId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Deletado com sucesso!");
  });
});

module.exports = router;

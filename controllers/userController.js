const express = require("express");
const db = require("../database/db");
const router = express.Router();

router.get("/", (_req, res) => {
  const q = "SELECT * FROM user";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.put("/:id", (req, res) => {
  const userId = req.params.id;
  const q =
    "UPDATE user SET `name` = ?, `hash`= ?, `salt`= ?, `isAdmin`= ? WHERE id = ?";

  const values = [
    req.body.name,
    req.body.hash,
    req.body.salt,
    req.body.isAdmin,
  ];

  db.query(q, [...values, userId], (err) => {
    if (err) return res.json(err);
    return res.json("atualizado com sucesso");
  });
});

router.post("/", (req, res) => {
  const q =
    "INSERT INTO user (`name`, `hash`, `salt`, `isAdmin`) VALUES (?)";
  const values = [
    req.body.name,
    req.body.hash,
    req.body.salt,
    req.body.isAdmin,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);
    return res.json({ message: "Produto criado com sucesso", Product: values });
  });
});

router.delete("/:id", (req, res) => {
  const userId = req.params.id;
  const q = "DELETE FROM user WHERE id = ?";

  db.query(q, [userId], (err) => {
    if (err) return res.json(err);
    return res.json("Deletado com sucesso!");
  });
});

module.exports = router;

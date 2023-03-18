const express = require("express");
const db = require("../database/db");
const router = express.Router();
const Validator = require("../middleware/validator");


router.get("/", (_req, res) => {
  const q = "SELECT * FROM products";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.put("/:id", Validator.validationProduct("update"), Validator.getValidationErrors, (req, res) => {
  const productsId = req.params.id;
  const q =
    "UPDATE products SET `name` = ?, `description`= ?, `retailValue`= ?, `wholesaleValue`= ? WHERE id = ?";

  const values = [
    req.body.name,
    req.body.description,
    req.body.retailValue,
    req.body.wholesaleValue,
  ];

  db.query(q, [...values, productsId], (err) => {
    if (err) return res.json(err);
    return res.json("atualizado com sucesso");
  });
});

router.post("/", Validator.validationProduct("create"), Validator.getValidationErrors, (req, res) => {
  const q =
    "INSERT INTO products (`name`, `description`, `retailValue`, `wholesaleValue`) VALUES (?)";
  const values = [
    req.body.name,
    req.body.description,
    req.body.retailValue,
    req.body.wholesaleValue,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);
    return res.json({ message: "Produto criado com sucesso", Product: values });
  });
});

router.delete("/:id", (req, res) => {
  const productsId = req.params.id;
  const q = "DELETE FROM products WHERE id = ?";

  db.query(q, [productsId], (err) => {
    if (err) return res.json(err);
    return res.json("Deletado com sucesso!");
  });
});


router.post("/:productId/category/:categoryId", (req, res) => {
  const {productId, categoryId} = req.params;
  const q = "INSERT INTO `product-category` (`id_product`, `id_category`) VALUES (?, ?)";

  db.query(q,[productId, categoryId], (err) => {
    if (err) return res.json(err);
    return res.json("Associação criada com sucesso!");
  });

});



module.exports = router;

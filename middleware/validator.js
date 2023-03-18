const { body, validationResult } = require("express-validator");

const validationProduct = (method) => {
  switch (method) {
    case "create": {
      return [
        body("name")
          .isLength({ min: 1 })
          .withMessage("Esse campo deve ser preenchido."),
        body("description")
          .isLength({ min: 1 })
          .withMessage("Esse campo deve ser preenchido"),
        body("retailValue")
          .isNumeric()
          .withMessage("Esse campo precisa ser um número"),
        body("wholesaleValue")
          .isNumeric()
          .withMessage("Esse campo precisa ser um número"),
      ];
    }
    case "update": {
      return [
        body("name")
          .isLength({ min: 1 })
          .withMessage("Esse campo deve ser preenchido."),
        body("description")
          .isLength({ min: 1 })
          .withMessage("Esse campo deve ser preenchido"),
        body("retailValue")
          .isNumeric()
          .withMessage("Esse campo precisa ser um número"),
        body("wholesaleValue")
          .isNumeric()
          .withMessage("Esse campo precisa ser um número"),
      ];
    }
  }
};

const validationCategory = (method) => {
  switch (method) {
    case "create": {
      return [
        body("name")
          .isLength({ min: 1 })
          .withMessage("Esse campo deve ser preenchido"),
        body("description")
          .isLength({ min: 1 })
          .withMessage("Esse campo deve ser preenchido"),
      ];
    }
    case "update": {
      return [
        body("name")
          .isLength({ min: 1 })
          .withMessage("Esse campo deve ser preenchido"),
        body("description")
          .isLength({ min: 1 })
          .withMessage("Esse campo deve ser preenchido"),
      ];
    }
  }
};

const getValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
};

module.exports = { 
    validationProduct, 
    validationCategory, 
    getValidationErrors 
};

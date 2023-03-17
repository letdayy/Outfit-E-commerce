const express = require("express");
const productController = require("./controllers/productController");
const categoryController = require("./controllers/categoryController");
const userController = require("./controllers/userController");

//Configurações do servidor
const port = 8800;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));




app.get("/", (req, res) =>{
    res.json("Oi, este é o backend");
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});


// Rotas 
app.use("/products", productController);
app.use("/category", categoryController);
app.use("/user", userController);




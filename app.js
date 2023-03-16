const express = require("express");
//const mysql = require('mysql');
const productController = require('./controllers/productController');


//Configurações do servidor
const port = 8800;
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))




app.get("/", (req, res) =>{
    res.json("Oi, este é o backend")
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
});


// Rotas 
app.use('/products', productController);













// Tabela das Categorias 
app.get("/category", (req, res) =>{
    const q = "SELECT * FROM products" //characters é o nome da tabela.
    db.query(q,(err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})


// Tabela dos Usuários
app.get("/user", (req, res) =>{
    const q = "SELECT * FROM products" //characters é o nome da tabela.
    db.query(q,(err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})


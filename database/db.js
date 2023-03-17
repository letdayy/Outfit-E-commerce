const mysql = require("mysql");

const database = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"",
    database:"outfit-e-commerce"
});

database.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados: " + err.stack);
    return;
  }
  console.log("Conexão estabelecida com sucesso ao banco de dados.");
});


module.exports = database;



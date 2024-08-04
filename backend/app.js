const express = require("express");
const app = express();
const conn =  require("./db/conn");
const PORT = 3000;
const cors =  require("cors");
const path = require("path");

console.log('Current directory:', __dirname); 
//Iniciando a API
app.use(cors())
app.use(express.json())


//Conectando o DB
conn();

//Routes
const routes = require("./routes/router");
app.use("/api", routes);

app.use(express.static(path.join(__dirname,"../frontend/public")));
app.listen(PORT, function(){
    console.log("Servidor Online e Rodando");
});
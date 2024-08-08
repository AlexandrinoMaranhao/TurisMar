const express = require("express");
const app = express();
const conn =  require("./db/conn");
const PORT = 3000;
const cors =  require("cors");
const path = require("path");
const helmet =  require("helmet");

console.log('Current directory:', __dirname); 
//Iniciando a API
app.use(cors())
app.use(express.json())
app.use(helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'none'"],
      imgSrc: ["'self'", "https://turismar-app.onrender.com"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'"],
    }
}));

//Conectando o DB
conn();

//Routes
const routes = require("./routes/router");
app.use("/api", routes);

app.use(express.static(path.join(__dirname,"../frontend/public")));
app.listen(PORT, function(){
    console.log("Servidor Online e Rodando");
    console.log('Static files served from:', path.join(__dirname, "../frontend/public"));
});
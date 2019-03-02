const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");

//Responder e receber requisições
const api = express();
//Porta
const port = 3000;
//Definir as rotas
const router = express.Router();

//midllers
//Atender as requisições
api.use(cors());
//corpo da reuisição
api.use(bodyparser.urlencoded({extended: true}));
api.use(bodyparser.json()); //resposta será em json

//rota padrão - rota raiz
router.get("/", (req,res) => res.json({
    mensagem: "API online"
}))

api.use("/",router);

api.listen(port);
console.log("Run API...")
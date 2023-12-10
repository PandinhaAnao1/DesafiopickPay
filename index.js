import express from "express";
import conectNaDataBase from "./src/config/dbConnect.js";
import logistas from "./src/Controlers/logistasControler.js";
import modeloLogista from "./src/models/lojistasModels.js";
const porta = 3000;
const app = express();
app.use(express.json());

const conctador = await conectNaDataBase()

app.put('/', async (req, res) => {
    await logistas.atualizaLogistaPorId(req, res);
});


app.listen(porta,()=>{
    console.log(`Rodando na porta ${porta}`)
});



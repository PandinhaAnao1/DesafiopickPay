import express from "express";
import conectNaDataBase from "./src/config/dbConnect.js";
import logistas from "./src/Controlers/logistasControler.js";
import modeloLogista from "./src/models/lojistasModels.js";
import ComunUsuario from './src/Controlers/ComunsControler.js'
const porta = 3000;
const app = express();
app.use(express.json());

const conctador = await conectNaDataBase()

app.delete('/', async (req, res) => {
    await ComunUsuario.deltearUsuarioComunPorId(req,res);
});


app.listen(porta,()=>{
    console.log(`Rodando na porta ${porta}`)
});



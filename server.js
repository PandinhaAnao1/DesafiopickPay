import express from "express";
import conectNaDataBase from "./src/config/dbConnect.js";
import router from './src/routers/index.js'
const porta = 3000;
const app = express();
app.use(express.json());

const conctador = await conectNaDataBase();

app.use('/',router)

app.listen(porta,()=>{
    console.log(`Rodando na porta ${porta}`)
});


  
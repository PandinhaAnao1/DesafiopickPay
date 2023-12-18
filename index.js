import express from "express";
import conectNaDataBase from "./src/config/dbConnect.js";
import comunRouter from './src/routers/comunRouter.js';
const porta = 3000;
const app = express();
app.use(express.json());

const conctador = await conectNaDataBase();

app.use('/comun',comunRouter)

app.listen(porta,()=>{
    console.log(`Rodando na porta ${porta}`)
});


  
import express from "express";
import conectNaDataBase from "./src/config/dbConnect.js";
import modeloLogista from "./src/models/lojistasModels.js";
import logistas from "./src/Controlers/logistasControler.js";
const porta = 5000
const app = express();

const conctador = await conectNaDataBase()

const inserir = ()=>{
    try{
        await modeloLogista.insertMany(
    {
        nome: "Nome9",
        CPF: "333.444.555-66",
        Email: "nome9@email.com",
        Sehna: "Valor9",
        Saldo: 90.75
      })

    }catch(erro){
    return erro;
};



console.log(inserir)

app.listen(porta,()=>{
    console.log('Rodando')
})



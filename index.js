import express from "express";
import conectNaDataBase from "./src/config/dbConnect.js";
import modeloLogista from "./src/models/lojistasModels.js";
import logistas from "./src/Controlers/logistasControler.js";
import { model } from "mongoose";
const porta = 3000
const app = express();

const conctador = await conectNaDataBase()


const usuario = 
{
    nome: "Nome9",
    CPF: "333.444.555-66",
    Email: "nome9@email.com",
    Sehna: "Valor9",
    Saldo: 90.75
};


// await modeloLogista.insertMany(
//     {
//         nome: usuario.nome,
//         CPF: "333.444.555-66",
//         Email: "nome9@email.com",
//         Sehna: "Valor9",
//         Saldo: 90.75
//     })
const Jason = {
        nome: usuario.nome,
         CPF: "333.444.555-66",
         Email: "nome9@email.com",
         Sehna: "Valor9",
         Saldo: 90.75 

}
//app.post('/',logistas.cadastrarNovoLogista(Jason))

app.post('/', async (req, res) => {
    await logistas.deletarLogistaCpfOuEmail(req, res);
  })
app.listen(porta,()=>{
    console.log('Rodando')
   
})



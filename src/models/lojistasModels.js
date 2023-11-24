import mongoose from "mongoose";

const SchemaLogista = new mongoose.Schema({
    nome:String,
    CPF:String,
    Email:String,
    Sehna:String,
    Saldo:Number 
});

const modeloLogista = mongoose.model('logista',SchemaLogista);


export default modeloLogista;

//Nome Completo, CPF, e-mail e Senha. CPF/CNPJ e e-mails
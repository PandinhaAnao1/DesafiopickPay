import mongoose from "mongoose";

const SchemaLogista = new mongoose.Schema({
    nome:String,
    CPF:String,
    Email:  
        {
        type: String,
        unique: true
        },
    Sehna:
        {
        type: String,
        unique: true
        },
    Saldo:Number 
});

const modeloLogista = mongoose.model('logista',SchemaLogista);


export default modeloLogista;

//Nome Completo, CPF, e-mail e Senha. CPF/CNPJ e e-mails
import mongoose from "mongoose";

const SchemaComun = new mongoose.Schema({
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

const modeloComun = mongoose.model('usuarioComun',SchemaComun);


export default modeloComun;
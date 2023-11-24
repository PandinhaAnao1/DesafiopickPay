import mongoose from "mongoose";

const SchemaComun = new mongoose.Schema({
    nome:String,
    CPF:String,
    Email:{
        type: String,
        unique: true},
    Sehna:String,
    Saldo:Number
});

const modeloComun = mongoose.model('usuarioComun',SchemaComun);


export default modeloComun;
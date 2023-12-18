import  Express from "express";
import Logistas from "../Controlers/logistasControler.js";

const logistaRouters = Express.Router();


logistaRouters.post('/buscar',(req,res)=>{
    Logistas.buscarPorCpfouEmail(req,res);
});

logistaRouters.post('/cadastrar',(req,res)=>{
   Logistas.cadastrarNovoLogista(req,res); 
});

logistaRouters.delete('/deletar',(req,res)=>{
    Logistas.deletarLogistaCpfOuEmail(req,res);
});

logistaRouters.put('/atualizar',(req,res)=>{
    Logistas.atualizaLogistaPorId(req,res);
});

export default logistaRouters;

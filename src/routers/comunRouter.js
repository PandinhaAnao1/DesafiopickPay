import  Express  from "express";
import ComunUsuario from "../Controlers/comunsControler.js";
import { CommandStartedEvent } from "mongodb";

const comunRouter = Express.Router();

comunRouter.post('/buscar',(req,res)=>{
    ComunUsuario.buscarPorComunPorId(req,res);
});

comunRouter.post('/cadastrar',(req,res)=>{
    ComunUsuario.casdastrarComun(req,res);
});


export default comunRouter;
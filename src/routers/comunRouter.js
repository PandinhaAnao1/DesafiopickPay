import  Express  from "express";
import ComunUsuario from "../Controlers/comunsControler.js";
import validaCadastroDePessoaFisica from '../midleware/ValidaCpf.js'
const comunRouter = Express.Router();

comunRouter.post('/buscar',(req,res)=>{
    ComunUsuario.buscarPorComunPorId(req,res);
});

comunRouter.post('/cadastrar',(req,res)=>{
    ComunUsuario.casdastrarComun(req,res);
});

comunRouter.delete('/deletar',(req,res)=>{
    ComunUsuario.deltearUsuarioComunPorId(req,res);
});

comunRouter.put('/atualizar',(req,res)=>{
    ComunUsuario.atualizarUsuarioComunPorId(req,res);
});

comunRouter.post('/transferir',validaCadastroDePessoaFisica,
    (req,res)=>{
        ComunUsuario.realizarTransferenciaIdParaCpf(req,res);
});

export default comunRouter;
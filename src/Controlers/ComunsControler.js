
//fazer transferencias para logistas
import modeloComun from '../models/comunsModels.js'
class ComunUsuario {

    //Criar um usuario commun
    static async casdastrarComun(req, res) {

        try {
            const novoUsuario = await modeloComun.insertMany(
                {
                    nome: req.body.nome,
                    CPF: req.body.CPF,
                    Email: req.body.Email,
                    Sehna: req.body.Sehna,
                    Saldo: req.body.Saldo
                }
            );
            res.status(201).json(
                {
                    Mensage:'Usuario criado com sucesso!',
                    Usuario: novoUsuario
                }
            );
        }catch(erro){
            res.status(500).json(
                {
                    Mensage:'Ocorreu um erro na hora de cadastrar um usuario!',
                    Erro:erro
                }
            );

        };
    };

    //Buscar um usuario commun
    static async buscarPorComunPorId(req,res){
        try{
            const identificacao = req.body._id;
            const userConsultado = 
            await modeloComun.findById(identificacao).then(
                (document)=>{
                    res.status(200).json(
                        {
                            Mensage:'Usuario encontrado com sucesso!',
                            Usuario:document
                        }
                    );
                }
            ).catch(
                (erro)=>{
                    res.status(400).json(
                        {
                            Mensage:'Ocorreu um erro ao buscar o usario!',
                            Erro:erro
                        }
                    );
                }
            );

        } catch(erro) {
            res.status(500).json(
                {
                    Mensage:'Ocorreu um erro no server!',
                    Errro:erro
                }
            );
        }
    };

    //deletar um usuario comun 
    static async deltearUsuarioComunPorId(req,res){
        
        try{
            const identificacao = req.body._id;
            await modeloComun.findByIdAndDelete(identificacao).exec().then(
                (document)=>{
                    res.status(201).json(
                        {
                            Mensage:'Documento deletado com sucesso!',
                            User:document
                        }
                    );
                }
            ).catch(
                (erro)=>{
                    res.status(400).json(
                        {
                            Mensage:'Ocorreu um erro ao deletar o usuario!',
                            Erro:erro
                        }
                    );
                });
        } catch(erro) { 
            res.status(500).json(
                {
                    Mensage:'Erro no servidor!',
                    Erro:erro
                }
            );
        };
    };



    //Atualizar usuarios comun
    static async atualizarUsuarioComunPorId(req,res){
        try{
            const identificacao = req.body._id;
            const atualizar = req.body;
            await modeloComun.findByIdAndUpdate(identificacao,{...atualizar}).exec().then(
                (document)=>{
                    res.status(200).json(
                        {
                            Mensage:'O usuario foi atualizado com sucesso!',
                            User:document
                        }
                    );
                }
            ).catch(
                (erro)=>{
                    res.status(400).json(
                        {
                            Mensage:'Usuario atualizado com sucesso!',
                            Erro:erro
                        }
                    );
                }
            );
        } catch(erro){
            res.status(500).json(
                {
                    Message:'Ocorreu um erro ao atualizar um usario!',
                    Erro:erro
                }
            );
        };
    };

    //Atualizar usuarios comun
    static async atualizaUsuarioComunPorID(req,res){
        const identificacao = req.body._id;
        const dados = req.body;
        try{
            await modeloComun.findByIdAndUpdate(identificacao,...dados).exec().then(
                (document)=>{
                    res.status(200).json(
                        {
                            Mensage:'O usario foi atualizado!',
                            User:document
                        }  
                    );
                }
            ).catch(
                (erro)=>{
                    res.status(400).json(
                        {
                            Mensage:'Ocorreu um erro ao atualizar um usuario!',
                            Erro:erro
                        }
                    )
                }
            );
        }catch(erro){
            res.status(500).json(
                {
                    Mensage:'Ocorreu um erro no servidor!',
                    Erro:erro
                }
            );
        };
    };

};

export default ComunUsuario;

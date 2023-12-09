import modeloLogista from "../models/lojistasModels.js";

//Dica tornar a chave do email unique
class logistas {
    
    //Busca um usuario por CPF ou Email
    static async buscarPorCpfouEmail(req, res) {
        try {
            const reqEmail = req.body.Email, reqCPF = req.body.CPF;
            const logistaPeloCpf = 
            await modeloLogista.find(
                {
                $or: [{ Email: reqEmail }, { CPF: reqCPF }]
                }
            );
            res.status(200).json({
                Mensage:'Usuario encontrado!',
                Usuario:logistaPeloCpf});
        } catch (erro) {
            res.status(500).json({
                Mensage:'Erro ao buscar o usuario!',
                Erro:erro
            });
        };
    };


    //Cadastra um novo logista
    static async cadastrarNovoLogista(req, res) {
        try {
            const novoUser = 
            await modeloLogista.insertMany(
                {
                    nome: req.nome,
                    CPF: req.CPF,
                    Email: req.Email,
                    Sehna: req.Sehna,
                    Saldo: req.Saldo
                });
            res.status(200).json(
                {
                    mensage:'Usuario cadastrado com sucesso!',
                    usuario:novoUser
                }
            );

        } catch (erro) {
            res.status(400).json(
                {
                Mensage:'Erro ao tentar cadastra o usuario!',
                Erro:erro
                }
            );
        };

    };

    static async deletarLogistaCpfOuEmail(req, res) {
        try {
            const reqEmail = req.body.Email, reqCPF = req.body.CPF;
            const logistaDeletado = 
            await modeloLogista.findOneAndDelete({
                $or: [{ Email: reqEmail }, { CPF: reqCPF }]
            });
            res.status(200).json({
                Mensage:'Usuario deletado com sucesso!',
                User:logistaDeletado
            });
            
        } catch (erro) {
            res.status(400).json({
                Mensage:'Ocoreu um erro no sistema!',
                Erro:erro
            });
        };
    };

}



export default logistas;
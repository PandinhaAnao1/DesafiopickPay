import modeloLogista from "../models/lojistasModels.js";

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
            res.status(200).json(
                {
                    Mensage:'Usuario encontrado!',
                    Usuario:logistaPeloCpf
                }
            );
        } catch (erro) {
            res.status(500).json(
                {
                    Mensage:'Erro ao buscar o usuario!',
                    Erro:erro
                }
            );
        };
    };

    //Cadastra um novo logista
    static async cadastrarNovoLogista(req, res) {
        try {
            const novoUser = 
            await modeloLogista.insertMany(
                {
                    nome: req.body.nome,
                    CPF: req.body.CPF,
                    Email: req.body.Email,
                    Sehna: req.body.Sehna,
                    Saldo: req.body.Saldo
                }
            );
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

    //Deleta um usuario pelo cpf ou email
    static async deletarLogistaCpfOuEmail(req, res) {
        try {
            const reqEmail = req.body.Email, reqCPF = req.body.CPF;
            const logistaDeletado = 
            await modeloLogista.findOneAndDelete(
                {
                    $or: [{ Email: reqEmail }, { CPF: reqCPF }]
                }
            );
            res.status(200).json(
                {
                    Mensage:'Usuario deletado com sucesso!',
                    User:logistaDeletado
                }
            );
            
        } catch (erro) {
            res.status(400).json(
                {
                    Mensage:'Ocoreu um erro no sistema!',
                    Erro:erro
                }
            );
        };
    };

    //Atualiza um usuario pelo id
    static async atualizaLogistaPorId(req, res){
        try{   
            const id = req.body._id; 
            const logistaEncontrado = await modeloLogista.findByIdAndUpdate(id,req.body);
            res.status(200).json(
                {
                    Mensage:'Livro atualizado',
                    Atuazlizado:logistaEncontrado
                }
            );
        }catch (erro){
            res.status(500).json(
                {
                    mensage:'falha na requisição!',
                    Erro:erro
                }
            );
        };
    };

    
    static async receberTransferenciaPorCpf(cpf,transf){
        try{
            const user = await modeloLogista.findOne({CPF:cpf})
            if(transf>0){
                let transferencia = user.Saldo;
                transferencia += transf;
                user.Saldo = transferencia;
                const identificacao = user._id;
                await modeloLogista.findByIdAndUpdate(identificacao,{...user});
                return{
                    Mensage:'A transação foi realizada com sucesso!'
                };
            }else{
                return {
                    Mensage:'nao foi possivel realizar a transação sem valor!'
                }

            }

        }catch(erro){
            return {
                Mensage:'Erro ao relizar transferencia para outro usuario!',
                Erro:erro
            }
        }
    };
}



export default logistas;
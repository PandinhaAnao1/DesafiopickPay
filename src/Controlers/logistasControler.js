import modeloLogista from "../models/lojistasModels.js";

//Dica tornar a chave do email unique
class logistas {

    static async buscarPorEmail(req, res) {
        try {
            const logistaPeloEmai = await modeloLogista.find({ Email: req.Email });
            res.status(200).send(logistaPeloEmai);
        } catch (erro) {
            res.status(400).send(erro);
        };

    };
    static async buscarPorCpf(req, res) {
        try {
            const logistaPeloCpf = await modeloLogista.find({ CPF: req.C });
            res.status(200).send(logistaPeloCpf);
        } catch (erro) {
            res.status(400).send(erro);
        };
    };

    static async cadastrarNovoLogista(req, res) {

        try {
            const resutaldo =
                await modeloLogista.find({
                    $or: [{ Email: req.Email }, { CPF: req.CPF }]
                })
            if (resutaldo) {
                res.status(200).send('Usuario ja existe!')
                return;
            }

            const novoUser = await modeloLogista.insertMany(
                {
                    nome: req.nome,
                    CPF: req.CPF,
                    Email: req.Email,
                    Sehna: req.Sehna,
                    Saldo: req.Saldo
                });
            res.status(200).json(
                {
                    mensage:'Usuario cadastrado!',
                    usuario:novoUser
                }
            );

        } catch (erro) {
            res.status(400).send('Erro ao tentar cadastra o usuario!')
        };

    };

    static async deletarLogistaCpfOuEmail(req, res) {
        try {
            const logistaDeletado = 
            await modeloLogista.deleteOne({
                $or: [{ Email: req.Email }, { CPF: req.CPF }]
            });
            res.status(200).send('Logista deletado!')
        } catch (erro) {
            res.status(400).send(erro);
        };
    };

}


export default logistas;
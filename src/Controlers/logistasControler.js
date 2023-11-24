import modeloLogista from "../models/lojistasModels.js";

//Dica tornar a chave do email unique
class logistas {

    static async buscarPorEmail(email) {
        try {
            const logistaPeloEmai = await modeloLogista.find({ Email: email });
            return logistaPeloEmai;
        } catch (erro) {
            return erro;
        };

    };
    static async buscarPorCpf(cpf) {
        try {
            const logistaPeloCpf = await modeloLogista.find({ CPF: cpf });
            return logistaPeloCpf;
        } catch (erro) {
            return erro;
        };
    };

    static async cadastrarNovoLogista(logista) {
        let tamanhoDoArry = logista.length;

        if (tamanhoDoArry == 5) {
            try {
                let existe = await this.buscarPorEmail(logista[2])
                if (!existe.leght) {
                    await modeloLogista.insertMany({
                        nome:logista[0],
                        CPF:logista[1],
                        Email:logista[2],
                        Sehna:logista[3],
                        Saldo:logista[4] 
                });
                return {
                    Mesage:"Usuario cadastrado com sucesso!",
                    Usuario:logista
                }
                } else {
                    return {
                        Mensage: "Esse usuario ja existe!",
                        Usuario: existe
                    };
                }
            } catch {
                return erro;

            }
        }else{
            return {
                Mensage:"Dados inconsistentes estou esperando um arry com 5 elementos.",
                TamnhoRecebido:tamanhoDoArry
            }
        }
    }
};

export default logistas;

//deletar um usuario comun 
//fazer transferencias para logistas
//Atualizar usuarios comun
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
            await modeloComun.findById(identificacao)
            // .exec((erro,document)=>{
            //     if(erro){
            //         res.status(400).json(
            //             {
            //                 Mensage:'Ocorreu um erro porfavor verifique corretamente!',
            //                 Erro:erro
            //             }
            //         )
            //     }else{
            //         res.status(202).json(
            //             {
            //                 Mensage:'Usuario encontrado com suceso!',
            //                 Usuario:document
            //             }
            //         );
            //     };
            // });

            //APRENDER A USAR AS CALLBACKS EO .EXC
            res.status(200).json(userConsultado);

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
            usuarioDeletado = await modeloComun.findByIdAndDelete(identificacao);
            res.status(202).json(
                {
                    Mensage:'O usuario foi deletado com sucesso!',
                    Usuario:usuarioDeletado
                }
            );

        } catch(erro) { 
            res.status(500).json(
                {
                    Mensage:'Erro no servidor!',
                    Erro:erro
                }
            );
        };



    };

};

export default ComunUsuario;
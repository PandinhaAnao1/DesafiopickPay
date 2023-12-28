const validaSenha = 
    (req,res,next)=>{
        const senha = req.body.Sehna;
        if(senha){
            if(senha.length>=8){
            }else{
                res.status(400).json({
                    Mensage:'A senha que voce inseriu é invalida pois nao possui o tamanho adequado',
                });
                return;
            };
        }else{
            res.status(400).json({
                Mensage:'Senha invalida porfavor tente com outra!',
                Senha:senha
            });
            return;
        };
    };

export default validaSenha;

//Posuir
//Maiuscula
//Minuscula
//Numeros
//Espesciais
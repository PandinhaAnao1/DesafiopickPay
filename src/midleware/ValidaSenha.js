const validaSenha = 
    (req,res,next)=>{
        const senha = req.body.Sehna;
        if(senha){
            if(senha.length>=8){                
                const minusculos = 'abcdefghijklmnopqrstuvwxyz';
                const maiuscula = minusculos.toUpperCase();
                const numeros = '123456789';
                const especiais = maiuscula.concat(maiuscula).concat(numeros);
                function varificaDados(metaDado,stringSenha){
                    let fazer = true;
                    let temOcaracter = false;
                    let tamanhoMetaDado = metaDado.length;
                    let tamanhoSenha = stringSenha.length;
                    for(let i=0;i<tamanhoMetaDado;i++){
                        if(fazer){
                            for(let c=0;c<tamanhoSenha;c++){
                                if(metaDado[i]===stringSenha[c]){
                                    temOcaracter = true;
                                    fazer = false;
                                    break;
                                };
                            };
                        }else{
                            break;
                        }
                    };
                    return temOcaracter;
                };
                let aprovado = (varificaDados(minusculos,senha)&&varificaDados(maiuscula,senha)&&varificaDados(numeros,senha));
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

//sperar a senha

const validaCadastroDePessoaFisica = 
    (req,res,next)=>{
        const CPF = req.body.CPF;
        if(CPF!=undefined){
            const tamanho = CPF.length;
            
            //Verificando se o cpf tem todos os campos preechidos
            if(tamanho===11){
                var numeros = CPF.split('');
                for(let c = 0; c<tamanho; c++){
                    if(!(isNaN(numeros[c]))){
                        numeros[c] = Number(numeros[c]);
                    }else{
                        res.status(400).json({
                            Mensage:'Você inseriu caracteres incosistentes é esperado apenas numeros como parametros!',
                            CaractereIncosistente:numeros[c]
                        }).end()
                        return;     
                    };
                };
                let final1= 0;
                let final2= 0;

                for(let i = 10; i>=2;i--){
                    let posicao = 10-i;
                    final1 = final1 + ((numeros[posicao])*i);
                };
                for(let i = 11; i>=2;i--){
                    let posicao = 11-i;
                    final2 = final2 + ((numeros[posicao])*i);
                };

                //Realiza operação para validar
                final1 = (final1*10)%11;
                final2 = (final2*10)%11;

                //Verificando se os campos são condisente com as operações
                if(final1 === 10 && final2 === 10){
                    if(numeros[9] === 0 && numeros[10] === 0){
                        next();
                    }else{
                        res.status(400).json({
                            Mensage:'Você inseriu o cpf errado!',
                            cpf:CPF                       
                        });
                        return;
                    };
                }else{
                    if(final1 === 10){
                        if(numeros[9] === 0){
                            if(numeros[10] === final2){
                                next();
                            };
                        }else{
                            res.status(400).json({
                                Mensage:'Você inseriu o cpf errado!',
                                cpf:CPF
                            });
                        };
                    }else if(final2 === 10){
                        if(numeros[10] === 0){
                            if(numeros[9] === final1){
                                next();
                            };
                        }else{
                            res.status(400).json({
                                Mensage:'Você inseriu o cpf errado!',
                                cpf:CPF
                            });
                        };
                    }else{
                        if(numeros[9] === final1 && numeros[10] === final2){
                            next();
                        }else{
                            res.status(400).json({
                                Mensage:'Voce inseriu o cpf errado!',
                                cpf:CPF
                            });
                        };
                    };
                };
            }else{
                res.status(400).json({
                    Mensage:`Voce inseriu um cpf com ${tamanho} de caracteres o esperado são 11!`
                }).end();
            }
        }else{
            res.status(400).json({
                Mensage:"Você inseriu um cpf invalido sem caracteres!"
            }).end();
        };

    };

export default validaCadastroDePessoaFisica;
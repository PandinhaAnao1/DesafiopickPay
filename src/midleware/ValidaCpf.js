
const validaCadastroDePessoaFisica = 
    (req,res,next)=>{
        const CPF = req.body.CPF;
        if(CPF!=undefined){
            const tamanho = CPF.length;
            if(tamanho===11){
                //confirmar se é um numero
                let numeros = CPF.split('');
                for(let c = 0; c<tamanho; c++){
                    if(!(isNaN(numeros[c]))){
                        numeros[c] = Number(numeros[c])
                    }else{
                        res.status(400).json({
                            Mensage:'Você inseriu caracteres incosistentes é esperado apenas numeros como parametros!',
                            CaractereIncosistente:numeros[c]
                        }).end()
                        return;     
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


//Primeiramente multiplica-se os 9 primeiros dígitos pela sequência decrescente de números de 10 à 2 e soma os resultados. Assim:
//5 * 10 + 2 * 9 + 9 * 8 + 9 * 7 + 8 * 6 + 2 * 5 + 2 * 4 + 4 * 3 + 7 * 2
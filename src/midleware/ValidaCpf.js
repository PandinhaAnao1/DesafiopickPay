
const validaCadastroDePessoaFisica = 
    (req,res,next)=>{
        const CPF = req.body.CPF;
        const tamanho = CPF.length;
        if(tamanho==11){
            let numeros = Array();
            for(let c = 0; c<tamanho; c++){
                numeros.push(Number(CPF.charAt(c)))
            };        
        }else{
            res.status(400).json({
                Mensage:"Você inseriu o cpf errado!"
            }).end();
        };

    };

export default validaCadastroDePessoaFisica;


//Primeiramente multiplica-se os 9 primeiros dígitos pela sequência decrescente de números de 10 à 2 e soma os resultados. Assim:
//5 * 10 + 2 * 9 + 9 * 8 + 9 * 7 + 8 * 6 + 2 * 5 + 2 * 4 + 4 * 3 + 7 * 2
alert('Boas Vindas Rapaziada!'); // passar uma mensagem
let numeroMaximo = 500;
let numeroSec = parseInt(Math.random() * numeroMaximo);
console.log(numeroSec);

let chute;
let tentativas = 1;


// Enquanto
while(chute != numeroSec){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    if(chute == numeroSec){
        break;
    }
    else{
        if(chute > numeroSec){
            alert(`O número secreto é menor que o ${chute}`);
        }else{
            alert(`O número secreto é maior que o ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai, você descobriu o número secreto, pois ele é: ${numeroSec} com ${tentativas} ${palavraTentativa}`);m // ${} concatenção


if(tentativas > 1){
    alert(`Isso ai, você descobriu o número secreto, pois ele é: ${numeroSec} com ${tentativas} tentativas`);m // ${} concatenção
}else{
    alert(`Isso ai, você descobriu o número secreto, pois ele é: ${numeroSec} com ${tentativas} tentativa`);m // ${} concatenção
}

alert('Boas Vindas Rapaziada!'); // passar uma mensagem
numeroSec = 20;
console.log(numeroSec);

let chute;
let tentativas = 1;


// Enquanto
while(chute != numeroSec){
    chute = prompt('Escolha um número entre 1 e 30');

    if(chute == numeroSec){
        alert(`Isso ai, você descobriu o número secreto, pois ele é: ${numeroSec} com ${tentativas} tentativas`);m // ${} concatenção
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


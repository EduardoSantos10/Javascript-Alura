alert('Boas Vindas Rapaziada!'); // passar uma mensagem

numeroSec = 20;
console.log(numeroSec);

let chute = prompt('Escolha um número entre 1 e 30');

if(chute == numeroSec){
    alert(`Isso ai, você descobriu o número secreto, pois ele é: ${numeroSec}`);m // ${} concatenção
}
else{
    alert('Você errou o número!');
}

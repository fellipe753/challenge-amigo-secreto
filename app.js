//Challenge amigo secreto por Fellipe Oliveira 25/01/2025
let listaNomes = [];
let campoExibicao = document.querySelector('ul');

function exibirTextoNaTela (texto){
    campoExibicao.innerHTML = texto; // "dentro do html daquele título, assim estou passando aquele texto e fixando lá"
}

function primeiraLetraMaiuscula(str) {
   // if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

function adicionarAmigo(){
    let nomeDigitado = primeiraLetraMaiuscula(document.querySelector('input').value);
    if (nomeDigitado == ''){
        alert('Por favor, entre com um nome válido.');
    } else if (listaNomes.includes(nomeDigitado)){
        alert('Nome já inserido.');    
    } else {
        listaNomes.push(nomeDigitado);
        exibirTextoNaTela(`Lista de amigos: ${listaNomes}`); // com .join('<br>') eu consigo fazer a lista com um nome por linha, mas como altera o layout da página e eu não gostei.
        document.getElementById('amigo').value = ''
    }
}

function sortearAmigo(){
    let numeroRandom = Math.floor(Math.random() * listaNomes.length); // usando o floor pois as posições começam no zero. Se usar o round pode dar um número maior do que o indice do array
    let nomeSorteado = listaNomes[numeroRandom];
    exibirTextoNaTela(`O amigo secreto sorteado é: ${nomeSorteado}!`);
    campoExibicao.style.color = 'green';
    campoExibicao.style.fontSize = '30px';
//    console.log(numeroRandom);
//   console.log(nomeSorteado);  
}
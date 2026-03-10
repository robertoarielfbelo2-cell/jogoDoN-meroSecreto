let listaDeNumerosSorteados = []
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR';
        utterance.rate = 1.2;
        window.speechSynthesis.speak(utterance);
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'jogo do número secreto')
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10')
}

exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'acertou')
        let palavraTentativa = tentativas == 1 ? 'tentativa' : 'tentativas'
        let menssagemTentativas = `Vc descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', menssagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor')
        } else {
            exibirTextoNaTela('p', 'O número é maior')
        }
        tentativas++
    } LimparCampo()
}
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 4 + 1)
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length
    if (quantidadeDeElementosNaLista == 3) {
        listaDeNumerosSorteados = []
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio()
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido

    }
    console.log(numeroEscolhido)
}

function LimparCampo() {
    chute = document.querySelector('input')
    chute.value = ''
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio()
    LimparCampo()
    tentativas = 1
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

// let jogosFodas = ['doom', 'the witcher', 'bloodborne']

// jogosFodas.push('hoi4', 's')
// console.log(jogosFodas[0]);

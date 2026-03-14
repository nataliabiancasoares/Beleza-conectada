let nota = 0;

function avaliar(valor) {
    nota = valor;

    let estrelas = document.querySelectorAll(".stars span");

    // deixa todas cinza primeiro
    estrelas.forEach(estrela => estrela.classList.remove("ativa"));

    // pinta de amarelo até a estrela clicada
    for (let i = 0; i < valor; i++) {
        estrelas[i].classList.add("ativa");
    }

    // muda a mensagem conforme a nota
    let mensagem = document.getElementById("mensagem");

    if (valor <= 2) {
        mensagem.innerText = "Essa foi uma péssima avaliação";
    } else {
        mensagem.innerText = "Essa foi uma ótima avaliação";
    }
}

function enviar() {
    if (nota === 0) {
        alert("Selecione uma avaliação!");
    } else {
        alert("Avaliação enviada com sucesso!");
    }
}


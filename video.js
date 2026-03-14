function baixar() {
    const mensagem = document.getElementById("mensagem");
    const video = document.getElementById("videoTutorial");

    // esconde o vídeo se clicar de novo
    video.style.display = "none";

    // mensagem inicial
    mensagem.innerText = "Download baixando...";

    // simula o download
    setTimeout(() => {
        mensagem.innerText = "Download baixado com sucesso!";
        video.style.display = "block"; // mostra o vídeo
    }, 2000);
} 



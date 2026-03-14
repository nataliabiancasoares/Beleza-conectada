function mostrar(tipo) {
    const conteudo = document.getElementById("conteudo");

    if (tipo === "essencia") {
        conteudo.innerHTML = `
            <img src="img/perfume-floral.jpg">
            <img src="img/perfume-doce.jpg">
            <img src="img/perfume-citrico.jpg">
        `;
    }

    if (tipo === "maquiagem") {
        conteudo.innerHTML = `
            <img src="img/maquiagem-natural.jpg">
            <img src="img/maquiagem-basica.jpg">
            <img src="img/maquiagem-noite.jpg">
        `;
    }

    if (tipo === "cabelo") {
        conteudo.innerHTML = `
            <img src="img/cabelo-tranca.jpg">
            <img src="img/cabelo-coque.jpg">
            <img src="img/cabelo-solto.jpg">
        `;
    }

    if (tipo === "bemestar") {
        conteudo.innerHTML = `
            <img src="img/viagem-campo.jpg">
            <img src="img/viagem-praia.jpg">
            <img src="img/viagem-montanha.jpg">
        `;
    }
}

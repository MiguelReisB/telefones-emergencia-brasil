let dados = [];

window.addEventListener('DOMContentLoaded', async () => {
    const cardContainer = document.querySelector('.cardsContainer');
    const inputBusca = document.querySelector('#caixaDeBusca');
    const botaoBusca = document.querySelector('#pesquisar');

    await carregarDados();
    renderizarCards(dados, cardContainer);
    botaoBusca.addEventListener('click', () => iniciarBusca(inputBusca, cardContainer));
});

async function carregarDados() {
    try {
        const resposta = await fetch("telefones.json");
        dados = await resposta.json();
    } catch (erro) {
        console.error("Erro ao carregar os dados:", erro);
    }
}

function removerAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}


async function iniciarBusca(inputBusca, cardContainer) {
    const termoBusca = removerAcentos(inputBusca.value.trim().toLowerCase());
    if (!termoBusca) {
        renderizarCards(dados, cardContainer);
        return;
    }
    const resultados = dados.filter(dado => {
        const nomeNormalizado = removerAcentos(dado.nome.toLowerCase());
        const descricaoNormalizada = removerAcentos(dado.descricao.toLowerCase());
        return nomeNormalizado.includes(termoBusca) || descricaoNormalizada.includes(termoBusca) || dado.numero.includes(termoBusca);
    });
    renderizarCards(resultados, cardContainer);
}

function renderizarCards(dados, cardContainer) {
    cardContainer.innerHTML = '';
    if (dados.length === 0) {
        cardContainer.innerHTML = '<div class="nenhumResultadoCard"><h2>Nenhum resultado encontrado. Tente utilizar outro termo ou número.</h2></div>';
        return;
    }

    for (let dado of dados) {
        let article = document.createElement('article');
        article.classList.add('card');
        article.innerHTML = `
            <h2>${dado.nome}</h2>
            <p>${dado.descricao}</p>
            <p><strong>Telefone:</strong> ${dado.numero}</p>
            <a href="${dado.link}" target="_blank" rel="noopener noreferrer">Saiba mais</a>
        `;
        cardContainer.appendChild(article);
    }
}
let dados = [];

const isMobile = (() => {
    const userAgentMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || navigator.userAgentData?.mobile === true;
    const hasTouchScreen = (navigator.maxTouchPoints && navigator.maxTouchPoints > 0) || window.matchMedia('(pointer: coarse)').matches;
    return userAgentMobile && hasTouchScreen;
})();
const hasWhatsApp = false; // Futura funcionalidade??

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
        cardContainer.innerHTML = '<div class="nenhumResultadoCard"><h2>Nenhum resultado encontrado :(<br> Tente utilizar outro termo ou número.</h2></div>';
        return;
    }

    for (let dado of dados) {   
        let article = document.createElement('article');
        article.classList.add('card');
        article.innerHTML = `
            <h2>${dado.nome.toUpperCase()}</h2>
            <p class="descricaoTelefone">${dado.descricao}</p>
            <p class="numeroTelefone"><strong>Telefone:</strong> ${dado.numero}</p>
            <div class="botoesCard">
                <a href="${dado.link}" target="_blank" rel="noopener noreferrer" class="botaoSaibaMais">Saiba mais<img src="assets/iconeSeta.svg" alt="Ícone direcionamento"></a>
                ${isMobile ? `<a href="tel:${dado.numero.replace(/\D/g, '')}" class="botaoLigar">Ligar<img src="assets/iconeTelefone.svg" alt="Ícone telefone"></a>` : ''}
            </div>
            `;
        cardContainer.appendChild(article);
    }
}
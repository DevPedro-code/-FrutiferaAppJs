// dados para montar dinamicamente as estruras dos cards
import CardsDinamico from './dataset/informacao.js';

let createInformacoesCard = (informacaodoCard) => {
  let card = `<div class="col">
          <div class="card">
            <img src="${informacaodoCard.url}" class="card-img-top" alt="${informacaodoCard.titulo}">
            <div class="card-body">
              <h5 class="card-title">${informacaodoCard.titulo}</h5>
              <p class="card-text">${informacaodoCard.subtitulo}</p>
              <a href="#" class="btn btn-primary">Consultar</a>
            </div>
          </div>
        </div>`;

  return card;
};

let addInformacaoCard = (card) => {
  let informacoesCardsRow = document.getElementById('informacoesCardsRow');
  informacoesCardsRow.insertAdjacentHTML('beforeend', card);
};

let loadInformacoesCards = () => {
  for (let informacoesCard of CardsDinamico) {
    let card = createInformacoesCard(informacoesCard);
    addInformacaoCard(card);
  }
};

// loadInformacoesCards();
window.onload = loadInformacoesCards;

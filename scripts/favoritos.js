import { favoritos, setFavorite } from './state.js';

document.addEventListener('DOMContentLoaded', exibirFavoritos);

function exibirFavoritos() {
const cardsSection = document.querySelector('.cards');
cardsSection.innerHTML = '';

if (favoritos().length === 0) {
  cardsSection.innerHTML = '<p>Nenhum anúncio favorito encontrado.</p>';
  return;
}

  favoritos().forEach(anuncio => {
    const card = createCard(anuncio);
    cardsSection.innerHTML += card;
  });
  
  const favoriteButtons = cardsSection.querySelectorAll('.card__favorite'); 

  favoriteButtons.forEach(favoriteButton => favoriteButton.addEventListener('click', (anuncio) => {
    anuncio.preventDefault();
    setFavorite(anuncio.target.id, false);
    exibirFavoritos();
  }))
}

function createCard(anuncio) {
  return `
  <a class="card" href="../pages/imovel.html">
    <div class="card__cover">
      <img src="${anuncio.imgRoute}" alt="${anuncio.title}" />
    </div>
    <div class="card__content">
      <h3 class="card__title">${anuncio.title}</h3>
        <div class="card__capacity">
        <img src="../assets/icons/users.svg" />
        <span>${anuncio.capacity}</span>
      </div>
      <p>${anuncio.description}</p>
      <strong class="card__price">R$ ${anuncio.price}/mês</strong>
    </div>
    <img class="card__favorite active" id="${anuncio.id}" src="../assets/icons/heart.svg" />
  </a>
  `;
}
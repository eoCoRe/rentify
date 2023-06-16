import { favoritos, setFavorite } from './data.js';

const cardsSection = document.querySelector('.cards');

function exibirFavoritos() {
  cardsSection.innerHTML = '';

  if (favoritos().length === 0) {
    cardsSection.innerHTML = '<p>Nenhum anúncio favorito encontrado.</p>';
    return;
  }

  favoritos().forEach(anuncio => {
    const card = createCard(anuncio);
    cardsSection.innerHTML += card;
  });

  bindFavoriteIcons();
  const favoriteButton = card.querySelector('.card__favorite');
  favoriteButton.addEventListener('click', () => {
    setFavorite(anuncio.id, false);
    exibirFavoritos();
  });
}

function bindFavoriteIcons() {
  const favoriteIcons = document.querySelectorAll('.card__favorite');
  favoriteIcons.forEach(icon => {
    icon.addEventListener('click', (e) => {
      e.preventDefault();
      toggleFavoriteState(icon);
    });
  });
}
function createCard(anuncio) {
  return `
  <a class="card" href="../pages/imovel.html">
    <img src="${anuncio.imgRoute}" alt="${anuncio.title}">
    <div class="card__content">
      <h3 class="card__title">${anuncio.title}</h3>
        <div class="card__capacity">
        <img src="../assets/icons/users.svg" />
        <span>${anuncio.capacity}</span>
      </div>
      <p>${anuncio.description}</p>
      <strong class="card__price">R$ ${anuncio.price}/mês</strong>
    </div>
    <img class="card__favorite" id="${anuncio.id}" src="../assets/icons/heart.svg" />
  </a>
  `;
}

function toggleFavoriteState(element) {
  element.classList.toggle('active');
  var favoriteVal = element.classList.contains('active');
  setFavorite(element.id, favoriteVal);
}

document.addEventListener('DOMContentLoaded', exibirFavoritos);
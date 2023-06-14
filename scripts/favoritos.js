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
    cardsSection.appendChild(card);
  });
}

function createCard(anuncio) {
  const card = document.createElement('div');
  card.classList.add('card');

  const img = document.createElement('img');
  img.src = anuncio.imgRoute;
  img.alt = anuncio.title;
  card.appendChild(img);

  const title = document.createElement('h3');
  title.textContent = anuncio.title;
  card.appendChild(title);

  const description = document.createElement('p');
  description.textContent = anuncio.description;
  card.appendChild(description);

  const capacity = document.createElement('p');
  capacity.textContent = `Capacidade: ${anuncio.capacity}`;
  card.appendChild(capacity);

  const price = document.createElement('p');
  price.textContent = `Preço: R$ ${anuncio.price}`;
  card.appendChild(price);

  const favoriteButton = document.createElement('button');
  favoriteButton.classList.add('favorite-button');
  favoriteButton.textContent = 'Remover dos favoritos';
  favoriteButton.addEventListener('click', () => {
    setFavorite(anuncio.id, false);
    exibirFavoritos();
  });
  card.appendChild(favoriteButton);

  return card;
}

document.addEventListener('DOMContentLoaded', exibirFavoritos);
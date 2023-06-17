import { getHeaderFilter } from './filter.js';
import { advertisements, setFavorite } from './state.js';

let _previousFilterText = '';


setInterval(() => {
  buildAdvertisementsIfNeeded();
}, 250);

function buildAdvertisementsIfNeeded() {
  const headerFilter = getHeaderFilter();
  if (headerFilter === _previousFilterText) return;
  updateAdvertisements(headerFilter);
  _previousFilterText = headerFilter;
}

function updateAdvertisements(filter) {
  const advertisementsContainer = document.querySelector('.cards');
  const filteredAdvertisements = filterAdvertisements(filter);
  const contentHtml = filteredAdvertisements.map(createCardHtml).join('');
  advertisementsContainer.innerHTML = contentHtml;
  bindFavoriteIcons();
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

function filterAdvertisements(filter) {
  if (filter == null) return advertisements;
  return advertisements.filter(advertisement =>
    advertisement.toString().includes(filter.toLowerCase())
  );
}

function createCardHtml(ad) {
  return `
    <a class="card" href="../pages/imovel.html">
      <div class="card__cover">
      <img src="${ ad.imgRoute }" />
      </div>
      <div class="card__content">
        <h3 class="card__title">${ ad.title }</h3> 
        <div class="card__capacity">
          <img src="../assets/icons/users.svg" />
          <span>${ ad.capacity }</span>
        </div>
        <p>${ ad.description }</p>
        <strong class="card__price">R$ ${ ad.price }/mês</strong>
      </div>
      <img class="card__favorite ${ initialActiveStateClass(ad) }" id="${ ad.id }" src="../assets/icons/heart.svg" />
    </a>
  `;
}

function initialActiveStateClass(ad) {
  return ad.favorite ? 'active': ''
}

function toggleFavoriteState(element) {
  element.classList.toggle('active');
  var favoriteVal = element.classList.contains('active');
  setFavorite(element.id, favoriteVal);
}
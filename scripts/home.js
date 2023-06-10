import { getHeaderFilter } from './filter.js';

let _previousFilterText = '';

const _advertisements = [
  {
    imgRoute: '../assets/imgs/house-1.png',
    title: 'Jardins da Cidade, na cidade de Nova Esperança',
    description: '2 quartos e 2 banheiros, permitido animais de estimação',
    capacity: '4 pessoas',
    price: '2.800,00',
    toString() {
      return `${this.imgRoute}${this.title}${this.description}${this.capacity}${this.price}`.toLowerCase();
    }
  },
  {
    imgRoute: '../assets/imgs/house-2.png',
    title: 'Jardim das Flores, cidade de São Miguel',
    description: '2 quartos e 1 banheiro, não permitido animais de estimação',
    capacity: '2 pessoas',
    price: '1.200,00',
    toString() {
      return `${this.imgRoute}${this.title}${this.description}${this.capacity}${this.price}`.toLowerCase();
    }
  },
  {
    imgRoute: '../assets/imgs/house-3.png',
    title: 'Vila dos Pinheiros, cidade de Pinheiro',
    description: '3 quartos e 2 banheiros, permitido animais de estimação',
    capacity: '5 pessoas',
    price: '4.800,00',
    toString() {
      return `${this.imgRoute}${this.title}${this.description}${this.capacity}${this.price}`.toLowerCase();
    }
  }
];

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
    icon.addEventListener('click', () => {
      toggleFavoriteState(icon);
    });
  });
}

function filterAdvertisements(filter) {
  if (filter == null) return _advertisements;
  return _advertisements.filter(advertisement =>
    advertisement.toString().includes(filter.toLowerCase())
  );
}

function createCardHtml(ad) {
  return `
    <div class="card">
      <img src="${ad.imgRoute}" />
      <div class="card__content">
        <h3 class="card__title">${ad.title}</h3>
        <div class="card__capacity">
          <img src="../assets/icons/users.svg" />
          <span>${ad.capacity}</span>
        </div>
        <p>${ad.description}</p>
        <strong class="card__price">R$ ${ad.price}/mês</strong>
      </div>
      <img class="card__favorite" src="../assets/icons/heart.svg" />
    </div>
  `;
}

function toggleFavoriteState(element) {
  element.classList.toggle('active');
}
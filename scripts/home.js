
const advertisements = [
  {
    imgRoute: '../assets/imgs/house-1.png',
    title: 'Jardins da Cidade, na cidade de Nova Esperança',
    description: '2 quartos e 2 banheiros, permitido animais de estimação',
    capacity: '4 pessoas',
    price: '2.800,00'
  },
  {
    imgRoute: '../assets/imgs/house-2.png',
    title: 'Jardim das Flores, cidade de São Miguel',
    description: '2 quartos e 1 banheiro, não permitido animais de estimação',
    capacity: '2 pessoas',
    price: '1.200,00'
  },
  {
    imgRoute: '../assets/imgs/house-3.png',
    title: 'Vila dos Pinheiros, cidade de Pinheiro',
    description: '3 quartos e 2 banheiros, permitido animais de estimação',
    capacity: '5 pessoas',
    price: '4.800,00'
  }
];

buildAdvertisements();

function buildAdvertisements() {
  const advertisementsContainer = document.querySelector('.cards');
  let contentHtml = '';
  advertisements.forEach(ads => {
    const adsHtml = `
      <div class="card">
      <img src="${ads.imgRoute}"/>
      <div class="card__content">
        <h3 class="card__title">${ads.title}</h3>
        <div class="card__capacity">
          <img src="../assets/icons/users.svg"/>
          <span>${ads.capacity}</span>
        </div>
        <p>${ads.description}</p>
        <strong class="card__price">R$ ${ads.price}/mês</strong>
      </div>
      <img onclick="toggleFavoriteState(this)" class="card__favorite" src="../assets/icons/heart.svg" />
    </div>
    `;
    contentHtml += adsHtml;
  });
  advertisementsContainer.innerHTML = contentHtml;
}

function toggleFavoriteState(element) {
  element.classList.toggle('active');
};


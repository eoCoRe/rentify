const _advertisements = [
  {
    id: 1,
    imgRoute: '../assets/imgs/house-1.png',
    title: 'Jardins da Cidade, na cidade de Nova Esperança',
    description: '2 quartos e 2 banheiros, permitido animais de estimação',
    capacity: '4 pessoas',
    price: '2.800,00',
    favorite: false,
    toString() {
      return `${this.imgRoute}${this.title}${this.description}${this.capacity}${this.price}`.toLowerCase();
    }
  },
  {
    id: 2,
    imgRoute: '../assets/imgs/house-2.png' ,
    title: 'Jardim das Flores, cidade de São Miguel' ,
    description: '2 quartos e 1 banheiro, não permitido animais de estimação',
    capacity: '2 pessoas',
    price: '1.200,00',
    favorite: true,
    toString() {
      return `${this.imgRoute}${this.title}${this.description}${this.capacity}${this.price}`.toLowerCase();
    }
  },
  {
    id: 3,
    imgRoute: '../assets/imgs/house-3.png',
    title: 'Vila dos Pinheiros, cidade de Pinheiro',
    description: '3 quartos e 2 banheiros, permitido animais de estimação',
    capacity: '5 pessoas',
    price: '4.800,00',
    favorite: true,
    toString() {
      return `${this.imgRoute}${this.title}${this.description}${this.capacity}${this.price}`.toLowerCase();
    }
  }
];

export let advertisements = Array.from(_advertisements);

export function setFavorite(id, favoriteVal) {
  const index = _advertisements.findIndex((ad) => ad.id == id);
  const ad = _advertisements[index];
  if (!ad) return;
  ad.favorite = favoriteVal;
}

export function favoritos(){
var favoritos = _advertisements.filter(function(anuncio){
  return anuncio.favorite == true
})
return favoritos

}
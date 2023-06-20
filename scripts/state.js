
const advertisementsKey = "ADVERTISEMENTSKEY"

const _advertisements = [
  {
    id: 1,
    imgRoute: '../assets/imgs/imovel/imovel-01-01.jpg',
    title: 'Jardins da Cidade, na cidade de Nova Esperança',
    description: '2 quartos e 2 banheiros, permitido animais de estimação',
    fullDescription: 'O bairro Jardins da Cidade é um dos mais valorizados da cidade de Nova Esperança, oferecendo aos seus moradores uma infraestrutura completa e acessível. Você estará a poucos minutos de distância de escolas, hospitais, restaurantes, parques e diversas opções de comércio e lazer.',
    capacity: '4 pessoas',
    
    price: '2.800,00',
    favorite: false,
    toString() {
      return `${this.imgRoute}${this.title}${this.description}${this.capacity}${this.price}`.toLowerCase()
    },
    currentFocusImg: 'imovel-01-01.jpg',
    images: [
      'imovel-01-01.jpg',
      'imovel-01-02.jpg',
      'imovel-01-03.jpg',
      'imovel-01-04.jpg',
      'imovel-01-05.jpg',
      'imovel-01-06.jpg',
    ],
  },
  {
    id: 2,
    imgRoute: '../assets/imgs/imovel-02.jpg',
    title: 'Jardim das Flores, cidade de São Miguel' ,
    description: '2 quartos e 1 banheiro, não permitido animais de estimação',
    capacity: '2 pessoas',
    price: '1.200,00',
    favorite: false,
    toString() {
      return `${this.imgRoute}${this.title}${this.description}${this.capacity}${this.price}`.toLowerCase()
    },
  },
  {
    id: 3,
    imgRoute: '../assets/imgs/imovel-03.jpg',
    title: 'Vila dos Pinheiros, cidade de Pinheiro',
    description: '3 quartos e 2 banheiros, permitido animais de estimação',
    capacity: '5 pessoas',
    price: '4.800,00',
    favorite: false,
    toString() {
      return `${this.imgRoute}${this.title}${this.description}${this.capacity}${this.price}`.toLowerCase()
    },
  },
]

setInitialDataIfNeeded()

function setAdvertisementsInLocalStorage(updatedAdvertisements) {
  localStorage.setItem(advertisementsKey, JSON.stringify(updatedAdvertisements))
}

function getAdvertisementsFromLocalStorage() {
  const advertisements = localStorage.getItem(advertisementsKey)
  if (!advertisements) return []
  return JSON.parse(advertisements)
}

function setInitialDataIfNeeded() {
  if (!localStorage[advertisementsKey]) localStorage.setItem(advertisementsKey, JSON.stringify(_advertisements))
}

export let advertisements = Array.from(getAdvertisementsFromLocalStorage())

export function setFavorite(id, favoriteVal) {
  if (!id) return
  const advertisements = getAdvertisementsFromLocalStorage()
  const index = advertisements.findIndex((ad) => ad.id == id)
  const ad = advertisements[index]
  if (!ad) return
  ad.favorite = favoriteVal
  setAdvertisementsInLocalStorage(advertisements)
}

export function favoritos(){
  return getAdvertisementsFromLocalStorage().filter(anuncio => anuncio.favorite == true)
}
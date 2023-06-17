import { advertisements } from './data.js'

const cardImgContainer = document.querySelector('.card-img-lg')
const imgSmContainers = document.querySelectorAll('.img-sm')

function updateFocusedImage(imgSrc) {
  cardImgContainer.innerHTML = `<img src="${imgSrc}" alt="Focused House Image">`
}

function handleImageClick(event) {
  const clickedImg = event.target
  if (clickedImg.tagName === 'IMG') {
    const newFocusedImgSrc = clickedImg.getAttribute('src')
    updateFocusedImage(newFocusedImgSrc)
  }
}

imgSmContainers.forEach((container) => {
  container.addEventListener('click', handleImageClick)
})

const currentFocusImg = advertisements[0].currentFocusImg
// updateFocusedImage(`../assets/imgs/imovel/${currentFocusImg}`)

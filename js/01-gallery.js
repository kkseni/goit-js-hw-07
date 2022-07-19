import { galleryItems } from './gallery-items.js';


// Change code below this line

console.log(galleryItems);

const galleryDiv = document.querySelector('.gallery');
const imageCardList = createImageMarkup(galleryItems)

galleryDiv.insertAdjacentHTML ('beforeend', imageCardList);

function createImageMarkup(galleryItems) {
  
    return galleryItems
        .map(({preview,original, description}) => {
            return `<div class="gallery__item">
  <a class="gallery__link" href="${description}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
        }
        )
        .join('');
}

const divGallery = document.querySelector('.gallery');
const selectedEl = new Set();


const nextActiveImg = evt.target;

nextActiveImg.classList.toggle('.gallery__image');

selectedEl.add(nextActiveImg.dataset.source);

divGallery.addEventListener('click', onClick);
const instance = basicLightbox.create(`
<img class="modal-img" src="">`, {
  
  onShow: instance => {
    document.addEventListener("keydown", onPressButton);
    
  },
  onClose: instance => {
    document.removeEventListener("keydown", onPressButton)
  }
})
function onClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  instance.element().querySelector('img').src = evt.target.dataset.source;
  instance.show()
}
  function onPressButton(evt) {
    if (evt.key === 'Escape') {
      instance.close();
      return;
    }
  
  }







 
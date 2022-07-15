import { galleryItems } from './gallery-items.js';
import * as basicLightbox  from './basiclightbox.js'

// Change code below this line

console.log(galleryItems);

const galleryDiv = document.querySelector('.gallery');
const imageCardList = createImageMarkup(galleryItems)

galleryDiv.insertAdjacentHTML ('beforeend', imageCardList);

function createImageMarkup(galleryItems) {
    return galleryItems
        .map(({preview, description}) => {
            return `<li class="image-card"> <img src=" ${preview}" alt= "${description}" width= 350px /></li>`
        }
        )
        .join('');
}

const divGallery = document.querySelector('.gallery');
const selectedEl = new Set();

divGallery.addEventListener('click', onClick);

function onClick(evt) {
    if (evt.target.nodeName !== 'IMG') {
        return;
    }
    const nextActiveImg = evt.target;

    console.log(nextActiveImg.classList.contains('.image-card'));

    nextActiveImg.classList.toggle('.image-card');
    selectedEl.add(nextActiveImg.dataset.source);
    
    const instance = basicLightbox.create(`
    <img src="nextActiveImg.dataset.source" width="800" height="600">`)
    instance.show()
}


 // import * as basicLightbox from 'basiclightbox'

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)

// instance.show()
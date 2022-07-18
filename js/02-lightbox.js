import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryDiv = document.querySelector('.gallery');
const imageCardList = createImageMarkup(galleryItems)

galleryDiv.insertAdjacentHTML ('beforeend', imageCardList);

function createImageMarkup(galleryItems) {
  
    return galleryItems
        .map(({preview,original, description}) => {
            return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
        }
        )
        .join('');
        
    }
        let gallery = new SimpleLightbox(".gallery a", {
            captionData: "alt",
            captionDelay: 250,
        })
        
    


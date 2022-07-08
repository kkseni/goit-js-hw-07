import { galleryItems } from './gallery-items.js';
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


// додає збільшений розмір картинки
// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)

// instance.show()
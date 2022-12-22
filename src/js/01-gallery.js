// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

// Step 1 - HTML markup
const galleryEl = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div>
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>`
  )
  .join('');

galleryEl.innerHTML = galleryMarkup;

// Step 2 - "click" delegation
galleryEl.addEventListener('click', onPreviewClick);

function onPreviewClick(event) {
  event.preventDefault();
}

// Step 3 - library use

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    small:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    large:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    alt: 'Hokkaido Flower',
  },
  {
    small:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    large:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    alt: 'Container Haulage Freight',
  },
  {
    small:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    alt: 'Aerial Beach View',
  },

  {
    small:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    large:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    small:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    large:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    alt: 'Alpine Mountains',
  },
  {
    small:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    large:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    alt: 'Mountain Lake Sailing',
  },
  {
    small:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    large:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    alt: 'Alpine Spring Meadows',
  },
  {
    small:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    large:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    alt: 'Nature Landscape',
  },
  {
    small:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    large:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    alt: 'Lighthouse Coast Sea',
  },
];
const gallery = document.querySelector('.gallery');

images.forEach(image => {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery-item');

  const link = document.createElement('a');
  link.classList.add('gallery-link');
  link.href = image.large;

  const img = document.createElement('img');
  img.classList.add('gallery-image');
  img.src = image.small;
  img.alt = image.alt;

  link.appendChild(img);
  galleryItem.appendChild(link);
  gallery.appendChild(galleryItem);
});

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
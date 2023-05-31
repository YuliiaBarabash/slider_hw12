const images = [
  './img/first-cloud.jpeg',
  './img/second-cloud.jpeg',
  './img/third-cloud.jpeg',
];

const container = document.getElementById('container');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');

let currentImageIndex = 0;

function showCurrentImage() {
  const currentImage = images[currentImageIndex];

  container.innerHTML = '';

  const imageElement = document.createElement('img');
  imageElement.setAttribute('src', currentImage);
  container.appendChild(imageElement);

  if (currentImageIndex === images.length - 1) {
    nextButton.style.display = 'none';
  } else {
    nextButton.style.display = 'block';
  }

  if (currentImageIndex === 0) {
    prevButton.style.display = 'none';
  } else {
    prevButton.style.display = 'block';
  }
}

nextButton.addEventListener('click', () => {
  if (currentImageIndex < images.length - 1) {
    currentImageIndex++;
    showCurrentImage();
  }
});

prevButton.addEventListener('click', () => {
  if (currentImageIndex > 0) {
    currentImageIndex--;
    showCurrentImage();
  }
});

showCurrentImage();

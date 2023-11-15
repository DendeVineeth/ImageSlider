let currentSlide = 0;

function showSlide(index) {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slider img');
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }
  slider.style.transform = `translateX(${-currentSlide * 100}%)`;
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

// Display the first image when the page loads
document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide);
});

// Automatic slideshow
setInterval(() => {
  nextSlide();
}, 3000);

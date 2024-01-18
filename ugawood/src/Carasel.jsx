document.addEventListener("DOMContentLoaded", function() {
    const CaraselWrapper = document.querySelector('.carasel-wrapper');
    const Carasel = document.querySelector('.carasel');
    const slides = document.querySelectorAll('.carasel img');
  
    let currentIndex = 0;
  
    function updateCarasel() {
      const newTransformValue = -currentIndex * 100 + '%';
      carouselWrapper.style.transform = 'translateX(' + newTransformValue + ')';
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarasel();
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateCarasel();
    }
  
    setInterval(nextSlide, 3000); 
  });
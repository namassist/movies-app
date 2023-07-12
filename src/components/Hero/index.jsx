import {useEffect} from 'react';

const Hero = () => {
  useEffect(() => {
      const carousel = document.getElementById('default-carousel');
      const prevButton = document.querySelector('[data-carousel-prev]');
      const nextButton = document.querySelector('[data-carousel-next]');
      const slideIndicators = document.querySelectorAll('[data-carousel-slide-to]');
  
      let currentIndex = 0;
  
      const updateSlide = () => {
        const slides = carousel.querySelectorAll('[data-carousel-item]');
        slides.forEach((slide, index) => {
          if (index === currentIndex) {
            slide.classList.add('opacity-100');
            slide.classList.remove('opacity-0');
          } else {
            slide.classList.remove('opacity-100');
            slide.classList.add('opacity-0');
          }
        });
  
        const activeIndicator = document.querySelector('[data-carousel-slide-to][aria-current="true"]');
        if (activeIndicator) {
          activeIndicator.setAttribute('aria-current', 'false');
        }
  
        const currentIndicator = document.querySelector(`[data-carousel-slide-to="${currentIndex}"]`);
        if (currentIndicator) {
          currentIndicator.setAttribute('aria-current', 'true');
        }
      };
  
      const goToSlide = (index) => {
        currentIndex = index;
        updateSlide();
      };
  
      const goToPrevSlide = () => {
        currentIndex = (currentIndex - 1 + slideIndicators.length) % slideIndicators.length;
        updateSlide();
      };
  
      const goToNextSlide = () => {
        currentIndex = (currentIndex + 1) % slideIndicators.length;
        updateSlide();
      };
  
      prevButton.addEventListener('click', goToPrevSlide);
      nextButton.addEventListener('click', goToNextSlide);
      slideIndicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => goToSlide(index));
      });
  
      updateSlide();
  
      return () => {
        prevButton.removeEventListener('click', goToPrevSlide);
        nextButton.removeEventListener('click', goToNextSlide);
        slideIndicators.forEach((indicator, index) => {
          indicator.removeEventListener('click', () => goToSlide(index));
        });
      };
    }, []);


  return (
    <div id="default-carousel" className="relative h-[350px]" data-carousel="slide">
    {/* <!-- Carousel wrapper --> */}
      <div className="relative h-full overflow-hidden md:h-96">
          {/* <!-- Item 1 --> */}
        <div className="duration-700 ease-in-out" data-carousel-item>
          <img src="/images/carousel/star-wars-7b-edit.jpeg" className="absolute w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          <span className="block absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.1)]"></span>
        </div>
        {/* <!-- Item 2 --> */}
        <div className="duration-700 ease-in-out" data-carousel-item>
          <img src="/images/carousel/20230615_012838.jpg" className="absolute w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          <span className="block absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.1)]"></span>
        </div>
        {/* <!-- Item 3 --> */}
        <div className="duration-700 ease-in-out" data-carousel-item>
          <img src="/images/carousel/rise-of-skywalker-poster.jpeg" className="absolute w-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          <span className="block absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.1)]"></span>
        </div>
      </div>
    
      {/* <!-- Slider controls --> */}
      <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <i className="fa-solid fa-angle-left text-white font-bold text-lg"></i>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <i className="fa-solid fa-angle-right text-white text-lg font-bold"></i>
            <span className="sr-only">Next</span>
        </span>
      </button>

      {/* <!-- Slider indicators --> */}
      <div className="absolute z-full flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" className="w-3 h-3 rounded-full bg-white opacity-90" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full bg-white opacity-90" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full bg-white opacity-95" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
      </div>
    </div>
  );
}

export default Hero;

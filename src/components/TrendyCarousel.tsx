import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselItem {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
}

const carouselItems: CarouselItem[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "Tollywood Inspired Jackets",
    description: "Get the iconic look from your favorite movies",
    link: "/tollywood"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "Latest Tech Wearables",
    description: "Smart watches and fitness trackers at amazing prices",
    link: "/tech"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "Celebrity Style Sunglasses",
    description: "Premium sunglasses as seen on your favorite stars",
    link: "/tollywood"
  }
];

const TrendyCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  const nextSlide = () => {
    setCurrent(current === carouselItems.length - 1 ? 0 : current + 1);
  };
  
  const prevSlide = () => {
    setCurrent(current === 0 ? carouselItems.length - 1 : current - 1);
  };
  
  useEffect(() => {
    let interval: number;
    if (autoplay) {
      interval = window.setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [current, autoplay]);

  return (
    <div 
      className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg mb-12"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url(${carouselItems[current].image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
          </div>
          
          <div className="relative h-full flex items-center">
            <div className="text-white p-8 md:p-16 max-w-md">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {carouselItems[current].title}
              </motion.h2>
              
              <motion.p 
                className="text-lg mb-6 text-white/80"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {carouselItems[current].description}
              </motion.p>
              
              <motion.a
                href={carouselItems[current].link}
                className="inline-block px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-300 btn-highlight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Shop Now
              </motion.a>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Navigation buttons */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors duration-300"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === current ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TrendyCarousel;
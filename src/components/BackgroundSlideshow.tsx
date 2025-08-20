import { useState, useEffect } from 'react'

const BackgroundSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      image: '/img/0d5362b6-d8fa-4981-a51b-51827cf5acfc.jpg',
      alt: 'Грузовик на шоссе'
    },
    {
      id: 2,
      image: '/img/810728d2-2072-488e-b6b2-db00b4731951.jpg',
      alt: 'Контейнерный терминал'
    },
    {
      id: 3,
      image: '/img/51f52d5e-5c57-4c4b-b9da-25d04d095b15.jpg',
      alt: 'Современный склад'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Переключение каждые 5 секунд

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-105'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}
      
      {/* Индикаторы слайдов */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-110'
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default BackgroundSlideshow
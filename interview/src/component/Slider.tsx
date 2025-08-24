import React,{useState,useEffect,useCallback} from 'react';


interface SliderProps {
  slides: string[]; // An array of image URLs
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  // --- STATE ---
  // `currentIndex` tracks the active slide. Initialized to 0 (the first slide).
  const [currentIndex, setCurrentIndex] = useState(0);

  // --- HANDLER FUNCTIONS ---
  // `useCallback` memoizes these functions so they aren't recreated on every render,
  // which is a good practice when they are dependencies of `useEffect`.
  const goToPrevious = useCallback(() => {
    // Check if we are on the first slide. If so, loop to the last slide. Otherwise, go back one.
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const goToNext = useCallback(() => {
    // Check if we are on the last slide. If so, loop to the first slide. Otherwise, go forward one.
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  // --- EFFECTS ---
  // This `useEffect` handles the autoplay functionality.
  useEffect(() => {
    // `setInterval` repeatedly calls a function with a fixed time delay.
    const autoPlayInterval = setInterval(goToNext, 5000); // Change slide every 5 seconds.

    // Cleanup function to clear the interval when the component unmounts.
    return () => clearInterval(autoPlayInterval);
  }, [goToNext]); // The effect re-runs if `goToNext` function changes.

  // --- JSX ---
  return (
    <div className="relative w-full max-w-4xl mx-auto h-96">
      {/* Main container that hides overflowing slides */}
      <div className="relative h-full overflow-hidden rounded-lg">
        {/* The inner container that holds all slides and moves horizontally */}
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {/* Map over the slides array to render each slide */}
          {slides.map((slideUrl, index) => (
            <img
              key={index}
              src={slideUrl}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Previous Button */}
      <button onClick={goToPrevious} className="absolute top-1/2 left-4 -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75">
        Prev
      </button>

      {/* Next Button */}
      <button onClick={goToNext} className="absolute top-1/2 right-4 -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75">
        Next
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentIndex === slideIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider
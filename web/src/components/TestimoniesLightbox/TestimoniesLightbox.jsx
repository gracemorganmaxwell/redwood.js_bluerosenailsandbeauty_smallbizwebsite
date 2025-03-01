import React from 'react';
import InitialAvatar from 'src/components/InitialAvatar/InitialAvatar'

const TestimoniesLightbox = ({
  testimonies,
  currentTestimonyIndex,
  previousTestimony,
  nextTestimony,
  closeLightbox,
}) => {
  const currentTestimony = testimonies[currentTestimonyIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4 sm:p-6 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Testimonies Lightbox"
    >
      <div className="relative mx-auto max-w-4xl w-full flex flex-col">
        <div className="relative mx-auto flex flex-col items-center justify-between rounded-lg bg-darkBlue p-4 sm:p-6 md:p-8 shadow-xl min-h-[50vh] w-[95%] sm:w-[90%] max-w-4xl mx-auto">
          <div className="w-full bg-white rounded-lg p-6 shadow-lg min-h-[calc(50vh-4rem)] flex flex-col">
            {/* Close Button */}
            <div className="flex justify-end mb-2">
              <button
                className="w-8 h-8 flex items-center justify-center rounded-full
                  bg-darkBlue text-white hover:bg-slateBlue
                  transition-colors duration-200 text-xl font-semibold"
                onClick={closeLightbox}
                aria-label="Close Lightbox"
              >
                ×
              </button>
            </div>

            {/* Testimony Content */}
            <div className="flex flex-col items-center justify-center text-center flex-grow">
              <p className="text-base sm:text-lg md:text-xl font-semibold mb-8 max-h-[40vh] overflow-y-auto px-2 sm:px-4 w-full">
                {currentTestimony.quote}
              </p>
              <div className="flex items-center justify-center space-x-4 mb-6">
                {currentTestimony.clientPhoto ? (
                  <img
                    src={currentTestimony.clientPhoto}
                    alt={currentTestimony.clientName}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <InitialAvatar
                    name={currentTestimony.clientName}
                    className="w-12 h-12 sm:w-16 sm:h-16"
                  />
                )}
                <p className="text-base sm:text-lg font-medium">- {currentTestimony.clientName}</p>
              </div>
            </div>

            {/* Navigation Controls Container */}
            <div className="mt-auto">
              {/* Navigation Buttons */}
              <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
                {testimonies.length > 1 && (
                  <>
                    <button
                      className="px-3 py-1.5 sm:px-4 sm:py-2 bg-darkBlue text-white
                        rounded hover:bg-slateBlue transition-colors duration-200
                        text-sm sm:text-base w-full sm:w-auto"
                      onClick={previousTestimony}
                      aria-label="Previous Testimony"
                    >
                      &lt; Previous
                    </button>
                    <button
                      className="px-3 py-1.5 sm:px-4 sm:py-2 bg-darkBlue text-white
                        rounded hover:bg-slateBlue transition-colors duration-200
                        text-sm sm:text-base w-full sm:w-auto"
                      onClick={nextTestimony}
                      aria-label="Next Testimony"
                    >
                      Next &gt;
                    </button>
                  </>
                )}
              </div>

              {/* Progress Dots */}
              <div className="flex justify-center space-x-1 sm:space-x-2 mt-4">
                {testimonies.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full
                      transition-colors duration-200
                      ${index === currentTestimonyIndex
                        ? 'bg-darkBlue'
                        : 'bg-gray-300 hover:bg-gray-400'}`}
                    style={{ minWidth: '0.5rem' }}
                    onClick={() => setCurrentTestimonyIndex(index)}
                    aria-label={`Go to testimony ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimoniesLightbox;

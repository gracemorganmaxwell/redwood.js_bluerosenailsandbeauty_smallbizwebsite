import React from 'react';
import { AdvancedImage, AdvancedVideo } from '@cloudinary/react';

const GalleryLightbox = ({
  mediaItems,
  currentMediaIndex,
  previousMedia,
  nextMedia,
  closeLightbox,
  cld,
}) => {
  const currentMedia = mediaItems[currentMediaIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4 sm:p-6 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Gallery Lightbox"
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

            {/* Media Content */}
            <div className="flex flex-col items-center justify-center text-center flex-grow">
              <div className="relative mx-auto">
                {currentMedia.type === 'image' ? (
                  <AdvancedImage
                    cldImg={cld.image(currentMedia.publicId)}
                    plugins={[]}
                    alt={currentMedia.alt}
                    className="h-auto w-full max-w-lg rounded-lg object-cover shadow-md"
                  />
                ) : (
                  <AdvancedVideo
                    cldVid={cld.video(currentMedia.publicId)}
                    controls
                    autoPlay
                    muted
                    plugins={[]}
                    className="h-auto w-full max-w-lg rounded-lg object-cover shadow-md"
                    aria-label="Video without audio or captions"
                  >
                    <track kind="captions" src="" srcLang="en" label="No captions" />
                    Your browser does not support the video tag.
                  </AdvancedVideo>
                )}
              </div>
            </div>

            {/* Navigation Controls Container */}
            <div className="mt-auto">
              {/* Navigation Buttons */}
              <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
                {mediaItems.length > 1 && (
                  <>
                    <button
                      className="px-3 py-1.5 sm:px-4 sm:py-2 bg-darkBlue text-white
                        rounded hover:bg-slateBlue transition-colors duration-200
                        text-sm sm:text-base w-full sm:w-auto"
                      onClick={previousMedia}
                      aria-label="Previous Media"
                    >
                      &lt; Previous
                    </button>
                    <button
                      className="px-3 py-1.5 sm:px-4 sm:py-2 bg-darkBlue text-white
                        rounded hover:bg-slateBlue transition-colors duration-200
                        text-sm sm:text-base w-full sm:w-auto"
                      onClick={nextMedia}
                      aria-label="Next Media"
                    >
                      Next &gt;
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryLightbox;

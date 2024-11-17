import React from 'react';

import { AdvancedImage, AdvancedVideo } from '@cloudinary/react';

const Lightbox = ({
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
      role="dialog"
      aria-modal="true"
      aria-label="Media Lightbox"
    >
      <div className="relative mx-auto max-w-4xl p-4">
        <div className="relative mx-auto flex items-center justify-between rounded-lg bg-darkBlue p-4 sm:p-6 md:p-8 lg:p-10">
          <button
            className="flex flex-col items-center text-white"
            onClick={previousMedia}
            aria-label="Previous Media"
          >
            <span className="mb-2 text-4xl">&lt;</span>
            <span className="rounded bg-blue-900 px-3 py-1 text-xl shadow-lg transition duration-300 hover:bg-blue-700">
              Previous
            </span>
          </button>
          <div className="relative mx-auto">
            {currentMedia.type === 'image' ? (
              <AdvancedImage
                cldImg={cld.image(currentMedia.publicId)}
                plugins={[]}
                alt={currentMedia.alt}
                className="h-auto w-full max-w-lg rounded-lg object-cover"
              />
            ) : (
              <AdvancedVideo
                cldVid={cld.video(currentMedia.publicId)}
                controls
                autoPlay
                muted
                plugins={[]}
                className="h-auto w-full max-w-lg rounded-lg object-cover"
                aria-label="Video without audio or captions"
              >
                <track
                  kind="captions"
                  src=""
                  srcLang="en"
                  label="No captions"
                />
                Your browser does not support the video tag.
              </AdvancedVideo>
            )}
          </div>
          <button
            className="flex flex-col items-center text-white"
            onClick={nextMedia}
            aria-label="Next Media"
          >
            <span className="mb-2 text-4xl">&gt;</span>
            <span className="rounded bg-blue-900 px-3 py-1 text-xl shadow-lg transition duration-300 hover:bg-blue-700">
              Next
            </span>
          </button>
          <button
            className="absolute right-4 top-4 flex flex-col items-center text-white"
            onClick={closeLightbox}
            aria-label="Close Lightbox"
          >
            <span className="text-4xl">&times;</span>
            <span className="rounded bg-blue-900 px-3 py-1 text-xl shadow-lg transition duration-300 hover:bg-blue-700">
              Close Window
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;

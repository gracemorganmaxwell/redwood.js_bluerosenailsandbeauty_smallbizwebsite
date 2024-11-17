import React, { useState } from 'react'

import { AdvancedImage, AdvancedVideo } from '@cloudinary/react'
import { responsive, placeholder } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'

import HeadingComponent from 'src/components/HeadingComponent/HeadingComponent'
import Lightbox from 'src/components/Lightbox/Lightbox'

const cld = new Cloudinary({
  cloud: {
    cloudName: 'dioi9wxj7',
  },
})

const GalleryRow = () => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const galleryMedia = [
    {
      publicId: 'Gel_manicure_with_coloured_French_qurqfv',
      type: 'image',
      alt: 'Gel manicure with coloured french tips.',
    },
    {
      publicId: 'Lash_lift_and_hybrid_brow_stain_zf3e33',
      type: 'video',
      alt: 'Lash lift and hybrid brow stain.',
    },
    {
      publicId: 'Soft_gel_extension_with_a_stamp_feature_nail_s46ixx',
      type: 'image',
      alt: 'Soft gel extension with a stamp patterned feature nail.',
    },
    {
      publicId: 'Gel_manicure_ja0p1o',
      type: 'image',
      alt: 'Gel manicure, multiple colours of blue and purple with a feature deep silver metallic.',
    },
    {
      publicId: 'Gel_manicure_with_soft_French_yzhhes',
      type: 'image',
      alt: 'Gel manicure with soft french tips.',
    },
    {
      publicId: 'Gel_manicure_with_matte_and_a_foil_feature_nail_q16lso',
      type: 'image',
      alt: 'Gel manicure with light pink, matte black on some fingers, and a gold foil feature nail.',
    },
    {
      publicId: 'Gel_manicure_with_glitter_feature_nails_xgydcj',
      type: 'image',
      alt: 'Gel manicure of pale pink with glitter feature nails.',
    },
    {
      publicId: 'Gel_manicure_with_glitter_feature_nails_3_rjfge3',
      type: 'image',
      alt: 'Gel manicure in coral pink with glitter feature nails.',
    },
    {
      publicId: 'Gel_manicure_with_classic_French_p41aoz',
      type: 'image',
      alt: 'Gel manicure with classic French tip.',
    },
    {
      publicId: 'Gel_manicure_12_ph3o7r',
      type: 'image',
      alt: 'Gel manicure of neutral metallic silver, black and bronze on different fingers.',
    },
    {
      publicId: 'Gel_manicure_10_cepadw',
      type: 'image',
      alt: 'Gel manicure in a soft rose pink metallic.',
    },
    {
      publicId: 'Gel_manicure_9_kh2evv',
      type: 'image',
      alt: 'Gel manicure in gold and black metallic on different fingers.',
    },
    {
      publicId: 'Gel_manicure_8_mbx80q',
      type: 'image',
      alt: 'Gel manicure in pale pink.',
    },
    {
      publicId: 'Gel_manicure_7_dkcnvp',
      type: 'image',
      alt: 'Gel manicure in pale blue.',
    },
    {
      publicId: 'Gel_manicure_6_rygqcs',
      type: 'image',
      alt: 'Gel manicure in bright vibrant pink.',
    },
    {
      publicId: 'Gel_manicure_5_tjew3h',
      type: 'image',
      alt: 'Gel manicure in bright vibrant pink on some fingers and metallic bronze on the others.',
    },
    {
      publicId: 'Gel_manicure_4_lzzxxg',
      type: 'image',
      alt: 'Gel manicure of beige on some fingers and metallic light bronze-beige on others.',
    },
    {
      publicId: 'Gel_manicure_3_vk184w',
      type: 'image',
      alt: 'Gel manicure bright rose pink on some fingers and glittery white on other fingers.',
    },
    {
      publicId: 'Gel_manicure_2_ydpnud',
      type: 'image',
      alt: 'Gel manicure of a neutral rose pink.',
    },
    {
      publicId: 'Builder_gel_natural_nail_overlay_na7nkz',
      type: 'image',
      alt: 'Builder gel natural nail overlay in a natural grey, green tone of colour.',
    },
    {
      publicId: 'Builder_gel_natural_nail_overlay_with_glitter_art_hdyo8f',
      type: 'image',
      alt: 'Builder gel natural nail overlay with glitter art.',
    },
    {
      publicId: 'Hybrid_brow_stain_and_shape_with_Lash_lift_and_tint_advpra',
      type: 'video',
      alt: 'Hybrid brow stain and shape with Lash lift and tint.',
    },
    {
      publicId: 'Brow_lamination_with_hybrid_brow_stain_bonfyf',
      type: 'video',
      alt: 'Brow lamination with hybrid brow stain.',
    },
    {
      publicId: 'Hybrid_brow_stain_cyphij',
      type: 'image',
      alt: 'Hybrid brow stain.',
    },
    {
      publicId: 'Hybrid_brow_stain_and_shape_sytfho',
      type: 'image',
      alt: 'Hybrid brow stain and shape.',
    },
    {
      publicId: 'Hybrid_brow_stain_and_shape_3_asoyaq',
      type: 'image',
      alt: 'Hybrid brow stain and shape.',
    },
    {
      publicId: 'Hybrid_brow_stain_and_shape_2_stains',
      type: 'image',
      alt: 'Hybrid brow stain and shape.',
    },
    {
      publicId: 'Hybrid_brow_stain_shape_with_lash_lift_tint_sb5bca',
      type: 'image',
      alt: 'Hybrid brow stain shape with lash lift tint.',
    },
    {
      publicId: 'Hybrid_brow_stain_shape_with_lash_lift_tint_2_jdrf3z',
      type: 'image',
      alt: 'Hybrid brow stain shape with lash lift tint.',
    },
  ]

  const preloadMedia = (index) => {
    const mediaItem = galleryMedia[index]
    if (mediaItem.type === 'image') {
      const img = new Image()
      img.src = cld.image(mediaItem.publicId).toURL()
    } else if (mediaItem.type === 'video') {
      const vid = document.createElement('video')
      vid.src = cld.video(mediaItem.publicId).toURL()
    }
  }

  const changeMedia = (direction) => {
    setCurrentMediaIndex((prevIndex) => {
      const newIndex =
        (prevIndex + direction + galleryMedia.length) % galleryMedia.length
      preloadMedia(newIndex)
      return newIndex
    })
  }

  const previousMedia = () => changeMedia(-1)
  const nextMedia = () => changeMedia(1)

  const openLightbox = () => setIsLightboxOpen(true)
  const closeLightbox = () => setIsLightboxOpen(false)

  const handleMediaKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      openLightbox()
    }
  }

  return (
    <div className="bg-darkBlue py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-4xl rounded-[12px] bg-white p-8 sm:p-12 md:p-16 lg:mx-auto lg:max-w-[1366px]">
          <HeadingComponent title="My Work" />
          <div className="flex h-full items-center justify-center">
            <div className="relative w-full max-w-[1400px] rounded-lg bg-white p-5 shadow-lg">
              <div
                role="button"
                onClick={openLightbox}
                onKeyDown={handleMediaKeyDown}
                tabIndex={0}
                aria-label="Open Lightbox"
              >
                {galleryMedia[currentMediaIndex].type === 'image' ? (
                  <AdvancedImage
                    cldImg={cld.image(galleryMedia[currentMediaIndex].publicId)}
                    plugins={[responsive(), placeholder()]}
                    alt={galleryMedia[currentMediaIndex].alt}
                    className="mx-auto h-auto max-h-[200px] w-full max-w-[200px] cursor-pointer rounded-lg object-cover shadow-lg md:max-h-[300px] md:max-w-[300px] lg:max-h-[500px] lg:max-w-[500px]"
                  />
                ) : (
                  <AdvancedVideo
                    cldVid={cld.video(galleryMedia[currentMediaIndex].publicId)}
                    controls
                    autoPlay
                    muted
                    plugins={[responsive(), placeholder()]}
                    className="mx-auto h-auto max-h-[200px] w-full max-w-[200px] cursor-pointer rounded-lg object-cover shadow-lg md:max-h-[300px] md:max-w-[300px] lg:max-h-[500px] lg:max-w-[500px]"
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
              <div className="mt-4 text-center font-gfs_didot_regular text-darkBlue sm:text-xl md:text-2xl lg:text-3xl">
                {galleryMedia[currentMediaIndex].alt}
              </div>
              <div className="mt-2 text-center font-gfs_didot_regular text-darkBlue sm:text-lg md:text-xl lg:text-2xl">
                {currentMediaIndex + 1}/{galleryMedia.length}
              </div>
              <div className="mt-4 text-center md:hidden">
                <button
                  className="rounded bg-blue-900 px-4 py-2 font-gfs_didot_regular text-white shadow-lg transition duration-300 hover:bg-blue-700"
                  onClick={openLightbox}
                >
                  View Media Larger
                </button>
              </div>
              <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 transform justify-between px-5">
                <button
                  className="h-12 w-12 cursor-pointer rounded-full bg-blue-900 text-2xl font-bold text-white shadow-lg transition duration-300 hover:bg-blue-700"
                  onClick={previousMedia}
                  aria-label="Previous Media"
                >
                  &lt;
                </button>
                <button
                  className="h-12 w-12 cursor-pointer rounded-full bg-blue-900 text-2xl font-bold text-white shadow-lg transition duration-300 hover:bg-blue-700"
                  onClick={nextMedia}
                  aria-label="Next Media"
                >
                  &gt;
                </button>
              </div>
            </div>
          </div>

          {isLightboxOpen && (
            <Lightbox
              mediaItems={galleryMedia}
              currentMediaIndex={currentMediaIndex}
              previousMedia={previousMedia}
              nextMedia={nextMedia}
              closeLightbox={closeLightbox}
              cld={cld}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default GalleryRow

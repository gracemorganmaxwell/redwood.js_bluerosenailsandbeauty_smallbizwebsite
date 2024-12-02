import React, { useState } from 'react'

import { AdvancedImage, AdvancedVideo } from '@cloudinary/react'
import { lazyload, responsive, placeholder } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'

import HeadingComponent from '../HeadingComponent/HeadingComponent'
import Lightbox from '../Lightbox/Lightbox'
import LineSeparatorComponent from '../LineSeparator/LineSeparator'
import SubheadingComponent from '../SubHeadingComponent/SubHeadingComponent'

const cld = new Cloudinary({
  cloud: {
    cloudName: 'dioi9wxj7',
  },
})

const galleryGridMedia = [
  {
    publicId: 'Gel_manicure_with_coloured_French_qurqfv',
    type: 'image',
    alt: 'Gel manicure.',
    category: 'nails',
  },
  {
    publicId: 'Lash_lift_and_hybrid_brow_stain_zf3e33',
    type: 'video',
    alt: 'Lash lift and hybrid brow stain.',
    category: 'brows',
  },
  {
    publicId: 'Soft_gel_extension_with_a_stamp_feature_nail_s46ixx',
    type: 'image',
    alt: 'Soft gel extension.',
    category: 'nails',
  },
  {
    publicId: 'Gel_manicure_ja0p1o',
    type: 'image',
    alt: 'Gel manicure.',
    category: 'nails',
  },
  {
    publicId: 'Gel_manicure_with_soft_French_yzhhes',
    type: 'image',
    alt: 'Gel manicure.',
    category: 'nails',
  },
  {
    publicId: 'Gel_manicure_with_matte_and_a_foil_feature_nail_q16lso',
    type: 'image',
    alt: 'Gel manicure.',
    category: 'nails',
  },
  {
    publicId: 'Gel_manicure_with_glitter_feature_nails_xgydcj',
    type: 'image',
    alt: 'Gel manicure.',
    category: 'nails',
  },
  {
    publicId: 'Gel_manicure_with_glitter_feature_nails_3_rjfge3',
    type: 'image',
    alt: 'Gel manicure.',
    category: 'nails',
  },
  {
    publicId: 'Gel_manicure_with_classic_French_p41aoz',
    type: 'image',
    alt: 'Gel manicure.',
    category: 'nails',
  },
  {
    publicId: 'Gel_manicure_12_ph3o7r',
    type: 'image',
    alt: 'Gel manicure.',
    category: 'nails',
  },
  {
    publicId: 'Gel_manicure_10_cepadw',
    type: 'image',
    alt: 'Gel manicure.',
    category: 'nails',
  },
  {
    publicId: 'Gel_manicure_9_kh2evv',
    type: 'image',
    alt: 'Gel manicure.',
    category: 'nails',
  },
  {
    publicId: 'Gel_manicure_8_mbx80q',
    type: 'image',
    alt: 'Gel manicure.',
    category: 'nails',
  },
  {
    publicId: 'Gel_manicure_7_dkcnvp',
    type: 'image',
    alt: 'Gel manicure.',
    category: 'nails',
  },
  {
    publicId: 'Gel_manicure_6_rygqcs',
    type: 'image',
    alt: 'Gel manicure.',
    category: 'nails',
  },
  {
    publicId: 'Gel_manicure_5_tjew3h',
    type: 'image',
    alt: 'Gel manicure.',
    category: 'nails',
  },
  {
    publicId: 'Gel_manicure_4_lzzxxg',
    type: 'image',
    alt: 'Gel manicure.',
    category: 'nails',
  },
  {
    publicId: 'Gel_manicure_3_vk184w',
    type: 'image',
    alt: 'Gel manicure.',
    category: 'nails',
  },
  {
    publicId: 'Gel_manicure_2_ydpnud',
    type: 'image',
    alt: 'Gel manicure.',
    category: 'nails',
  },
  {
    publicId: 'Builder_gel_natural_nail_overlay_na7nkz',
    type: 'image',
    alt: 'Builder gel.',
    category: 'nails',
  },
  {
    publicId: 'Builder_gel_natural_nail_overlay_with_glitter_art_hdyo8f',
    type: 'image',
    alt: 'Builder gel.',
    category: 'nails',
  },
  {
    publicId: 'Hybrid_brow_stain_and_shape_with_Lash_lift_and_tint_advpra',
    type: 'video',
    alt: 'Hybrid brow stain and shape with lash lift and tint.',
    category: 'brows',
  },
  {
    publicId: 'Brow_lamination_with_hybrid_brow_stain_bonfyf',
    type: 'video',
    alt: 'Brow lamination with hybrid brow stain.',
    category: 'brows',
  },
  {
    publicId: 'Hybrid_brow_stain_cyphij',
    type: 'image',
    alt: 'Hybrid brow stain.',
    category: 'brows',
  },
  {
    publicId: 'Hybrid_brow_stain_and_shape_sytfho',
    type: 'image',
    alt: 'Hybrid brow stain and shape.',
    category: 'brows',
  },
  {
    publicId: 'Hybrid_brow_stain_and_shape_3_asoyaq',
    type: 'image',
    alt: 'Hybrid brow stain and shape.',
    category: 'brows',
  },
  {
    publicId: 'Hybrid_brow_stain_and_shape_2_stains',
    type: 'image',
    alt: 'Hybrid brow stain and shape.',
    category: 'brows',
  },
  {
    publicId: 'Hybrid_brow_stain_shape_with_lash_lift_tint_sb5bca',
    type: 'image',
    alt: 'Hybrid brow stain shape with lash lift tint.',
    category: 'brows',
  },
  {
    publicId: 'Hybrid_brow_stain_shape_with_lash_lift_tint_2_jdrf3z',
    type: 'image',
    alt: 'Hybrid brow stain shape with lash lift tint.',
    category: 'brows',
  },
]

const GalleryGridComponent = () => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [galleryMedia] = useState(galleryGridMedia)

  const openLightbox = (index) => {
    setCurrentMediaIndex(index)
    setIsLightboxOpen(true)
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
  }

  const previousMedia = () => {
    setCurrentMediaIndex((prevIndex) =>
      prevIndex === 0 ? galleryMedia.length - 1 : prevIndex - 1
    )
  }

  const nextMedia = () => {
    setCurrentMediaIndex((prevIndex) =>
      prevIndex === galleryMedia.length - 1 ? 0 : prevIndex + 1
    )
  }

  const nailsMedia = galleryMedia.filter((media) => media.category === 'nails')
  const browsMedia = galleryMedia.filter((media) => media.category === 'brows')

  return (
    <div
      data-testid="gallery-grid-component"
      className="bg-darkBlue py-16 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-4xl rounded-[12px] bg-white p-8 sm:p-12 md:p-16 lg:mx-auto lg:max-w-[1366px]">
          <HeadingComponent title="My Work" />
          <LineSeparatorComponent />
          <SubheadingComponent title="Nails" />
          <div className="mb-8 grid grid-cols-2 gap-4 rounded-md sm:grid-cols-3 lg:grid-cols-4">
            {nailsMedia.map((media, index) => (
              <div
                key={index}
                role="button"
                onClick={() => openLightbox(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    openLightbox(index)
                  }
                }}
                tabIndex={0}
                className="card box-border inline-block transform rounded border border-darkBlue bg-white text-center font-sans font-semibold shadow-2xl transition-transform hover:scale-105 hover:cursor-pointer"
                aria-label={`Open ${media.alt}`}
              >
                <div className="image-container relative mx-5 mt-5">
                  {media.type === 'image' ? (
                    <AdvancedImage
                      cldImg={cld.image(media.publicId)}
                      plugins={[lazyload(), responsive(), placeholder()]}
                      alt={media.alt}
                      className="h-auto w-full rounded"
                    />
                  ) : (
                    <AdvancedVideo
                      cldVid={cld.video(media.publicId)}
                      autoPlay
                      muted
                      controls
                      plugins={[lazyload(), responsive(), placeholder()]}
                      className="h-auto w-full rounded"
                    />
                  )}
                </div>
                <div className="label rounded-b bg-white px-2 py-4 transition-all hover:text-lg">
                  {media.alt}
                </div>
              </div>
            ))}
          </div>
          <LineSeparatorComponent />
          <SubheadingComponent title="Brows" />
          <div className="grid grid-cols-2 gap-4 rounded-md sm:grid-cols-3 lg:grid-cols-4">
            {browsMedia.map((media, index) => (
              <div
                key={index + nailsMedia.length}
                role="button"
                onClick={() => openLightbox(index + nailsMedia.length)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    openLightbox(index + nailsMedia.length)
                  }
                }}
                tabIndex={0}
                className="card box-border inline-block transform rounded border border-darkBlue bg-white text-center font-sans font-semibold shadow-2xl transition-transform hover:scale-105 hover:cursor-pointer"
                aria-label={`Open ${media.alt}`}
              >
                <div className="image-container relative mx-5 mt-5">
                  {media.type === 'image' ? (
                    <AdvancedImage
                      cldImg={cld.image(media.publicId)}
                      plugins={[lazyload(), responsive(), placeholder()]}
                      alt={media.alt}
                      className="h-auto w-full rounded"
                    />
                  ) : (
                    <AdvancedVideo
                      cldVid={cld.video(media.publicId)}
                      autoPlay
                      muted
                      controls
                      plugins={[lazyload(), responsive(), placeholder()]}
                      className="h-auto w-full rounded"
                    />
                  )}
                </div>
                <div className="label rounded-b bg-white px-2 py-4 transition-all hover:text-lg">
                  {media.alt}
                </div>
              </div>
            ))}
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
  )
}

export default GalleryGridComponent

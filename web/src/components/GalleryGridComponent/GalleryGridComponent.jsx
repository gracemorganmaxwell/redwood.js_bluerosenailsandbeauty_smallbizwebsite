import React, { useState } from 'react'

import { AdvancedImage, AdvancedVideo } from '@cloudinary/react'
import { lazyload, responsive, placeholder } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'
import { fit } from '@cloudinary/url-gen/actions/resize'

import HeadingComponent from '../HeadingComponent/HeadingComponent'
import GalleryLightbox from '../GalleryLightbox/GalleryLightbox'
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
      publicId: 'Hybrid_brow_stain_shape_with_lash_lift_tint_2_jdrf3z',
      type: 'image',
      alt: 'Hybrid brow stain shape with lash lift tint.',
    },
    {
      publicId: 'Lash_lift_eyebrow_tint_and_shape_ppqqp6',
      type: 'image',
      alt: 'Lash lift, eyebrow tint and shape.',
    },
    {
      publicId: 'Lash_lift_and_brow_lamination_vgs4nw',
      type: 'image',
      alt: 'Lash lift and brow lamination.',
    },
    {
      publicId: 'Gel_pedicre_hxgkwl',
      type: 'image',
      alt: 'Brow lamination.',
    },
    {
      publicId: 'Gel_pedicre_2_vl8inz',
      type: 'image',
      alt: 'Gel pedicure.',
    },
    {
      publicId: 'Gel_manicure_d9zcdp',
      type: 'image',
      alt: 'Gel manicure.',
    },
    {
      publicId: 'Gel_manicure_with_french_u2y5lc',
      type: 'image',
      alt: 'Gel manicure with french tips.',
    },
    {
      publicId: 'Gel_manicure_2_vovziz',
      type: 'image',
      alt: 'Gel manicure.',
    },
    {
      publicId: 'Gel_manicure_3_opgluq',
      type: 'image',
      alt: 'Gel manicure.',
    },
    {
      publicId: 'Gel_manicure_with_french_2_tuv7sv',
      type: 'image',
      alt: 'Gel manicure with french tips.',
    },
    {
      publicId: 'Builder_gel_manicure_cszqqx',
      type: 'image',
      alt: 'Builder gel manicure.',
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
      publicId: 'Hybrid_brow_stain_shape_with_lash_lift_tint_2_jdrf3z',
      type: 'image',
      alt: 'Hybrid brow stain shape with lash lift tint.',
      category: 'brows',
    },
    {
      publicId: 'Hybrid_brow_stain_and_shape_sb8t9n',
      type: 'video',
      alt: 'Hybrid brow stain and shape.',
      category: 'brows',
  },
    {
      publicId: 'Gel_manicure_jbcr7i',
      type: 'video',
      alt: 'Gel manicure.',
      category: 'nails',
  },
  {
    publicId: 'Builder_gel_manicure_plrvh5',
    type: 'video',
    alt: 'Builder gel manicure.',
    category: 'nails',
  },
  {
    publicId: 'Gel_manicure_with_french_s9gayh',
    type: 'video',
    alt: 'Gel manicure with french tips.',
    category: 'nails',
  },
  {
    publicId: 'Builder_gel_manicure_3_xrzjap',
    type: 'video',
    alt: 'Builder gel manicure.',
    category: 'nails',
  },
  {
    publicId: 'Soft_gel_extensions_xqujjc',
    type: 'image',
    alt: 'Soft gel extensions.',
    category: 'nails',
  },
  {
    publicId: 'lash_lift_Hybrid_brow_stain_nnmmzb',
    type: 'image',
    alt: 'Lash lift, hybrid brow stain.',
    category: 'brows',
  },
  {
    publicId: 'Lash_lift_eyebrow_tint_and_shape_ppqqp6',
    type: 'image',
    alt: 'Lash lift, eyebrow tint and shape.',
    category: 'brows',
  },
  {
    publicId: 'Lash_lift_and_brow_lamination_vgs4nw',
      type: 'image',
    alt: 'Lash lift and brow lamination.',
    category: 'brows',
  },
  {
    publicId: 'Gel_pedicre_hxgkwl',
    type: 'image',
    alt: 'Hybrid brow stain.',
    category: 'brows',
  },
  {
      publicId: 'Hybrid_brow_stain_and_shape_lash_lift_3_d2xqsj',
      type: 'image',
      alt: 'Hybrid brow stain and shape with lash lift.',
      category: 'brows',
    },
    {
      publicId: 'brow_shape_lbcjx3',
      type: 'image',
      alt: 'Brow shape.',
      category: 'brows',
    },
    {
      publicId: 'lash_lift_and_tint_plus_hybrid_brow_stain_and_shape_rsrfnk',
      type: 'image',
      alt: 'Lash lift and tint plus hybrid brow stain and shape.',
      category: 'brows',
    },
    {
      publicId: 'lash_lift_a_nd_tint_bhimyc',
      type: 'image',
      alt: 'Lash lift and tint.',
      category: 'brows',
    },
]

const GalleryGridComponent = () => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [galleryMedia] = useState(galleryGridMedia)

  // Helper function to categorize nails media
  const categorizeNailsMedia = (media) => {
    const alt = media.alt.toLowerCase()
    if (alt.includes('soft gel extension')) {
      return 'soft gel extensions'
    } else if (alt.includes('builder gel')) {
      return 'builder gel'
    } else {
      return 'gel manicure'
    }
  }

  // Helper function to categorize brows media
  const categorizeBrowsMedia = (media) => {
    const alt = media.alt.toLowerCase()
    if (alt.includes('lash lift')) {
      return 'lash lift'
    } else {
      return 'hybrid brow stain'
    }
  }

  // Filter and categorize media
  const nailsMediaByCategory = {
    'gel manicure': galleryMedia.filter(
      (media) =>
        media.category === 'nails' && categorizeNailsMedia(media) === 'gel manicure'
    ),
    'builder gel': galleryMedia.filter(
      (media) =>
        media.category === 'nails' && categorizeNailsMedia(media) === 'builder gel'
    ),
    'soft gel extensions': galleryMedia.filter(
      (media) =>
        media.category === 'nails' &&
        categorizeNailsMedia(media) === 'soft gel extensions'
    ),
  }

  const browsMediaByCategory = {
    'hybrid brow stain': galleryMedia.filter(
      (media) =>
        media.category === 'brows' &&
        categorizeBrowsMedia(media) === 'hybrid brow stain'
    ),
    'lash lift': galleryMedia.filter(
      (media) =>
        media.category === 'brows' && categorizeBrowsMedia(media) === 'lash lift'
    ),
  }

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

  return (
    <div
      data-testid="gallery-grid-component"
      className="bg-darkBlue py-16 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-4xl rounded-[12px] bg-white p-8 sm:p-12 md:p-16 lg:mx-auto lg:max-w-[1366px]">
          <HeadingComponent title="My Work" />
          <LineSeparatorComponent />

          {/* Nails Section */}
          <SubheadingComponent title="Nails" />
          {Object.entries(nailsMediaByCategory).map(([category, mediaList]) => (
            mediaList.length > 0 && (
              <div key={category}>
                <h3 className="mb-4 mt-6 text-center font-gfs_didot_regular text-xl font-semibold text-darkBlue capitalize">
                  {category}
                </h3>
                <div className="mb-8 grid grid-cols-2 gap-4 rounded-md sm:grid-cols-3 lg:grid-cols-4">
                  {mediaList.map((media, index) => (
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
                      <div className="image-container relative mx-5 my-5">
                        {media.type === 'image' ? (
                          <AdvancedImage
                            cldImg={cld.image(media.publicId).resize(fit().width(300).height(200))}
                            plugins={[lazyload(), responsive(), placeholder()]}
                            alt={media.alt}
                            className="h-auto w-full rounded"
                          />
                        ) : (
                          <AdvancedVideo
                            cldVid={cld.video(media.publicId).resize(fit().width(300).height(200))}
                            autoPlay
                            muted
                            controls
                            plugins={[lazyload(), responsive(), placeholder()]}
                            className="h-auto w-full rounded"
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}

          <LineSeparatorComponent />

          {/* Brows Section */}
          <SubheadingComponent title="Brows" />
          {Object.entries(browsMediaByCategory).map(([category, mediaList]) => (
            mediaList.length > 0 && (
              <div key={category}>
                <h3 className="mb-4 mt-6 text-center font-gfs_didot_regular text-xl font-semibold text-darkBlue capitalize">
                  {category}
                </h3>
                <div className="mb-8 grid grid-cols-2 gap-4 rounded-md sm:grid-cols-3 lg:grid-cols-4">
                  {mediaList.map((media, index) => (
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
                      <div className="image-container relative mx-5 my-5">
                        {media.type === 'image' ? (
                          <AdvancedImage
                            cldImg={cld.image(media.publicId).resize(fit().width(300).height(200))}
                            plugins={[lazyload(), responsive(), placeholder()]}
                            alt={media.alt}
                            className="h-auto w-full rounded"
                          />
                        ) : (
                          <AdvancedVideo
                            cldVid={cld.video(media.publicId).resize(fit().width(300).height(200))}
                            autoPlay
                            muted
                            controls
                            plugins={[lazyload(), responsive(), placeholder()]}
                            className="h-auto w-full rounded"
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      </div>

      {isLightboxOpen && (
        <GalleryLightbox
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

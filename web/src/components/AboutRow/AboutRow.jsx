import React from 'react'

import aboutImg1 from '/images/About-Img1.png'
import aboutImg2 from '/images/About-Img2.png'
import aboutImg3 from '/images/About-Img3.png'

const AboutRow = () => {
  return (
    <div className="bg-darkBlue py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-[12px] bg-white p-4 sm:max-w-[1159px] sm:p-6 md:p-8 lg:max-w-[1366px] lg:p-12">
          <headingAssent label="My Story" />
          {/* About content */}
          <div className="mt-8 flex flex-col sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8">
            {/* Row 1 */}
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              {/* Box 1 */}
              <p className="text-center text-base sm:text-left md:text-xl lg:text-2xl">
                Welcome to Blue Rose Nails and Beauty, where your journey to
                serenity and elegance begins.
              </p>
              {/* Box 2 */}
              <img
                src={aboutImg2}
                alt="Anna, sitting at a workstation, doing a client's nails in her home based beauty salon."
                className="h-[157.6px] w-[202.4px] object-cover md:h-[283.36px] md:w-[391.31px] lg:h-[391.46px] lg:w-[540.58px]"
              />
            </div>
            {/* Row 2 */}
            <div className="flex flex-col-reverse items-center gap-4 sm:flex-row sm:gap-2">
              {/* Box 3 */}
              <img
                src={aboutImg1}
                alt="Anna, a close up of her face, smiling at the camera."
                className="h-[322.57px] w-[220px] object-cover md:h-[302.57px] md:w-[200px] lg:h-[519.55px] lg:w-[300px]"
              />
              {/* Box 4 */}
              <p className="text-center text-base sm:mr-2 sm:py-3 sm:text-right md:text-xl lg:text-2xl">
                I&apos;m Anna, with over five years of passion for transforming
                everyday stress into moments of beauty and relaxation.
              </p>
            </div>
            {/* Row 3 */}
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-2">
              {/* Box 5 */}
              <p className="text-center text-base sm:py-3 sm:text-left md:text-xl lg:text-2xl">
                Dive into a personalised pampering experience in our tranquil
                haven, designed to rejuvenate your spirit and enhance your
                natural beauty.
              </p>
              {/* Box 6 */}
              <img
                src={aboutImg3}
                alt="A reflection in a mirror of a client getting their eyebrows done on a massage table."
                className="h-[229.11px] w-[196.11px] object-cover md:h-[229.11px] md:w-[196.11px] lg:h-[451.96px] lg:w-[386.86px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutRow

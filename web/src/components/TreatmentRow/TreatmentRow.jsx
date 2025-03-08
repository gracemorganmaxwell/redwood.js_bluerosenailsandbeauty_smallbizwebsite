import React from 'react'

import Brows from '/images/Brows.png'
import Facial from '/images/Facial.png'
import FootTreatment from '/images/FootTreatment.png'
import headingAssent from '/images/headingAssent.svg'
import NailsLashesPackages from '/images/Lash&BrowPackages.png'
import Massage from '/images/Massage.png'
import Nails from '/images/Nails.png'
import UnisexWaxing from '/images/UnisexWaxing.png'
import Waxing from '/images/Waxing.png'

import Card from '../Card/Card'

const TreatmentRow = () => {
  const treatments = [
    {
      image: Nails,
      label: 'Nails',
      href: '/nails-fresha-link',
    },
    {
      image: Brows,
      label: 'Brows',
      href: '/brows-fresha-link',
    },
    {
      image: Waxing,
      label: 'Waxing',
      href: '/bodywaxing-fresha-link',
    },
    {
      image: Massage,
      label: 'Massage',
      href: '/massage-fresha-link',
    },
    {
      image: Facial,
      label: 'Face Treatments',
      href: '/facial-fresha-link',
    },
    {
      image: FootTreatment,
      label: 'Foot Treatments',
      href: '/foot-treatment-fresha-link',
    },
    {
      image: UnisexWaxing,
      label: 'Unisex Waxing',
      href: '/unisex-waxing-fresha-link',
    },
    {
      image: NailsLashesPackages,
      label: 'Lash & Brow Packages',
      href: '/brow-n-lash-pack-fresha-link',
    },
  ]

  return (
    <div className="bg-darkBlue py-16 sm:py-24 md:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-4xl rounded-[12px] bg-white p-8 sm:p-12 md:p-16 lg:mx-auto lg:max-w-[1366px]">
          {/* Heading Assent SVG */}
          <img
            src={headingAssent}
            alt=""
            className="lg:w-100 mx-auto mb-6 h-auto w-auto sm:w-60 md:w-80"
          />
          {/* Title */}
          <h1 className="text-center font-gfs_didot_regular text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Treatments
          </h1>
          {/* Heading Assent SVG */}
          <img
            src={headingAssent}
            alt=""
            className="lg:w-100 mx-auto mb-6 mt-6 h-auto w-auto sm:w-60 md:w-80"
          />
          {/* Treatment content */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {treatments.map((treatment, index) => (
              <Card
                key={index}
                imageSrc={treatment.image}
                label={treatment.label}
                href={treatment.href}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TreatmentRow

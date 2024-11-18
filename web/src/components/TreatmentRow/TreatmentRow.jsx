import React from 'react'

import Brows from '/images/Brows.png'
import Consult from '/images/Consult.png'
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
      href: '/stepping-stone-nails-fresha',
    },
    { image: Brows, label: 'Brows', href: '/stepping-stone-brows-fresha' },
    {
      image: Waxing,
      label: 'Waxing',
      href: '/stepping-stone-body-waxing-fresha',
    },
    {
      image: Massage,
      label: 'Massage',
      href: '/stepping-stone-massage-fresha',
    },
    {
      image: Consult,
      label: 'Free Consultations',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A16355515&pId=969545',
    },
    {
      image: FootTreatment,
      label: 'Foot Treatments',
      href: '/stepping-stone-foot-treatments-fresha',
    },
    {
      image: UnisexWaxing,
      label: 'Unisex Waxing',
      href: '/stepping-stone-unisex-waxing-fresha',
    },
    {
      image: NailsLashesPackages,
      label: 'Lash & Brow Packages',
      href: '/stepping-stone-brow-n-lash-package-fresha',
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

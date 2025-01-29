import React from 'react'

import HeadingComponent from '../HeadingComponent/HeadingComponent'

const BrowTreatments = () => {
  const treatments = [
    {
      label: 'Eyebrow shape',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A13774620&pId=969545',
    },
    {
      label: 'Eyebrow tint',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A13884967&pId=969545',
    },
    {
      label: 'Eyebrow shape & tint',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A13775539&pId=969545',
    },
    {
      label: 'Hybrid stain',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A13885011&pId=969545',
    },
    {
      label: 'Hybrid stain and shape',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A13885015&pId=969545',
    },
    {
      label: 'Brow Lamination',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A13863281&pId=969545',
    },
    {
      label: 'Brow lamination with hybrid stain',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A13885095&pId=969545',
    },
  ]

  return (
    <div className="bg-darkBlue py-16 sm:py-24 md:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-4xl rounded-[12px] bg-white p-8 sm:p-12 md:p-16 lg:mx-auto lg:max-w-[1366px]">
          <HeadingComponent title="Brow Treatments" />
          {/* Subheading */}
          <h2 className="mb-8 text-center text-2xl font-semibold text-darkBlue">
            Please click to find out more
          </h2>
          {/* Treatment content */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {treatments.map((treatment, index) => (
              <div
                key={index}
                className="flex items-center justify-center rounded-lg border border-darkBlue bg-gray-100 p-4 shadow-md transition-all duration-200 hover:bg-darkBlue hover:text-xl hover:text-white"
              >
                <a
                  href={treatment.href}
                  className="text-center text-lg font-semibold text-darkBlue hover:text-white"
                >
                  {treatment.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrowTreatments

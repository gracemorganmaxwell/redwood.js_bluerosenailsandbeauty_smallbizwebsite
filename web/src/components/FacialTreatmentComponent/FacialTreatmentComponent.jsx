import React from 'react'

import HeadingComponent from '../HeadingComponent/HeadingComponent'

const FacialTreatmentComponent = () => {
  const treatments = [
    {
      label: 'Nostril Wax',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A13885325&pId=969545',
    },
    {
      label: 'Lip Wax',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A13885333&pId=969545',
    },
    {
      label: 'Lip & Chin Wax',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A13885323&pId=969545',
    },
    {
      label: 'Dermaplaning',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A13885316&pId=969545',
    },
    {
      label: 'Dermaplaning Facial',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A19843236&pId=969545',
    },
  ]

  return (
    <div className="bg-darkBlue py-16 sm:py-24 md:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-4xl rounded-[12px] bg-white p-8 sm:p-12 md:p-16 lg:mx-auto lg:max-w-[1366px]">
          <HeadingComponent title="Facial Treatments" />
          {/* Subheading */}
          <h2 className="mb-8 text-center text-2xl font-semibold text-darkBlue">
            Please click to find out more
          </h2>
          {/* Treatment content */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {treatments.map((treatment, index) => (
              <a
                key={index}
                href={treatment.href}
                className="flex items-center justify-center rounded-lg border border-darkBlue bg-gray-100 p-4 text-lg font-semibold shadow-md transition-colors duration-75 ease-in-out hover:bg-darkBlue group"
              >
                <span className="text-center text-darkBlue group-hover:text-white">
                  {treatment.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FacialTreatmentComponent

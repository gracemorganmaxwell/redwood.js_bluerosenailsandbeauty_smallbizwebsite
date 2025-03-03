import React from 'react'

import goldAssentBtnCorner from '/images/goldAssentBtnCorner.svg'

const CtaButton = () => {
  const handleClick = () => {
    window.open(
      'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/all-offer?pId=969545',
      '_blank'
    )
  }

  return (
    <div className="relative flex">
      <img
        src={goldAssentBtnCorner}
        alt="Gold accent top"
        className="absolute right-0 top-0 mr-[-20px] mt-[-10px] h-auto w-auto object-cover"
      />
      <button
        className="relative flex items-center justify-center rounded-md border border-darkBlue bg-darkBlue px-3 py-3 font-sans text-base font-bold text-white shadow-md transition duration-300 hover:border-darkBlue hover:bg-white hover:text-darkBlue md:text-lg lg:text-xl"
        onClick={handleClick}
      >
        Book Now
      </button>
      <img
        src={goldAssentBtnCorner}
        alt="Gold accent bottom"
        className="absolute bottom-0 left-0 mb-[-10px] ml-[-20px] h-auto w-auto rotate-180 object-cover"
      />
    </div>
  )
}

export default CtaButton

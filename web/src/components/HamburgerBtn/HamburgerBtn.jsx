import React, { useState, useRef } from 'react'
import activeHamburger from 'public/images/activeHamburger.svg'
import hamburger from 'public/images/hamburger.svg'
import { Link } from '@redwoodjs/router'

const HamburgerBtn = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)
  const menuRef = useRef()

  return (
    <div ref={menuRef} className="relative">
      <button
        onClick={toggleMenu}
        aria-label="Menu button"
        className={`flex h-12 w-12 items-center justify-center rounded-lg shadow-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-royalBlue focus:ring-opacity-50 ${
          isOpen ? 'border-2 border-darkBlue bg-white' : 'bg-darkBlue'
        }`}
      >
        {isOpen ? (
          <img
            src={activeHamburger}
            alt="Close menu button"
            className="h-8 w-8"
          />
        ) : (
          <img src={hamburger} alt="Menu button" className="h-8 w-8" />
        )}
      </button>
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-48 rounded-lg bg-white shadow-lg z-50">
          <div className="flex flex-col space-y-2 p-4 font-gfs_didot_regular text-darkBlue">
            <Link
              to="/contact"
              className="block rounded p-2 text-right text-base font-bold transition duration-300 hover:bg-royalBlue hover:text-white md:text-lg lg:text-xl"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/treatments"
              className="block rounded p-2 text-right text-base font-bold transition duration-300 hover:bg-royalBlue hover:text-white md:text-lg lg:text-xl"
            >
              Treatments
            </Link>
            <Link
              to="/gallery"
              className="block rounded p-2 text-right text-base font-bold transition duration-300 hover:bg-royalBlue hover:text-white md:text-lg lg:text-xl"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <a
              href="https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/all-offer?pId=969545"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded p-2 text-right text-base font-bold transition duration-300 hover:bg-royalBlue hover:text-white md:text-lg lg:text-xl"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </a>
            <Link
              to="/giftrequest"
              className="block rounded p-2 text-right text-base font-bold transition duration-300 hover:bg-royalBlue hover:text-white md:text-lg lg:text-xl"
              onClick={() => setIsOpen(false)}
            >
              Gift Cards
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default HamburgerBtn

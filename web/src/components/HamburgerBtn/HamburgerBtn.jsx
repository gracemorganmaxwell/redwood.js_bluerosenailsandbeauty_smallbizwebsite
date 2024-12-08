import React, { useState, useRef, useEffect } from 'react'
import { Link } from '@redwoodjs/router'
import activeHamburger from 'public/images/activeHamburger.svg'
import hamburger from 'public/images/hamburger.svg'

const HamburgerBtn = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)
  const menuRef = useRef()
  const firstLinkRef = useRef()
  const lastLinkRef = useRef()

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuRef])

  // Close the menu on Esc key press
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [])

  // Trap focus within the menu when it's open
  useEffect(() => {
    const handleTabKey = (e) => {
      if (!isOpen) return

      const focusableElements = menuRef.current.querySelectorAll('a, button')
      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (e.key === 'Tab') {
        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstElement) {
            e.preventDefault()
            lastElement.focus()
          }
        } else {
          // Tab
          if (document.activeElement === lastElement) {
            e.preventDefault()
            firstElement.focus()
          }
        }
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleTabKey)
      // Focus on the first link when menu opens
      firstLinkRef.current && firstLinkRef.current.focus()
    } else {
      document.removeEventListener('keydown', handleTabKey)
    }

    return () => {
      document.removeEventListener('keydown', handleTabKey)
    }
  }, [isOpen])

  return (
    <div ref={menuRef} className="relative">
      <button
        onClick={toggleMenu}
        aria-label="Menu button"
        aria-expanded={isOpen}
        className={`flex h-12 w-12 items-center justify-center rounded-lg shadow-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-royalBlue focus:ring-opacity-50 ${
          isOpen ? 'border-2 border-darkBlue bg-white' : 'bg-darkBlue'
        }`}
      >
        {isOpen ? (
          <img
            src={activeHamburger}
            alt="Close menu button"
            className="h-8 w-8 transition-transform duration-300 transform rotate-90"
          />
        ) : (
          <img
            src={hamburger}
            alt="Menu button"
            className="h-8 w-8 transition-transform duration-300"
          />
        )}
      </button>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-black opacity-25 z-40"
            onClick={toggleMenu}
            role="presentation"
            aria-hidden="true"
          ></div>
          {/* Dropdown Menu with Transition */}
          <div
            className={`absolute right-0 top-full mt-2 w-48 rounded-lg bg-white shadow-lg z-50 transform transition-transform duration-300 ${
              isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
            role="menu"
            aria-label="Main menu"
          >
            <div className="flex flex-col space-y-2 p-4 font-gfs_didot_regular text-darkBlue">
              <Link
                to="/contact"
                className="block rounded p-2 text-right text-base font-bold transition duration-300 hover:bg-royalBlue hover:text-white md:text-lg lg:text-xl"
                onClick={() => setIsOpen(false)}
                ref={firstLinkRef}
                role="menuitem"
                tabIndex={isOpen ? 0 : -1}
              >
                Contact
              </Link>
              <Link
                to="/treatments"
                className="block rounded p-2 text-right text-base font-bold transition duration-300 hover:bg-royalBlue hover:text-white md:text-lg lg:text-xl"
                onClick={() => setIsOpen(false)}
                role="menuitem"
                tabIndex={isOpen ? 0 : -1}
              >
                Treatments
              </Link>
              <Link
                to="/gallery"
                className="block rounded p-2 text-right text-base font-bold transition duration-300 hover:bg-royalBlue hover:text-white md:text-lg lg:text-xl"
                onClick={() => setIsOpen(false)}
                role="menuitem"
                tabIndex={isOpen ? 0 : -1}
              >
                Gallery
              </Link>
              <a
                href="https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/all-offer?pId=969545" // 
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded p-2 text-right text-base font-bold transition duration-300 hover:bg-royalBlue hover:text-white md:text-lg lg:text-xl"
                onClick={() => setIsOpen(false)}
                role="menuitem"
                tabIndex={isOpen ? 0 : -1}
              >
                Book Now
              </a>
              <Link
                to="/giftrequest"
                className="block rounded p-2 text-right text-base font-bold transition duration-300 hover:bg-royalBlue hover:text-white md:text-lg lg:text-xl"
                onClick={() => setIsOpen(false)}
                ref={lastLinkRef}
                role="menuitem"
                tabIndex={isOpen ? 0 : -1}
              >
                Gift Cards
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default HamburgerBtn

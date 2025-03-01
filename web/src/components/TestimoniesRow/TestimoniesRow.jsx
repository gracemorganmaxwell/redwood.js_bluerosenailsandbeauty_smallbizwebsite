import React, { useState } from 'react'

import clientPhoto1 from '/images/CharlotteReviewer.png'
import clientPhoto2 from '/images/HazelReviewer.png'
import headingAssent from '/images/headingAssent.svg'
import clientPhoto3 from '/images/ReviewerTerri.png'

import './TestimoniesRow.css'
import TestimoniesLightbox from 'src/components/TestimoniesLightbox/TestimoniesLightbox'
import InitialAvatar from 'src/components/InitialAvatar/InitialAvatar'

const TestimoniesRow = () => {
  const [currentTestimonyIndex, setCurrentTestimonyIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [lightboxTestimonies, setLightboxTestimonies] = useState([])

  const testimonies = [
    {
      quote:
        '"...Anna from Blue Rose Nails & Beauty. She has been doing my eyebrows and lashes for years and they are absolutely perfect every time! She spends the extra time to make sure my lashes have the best lift possible and maps out my brows to get the perfect shape. Anna\u2019s passion for what she does is second to none and she always goes above and beyond to make me feel special. She\u2019s also just such a lovely, positive and caring person and I always look forward to our catch ups and walking out feeling pampered 💗💗💗"',
      clientName: 'Charlotte Turner',
      clientPhoto: clientPhoto1,
    },
    {
      quote:
        '"Absolutely loved my visit at blue rose nails and beauty today! Anna is so professional and kind. I\u2019m new to getting eyelash/eyebrow tint and she talked me through every step of the way. Anna is so amazing at tinting. I also got a face and scalp massage which was so blissful! Can\u2019t recommend Anna enough!! thank you so much hun! 😍😍"',
      clientName: 'Hazel Mathieson',
      clientPhoto: clientPhoto2,
    },
    {
      quote:
        '"Anna is incredible at what she does... my eyebrows and lashes have never looked as amazing as they have after she was done with them. She is so talented at what she does and so kind as well. Highly recommend"',
      clientName: 'Terri Carlson',
      clientPhoto: clientPhoto3,
    },
    {
      quote:
        '"Had the most stunning lash lift and brow stain! Couldn\u2019t recommend Anna enough, explained the steps as she was doing them and left feeling so pretty! Thanks so much again! X"',
      clientName: 'Joy M',
      clientPhoto: null,
    },
    {
      quote:
        '"Anna was absolutely amazing! Very thorough and talked me through each step. She was also kind and I felt instantly at ease. Will definitely be back"',
      clientName: 'Gen M',
      clientPhoto: null,
    },
    {
      quote:
        '"Recommended by my friend, it Was lovely to meet Anna and treated by her! Tried getting brazilian wax with her for the first time and was pleasantly surprised that it was way less painful than I anticipated, she knows her stuff and care for her client! Love the chats and her aspirations. Now I recommend her too!"',
      clientName: 'Ratu R',
      clientPhoto: null,
    },
    {
      quote:
        '"Fantastic friendly service. Anna\u2019s skills and expertise are excellent. Thoroughly enjoy and look forward to my appointments and always leave feeling and look fabulous 😊"',
      clientName: 'Lynda M',
      clientPhoto: null,
    },
    {
      quote:
        '"Anna did such an amazing job and was so lovely and friendly! Will definitely be going back!"',
      clientName: 'Ruth J',
      clientPhoto: null,
    },
  ]

  const previousTestimony = () => {
    setCurrentTestimonyIndex((prevIndex) =>
      prevIndex === 0 ? testimonies.length - 1 : prevIndex - 1
    )
  }

  const nextTestimony = () => {
    setCurrentTestimonyIndex((prevIndex) =>
      prevIndex === testimonies.length - 1 ? 0 : prevIndex + 1
    )
  }

  const handleKeyPress = (event) => {
    if (event.key === 'ArrowLeft') {
      previousTestimony()
    } else if (event.key === 'ArrowRight') {
      nextTestimony()
    }
  }

  const openLightbox = () => {
    setLightboxTestimonies(testimonies)
    setIsLightboxOpen(true)
    setCurrentTestimonyIndex(0)
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
  }

  return (
    <div className="bg-darkBlue py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-[12px] bg-white p-8 sm:p-12 md:p-16 lg:mx-auto lg:max-w-[1366px]">
          {/* Heading Assent SVG */}
          <img
            src={headingAssent}
            alt=""
            className="lg:w-100 mx-auto mb-6 h-auto w-auto sm:w-60 md:w-80"
          />
          {/* Title */}
          <h1 className="text-center font-gfs_didot_regular text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Testimonies
          </h1>
          {/* Heading Assent SVG */}
          <img
            src={headingAssent}
            alt=""
            className="lg:w-100 mx-auto mb-6 mt-6 h-auto w-auto sm:w-60 md:w-80"
          />
          {/* Testimony Carousel */}
          <div className="testimonies">
            <div className="testimonies-container">
              {/* Previous Button */}
              <button
                className="testimony-control-button prev-button"
                onClick={previousTestimony}
                onKeyDown={handleKeyPress}
                tabIndex="0"
                aria-label="Previous Testimony"
              >
                &lt;
              </button>
              {/* Testimony Card */}
              <div className="testimony-card">
                <div className="testimony-quote">
                  <p className="testimony-subheading">I highly recommend...</p>
                  <div className="quote-container">
                    <p>
                      <span className="testimony-text">
                        {testimonies[currentTestimonyIndex].quote.slice(0, 150)}...
                      </span>
                      <button
                        className="view-more-button-small"
                        onClick={openLightbox}
                        aria-label="View More Testimonies"
                      >
                        View More
                      </button>
                    </p>
                  </div>
                </div>
                <div className="testimony-client">
                  {testimonies[currentTestimonyIndex].clientPhoto ? (
                    <img
                      src={testimonies[currentTestimonyIndex].clientPhoto}
                      alt={testimonies[currentTestimonyIndex].clientName}
                      className="client-photo"
                    />
                  ) : (
                    <InitialAvatar
                      name={testimonies[currentTestimonyIndex].clientName}
                      className="client-photo"
                    />
                  )}
                  <p className="client-name">
                    {testimonies[currentTestimonyIndex].clientName}
                  </p>
                </div>
              </div>
              {/* Next Button */}
              <button
                className="testimony-control-button next-button"
                onClick={nextTestimony}
                onKeyDown={handleKeyPress}
                tabIndex="0"
                aria-label="Next Testimony"
              >
                &gt;
              </button>
            </div>
            {/* Progress Dots */}
            <div className="testimony-progress">
              {testimonies.map((_, index) => (
                <button
                  key={index}
                  className={`progress-dot ${
                    index === currentTestimonyIndex ? 'active' : ''
                  }`}
                  onClick={() => setCurrentTestimonyIndex(index)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      setCurrentTestimonyIndex(index)
                    }
                  }}
                  tabIndex="0"
                  aria-label={`Go to testimony ${index + 1}`}
                ></button>
              ))}
            </div>
            {/* Lightbox for Additional Testimonies */}
            {isLightboxOpen && (
              <TestimoniesLightbox
                testimonies={testimonies}
                currentTestimonyIndex={currentTestimonyIndex}
                previousTestimony={previousTestimony}
                nextTestimony={nextTestimony}
                closeLightbox={closeLightbox}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimoniesRow

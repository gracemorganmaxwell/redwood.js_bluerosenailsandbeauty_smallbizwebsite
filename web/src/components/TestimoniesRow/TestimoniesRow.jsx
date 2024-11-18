import React, { useState } from 'react'

import clientPhoto1 from '/images/CharlotteReviewer.png'
import clientPhoto2 from '/images/HazelReviewer.png'
import headingAssent from '/images/headingAssent.svg'
import clientPhoto3 from '/images/ReviewerTerri.png'

import './TestimoniesRow.css'

const TestimoniesRow = () => {
  const [currentTestimonyIndex, setCurrentTestimonyIndex] = useState(0)

  const testimonies = [
    {
      quote:
        '"...Anna from Blue Rose Nails & Beauty. She has been doing my eyebrows and lashes for years and they are absolutely perfect every time! She spends the extra time to make sure my lashes have the best lift possible and maps out my brows to get the perfect shape. Anna\u2019s passion for what she does is second to none and she always goes above and beyond to make me feel special. She\u2019s also just such a lovely, positive and caring person and I always look forward to our catch ups and walking out feeling pampered \u{1F497}\u{1F497}\u{1F497}"',
      clientName: 'Charlotte Turner',
      clientPhoto: clientPhoto1,
    },
    {
      quote:
        '"Absolutely loved my visit at blue rose nails and beauty today! Anna is so professional and kind. I\u2019m new to getting eyelash/eyebrow tint and she talked me through every step of the way. Anna is so amazing at tinting. I also got a face and scalp massage which was so blissful! Can\u2019t recommend Anna enough!! thank you so much hun! \u{1F60D}\u{1F60D}"',
      clientName: 'Hazel Mathieson',
      clientPhoto: clientPhoto2,
    },
    {
      quote:
        '"Anna is incredible at what she does... my eyebrows and lashes have never looked as amazing as they have after she was done with them. She is so talented at what she does and so kind aswell. Highly recommend"',
      clientName: 'Terri Carlson',
      clientPhoto: clientPhoto3,
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
              <div className="testimony-card">
                <div className="testimony-quote">
                  <p className="testimony-subheading">I highly recommend...</p>
                  <p className="testimony-text">
                    {testimonies[currentTestimonyIndex].quote}
                  </p>
                </div>
                <div className="testimony-client">
                  <img
                    src={testimonies[currentTestimonyIndex].clientPhoto}
                    alt={testimonies[currentTestimonyIndex].clientName}
                    className="client-photo"
                  />
                  <p className="client-name">
                    {testimonies[currentTestimonyIndex].clientName}
                  </p>
                </div>
              </div>
              <div className="testimonies-controls">
                <button
                  className="testimony-control-button"
                  onClick={previousTestimony}
                  onKeyDown={handleKeyPress}
                  tabIndex="0"
                >
                  &lt;
                </button>
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
                <button
                  className="testimony-control-button"
                  onClick={nextTestimony}
                  onKeyDown={handleKeyPress}
                  tabIndex="0"
                >
                  &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimoniesRow

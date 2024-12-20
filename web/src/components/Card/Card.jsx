import React from 'react'

const Card = ({ imageSrc, label, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="card-link"
    >
      <div className="card box-border inline-block transform rounded border border-darkBlue bg-white text-center font-sans font-semibold shadow-2xl transition-transform hover:scale-105 hover:cursor-pointer">
        <div className="image-container relative mx-5 mt-5">
          <img
            src={imageSrc}
            alt="Blue Rose Nails and Beauty, Services and Treatments of offer."
            className="h-auto w-full rounded"
          />
        </div>
        <div className="label flex items-center justify-center rounded-b bg-white px-2 py-4 text-center transition-all hover:text-lg hover:font-bold">
          {label}
        </div>
      </div>
    </a>
  )
}

export default Card

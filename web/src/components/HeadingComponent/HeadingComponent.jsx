import React from 'react'

import PropTypes from 'prop-types'
import headingAssent from '/images/headingAssent.svg'

const HeadingComponent = ({ title }) => {
  return (
    <div className="text-center">
      <img
        src={headingAssent}
        alt=""
        className="lg:w-100 mx-auto mb-6 h-auto w-auto sm:w-60 md:w-80"
      />
      <h1 className="font-gfs_didot_regular text-5xl font-bold leading-tight sm:text-5xl md:text-6xl">
        {title}
      </h1>
      <img
        src={headingAssent}
        alt=""
        className="lg:w-100 mx-auto mb-6 mt-6 h-auto w-auto sm:w-60 md:w-80"
      />
    </div>
  )
}

HeadingComponent.propTypes = {
  title: PropTypes.string.isRequired,
}

export default HeadingComponent

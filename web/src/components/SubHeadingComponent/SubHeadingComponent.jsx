import React from 'react'

import PropTypes from 'prop-types'
import headingAssent from '/images/headingAssent.svg'

const SubheadingComponent = ({ title }) => {
  return (
    <div className="text-center">
      <h2 className="mb-0 font-gfs_didot_regular font-semibold xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        {title}
      </h2>
      <img src={headingAssent} alt="" className=" mx-auto mb-4  md:w-32" />
    </div>
  )
}

SubheadingComponent.propTypes = {
  title: PropTypes.string.isRequired,
}

export default SubheadingComponent

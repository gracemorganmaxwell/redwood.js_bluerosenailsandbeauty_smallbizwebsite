import React from 'react'
import PropTypes from 'prop-types'

const InitialAvatar = ({ name, className }) => {
  // Extract the first initial from the name
  const initial = name ? name.charAt(0).toUpperCase() : '?'

  // Generate a deterministic color based on the name
  const getColorFromName = (name) => {
    const colors = [
      '#314063', // darkBlue (matching site theme)
      '#405080', // slateBlue (matching site theme)
      '#6B7AA1', // lighter blue
      '#8891B5', // even lighter blue
      '#A6ADCB' // very light blue
    ]

    // Simple hash function to get consistent color for the same name
    let hash = 0
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash)
    }

    return colors[Math.abs(hash) % colors.length]
  }

  const backgroundColor = getColorFromName(name)

  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{
        backgroundColor,
        color: 'white',
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        fontSize: '2rem',
        fontWeight: 'bold',
        fontFamily: 'GFS Didot, serif'
      }}
      aria-label={`Avatar for ${name}`}
    >
      {initial}
    </div>
  )
}

InitialAvatar.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string
}

InitialAvatar.defaultProps = {
  className: ''
}

export default InitialAvatar

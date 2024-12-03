import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CopyBtn = ({ textToCopy }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy)
      setIsTooltipVisible(true)
      setTimeout(() => {
        setIsTooltipVisible(false)
      }, 2000)
    } catch (err) {
      console.error('Failed to copy!', err)
    }
  }

  return (
    <div className="relative inline-block ml-2">
      <button
        onClick={copyToClipboard}
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label="Copy email address"
      >
        Copy
      </button>

      {/* Tooltip */}
      {isTooltipVisible && (
        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-gray-700 text-white text-sm rounded opacity-90">
          Copied to clipboard
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-5 border-transparent border-t-gray-700"></div>
        </div>
      )}
    </div>
  )
}

CopyBtn.propTypes = {
  textToCopy: PropTypes.string.isRequired,
}

export default CopyBtn

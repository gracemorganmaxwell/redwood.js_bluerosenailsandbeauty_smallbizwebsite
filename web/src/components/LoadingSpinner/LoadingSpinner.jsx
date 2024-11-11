import React, { useEffect, useState } from 'react'

import loadingIcon from 'public/images/Loading...svg'

const LoadingSpinner = ({ isLoading, delay = 500 }) => {
  const [shouldShowSpinner, setShouldShowSpinner] = useState(false)

  useEffect(() => {
    let timeout
    if (isLoading) {
      timeout = setTimeout(() => {
        setShouldShowSpinner(true)
      }, delay)
    } else {
      setShouldShowSpinner(false)
    }

    return () => clearTimeout(timeout)
  }, [isLoading, delay])

  if (!shouldShowSpinner) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white opacity-100 transition-opacity duration-300">
      <div className="flex flex-col items-center">
        <img
          src={loadingIcon}
          alt="Loading icon"
          className="h-22 w-22 animate-spin"
        />
        <p className="mt-4 text-xl font-bold text-darkBlue">Loading...</p>
      </div>
    </div>
  )
}

export default LoadingSpinner

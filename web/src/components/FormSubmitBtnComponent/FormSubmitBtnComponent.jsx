import React from 'react'

import PropTypes from 'prop-types'

const FormSubmitBtnComponent = ({ label, loading = false }) => {
  return (
    <div className="">
      <button
        type="submit"
        disabled={loading}
        className="mt-1 rounded-md border border-darkBlue bg-white px-4 py-2 font-semibold text-darkBlue shadow-xl transition-colors duration-300 hover:bg-darkBlue hover:text-white disabled:opacity-50 sm:px-6 sm:py-3 sm:text-lg"
      >
        {label}
      </button>
    </div>
  )
}

FormSubmitBtnComponent.propTypes = {
  label: PropTypes.string.isRequired,
  loading: PropTypes.bool,
}

export default FormSubmitBtnComponent

import React, { useState } from 'react'

import HeadingComponent from 'src/components/HeadingComponent/HeadingComponent'
import PopupMessage from 'src/components/PopMessage/PopMessage'

const PrivacyPolicyMessageComponent = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false)

  const handlePrivacyPolicyClick = () => {
    setIsPopupVisible(true)
  }

  const handleClosePopup = () => {
    setIsPopupVisible(false)
  }

  const privacyPolicyMessage = (
    <>
      <HeadingComponent title="Privacy Policy" />
      <p className="mb-8">
        Your privacy is important to us. We collect personal information
        including your name and contact information, solely to schedule
        appointments for beauty services. You have the option to
        withhold this information, but please note that it will prevent us from
        providing our services to you. You have the right to request a copy of
        the personal information we hold about you and to correct any
        inaccuracies. Please reach out to us at bluerosenailsandbeauty@gmail.com
        for any concerns or requests regarding your personal information.
      </p>
    </>
  )

  return (
    <div className="flex-col justify-center">
      <p className="mt-4 text-gray-500">We respect your privacy.</p>
      <p className="mt-4 text-gray-500">
        Your information is safe and will never be shared.
      </p>
      <button
        className="mt-4 cursor-pointer text-gray-500 underline"
        onClick={handlePrivacyPolicyClick}
      >
        Read our privacy policy.
      </button>
      {isPopupVisible && (
        <PopupMessage
          message={privacyPolicyMessage}
          onClose={handleClosePopup}
        />
      )}
    </div>
  )
}

export default PrivacyPolicyMessageComponent

import React from 'react'

import favicon from '/favicon.png'

import HeadingComponent from 'src/components/HeadingComponent/HeadingComponent'
import LineSeparatorComponent from 'src/components/LineSeparator/LineSeparator'
import SubheadingComponent from 'src/components/SubHeadingComponent/SubHeadingComponent'

const PoliciesComponent = () => {
  return (
    <div className="mx-auto max-w-4xl rounded-lg bg-white p-8 text-darkBlue shadow-lg">
      <HeadingComponent title="Policies" />

      <SubheadingComponent title="Refund Policy" />
      <p className="mb-8 xs:text-center">
        At Blue Rose Nails and Beauty, we are committed to providing an
        exceptional experience and the highest level of service. While all
        services are non-refundable, your satisfaction is our priority.
      </p>
      <p className="mb-8 xs:text-center">
        If you&apos;re not completely satisfied with our service, please inform
        us during your appointment ASAP; so we can rectify the situation. We are
        eager to make the necessary adjustments and ensure your expectations are
        met.
      </p>

      <div className="[&>div]:border-darkBlue [&>div]:border-opacity-50">
        <LineSeparatorComponent />
      </div>

      <SubheadingComponent title="Cancellations" />
      <p className="mb-4">
        We understand that plans can change and appreciate your cooperation in
        notifying us of any cancellations or rescheduling:
      </p>
      <ul className="mb-8">
        <li className="mb-2 flex items-start">
          <img src={favicon} alt="bullet point" className="mr-2 h-4 w-4" />
          <span>
            For cancellations with less than 24 hours&apos; notice may incur a
            charge of 50% of the appointment cost.
          </span>
        </li>
        <li className="mb-4 flex items-start">
          <img src={favicon} alt="bullet point" className="mr-2 h-4 w-4" />
          <span>
            In case of a &apos;NO SHOW&apos;, the full-service amount will be
            charged.
          </span>
        </li>
      </ul>
      <p className="mb-4 xs:text-center">
        Please note, that rescheduling more than twice requires a 25%
        non-refundable deposit to secure your booking.
      </p>
      <p className="mb-8 xs:text-center">
        We empathise with unexpected circumstances and will always try to
        accommodate life&apos;s unexpected moments; we appreciate your
        understanding that we are a small business.
      </p>

      <div className="[&>div]:border-darkBlue [&>div]:border-opacity-50">
        <LineSeparatorComponent />
      </div>

      <SubheadingComponent title="Privacy Policy" />
      <p className="mb-4 xs:text-center">
        Your privacy is important to us. We collect personal information
        including your name and contact information, solely to schedule
        appointments for beauty therapy services.
      </p>
      <p className="mb-4 xs:text-center">
        You have the option to withhold this information, but please note that
        it will prevent us from providing our services to you. You have the
        right to request a copy of the personal information we hold about you
        and to correct any inaccuracies.
      </p>
      <p className="mb-8 xs:text-center">
        Please reach out to us at bluerosenailsandbeauty@gmail.com for any
        concerns or requests regarding your personal information.
      </p>
    </div>
  )
}

export default PoliciesComponent

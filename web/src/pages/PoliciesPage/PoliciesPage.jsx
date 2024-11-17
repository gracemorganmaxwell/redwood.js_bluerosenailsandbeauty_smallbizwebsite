import React from 'react'

import favicon from 'web/public/favicon.png'

import HeadingComponent from 'src/components/HeadingComponent/HeadingComponent'
import SubheadingComponent from 'src/components/SubHeadingComponent/SubHeadingComponent'

const PoliciesComponent = () => {
  return (
    <div className="mx-auto max-w-4xl rounded-lg bg-white p-8 text-darkBlue shadow-lg">
      <HeadingComponent title="Policies" />

      <SubheadingComponent title="General Policies" />
      <p className="mb-4 xs:text-center">
        I understand that failure to disclose medical conditions or medications
        can cause adverse reactions with certain treatments and products.
      </p>
      <p className="mb-4 xs:text-center">
        I consent to images or videos of my treatments to be shared on social
        media for the purpose of promoting the business and the treatments.
      </p>
      <p className="mb-4 xs:text-center">
        I understand that there is a 24-hour cancellation policy and that there
        may be a fee for canceling within that time frame. ASAP
      </p>
      <p className="mb-8 xs:text-center">
        All no-shows will be charged 100% of their treatment price.
      </p>

      <SubheadingComponent title="Refund Policy" />
      <p className="mb-8 xs:text-center">
        At Blue Rose Beauty Therapy, we are committed to providing an
        exceptional experience and the highest level of service. While all
        manicure and nail services are non-refundable, your satisfaction is our
        priority.
      </p>
      <p className="mb-8 xs:text-center">
        If you&apos;re not completely satisfied with our service, please inform
        us during your appointment. We are eager to make the necessary
        adjustments and ensure your nails meet your expectations.
      </p>

      <SubheadingComponent title="Cancellations" />
      <p className="mb-4">
        We understand that plans can change and appreciate your cooperation in
        notifying us of any cancellations or rescheduling:
      </p>
      <ul className="mb-8">
        <li className="mb-2 flex items-start">
          <img src={favicon} alt="bullet point" className="mr-2 h-4 w-4" />
          <span>
            For cancellations with less than 24 hours&apos; notice amounting to
            50% of the appointment cost.
          </span>
        </li>
        <li className="mb-4 flex items-start">
          <img src={favicon} alt="bullet point" className="mr-2 h-4 w-4" />
          <span>
            In case of a &apos;NO SHOW&apos;, the full-service amount will be
            charged.
          </span>
        </li>
        <p className="mb-4 flex xs:text-center">
          Please note, that rescheduling more than twice requires a 25%
          non-refundable deposit to secure your booking.
        </p>
        <p className="mb-4 flex xs:text-center">
          While we empathize with unexpected circumstances, we appreciate your
          understanding in these instances.
        </p>
      </ul>

      <SubheadingComponent title="Privacy Policy" />
      <p className="mb-4 flex xs:text-center">
        Your privacy is important to us. We collect personal information
        including your name and contact information, solely to schedule
        appointments for beauty therapy services.
      </p>
      <p className="mb-4 flex xs:text-center">
        You have the option to withhold this information, but please note that
        it will prevent us from providing our services to you. You have the
        right to request a copy of the personal information we hold about you
        and to correct any inaccuracies.
      </p>
      <p className="mb-4 flex xs:text-center">
        Please reach out to us at bluerosenailsandbeauty@gmail.com for any
        concerns or requests regarding your personal information.
      </p>
      <SubheadingComponent title="Terms of Service" />
      <ul className="mb-8">
        <li className="mb-2 flex items-start">
          <img src={favicon} alt="bullet point" className="mr-2 h-4 w-4" />
          <span>
            Nails requiring service over four weeks will be charged as a full
            set.
          </span>
        </li>
        <li className="mb-2 flex items-start">
          <img src={favicon} alt="bullet point" className="mr-2 h-4 w-4" />
          <span>
            We offer a 1-week guarantee for enhancements and gel polish
            manicures, excluding breakages or deliberate removal attempts.
            Complimentary repairs are available within the first 72 hours for
            any chips or lifting.
          </span>
        </li>
        <li className="mb-2 flex items-start">
          <img src={favicon} alt="bullet point" className="mr-2 h-4 w-4" />
          <span>
            Please inform us of any repairs needed during your infill booking to
            allocate sufficient time for repairs.
          </span>
        </li>
        <li className="mb-2 flex items-start">
          <img src={favicon} alt="bullet point" className="mr-2 h-4 w-4" />
          <span>
            No refunds are given as pricing covers the cost of products and
            time.
          </span>
        </li>
        <li className="mb-8 flex items-start">
          <img src={favicon} alt="bullet point" className="mr-2 h-4 w-4" />
          <span>
            We are not responsible for damage resulting from improper aftercare.
          </span>
        </li>
      </ul>
    </div>
  )
}

export default PoliciesComponent

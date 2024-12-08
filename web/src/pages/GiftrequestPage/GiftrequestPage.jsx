import React from 'react'
import { Metadata } from '@redwoodjs/web'
import GiftRequestForm from 'src/components/GiftRequestForm/GiftRequestForm'
import HeadingComponent from 'src/components/HeadingComponent/HeadingComponent'

const GiftRequestPage = () => {
  return (
    <main className="bg-darkBlue min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-md shadow-lg w-full max-w-4xl p-8 sm:p-12 md:p-16">
        <Metadata title="Gift Cards" description="Gift Card Request" />

        {/* Greeting Messages */}
        <HeadingComponent title="Gift Cards" />
        <br />
        <div className="mb-6">
          <p className="mb-4 font-sans text-xl font-bold leading-5 text-darkBlue">
            Welcome to our gift card request page!
          </p>
          <p className="mb-4 font-sans italic text-darkBlue">
            Give the gift of beauty and relaxation.
          </p>
          <p className="mb-4 font-sans text-darkBlue">
            Please fill out the form below to request a gift card. We offer both monetary and service-specific gift cards that can be delivered electronically or physically.
          </p>
        </div>

        {/* Gift Request Form */}
        <GiftRequestForm />
      </div>
    </main>
  )
}

export default GiftRequestPage

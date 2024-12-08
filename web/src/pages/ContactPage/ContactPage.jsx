import React, { useState } from 'react'
import { Metadata } from '@redwoodjs/web'
import ContactFormComponent from 'src/components/ContactFormComponent/ContactFormComponent'
import HeadingComponent from 'src/components/HeadingComponent/HeadingComponent'
import CopyBtn from 'src/components/CopyBtn/CopyBtn'

const ContactPage = () => {
  const [isLoading] = useState(false)
  const emailAddress = 'bluerosenailsandbeauty@gmail.com'

  return (
    <main className="bg-darkBlue min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-md shadow-lg w-full max-w-4xl p-8 sm:p-12 md:p-16">
        <Metadata title="Contact" description="Contact Us" />

        {/* Greeting Messages */}
        <HeadingComponent title="Contact Form" />
        <br />
        <div className="mb-6">
          <p className="mb-4 font-sans text-xl font-bold leading-5 text-darkBlue">
            Welcome to our contact page!
          </p>
          <p className="mb-4 font-sans italic text-darkBlue">
            We value your feedback and inquiries.
          </p>
          <p className="mb-4 font-sans text-darkBlue flex flex-col sm:flex-row items-start sm:items-center">
            I can be reached at{' '}
            <a
              href={`mailto:${emailAddress}`}
              className="mt-2 sm:mt-0 sm:ml-2 text-blue-400 underline hover:text-blue-200"
            >
              {emailAddress}
            </a>
            <CopyBtn textToCopy={emailAddress} />
          </p>
          <p className="mb-4 font-sans text-darkBlue">
            Otherwise, please fill out the contact form below with your name, email, and message.
          </p>
          <p className="mb-4 font-sans text-darkBlue">
            We will respond in a timely fashion and get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Form */}
        <ContactFormComponent />
      </div>
    </main>
  )
}

export default ContactPage

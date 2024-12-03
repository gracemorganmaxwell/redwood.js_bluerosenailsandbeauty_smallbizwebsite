import React, { useState } from 'react'
import { Metadata } from '@redwoodjs/web'
import ContactFormComponent from 'src/components/ContactFormComponent/ContactFormComponent'
import LoadingScreen from 'src/components/LoadingSpinner/LoadingSpinner'
import CopyBtn from 'src/components/CopyBtn/CopyBtn'

const ContactPage = () => {
const [isLoading] = useState(false)
const emailAddress = 'bluerosenailsandbeauty@gmail.com'
return (
<main>
<div className="w-full bg-darkBlue">
{isLoading ? (
<LoadingScreen />
) : (
<>
<Metadata title="Contact" description="Contact Us" />
<div className="mx-auto max-w-2xl p-6 text-left shadow-xl sm:px-6 lg:px-8">
<p className="my-4 font-sans text-xl font-bold leading-5 text-white">
Welcome to our contact page!
</p>
<p className="my-4 font-sans italic text-white">
We value your feedback and inquiries.
</p>
<p className="my-4 font-sans text-white flex items-center">
I can be reached at{' '}
<a
  href={`mailto:${emailAddress}`}
  className="ml-1 text-blue-400 underline hover:text-blue-200"
>
  {emailAddress}
</a>
<CopyBtn textToCopy={emailAddress} />
</p>
<p className="my-4 font-sans text-white">
Otherwise, please fill out the contact form below with your name, email, and message.
</p>
<p className="my-4 font-sans text-white">
We will respond in a timely fashion and get back to you as soon as possible.
</p>
<div className="p-6 sm:px-6 lg:px-8">
<ContactFormComponent />
<br />
</div>
</div>
</>
)}
</div>
</main>
)
}
export default ContactPage

import React from 'react'
import HeadingComponent from '../HeadingComponent/HeadingComponent'
import { Metadata } from '@redwoodjs/web'

const NailTreatmentComponent = () => {
  const treatments = [
    {
      label: 'IBX nail treatment maintenance',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A18097508&pId=969545',
    },
    {
      label: 'IBX nail treatment first time',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A18097499&pId=969545',
    },
    {
      label: 'Builder gel infill',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A17972284&pId=969545',
    },
    {
      label: 'Gel manicure',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A13800136&pId=969545',
    },
    {
      label: 'Gel manicure removal & reapplication',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A13847928&pId=969545',
    },
    {
      label: 'Deluxe gel manicure',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A13774621&pId=969545',
    },
    {
      label: 'Deluxe gel manicure removal and reapplication',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A13884686&pId=969545',
    },
    {
      label: 'Gel removal & nail tidy',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A13800200&pId=969545',
    },
    {
      label: 'Soft gel extensions',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A14414709&pId=969545',
    },
    {
      label: 'Soft Gel Extension infill',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A15055311&pId=969545',
    },
    {
      label: 'Soft gel extension remove and reapply',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A15055321&pId=969545',
    },
    {
      label: 'Builder gel natural nail overlay',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A13800290&pId=969545',
    },
    {
      label: 'Builder gel removal & reapplication',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A13884704&pId=969545',
    },
    {
      label: 'French add on (gel polish)',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A16036237&pId=969545',
    },
    {
      label: 'Nail art (1 feature nail free per hand)',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A18136379&pId=969545',
    },
    {
      label: 'Nail art (Nail art per nail)',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A18136422&pId=969545',
    },
    {
      label: 'Nail art (Nail art per hand)',
      href: 'https://www.fresha.com/book-now/blue-rose-nails-beauty-h5gamcsb/services?lid=1023059&eid=2472017&oiid=sv%3A18136380&pId=969545',
    },
  ]

  return (
    <>
      <Metadata
        title="Blue Rose Nails and Beauty - Nail Treatments"
        description="Blue Rose Nails and Beauty - Nail Treatments"
      />

      <div className="bg-darkBlue py-16 sm:py-24 md:py-32">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-4xl rounded-[12px] bg-white p-8 sm:p-12 md:p-16 lg:mx-auto lg:max-w-[1366px]">
            <HeadingComponent title="Nail Treatments" />
            {/* Subheading */}
            <h2 className="mb-8 text-center text-2xl font-semibold text-darkBlue">
              Please click to find out more
            </h2>
            {/* Treatment content */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {treatments.map((treatment, index) => (
                <a
                  key={index}
                  href={treatment.href}
                  className="flex items-center justify-center rounded-lg border border-darkBlue bg-gray-100 p-4 text-lg font-semibold shadow-md transition-colors duration-75 ease-in-out hover:bg-darkBlue group"
                >
                  <span className="text-center text-darkBlue group-hover:text-white">
                    {treatment.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NailTreatmentComponent

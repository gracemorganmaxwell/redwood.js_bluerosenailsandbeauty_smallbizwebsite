// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { useState, useEffect } from 'react'
import LoadingSpinner from 'src/components/LoadingSpinner/LoadingSpinner'
import GalleryRow from 'src/components/GalleryRow/GalleryRow'
import HeroComponent from 'src/components/HeroComponent/HeroComponent'
import AboutRow from 'src/components/AboutRow/AboutRow'
import TreatmentRow from 'src/components/TreatmentRow/TreatmentRow'
import CtaRow from 'src/components/CtaRow/CtaRow'
import TestimoniesRow from 'src/components/TestimoniesRow/TestimoniesRow'

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <Metadata title="Home" description="Home page" />
            <HeroComponent />
            <AboutRow />
            <GalleryRow />
            <TreatmentRow />
            <CtaRow />
            <TestimoniesRow />
        </div>
      )}
    </div>
  )
}

export default HomePage

// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { useState, useEffect } from 'react'
import LoadingSpinner from 'src/components/LoadingSpinner/LoadingSpinner'
import GalleryRow from 'src/components/GalleryRow/GalleryRow'
import NavigationComponent from 'src/components/NavigationComponent/NavigationComponent'
import HeroComponent from 'src/components/HeroComponent/HeroComponent'
import AboutRow from 'src/components/AboutRow/AboutRow'
import TreatmentRow from 'src/components/TreatmentRow/TreatmentRow'
import CtaRow from 'src/components/CtaRow/CtaRow'
import TestimoniesRow from 'src/components/TestimoniesRow/TestimoniesRow'
import Footer from 'src/components/Footer/Footer'

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulating a loading delay for demonstration
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer) // Cleanup the timer
  }, [])

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
            <Footer />
        </div>
      )}
    </div>
  )
}

export default HomePage

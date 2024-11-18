// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from "@redwoodjs/web";
import LoadingSpinner from 'src/components/LoadingSpinner/LoadingSpinner'
import BaseLayout from 'src/layouts/BaseLayout/BaseLayout'
import { useState, useEffect } from 'react'

const LoadingPage = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Metadata title="Loading" description="Loading page" />

      <BaseLayout>
        <LoadingSpinner isLoading={isLoading} />
      </BaseLayout>
    </>
  );
};

export default LoadingPage;

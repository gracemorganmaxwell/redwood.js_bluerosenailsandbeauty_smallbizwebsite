import { Metadata } from '@redwoodjs/web'

import GalleryGridComponent from 'src/components/GalleryGridComponent/GalleryGridComponent'

const GalleryPage = () => {
  return (
    <>
      <Metadata title="Gallery" description="Gallery page" />
      <GalleryGridComponent />
    </>
  )
}

export default GalleryPage

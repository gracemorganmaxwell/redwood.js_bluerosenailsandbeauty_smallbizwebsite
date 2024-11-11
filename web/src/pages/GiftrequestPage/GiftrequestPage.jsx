// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const GiftrequestPage = () => {
  return (
    <>
      <Metadata title="Giftrequest" description="Giftrequest page" />

      <h1>GiftrequestPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/GiftrequestPage/GiftrequestPage.jsx</code>
      </p>
      {/*
           My default route is named `giftrequest`, link to me with:
           `<Link to={routes.giftrequest()}>Giftrequest</Link>`
        */}
    </>
  )
}

export default GiftrequestPage

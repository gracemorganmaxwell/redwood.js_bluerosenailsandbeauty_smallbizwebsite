// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const BrowsFreshaLinkPage = () => {
  return (
    <>
      <Metadata title="BrowsFreshaLink" description="BrowsFreshaLink page" />

      <h1>BrowsFreshaLinkPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/BrowsFreshaLinkPage/BrowsFreshaLinkPage.jsx</code>
      </p>
      {/*
           My default route is named `browsFreshaLink`, link to me with:
           `<Link to={routes.browsFreshaLink()}>BrowsFreshaLink</Link>`
        */}
    </>
  )
}

export default BrowsFreshaLinkPage

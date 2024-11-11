// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const NailsFreshaLinkPage = () => {
  return (
    <>
      <Metadata title="NailsFreshaLink" description="NailsFreshaLink page" />

      <h1>NailsFreshaLinkPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/NailsFreshaLinkPage/NailsFreshaLinkPage.jsx</code>
      </p>
      {/*
           My default route is named `nailsFreshaLink`, link to me with:
           `<Link to={routes.nailsFreshaLink()}>NailsFreshaLink</Link>`
        */}
    </>
  )
}

export default NailsFreshaLinkPage

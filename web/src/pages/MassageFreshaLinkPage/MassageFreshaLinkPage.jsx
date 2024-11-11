// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const MassageFreshaLinkPage = () => {
  return (
    <>
      <Metadata
        title="MassageFreshaLink"
        description="MassageFreshaLink page"
      />

      <h1>MassageFreshaLinkPage</h1>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/MassageFreshaLinkPage/MassageFreshaLinkPage.jsx
        </code>
      </p>
      {/*
           My default route is named `massageFreshaLink`, link to me with:
           `<Link to={routes.massageFreshaLink()}>MassageFreshaLink</Link>`
        */}
    </>
  )
}

export default MassageFreshaLinkPage

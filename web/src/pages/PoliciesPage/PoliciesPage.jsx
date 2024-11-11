// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const PoliciesPage = () => {
  return (
    <>
      <Metadata title="Policies" description="Policies page" />

      <h1>PoliciesPage</h1>
      <p>
        Find me in <code>./web/src/pages/PoliciesPage/PoliciesPage.jsx</code>
      </p>
      {/*
           My default route is named `policies`, link to me with:
           `<Link to={routes.policies()}>Policies</Link>`
        */}
    </>
  )
}

export default PoliciesPage

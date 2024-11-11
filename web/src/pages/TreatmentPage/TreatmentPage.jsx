// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const TreatmentPage = () => {
  return (
    <>
      <Metadata title="Treatment" description="Treatment page" />

      <h1>TreatmentPage</h1>
      <p>
        Find me in <code>./web/src/pages/TreatmentPage/TreatmentPage.jsx</code>
      </p>
      {/*
           My default route is named `treatment`, link to me with:
           `<Link to={routes.treatment()}>Treatment</Link>`
        */}
    </>
  )
}

export default TreatmentPage

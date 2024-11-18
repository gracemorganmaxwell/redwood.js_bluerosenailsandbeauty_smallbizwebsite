// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import BaseLayout from './layouts/BaseLayout/BaseLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/loading" page={LoadingPage} name="loading" />
      <Set wrap={BaseLayout} prerender>
        <Route path="/treatments" page={TreatmentPage} name="treatments" />
        <Route path="/unisex-waxing-fresha-link" page={UnisexWaxingFreshaLinkPage} name="unisexWaxingFreshaLink" />
        <Route path="/nails-fresha-link" page={NailsFreshaLinkPage} name="nailsFreshaLink" />
        <Route path="/massage-fresha-link" page={MassageFreshaLinkPage} name="massageFreshaLink" />
        <Route path="/foot-treatment-fresha-link" page={FootTreatmentFreshaLinkPage} name="footTreatmentFreshaLink" />
        <Route path="/brows-fresha-link" page={BrowsFreshaLinkPage} name="browsFreshaLink" />
        <Route path="/brow-n-lash-pack-fresha-link" page={BrowNLashPackFreshaLinkPage} name="browNLashPackFreshaLink" />
        <Route path="/bodywaxing-fresha-link" page={BodywaxingFreshaLinkPage} name="bodywaxingFreshaLink" />
        <Route path="/policies" page={PoliciesPage} name="policies" />
        <Route path="/giftrequest" page={GiftrequestPage} name="giftrequest" />
        <Route path="/gallery" page={GalleryPage} name="gallery" />
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes

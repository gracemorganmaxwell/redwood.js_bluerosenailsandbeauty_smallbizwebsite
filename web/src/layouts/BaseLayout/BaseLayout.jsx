import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer/Footer'

const BaseLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default BaseLayout

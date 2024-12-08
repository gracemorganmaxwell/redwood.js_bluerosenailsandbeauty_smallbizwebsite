import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer/Footer'
import { Toaster } from '@redwoodjs/web/toast'

const BaseLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Toaster
        position="bottom-left"
        toastOptions={{
          duration: 5000, // 5 seconds
          className: 'text-lg px-6 py-4 shadow-lg rounded-md border-solid border-1 border-darkBlue',
          success: {
            className: 'bg-white text-green-600 font-semibold',
            iconTheme: {
              primary: '#10B981',
              secondary: 'white',
            }
          },
          error: {
            className: 'bg-white text-red-600 font-semibold',
            iconTheme: {
              primary: '#EF4444',
              secondary: 'white',
            }
          },
        }}
      />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default BaseLayout

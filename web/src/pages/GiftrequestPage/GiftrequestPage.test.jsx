import { render } from '@redwoodjs/testing/web'

import GiftrequestPage from './GiftrequestPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('GiftrequestPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GiftrequestPage />)
    }).not.toThrow()
  })
})

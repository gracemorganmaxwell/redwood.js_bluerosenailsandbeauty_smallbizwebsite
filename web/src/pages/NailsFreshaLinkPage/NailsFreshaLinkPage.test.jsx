import { render } from '@redwoodjs/testing/web'

import NailsFreshaLinkPage from './NailsFreshaLinkPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NailsFreshaLinkPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NailsFreshaLinkPage />)
    }).not.toThrow()
  })
})

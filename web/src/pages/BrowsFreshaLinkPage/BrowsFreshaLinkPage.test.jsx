import { render } from '@redwoodjs/testing/web'

import BrowsFreshaLinkPage from './BrowsFreshaLinkPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('BrowsFreshaLinkPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BrowsFreshaLinkPage />)
    }).not.toThrow()
  })
})

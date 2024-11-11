import { render } from '@redwoodjs/testing/web'

import BrowNLashPackFreshaLinkPage from './BrowNLashPackFreshaLinkPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('BrowNLashPackFreshaLinkPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BrowNLashPackFreshaLinkPage />)
    }).not.toThrow()
  })
})

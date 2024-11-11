import { render } from '@redwoodjs/testing/web'

import UnisexWaxingFreshaLinkPage from './UnisexWaxingFreshaLinkPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('UnisexWaxingFreshaLinkPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UnisexWaxingFreshaLinkPage />)
    }).not.toThrow()
  })
})

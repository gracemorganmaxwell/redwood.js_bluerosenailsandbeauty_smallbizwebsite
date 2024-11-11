import { render } from '@redwoodjs/testing/web'

import MassageFreshaLinkPage from './MassageFreshaLinkPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MassageFreshaLinkPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MassageFreshaLinkPage />)
    }).not.toThrow()
  })
})

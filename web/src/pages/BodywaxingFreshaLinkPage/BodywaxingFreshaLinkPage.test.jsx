import { render } from '@redwoodjs/testing/web'

import BodywaxingFreshaLinkPage from './BodywaxingFreshaLinkPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('BodywaxingFreshaLinkPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BodywaxingFreshaLinkPage />)
    }).not.toThrow()
  })
})

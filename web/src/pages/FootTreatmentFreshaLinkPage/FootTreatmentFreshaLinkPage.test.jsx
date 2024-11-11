import { render } from '@redwoodjs/testing/web'

import FootTreatmentFreshaLinkPage from './FootTreatmentFreshaLinkPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('FootTreatmentFreshaLinkPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FootTreatmentFreshaLinkPage />)
    }).not.toThrow()
  })
})

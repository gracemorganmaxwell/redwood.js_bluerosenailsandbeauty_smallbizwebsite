import { render } from '@redwoodjs/testing/web'

import PoliciesPage from './PoliciesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PoliciesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PoliciesPage />)
    }).not.toThrow()
  })
})

import { render } from '@redwoodjs/testing/web'

import HamburgerBtn from './HamburgerBtn'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('HamburgerBtn', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HamburgerBtn />)
    }).not.toThrow()
  })
})

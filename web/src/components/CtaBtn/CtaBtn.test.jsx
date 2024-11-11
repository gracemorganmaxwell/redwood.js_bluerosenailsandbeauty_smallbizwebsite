import { render } from '@redwoodjs/testing/web'

import CtaBtn from './CtaBtn'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CtaBtn', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CtaBtn />)
    }).not.toThrow()
  })
})

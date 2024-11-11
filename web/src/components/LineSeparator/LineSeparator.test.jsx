import { render } from '@redwoodjs/testing/web'

import LineSeparator from './LineSeparator'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LineSeparator', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LineSeparator />)
    }).not.toThrow()
  })
})

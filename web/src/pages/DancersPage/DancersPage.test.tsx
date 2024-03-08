import { render } from '@redwoodjs/testing/web'

import DancersPage from './DancersPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DancersPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DancersPage />)
    }).not.toThrow()
  })
})

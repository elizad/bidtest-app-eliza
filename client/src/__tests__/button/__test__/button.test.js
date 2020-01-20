import React from 'react'
import ReactDOM from 'react-dom'
import Button from '../button'

import { render, cleanup } from '@testing-library/react'
// import "jest-dom/extend-expect"

import renderer from 'react-test-renderer'

afterEach(cleanup)

describe('button ', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Button />, div)
  })

  it('renders button correctly', () => {
    const {getByTestId} = render(<Button label="click me please" />)
    expect(getByTestId('button')).toHaveTextContent('click me please')
  })

  it('renders button correctly', () => {
    const {getByTestId} = render(<Button label="save" />)
    expect(getByTestId('button')).toHaveTextContent('save')
  })

  it('matches snapshot 1', () => {
    const tree = renderer.create(<Button label="save" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('matches snapshot 2', () => {
    const tree = renderer.create(<Button label="click me please" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

})

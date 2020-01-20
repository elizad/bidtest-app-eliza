import React from 'react'
import ReactDOM from 'react-dom'
import ToggleBidByStateButton from '../../pages/Bids/toggleBidByStateButton/toggleBidByStateButton.js'

import { render, cleanup } from '@testing-library/react'

import renderer from 'react-test-renderer'

afterEach(cleanup)

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ToggleBidByStateButton />, div)
});

it('renders button correctly', () => {
  const { getByTestId } = render(<ToggleBidByStateButton label="click me please" />)
  expect(getByTestId('button')).toHaveTextContent('Show All/Accepted')
});

it('renders button correctly', () => {
  const { getByTestId } = render(<ToggleBidByStateButton label="save" />)
  expect(getByTestId('button')).toHaveTextContent('Show All/Accepted')
});


it('matches snapshot 2', () => {
  const tree = renderer.create(<ToggleBidByStateButton label="click me please" />).toJSON()
  expect(tree).toMatchSnapshot()
});

import React from 'react'
import ReactDOM from 'react-dom'
import Bids from '../pages/Bids'
import configureStore from '../store'
import { Provider } from 'react-redux'
import fetchMock from 'fetch-mock'
import expect from 'expect'
import bidsReducer from '../store/reducers/bids'




describe('render store without crashing', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })
  it('should return the initial state', () => {
    expect(bidsReducer([], [])).toEqual([])
  })

  it('render provider bids store without crashing', () => {
    const div = document.createElement('div')
    const store = configureStore()
    ReactDOM.render(
      <Provider store={store}>
        <Bids />
      </Provider>,
       div)
  })

})

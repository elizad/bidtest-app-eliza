import React from 'react'
import ReactDOM from 'react-dom'
import Buyers from '../pages/Buyers'
import configureStore from '../store'
import { Provider } from 'react-redux'
import fetchMock from 'fetch-mock'
import expect from 'expect'
import buyersReducer from '../store/reducers/buyers'




describe('render store without crushing', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })
  it('should return the initial state', () => {
    expect(buyersReducer([], [])).toEqual([])
  })

  it('render store without crashing', () => {
    const div = document.createElement('div')
    const store = configureStore()
    ReactDOM.render(
      <Provider store={store}>
        <Buyers />
      </Provider>,
       div)
  })

})

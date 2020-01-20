import React from 'react'
import ReactDOM from 'react-dom'
import Sellers from "../pages/Sellers"
import configureStore from '../store'
import { Provider } from 'react-redux'
import fetchMock from 'fetch-mock'
import expect from 'expect' // You can use any testing library
import sellersReducer from '../store/reducers/sellers'

describe('render store without crashing', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('should return the initial state', () => {
    expect(sellersReducer([], [])).toEqual([]);
  })

  it('render store provider sellers without crashing', () => {
    const div = document.createElement('div');
    const store = configureStore()
    ReactDOM.render(
      <Provider store={store}>
        <Sellers />
      </Provider>,
       div)
  })


})

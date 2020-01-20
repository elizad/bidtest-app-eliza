import React from 'react'
import ReactDOM from 'react-dom'
import Competitions from '../pages/Competitions'
import configureStore from '../store'
import { Provider } from 'react-redux'
import fetchMock from 'fetch-mock'
import expect from 'expect'
import competitionsReducer from '../store/reducers/competitions'

describe('render store without crashing', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })
  it('should return the initial state', () => {
    expect(competitionsReducer([], [])).toEqual([])
  })

  it('render provider store competitions without crashing provider render', () => {
    const div = document.createElement('div')
    const store = configureStore()
    ReactDOM.render(
      <Provider store={store}>
        <Competitions />
      </Provider>,
       div)
  })

})

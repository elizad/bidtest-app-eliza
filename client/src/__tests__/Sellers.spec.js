import React from 'react'
import { render } from '@testing-library/react'
import ReactDOM from 'react-dom'
import Sellers from "../pages/Sellers"
import configureStore from '../store'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../store/actions'
import * as types from '../store/types'
import fetchMock from 'fetch-mock'
import expect from 'expect' // You can use any testing library
import sellersReducer from '../store/reducers/sellers'
const middleware = [thunk]
const mockStore = configureMockStore(middleware)



describe('render store without crashing', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('should return the initial state', () => {
    expect(sellersReducer([], [])).toEqual([]);
  })

  it("render store without crushing", () => {
    const div = document.createElement("div");
    const store = configureStore()
    ReactDOM.render(
      <Provider store={store}>
        <Sellers />
      </Provider>,
       div)
  })

  it('get requests is passed', () => {

  const store = mockStore({})

  const expectedAction = {
    type: types.sellers.SET_SELLERS,
    res: [{id: 1, name: 'something'}]
  }
  expect(actions.sellers.setSellers([{id: 1, name: 'something'}])).toEqual(expectedAction)
  })
});

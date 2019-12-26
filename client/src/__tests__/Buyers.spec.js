import React from 'react'
import { render } from '@testing-library/react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Buyers from "../pages/Buyers"
import configureStore from '../store'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../store/actions'
import * as types from '../store/types'
import fetchMock from 'fetch-mock'
import expect from 'expect' // You can use any testing library
import buyersReducer from '../store/reducers/buyers'
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)



describe('render store without crushing', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })
  it('should return the initial state', () => {
    expect(buyersReducer([], [])).toEqual([]);
  });

  it("render store without crushing", () => {
    const div = document.createElement("div");
    const store = configureStore()
    ReactDOM.render(
      <Provider store={store}>
        <Buyers/>
      </Provider>,
       div);
  })
  it('get Requets is passed', () => {

  const store = mockStore({})

  const expectedAction = {
    type: types.buyers.SET_BUYERS,
    res: [{id: 1, name: 'something'}]
  }
  expect(actions.buyers.setBuyers([{id: 1, name: 'something'}])).toEqual(expectedAction)
  })
});

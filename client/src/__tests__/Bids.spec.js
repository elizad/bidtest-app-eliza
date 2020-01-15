import React from 'react'
import { render } from '@testing-library/react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Bids from "../pages/Bids";
import configureStore from '../store'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../store/actions'
import * as types from '../store/types'
import fetchMock from 'fetch-mock'
import expect from 'expect' // You can use any testing library
import bidsReducer from '../store/reducers/bids'
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)



describe('render store without crushing', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })
  it('should return the initial state', () => {
    expect(bidsReducer([], [])).toEqual([]);
  })

  it("render store without crashing", () => {
    const div = document.createElement("div");
    const store = configureStore()
    ReactDOM.render(
      <Provider store={store}>
        <Bids/>
      </Provider>,
       div);
  })
  it('get Requests is passed', () => {

    const store = mockStore({})

    const expectedAction = {
      type: types.bids.SET_BIDS,
      res: [{id: 1, name: 'something'}]
    }
    expect(actions.bids.setBids([{id: 1, name: 'something'}])).toEqual(expectedAction)
  })
});

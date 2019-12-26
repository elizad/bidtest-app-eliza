import React from 'react'
import { render } from '@testing-library/react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Competitions from "../pages/Competitions"
import configureStore from '../store'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../store/actions'
import * as types from '../store/types'
import fetchMock from 'fetch-mock'
import expect from 'expect' // You can use any testing library
import competitionsReducer from '../store/reducers/competitions'
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)



describe('render store without crushing', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })
  it('should return the initial state', () => {
    expect(competitionsReducer([], [])).toEqual([]);
  });

  it("render store without crushing", () => {
    const div = document.createElement("div");
    const store = configureStore()
    ReactDOM.render(
      <Provider store={store}>
        <Competitions/>
      </Provider>,
       div);
  })
  it('get Requets is passed', () => {

  const store = mockStore({})

  const expectedAction = {
    type: types.competitions.SET_COMPETITIONS,
    res: [{id: 1, name: 'something'}]
  }
  expect(actions.competitions.setCompetitions([{id: 1, name: 'something'}])).toEqual(expectedAction)
  })
});

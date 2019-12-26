import React from 'react'
import { render } from '@testing-library/react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import configureStore from '../store'
import { Provider } from 'react-redux'

const store = configureStore()

it("store configured without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
    </Provider>,
     div);
});

import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from '../store'
import { Provider } from 'react-redux'

const store = configureStore()

it('provider main store render without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider store={store} />,
     div)
})

import React from 'react'
import ReactDOM from 'react-dom'
import Layout from '../Layouts/PageLayout/index.js'


it('renders the Nav layout without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Layout />, div)
})


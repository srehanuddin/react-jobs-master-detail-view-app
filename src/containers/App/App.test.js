import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createMemoryHistory } from 'history'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import App from './index'
import store from '../../store'

// Test App Component
describe('<App/>', () => {

  // Test App
  it('should test the app is running properly without crashing', () => {
    const history = createMemoryHistory()
    const { container, getByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    )
    expect(container.innerHTML).toMatch('Job List')
  })

  it('should test the routing of application', () => {
    const history = createMemoryHistory()
    history.push('/')
    const { container, getByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    )
    expect(container.innerHTML).toMatch('Job List')

    history.push('/job/1')
    expect(container.innerHTML).toMatch('Job Detail')
  })
})

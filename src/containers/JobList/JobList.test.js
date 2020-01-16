import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createMemoryHistory } from 'history'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import App from './index'
import JobList from './'
import store from '../../store'

// Test Job Component
describe('<JobList/> Component', () => {

  // Click on job to view detail
  it('should test that job list is populated', () => {
    const history = createMemoryHistory()

    // Mock job api response to store
    store.dispatch({type: 'FETCH_JOBS_SUCCESS', payload: [{
      'id': 1,
      'title': 'Senior Frontend Developer',
      'description': 'Comfortable with modern JS stack, should have 3+ years of experience with React.',
      'employment_type': 'full_time'
    }]})

    const { container, getByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    )
    expect(container.innerHTML).toMatch('Senior Frontend Developer')
  })

  // Click on job to view detail
  it('should test the that app has routed to clicked job from jobs list', () => {
    const history = createMemoryHistory()

    store.dispatch({type: 'FETCH_JOBS_SUCCESS', payload: [{
      'id': 1,
      'title': 'Senior Frontend Developer',
      'description': 'Comfortable with modern JS stack, should have 3+ years of experience with React.',
      'employment_type': 'full_time'
    }]})

    const { container, getByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    )
    expect(container.innerHTML).toMatch('Senior Frontend Developer')

    fireEvent.click(getByText(/Senior Frontend Developer/i))
    expect(history.location.pathname).toBe('/job/1')
  })
})

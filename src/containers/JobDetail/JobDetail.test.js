import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createMemoryHistory } from 'history'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import App from './index'
import JobDetail from './'
import store from '../../store'

describe('<JobDetail/>', () => {
  it('should test detail page populated', () => {
    const history = createMemoryHistory()

    const { container, getByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    )

    history.push('/job/1')

    store.dispatch({type: 'FETCH_JOB_DETAIL_SUCCESS', payload: {
      'id': 1,
      'title': 'Senior Frontend Developer',
      'description': 'Comfortable with modern JS stack, should have 3+ years of experience with React.',
      'employment_type': 'full_time'
    }})

    expect(container.innerHTML).toMatch('Senior Frontend Developer')
  })
})

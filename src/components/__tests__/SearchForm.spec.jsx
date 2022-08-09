import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from '../../store/store'
import SearchForm from '../SearchForm/SearchForm'

describe('SearchForm component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SearchForm />
        </BrowserRouter>
      </Provider>
    )
  })

  it('should change input value', () => {
    const input = screen.getByTestId('input')

    userEvent.type(input, 'Pikachu')
    expect(input).toHaveValue('Pikachu')
  })
})

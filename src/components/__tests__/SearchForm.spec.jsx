import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchForm from '../SearchForm/SearchForm'

describe('SearchForm component', () => {
  beforeEach(() => {
    render(<SearchForm />)
  })

  it('should change input value', () => {
    const input = screen.getByTestId('input')

    userEvent.type(input, 'Pikachu')
    expect(input).toHaveValue('Pikachu')
  })
})

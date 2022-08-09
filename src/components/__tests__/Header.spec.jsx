import * as router from 'react-router-dom'
import * as redux from 'react-redux'
import Header from '../Header'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const navigate = jest.fn()

describe('Header component', () => {
  const mockedState = {
    loading: {
      value: false
    },
    pokedex: {
      pokemons: [1, 2, 3]
    }
  }

  beforeEach(() => {
    redux.useSelector.mockImplementation((callback) => {
      return callback(mockedState)
    })
    jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
  })

  it('should navigate to home if click on the logo', () => {
    const { getByTestId } = render(<Header />)
    const logo = getByTestId('logo')

    userEvent.click(logo)
    expect(navigate).toHaveBeenCalledWith('/')
  })

  it('should navigate to pokemon page if click on the pokeball', () => {
    const { getByTestId } = render(<Header />)
    const pokeball = getByTestId('pokeball')

    userEvent.click(pokeball)
    expect(navigate).toHaveBeenCalled()
  })

  it('should has the correct count pokemons from pokedex', () => {
    const { getByTestId } = render(<Header />)
    const pokedex = getByTestId('count-pokemons')

    expect(pokedex).toHaveTextContent('3')
  })
})

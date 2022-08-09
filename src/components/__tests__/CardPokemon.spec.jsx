import { render, screen } from '@testing-library/react'
import * as router from 'react-router-dom'
import CardPokemon from '../CardPokemon'
import * as redux from 'react-redux'
import userEvent from '@testing-library/user-event'

const data = {
  name: 'bulbasaur',
  id: 1,
  types: [
    {
      slot: 1,
      type: {
        name: 'grass'
      }
    },
    {
      slot: 2,
      type: {
        name: 'poison'
      }
    }
  ],
  sprites: {
    other: {
      'official-artwork': {
        front_default: 'bulbasaur.png'
      }
    }
  }
}

const data2 = {
  ...data,
  id: 2
}

const navigate = jest.fn()

describe('CardPokemon component', () => {
  const mockedState = {
    loading: {
      value: false
    },
    pokedex: {
      pokemons: [1]
    }
  }

  beforeEach(() => {
    redux.useSelector.mockImplementation((callback) => {
      return callback(mockedState)
    })
    jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
  })

  it('should render correctly', () => {
    render(<CardPokemon data={data} />)

    const number = screen.getByTestId('number')
    const photo = screen.getByTestId('photo')
    const name = screen.getByTestId('name')
    const types = screen.getAllByTestId('type')

    expect(number).toHaveTextContent('#001')
    expect(photo).toHaveAttribute('src', 'bulbasaur.png')
    expect(name).toHaveTextContent('bulbasaur')
    expect(types).toHaveLength(2)
    expect(types[0]).toHaveTextContent('grass')
    expect(types[1]).toHaveTextContent('poison')
  })

  it('should render pokeball if is not caught only', async () => {
    const { rerender, queryByTestId } = render(<CardPokemon data={data} />)

    expect(queryByTestId('pokeball')).not.toBeInTheDocument()

    rerender(<CardPokemon data={data2} />)
    expect(queryByTestId('pokeball')).toBeInTheDocument()
  })

  it('should render remove button if is caught only', () => {
    const { rerender, queryByTestId } = render(<CardPokemon data={data} />)

    expect(queryByTestId('remove-button')).toBeInTheDocument()

    rerender(<CardPokemon data={data2} />)
    expect(queryByTestId('remove-button')).not.toBeInTheDocument()
  })

  it('should navigate to pokemon page', () => {
    const { getByTestId } = render(<CardPokemon data={data} />)

    const card = getByTestId('card')

    userEvent.click(card)

    expect(navigate).toHaveBeenCalledWith('/pokemon/bulbasaur')
  })
})

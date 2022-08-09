import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import CardPokemon from '../CardPokemon'

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

describe('CardPokemon component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <CardPokemon data={data} />
      </BrowserRouter>
    )
  })

  it('should render correctly', () => {
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
})

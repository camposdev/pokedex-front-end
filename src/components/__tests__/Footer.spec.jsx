import { render, screen } from '@testing-library/react'
import Footer from '../Footer'

describe('Footer component', () => {
  it('should render correctly', () => {
    render(<Footer />)
    expect(screen.getByText('Pokedex by Felipe Campos')).toBeInTheDocument()
  })
})

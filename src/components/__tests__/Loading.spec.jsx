import { render, screen } from '@testing-library/react'
import Loading from '../Loading'

describe('Loading component', () => {
  it('should render correctly', () => {
    render(<Loading />)
    expect(screen.getByTestId('pokeball')).toBeInTheDocument()
  })
})

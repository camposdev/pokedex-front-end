import { render, screen } from '@testing-library/react'
import Button from '../Button'

describe('Button component', () => {
  it('should render correctly', () => {
    render(<Button>Load more</Button>)
    expect(screen.getByText('Load more')).toBeInTheDocument()
  })

  it('should have correctly style', () => {
    const { getByText, rerender } = render(<Button variant="small">Remove</Button>)

    expect(getByText('Remove')).toHaveStyleRule('font-size', '1rem')
    expect(getByText('Remove')).toHaveStyleRule('padding', '2px 15px')

    rerender(<Button>Load more</Button>)

    expect(getByText('Load more')).toHaveStyleRule('font-size', '1.6rem')
    expect(getByText('Load more')).toHaveStyleRule('padding', '10px 40px')
  })
})

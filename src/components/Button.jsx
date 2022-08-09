import styled, { css } from 'styled-components'
import { palette, prop, switchProp } from 'styled-tools'

const Button = ({ variant, children, ...props }) => {
  return (
    <S.Button variant={variant} {...props}>
      {children}
    </S.Button>
  )
}

export default Button

const S = {}

S.Button = styled.button`
  border: 0;
  background-color: ${palette('red')};
  color: ${palette('white')};
  font-weight: 700;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${palette('redHover')};
  }

  ${switchProp(prop('variant', 'large'), {
    small: css`
      padding: 2px 15px;
      font-size: 1rem;
      border-radius: 4px;
    `,
    large: css`
      padding: 10px 40px;
      font-size: 1.6rem;
      border-radius: 6px;
    `
  })}
`

import theme from '../theme'

test('snapshot theme', () => {
  expect(theme).toMatchSnapshot()
})

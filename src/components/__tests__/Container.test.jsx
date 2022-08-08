import renderer from 'react-test-renderer'
import Container from '../Container'

test('renders Container component correctly', () => {
  const tree = renderer.create(<Container />).toJSON()

  expect(tree).toMatchSnapshot()
})

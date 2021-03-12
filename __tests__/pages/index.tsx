import {render} from '../testUtils'
import {Home} from '@/pages/index'

test('matches snapshot', () => {
  const {asFragment} = render(<Home />)

  expect(asFragment()).toMatchSnapshot()
})

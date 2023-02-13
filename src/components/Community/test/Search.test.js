import { render } from 'react-dom';
import { screen } from '@testing-library/react';

import Search from '../Search/Search';

test('when I click Input in Search Form', () => {
  render(<Search />);
});

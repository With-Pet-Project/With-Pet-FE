import { render } from 'lib/test-utils/test-utils';
import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import UserEvent from '@testing-library/user-event';

import Search from '../Search/Search';

test('when I focus on Input in Search Form', async () => {
  /* const user = UserEvent.setup();
  render(<Search focus />, { wrapper: BrowserRouter });

  const searchInput = screen.getByRole('textbox', {
    name: '',
  });

  const nullHistoryHeader = screen.queryByRole('heading', {
    name: '최근 검색어',
  });

  await user.click(searchInput);

  const historyHeader = screen.getByRole('heading', {
    name: '최근 검색어',
  }); */
});

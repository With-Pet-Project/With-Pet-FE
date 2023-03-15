import { render } from 'lib/test-utils/test-utils';
import { screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';

import Search from './Search';

describe('Search Test (검색기록 저장 및 삭제)', () => {
  test('when I focus on Input in Search Form', async () => {
    const user = UserEvent.setup();
    render(<Search focus />);

    const searchInput = screen.getByRole('textbox', {
      name: '',
    });

    const nullHistoryHeader = screen.queryByRole('heading', {
      name: '최근 검색어',
    });
    expect(nullHistoryHeader).not.toBeInTheDocument();

    await user.click(searchInput);

    const historyHeader = screen.getByRole('heading', {
      name: '최근 검색어',
    });

    expect(historyHeader).not.toBeInTheDocument();
  });
});

import { render } from 'lib/test-utils/test-utils';
import { screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';

import Search from './Search';

describe('Search Test (검색기록 저장 및 삭제)', () => {
  test('검색창 클릭, 검색어 입력 => 최근 검색어 저장 및 삭제 테스트', async () => {
    const user = UserEvent.setup();
    render(<Search />);

    const searchInput = screen.getByRole('textbox', {
      name: '검색어 입력창',
    });

    const nullHistoryHeader = screen.queryByRole('heading', {
      name: '최근 검색어',
    });
    expect(nullHistoryHeader).not.toBeInTheDocument();

    await user.click(searchInput);

    const historyHeader = screen.getByRole('heading', {
      name: '최근 검색어',
    });

    await user.type(searchInput, '테스트{Enter}');
    await user.click(searchInput);

    const searchResult = screen.getByText('테스트');
    expect(searchResult).toBeInTheDocument();

    const XButton = screen.getByTitle('X button');
    await user.click(XButton);

    expect(searchResult).not.toBeInTheDocument();
  });
});

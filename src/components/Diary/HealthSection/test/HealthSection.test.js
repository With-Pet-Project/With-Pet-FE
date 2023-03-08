import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import HealthSection from '../HealthSection';

test('편집 버튼 클릭시, HealthContent 수정가능', async () => {
  // 서버 완성되면 추가 구현
  /*
  render(<HealthSection />, { wrapper: BrowserRouter });
  const user = userEvent.setup();

  const editButton = screen.getByRole('button', { name: '편집' });
  const nullInput = screen.queryAllByRole('textbox');

  await user.click(editButton);
  expect(editButton).toHaveTextContent('저장');

  const input = screen.getAllByRole('textbox');
  input.map(elem => expect(elem).toBeInTheDocument());
  * */
});

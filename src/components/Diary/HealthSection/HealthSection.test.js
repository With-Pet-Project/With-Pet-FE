import { render } from 'lib/test-utils/test-utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HealthSection from './HealthSection';

test('편집 버튼 클릭시, HealthContent 수정가능', async () => {
  render(<HealthSection />);
  const user = userEvent.setup();

  const button = screen.getByRole('button', { name: '편집' });
  const nullInput = screen.queryAllByRole('textbox');

  await user.click(button);
  expect(button).toHaveTextContent('저장');

  const input = screen.getAllByRole('textbox');
  input.map(elem => expect(elem).toBeInTheDocument());

  await user.click(button);
  expect(button).toHaveTextContent('편집');

  screen.queryAllByAltText('textbox');
});

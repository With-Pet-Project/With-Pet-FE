import { render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';

import SpecialNoteSection from '../SpecialNoteSection';

test('편집 버튼 클릭 시, 저장 버튼으로 바뀌고, textarea 수정 가능', async () => {
  render(<SpecialNoteSection />);
  const user = UserEvent.setup();

  const editButton = screen.getByRole('button', { name: '편집' });
  const textArea = screen.getByRole('textbox');

  expect(textArea).toBeDisabled();

  await user.click(editButton);
  expect(editButton).toHaveTextContent('저장');
  expect(textArea).toBeEnabled();
});

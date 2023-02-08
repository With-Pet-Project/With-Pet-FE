import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Challenge from '../Challenge';
import { ModalControllerProvider } from '../context/modalController';

test("when I click button '추가하기'", async () => {
  const user = userEvent.setup();
  render(<Challenge />, { wrapper: ModalControllerProvider });

  const AddButton = screen.getByRole('button', { name: '추가하기' });
  await user.click(AddButton);

  const AddHeader = screen.getByRole('heading', { name: '챌린지 추가하기' });
});

test("when I click button '챌린지 목록'", () => {});

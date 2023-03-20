import { render } from 'lib/test-utils/test-utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useMutation } from '@tanstack/react-query';
import AddChallenge from './AddChallenge';

jest.mock('@tanstack/react-query', () => ({
  ...jest.requireActual('@tanstack/react-query'),
  useMutation: jest.fn(),
}));

describe('챌린지 추가하기 모달창 test', () => {
  test('추가하기 활성화 여부', async () => {
    const user = userEvent.setup();
    const mutateMock = jest.fn();

    useMutation.mockImplementation(() => ({ mutate: mutateMock }));

    render(<AddChallenge />);

    const AddButton = screen.getByRole('button', { name: '추가하기' });
    expect(AddButton).toBeDisabled();

    const title = screen.getByTestId('title');
    await user.click(title);
    await user.keyboard('산책하기');

    expect(AddButton).toBeEnabled();

    await user.click(AddButton);
    expect(mutateMock).toHaveBeenCalled();
  });
});

import { render } from 'lib/test-utils/test-utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useMutation } from '@tanstack/react-query';
import AddPet from './AddPet';

jest.mock('@tanstack/react-query', () => ({
  ...jest.requireActual('@tanstack/react-query'),
  useMutation: jest.fn(),
}));

describe('펫 추가하기 모달 test', () => {
  test('추가하기 버튼 활성화 여부 및 mutate 호출 test', async () => {
    const user = userEvent.setup();
    const mutateMock = jest.fn();
    useMutation.mockImplementation(() => ({
      mutate: mutateMock,
    }));

    render(<AddPet />);

    const AddButton = screen.getByRole('button', { name: '추가하기' });
    expect(AddButton).toBeDisabled();

    const petName = screen.getByTestId('petName');

    await user.click(petName);
    await user.keyboard('호식이');

    expect(AddButton).toBeDisabled();

    const weight = screen.getByTestId('weight');
    await user.click(weight);
    await user.keyboard('3.1');

    expect(AddButton).toBeEnabled();
  });
});

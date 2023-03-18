import { render } from 'lib/test-utils/test-utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { useMutation } from '@tanstack/react-query';
import DiaryHeader from './DiaryHeader';
import { usePet } from '../hooks/usePet';

jest.mock('@tanstack/react-query', () => ({
  ...jest.requireActual('@tanstack/react-query'),
  useMutation: jest.fn(),
}));
jest.mock('../hooks/usePet');

describe('DiaryHeader 기능 테스트', () => {
  test('펫이 없는 경우', () => {
    const mutateMock = jest.fn();
    useMutation.mockReturnValue({ mutate: mutateMock });
    usePet.mockImplementation(() => []);
    render(<DiaryHeader />);

    const disabledButton = screen.getByRole('button', {
      name: /반려동물 없음/,
    });

    expect(disabledButton).toBeDisabled();
  });
  /** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
  /** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
  /** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
  test('반려동물 삭제하기(mutate 호출)', async () => {
    const user = userEvent.setup();
    window.confirm = jest.fn(() => true);
    const mutateMock = jest.fn();
    useMutation.mockReturnValue({ mutate: mutateMock });
    usePet.mockImplementation(() => [
      {
        id: 96,
        name: '호식이',
        initWeight: 5,
        birthday: '2019-03-01',
      },
      {
        id: 97,
        name: '육식이',
        initWeight: 3,
        birthday: '2018-03-01',
      },
    ]);

    render(<DiaryHeader />);

    const enabledButton = screen.getByRole('button', {
      name: '호식이 2019년 03월 01일 - 4세',
    });
    await user.click(enabledButton);

    const deleteButton = screen.getByTestId('호식이 delete button');
    expect(deleteButton).toBeInTheDocument();
    await user.click(deleteButton);

    expect(mutateMock).toHaveBeenCalled();
  });
  /** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
  /** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
  /** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
  test('펫이 있는 경우', async () => {
    const user = userEvent.setup();
    const mutateMock = jest.fn();
    useMutation.mockReturnValue({ mutate: mutateMock });
    usePet.mockImplementation(() => [
      {
        id: 96,
        name: '호식이',
        initWeight: 5,
        birthday: '2019-03-01',
      },
      {
        id: 97,
        name: '육식이',
        initWeight: 3,
        birthday: '2018-03-01',
      },
    ]);

    render(<DiaryHeader />);

    const enabledButton = screen.getByRole('button', {
      name: '호식이 2019년 03월 01일 - 4세',
    });

    await user.click(enabledButton);

    const petInfoListItem = screen.getAllByRole('listitem');
    expect(petInfoListItem).toHaveLength(2);
  });
});

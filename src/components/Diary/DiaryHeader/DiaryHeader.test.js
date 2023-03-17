import { render } from 'lib/test-utils/test-utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import useConfirm from 'components/common/hooks/useConfirm';
import DiaryHeader from './DiaryHeader';
import PetInfo from './PetInfo/PetInfo';
import { usePet } from '../hooks/usePet';

jest.mock('../hooks/usePet');
jest.mock('components/common/hooks/useConfirm');

describe('DiaryHeader 기능 테스트', () => {
  test('펫이 없는 경우', () => {
    usePet.mockImplementation(() => []);
    render(<DiaryHeader />);

    const disabledButton = screen.getByRole('button', {
      name: /반려동물 없음/,
    });

    expect(disabledButton).toBeDisabled();
  });
  test('펫이 있는 경우', async () => {
    const user = userEvent.setup();
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
  test('반려동물 삭제하기', () => {
    const user = userEvent.setup();
    useConfirm.mockImplementation((f, text) => f());
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
  });
  test('반려동물 추가하기', () => {});
});

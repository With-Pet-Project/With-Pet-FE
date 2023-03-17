import { render } from 'lib/test-utils/test-utils';
import { screen } from '@testing-library/react';
import { useUser } from 'components/auth/hooks/useUser';
import userEvent from '@testing-library/user-event';
import Sidebar from './Sidebar';

jest.mock('components/auth/hooks/useUser');

jest.mock('components/auth/hooks/useLogout', () => ({
  useLogout: () => ({}),
}));

afterEach(() => {
  useUser.mockReset();
});

describe('Side Bar acting as a navigation bar', () => {
  test('renders a navigation bar with `로그아웃, 유저 정보` When I logged in', async () => {
    const user = userEvent.setup();
    useUser.mockImplementation(() => ({
      nickName: '닉네임',
      email: 'mock@gmail.com',
    }));

    render(<Sidebar />);

    const sidebar = screen.getByTestId('sidebar');
    await user.hover(sidebar);

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(6);

    const logout = screen.getByText('로그아웃');

    const homeLink = screen.getByText('홈');
    const diaryLink = screen.getByText('다이어리');
    const accountLink = screen.getByText('가계부');
    const communityLink = screen.getByText('커뮤니티');
    const hospitalLink = screen.getByText('내 주변 병원 찾기');
    const myPageLink = screen.getByText('마이 페이지');

    expect(homeLink).toBeInTheDocument();
    expect(diaryLink).toBeInTheDocument();
    expect(accountLink).toBeInTheDocument();
    expect(communityLink).toBeInTheDocument();
    expect(hospitalLink).toBeInTheDocument();
    expect(myPageLink).toBeInTheDocument();
    expect(logout).toBeInTheDocument();

    const nickName = screen.getByText('닉네임');
    const img = screen.getByRole('img', { name: /dog-img/i });
    const email = screen.getByText('mock@gmail.com');

    expect(nickName).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });

  test('renders a navigtaion bar with `로그인, 로그인을 진행해주세요` When I logged out', async () => {
    const user = userEvent.setup();
    useUser.mockReturnValue(false);
    render(<Sidebar />);

    const sidebar = screen.getByTestId('sidebar');
    await user.hover(sidebar);

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(6);

    const login = screen.getByText('로그인');
    expect(login).toBeInTheDocument();

    const plzLogin = screen.getByText('로그인을 진행해주세요');
    expect(plzLogin).toBeInTheDocument();
  });
});

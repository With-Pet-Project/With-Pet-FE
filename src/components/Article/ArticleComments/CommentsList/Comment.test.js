import { render } from 'lib/test-utils/test-utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useUser } from 'components/auth/hooks/useUser';
import Comment from './Comment';

jest.mock('components/auth/hooks/useUser');

test('Comment 컴포넌트 수정 버튼 클릭 시, textArea생성 및 소멸', async () => {
  const comment = {
    commentId: 13,
    profileImg: null,
    nickName: '닉네임',
    createdTime: '2023-03-07T05:12:40.982348',
    modifiedTime: '2023-03-07T06:34:47.145994',
    content: '댓글 테스트',
  };

  useUser.mockReturnValue({
    nickName: '닉네임',
  });

  const user = userEvent.setup();

  render(<Comment comment={comment} />);

  const commentText = screen.getByText('댓글 테스트');
  const editButton = screen.getByRole('button', { name: '수정' });

  await user.click(editButton);

  const editTextArea = screen.getByRole('textbox');
  await user.click(editTextArea);
  await user.keyboard('댓글을 수정했습니다.');
  await user.click(editButton);

  screen.queryByRole('textbox');
});

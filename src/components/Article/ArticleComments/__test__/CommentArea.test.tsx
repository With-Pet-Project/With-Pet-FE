import { render } from 'lib/test-utils/test-utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CommentArea from '../CommentArea/CommentArea';

describe('CommentArea 테스트', () => {
  let comment = '샘플 코멘트';

  test('Comment입력 시, handleCommentValue가 호출되는지 테스트', async () => {
    const user = userEvent.setup();
    const mockhandleComment = jest
      .fn()
      .mockImplementation((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        comment = e.target.value;
      });

    render(
      <CommentArea comment={comment} handleCommentValue={mockhandleComment} />,
    );

    const textArea = screen.getByRole('textbox');
    await user.click(textArea);
    await user.keyboard('키보드 누르기');

    expect(mockhandleComment).toHaveBeenCalled();
  });
});

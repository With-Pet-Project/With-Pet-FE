import { screen, within } from '@testing-library/react';
import { render } from 'lib/test-utils/test-utils';
import userEvent from '@testing-library/user-event';
import ReactDOM from 'react-dom';
import Challenge from '../ChallengeSection/Challenge/Challenge';

describe('Popvoer AddChallenge', () => {
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element, node) => {
      return element;
    });
  });

  afterEach(() => {
    ReactDOM.createPortal.mockClear();
  });

  test("when I click button '추가하기'", async () => {
    const user = userEvent.setup();
    render(<Challenge />);

    const AddButton = screen.getByRole('button', { name: '추가하기' });
    await user.click(AddButton);
  });
});

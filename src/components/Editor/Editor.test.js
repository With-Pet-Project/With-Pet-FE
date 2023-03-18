import { render } from 'lib/test-utils/test-utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Editor from './Editor';

describe('Editor test', () => {
  test('Editor 태그에 따른 지역선택 selector활성화 여부 테스트', async () => {
    const user = userEvent.setup();

    render(<Editor />);

    const tagSelector = screen.getByRole('combobox', { name: '태그' });
    await user.click(tagSelector);

    const locationSelector = screen.getByRole('button', { name: '지역' });
    expect(locationSelector).toBeDisabled();

    const options = screen.getAllByRole('option');

    await user.click(options[1]);
    expect(locationSelector).toBeEnabled();

    await user.click(options[2]);
    expect(locationSelector).toBeEnabled();

    await user.click(options[3]);
    expect(locationSelector).toBeDisabled();

    await user.click(options[4]);
    expect(locationSelector).toBeDisabled();

    await user.click(options[5]);
    expect(locationSelector).toBeEnabled();

    await user.click(options[6]);
    expect(locationSelector).toBeDisabled();
  });
});

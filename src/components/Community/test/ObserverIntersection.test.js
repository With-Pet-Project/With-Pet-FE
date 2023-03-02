import { render } from 'lib/test-utils/test-utils';
import { screen } from '@testing-library/react';
import {
  mockAllIsIntersecting,
  intersectionMockInstance,
} from 'react-intersection-observer/test-utils';
import ArticleList from '../ArticleList/ArticleList';

test('check inView is true.', async () => {
  render(<ArticleList />);
  const inViewNode = screen.getByTestId('inView');

  mockAllIsIntersecting(true);
  screen.getByRole('log', { name: 'true' });

  const instance = intersectionMockInstance(inViewNode);

  expect(instance.observe).toHaveBeenCalledWith(inViewNode);
});

/* eslint-disable no-console */
import { render, screen } from '@testing-library/react';
import { Queryclient, QueryClientProvider } from '@tanstack/react-query';

const queryTestClient = new Queryclient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
  logger: {
    log: console.log,
    warn: console.warn,
    error: process.env.NODE_ENV === 'test' ? () => {} : console.error,
  },
});

const renderWithQueryClient = (ui, client) => {
  const queryClient = client ?? queryTestClient();

  return render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>,
  );
};

export { renderWithQueryClient as render };

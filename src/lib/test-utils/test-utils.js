/* eslint-disable no-console */
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PetIdProvider } from 'components/Diary/context/PetContext';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

const queryTestClient = new QueryClient({
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

function ReactQueryProvider({ children }) {
  return (
    <QueryClientProvider client={queryTestClient}>
      <BrowserRouter>
        <PetIdProvider>{children}</PetIdProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

const renderWithQueryClient = (ui, options) => {
  return render(ui, { wrapper: ReactQueryProvider, ...options });
};

export { renderWithQueryClient as render };

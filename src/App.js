import { useEffect } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import GlobalStyle from './lib/styles/GlobalStyle';
import RootRoute from './routes';
import { queryClient } from './reactQuery/queryClient';

function App() {
  useEffect(() => {
    const fetchFunc = async () => {
      await fetch('/todos')
        .then(response => response.json())
        .then(data => console.log(data));
    };

    fetchFunc();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <RootRoute />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;

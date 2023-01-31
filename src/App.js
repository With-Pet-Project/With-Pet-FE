import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import GlobalStyle from './lib/styles/GlobalStyle';
import RootRoute from './routes';
import { queryClient } from './reactQuery/queryClient';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <RootRoute />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;

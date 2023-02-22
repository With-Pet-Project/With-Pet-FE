import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';
import { queryClient } from 'lib/reactQuery/queryClient';
import GlobalStyle from './lib/styles/GlobalStyle';
import RootRoute from './routes';
import Loading from './components/common/Loading/Loading';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      {/* <Loading /> */}
      <RootRoute />
      <ToastContainer limit={1} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;

import { Layout } from '@components/layout/layout';
import type { AppProps } from 'next/app';
// import { Provider } from 'react-redux';
// import { setupStore } from '../store/store';
import { ErrorBoundary } from '@components/error/errorBoundary/errorBoundary';
import '../styles.css';
import { wrapper } from '../redux/store';
import { Provider } from 'react-redux';

interface PageProps {
  pageProps: {
    id: number;
  };
}
export default function App({ Component, ...rest }: Omit<AppProps, 'pageProps'> & PageProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Layout>
          <Component {...props.pageProps} />
        </Layout>
      </ErrorBoundary>
    </Provider>
  );
}

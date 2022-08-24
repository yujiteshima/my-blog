import { DefaultSeo } from 'next-seo';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import SEO from '../../next-seo.config';
import Layout from '../components/Layout';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import 'prismjs/themes/prism-okaidia.css';
import SEO from '../../next-seo.config';
import { DefaultSeo } from 'next-seo';
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

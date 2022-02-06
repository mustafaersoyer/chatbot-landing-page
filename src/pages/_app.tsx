import { AppProps } from 'next/app';
import '@/styles/global.css';
import '@fontsource/inter';
import ReactGA from 'react-ga';

import { setup } from 'twind';
import twindConfig from '../twind.config';

if (typeof window !== `undefined`) {
  setup(twindConfig);
}

ReactGA.initialize('G-59FTPW4G56');

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

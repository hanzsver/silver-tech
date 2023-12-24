import '../styles/globals.css';
import '../styles/reset.css';
import { pretendard } from '../styles/fonts/pretendard';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${pretendard.className};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

import '../styles/globals.css';
import '../styles/reset.css';
import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/system';
import { ThemeProvider } from 'next-themes';
import { pretendard } from '../styles/fonts/pretendard';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <ThemeProvider enableSystem={true} attribute="class">
        <style jsx global>{`
          html {
            font-family: ${pretendard.className};
          }
        `}</style>
        <Component {...pageProps} />
      </ThemeProvider>
    </NextUIProvider>
  );
}

import { RefObject, useRef, useEffect } from 'react';
import { useTheme } from 'next-themes';

const giscusSetup = {
  id: 'giscus-comment',
  src: 'https://giscus.app/client.js',
  'data-repo': 'hanzsver/silver-tech',
  'data-repo-id': 'R_kgDOK8lpkg',
  'data-category': 'Blog Comment',
  'data-category-id': 'DIC_kwDOK8lpks4Cb-xD',
  'data-mapping': 'title',
  'data-strict': '0',
  'data-reactions-enabled': '1',
  'data-emit-metadata': '0',
  'data-theme': 'light',
  'data-input-position': 'bottom',
  'data-lang': 'ko',
  crossorigin: 'anonymous',
  async: 'true',
};

const useGiscus = <T extends HTMLElement>(giscusRef: RefObject<T>): void => {
  const { theme } = useTheme();

  const initializedRef = useRef<boolean>(false);

  useEffect(() => {
    if (giscusRef.current === null || initializedRef.current || theme === 'system') {
      return;
    }

    const giscusScript = document.createElement('script');

    for (const [key, value] of Object.entries(giscusSetup)) {
      giscusScript.setAttribute(key, value);
    }

    if (theme === 'light') {
      giscusScript.setAttribute('data-theme', 'light');
    } else {
      giscusScript.setAttribute('data-theme', 'noborder_gray');
    }

    giscusRef.current.append(giscusScript);

    initializedRef.current = true;
  }, [giscusRef,theme]);

  useEffect(() => {
    if (theme === 'system') {
      return;
    }

    const giscusIframe =
      document.querySelector<HTMLIFrameElement>('.giscus-frame');

    if (giscusIframe === null) {
      return;
    }

    giscusIframe.contentWindow?.postMessage(
      {
        giscus: {
          setConfig: {
            theme: theme === 'light' ? 'light' : 'noborder_gray',
          },
        },
      },
      'https://giscus.app'
    );
  }, [theme]);
};

export default useGiscus;
import Head from 'next/head';
import metadata from '../data/metadata';
import Header from './Header';
import Footer from './Footer';

const Container = (props) => {
  const meta = {
    title: metadata.title,
    description: metadata.description,
    author: metadata.author,
    ...props.customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:site_name" content={meta.author} />
      </Head>
      <Header />
      <main className={`w-full h-full max-w-screen-md m-auto mb-20`}>
        <div className={`w-11/12 m-auto max-w-[calc(100%_-_48px)] h-full`}>{props.children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Container;

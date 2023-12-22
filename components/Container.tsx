import Head from "next/head";
import metadata from "../data/metadata";
import Header from "./Header";
import Footer from "./Footer";


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
      <main className={`w-full max-w-3xl`}>{props.children}</main>
      <Footer />
    </>
  );
};

export default Container;
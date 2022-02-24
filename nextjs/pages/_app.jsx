import Head from "next/head";
import DefaultLayout from "../layouts/default";
import "modern-normalize";
import "../../shared/stylesheet/main.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Directus Next.js Example</title>
      </Head>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  );
}

export default MyApp;

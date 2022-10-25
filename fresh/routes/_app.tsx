import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import DefaultLayout from "~/layouts/default.tsx";

const CSS = `::selection {
  background-color: #000;
  color: #fff;
}
`;

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        {/* Theme */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
        />        
        <link rel="stylesheet" href="/main.css" />
        <meta name="theme-color" content="#000" />
        {/* Global Styles that couldn't be loaded through Twind */}
        <style>
          {CSS}
        </style>
      </Head>
      <DefaultLayout>
        <Component />
      </DefaultLayout>
    </>
  );
}
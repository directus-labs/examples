import { ErrorBoundary, ErrorComponent, Head, useQueryErrorResetBoundary } from "blitz"
import DefaultLayout from "app/layouts/Default"
import "modern-normalize"
import "../../../shared/stylesheet/main.css"

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>)

  return (
    <>
      <Head>
        <title>Directus Blitz Example</title>
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
      </Head>
      <ErrorBoundary
        FallbackComponent={RootErrorFallback}
        onReset={useQueryErrorResetBoundary().reset}
      >
        {getLayout(<Component {...pageProps} />)}
      </ErrorBoundary>
    </>
  )
}

function RootErrorFallback({ error }) {
  return <ErrorComponent statusCode={error.statusCode || 400} title={error.message || error.name} />
}

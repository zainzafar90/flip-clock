import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preconnect"
          href="https://cdn.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=teko@600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="grid h-full w-full place-content-center overflow-x-hidden bg-primary antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

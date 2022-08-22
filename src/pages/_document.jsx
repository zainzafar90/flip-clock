import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="flex h-full w-full items-center justify-center overflow-x-hidden bg-primary antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

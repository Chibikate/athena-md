import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en"> {/* Sets the language of the document */}
      <Head>
        {/* Add global metadata or styles here */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <Main /> {/* Renders the app's content */}
        <NextScript /> {/* Injects Next.js scripts */}
      </body>
    </Html>
  );
}
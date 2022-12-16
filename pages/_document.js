import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preload" href="/email_icon_blue.png" as="image" />
        </Head>
        <body>
          <Main />
          <div id="popup" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

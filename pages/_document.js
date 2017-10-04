import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet, ThemeProvider, injectGlobal } from 'styled-components';

injectGlobal`
  body {
    font-family: 'Roboto Mono', monospace;
    -webkit-font-smoothing: antialiased;
    line-height: 2em;
  }
  * {
    box-sizing: border-box;
  }
  figure {
    margin: 0;
    padding: 0;
  }
  p {
    font-size: 20px;
  }
`;

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement();
    return (
      <html>
        <Head>
          <title>JSDay Uruguay 2017</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content="Save the date! 24th & 25th November" />
          <link
            type="text/css"
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto+Mono:300,400"
            rel="stylesheet"
          />
          {styleTags}
        </Head>
        <body>
          {main}
          <NextScript />
        </body>
      </html>
    );
  }
}

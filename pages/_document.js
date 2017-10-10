import ReactGA from 'react-ga';
import Router from 'next/router';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet, ThemeProvider, injectGlobal } from 'styled-components';
import theme from '../config/theme';

const GA_TRACKING_ID = 'UA-107592944-1';

Router.onRouteChangeComplete = () => {
  ReactGA.initialize(GA_TRACKING_ID);
  ReactGA.pageview(window.location.pathname);
};

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
  body.fixed-screen {
    height: 100%;
    overflow: hidden;
    width: 100%;
    position: fixed;
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
          <meta property="og:title" content="JSDay Uruguay 2017" />
          <meta
            property="og:description"
            content="A community driven conference for JavaScript developers. Save the date! November 24th & 25th."
          />
          <meta property="og:image" content="/static/js-day.png" />
          <meta property="og:url" content="http://day.js.uy" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:site_name" content="JSDay Uruguay 2017" />
          <meta name="twitter:site" content="@JSDayUY" />
          <meta name="theme-color" content={theme.black} />
          <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
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

          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />

          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || []
            function gtag(){
              dataLayer.push(arguments)
            }
            gtag('js', new Date())
            gtag('config', '${GA_TRACKING_ID}')
          `,
            }}
          />
        </Head>
        <body>
          {main}
          <NextScript />
        </body>
      </html>
    );
  }
}

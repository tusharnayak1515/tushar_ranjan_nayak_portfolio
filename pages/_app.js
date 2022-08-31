import { useEffect, useState } from "react";
import Head from "next/head";
import Router from "next/router";
import Navbar from "../components/Navbar";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Router.events.on("routeChangeStart", () => {
      setLoading(true);
    });

    Router.events.on("routeChangeComplete", () => {
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Head>
        {loading && <title>Tushar Ranjan Nayak</title>}
        <meta name="keywords" content="next, next.js, portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

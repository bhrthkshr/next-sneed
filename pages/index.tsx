import React from "react";
import Head from "next/head";
import "../public/style.scss";
import Container from "../container/container";
import Header from "../container/header/header";
import Footer from "../shared/footer/footer";

const App = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
      <meta charSet="utf-8" />
    </Head>
    
    <Container />

  </div>
);

export default App;

import React from "react";
import "./globals.css";

import { NavBar, Footer } from "../components/componentsindex";

const MyApp = ({ Component, pageProps }) => (
  <div>
    <NavBar>
      <Component {...pageProps} />
    </NavBar>

    <Footer>
      <Component {...pageProps} />
    </Footer>
  </div>
);

export default MyApp;

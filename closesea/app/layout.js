export const metadata = {
  title: "CloseSea",
  description: "Generated by Next.js",
};
import "./styles/globals.css";
import { Suspense } from "react";
import { NavBar, Footer } from "../components/componentsindex";
import { NFTMarketplaceProvider } from "../Context/NFTMarketplaceContext";

const RootLayout = ({ children }) => {
  return (
    <html>
      <head>{/* <link rel="icon" href="/favicon.ico" /> */}</head>
      <body>
        <Suspense>
          <NFTMarketplaceProvider>
            <NavBar />
            {children}
            <Footer />
          </NFTMarketplaceProvider>
        </Suspense>
      </body>
    </html>
  );
};
export default RootLayout;

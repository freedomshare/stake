import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";

import type { AppProps } from "next/app";
import { Footer } from "../component/footer";
import { Header } from "../component/header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;

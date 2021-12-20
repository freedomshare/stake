import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";

import "../styles/globals.css";

import type { AppProps } from "next/app";
import { Footer } from "../component/footer";
import { Header } from "../component/header";

function MyApp({ Component, pageProps }: AppProps) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <ChakraProvider>
                    <Header />
                    <Component {...pageProps} />
                    <Footer />
                </ChakraProvider>
            </Hydrate>
        </QueryClientProvider>
    );
}

export default MyApp;

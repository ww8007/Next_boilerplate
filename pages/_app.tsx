/* eslint-disable react/jsx-props-no-spreading */
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import GlobalStyle from 'GlobalStyle'
import type { AppProps } from 'next/app'
import Head from 'next/head'

// Create a client
const queryClient = new QueryClient()

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=yes, minimal-ui, viewport-fit=cover"
                />
            </Head>
            <GlobalStyle />
            <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
            </QueryClientProvider>
        </>
    )
}

export default MyApp

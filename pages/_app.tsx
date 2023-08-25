import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {

  console.log(".env", process.env.NEXT_PUBLIC_BACKEND_APP + "/graphqqqqqqqql")
  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_BACKEND_APP + '/graphql',
    cache: new InMemoryCache(),
  });
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
      </ApolloProvider>
    </CacheProvider>

  );
}

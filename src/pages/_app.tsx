import {useState} from "react";
import type {AppProps} from 'next/app'
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import {Layout} from "@/layout";
import GlobalStyles from "@/styles/global-styles";

export default function App({Component, pageProps}: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles/>
      <ReactQueryDevtools initialIsOpen={false}/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}

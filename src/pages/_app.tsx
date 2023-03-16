import type { AppProps } from 'next/app'
import {Layout} from "@/layout";
import GlobalStyles from "@/styles/global-styles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

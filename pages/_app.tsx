import { MainContainer } from '../components/MainContainer'
import NextNProgress from 'nextjs-progressbar';
import type { AppProps } from 'next/app'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainContainer>
      <NextNProgress color="#BE8F41" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
      <Component {...pageProps} />
    </MainContainer>
  )
}

export default MyApp

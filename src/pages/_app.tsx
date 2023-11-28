import { BasicLayout } from '@/layout/BasicLayout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <BasicLayout>
    <Component {...pageProps} />
  </BasicLayout>
  )
}

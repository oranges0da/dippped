import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/utils/Layout'
import { RecoilRoot } from 'recoil'
import { ToastProvider } from 'react-toast-notifications'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ToastProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ToastProvider>
    </RecoilRoot>
  ) 
}

export default MyApp
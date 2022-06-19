import { DefaultLayout } from '@/components/layout'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'
import { RecoilRoot } from 'recoil'
import { StyledEngineProvider } from '@mui/material/styles'
import '../styles/globals.css'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>)

  return (
    <RecoilRoot>
      {getLayout(
        <StyledEngineProvider injectFirst>
          <Component {...pageProps} />
        </StyledEngineProvider>,
      )}
    </RecoilRoot>
  )
}

export default App

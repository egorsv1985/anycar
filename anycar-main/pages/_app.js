import '../styles/globals.scss';
import 'swiper/swiper-bundle.min.css'
import { Provider } from 'react-redux'
import { useStore } from '../redux/store'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Head>
        <title>AnyCar</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap" rel="stylesheet" />

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.7.4/dist/css/uikit.min.css" />

        <script src="https://cdn.jsdelivr.net/npm/uikit@3.7.4/dist/js/uikit.min.js" />
        {/* <script src="https://cdn.jsdelivr.net/npm/uikit@3.7.4/dist/js/uikit-icons.min.js" /> */}
      </Head>
        <Component {...pageProps} />
      </Provider>
  )
}

export default MyApp

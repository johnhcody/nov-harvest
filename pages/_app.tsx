import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProps } from 'next/app'
import '../styles/application.scss'

function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default App

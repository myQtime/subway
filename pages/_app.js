// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../styles/css/all.css'

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default MyApp

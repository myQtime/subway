// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import { useState } from 'react'
import GlobalContext from '../provider/GlobalProvider'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../styles/css/all.css'

function MyApp({ Component, pageProps }) {
    const [melody, setMelody] = useState(null)
    const [BGM, setBGM] = useState(null)
    const [BS, setBS] = useState(null)
    const [DR, setDR] = useState(null)

    const globalContextValue = { melody, setMelody, BGM, setBGM, BS, setBS, DR, setDR }
    return (
        <ChakraProvider>
            <GlobalContext.Provider value={globalContextValue}>
                <Component {...pageProps} />
            </GlobalContext.Provider>
        </ChakraProvider>
    )
}

export default MyApp

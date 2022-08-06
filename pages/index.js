import Head from 'next/head'

import TopLogo from '../component/topLogo'
import GoFresh from '../component/GoFresh'
import Step from '../component/Step'
import Footer from '../component/Footer'
import IgBlock from '../component/IgBlock'
import Play from '../component/Play'
import Notice from '../component/Notice'

import { Button, ButtonGroup } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
export default function home() {
    return (
        <div className="overflow-hidden">
            <Head>
                <title>TRAVEL TAIWAN</title>
                <meta name="description" content="TRAVEL TAIWAN" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TopLogo />
            <GoFresh />
            <Step />
            <IgBlock />
            <Play />
            <Notice />
            <Footer />
        </div>
    )
}

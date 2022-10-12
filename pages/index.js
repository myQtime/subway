import Head from 'next/head'

import TopLogo from '/component/topLogo'
import GoFresh from '/component/GoFresh'
import Step from '/component/Step'
import Footer from '/component/Footer'
import Description from '/component/Description'
import Play from '/component/Play'
import Notice from '/component/Notice'

export default function home() {
    return (
        <div className="overflow-hidden">
            <Head>
                <title>SUBWAY</title>
                <meta name="description" content="SUBWAY" />
                <link rel="icon" href="img/favicon/Subway-favicon.png" />
            </Head>
            <TopLogo />
            <GoFresh />
            <Step />
            <Description />
            <Play />
            <Notice />
            <Footer />
        </div>
    )
}

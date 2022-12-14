import Image from 'next/image'
import logo from '/public/img/logo.png'

export default function topLogo() {
    return (
        <>
            <div className="topLogo">
                <div className="topDeco py-2"></div>
                <div className="bg-white">
                    <div className="container-xl d-flex justify-content-center align-items-center py-3">
                        {/* ιιζΎε */}
                        <Image src={logo} alt="Subway" width={400} height={80} draggable="false"></Image>
                    </div>
                </div>
            </div>
        </>
    )
}

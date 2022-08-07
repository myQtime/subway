import Image from 'next/image'
import logo from '../public/img/logo.png'

export default function topLogo() {
    return (
        <>
            <div className="topLogo">
                <div className="topDeco py-2"></div>
                <div className="bg-white">
                    <div className="container-xl d-flex justify-content-center align-items-center py-3">
                        {/* 這邊放圖 */}
                        <Image src={logo} alt="Subway" width={400} height={80}></Image>
                    </div>
                </div>
            </div>
        </>
    )
}

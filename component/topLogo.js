import Image from 'next/image'
import logo from '../public/img/logo.png'

export default function topLogo() {
    return (
        <>
            <div className="topLogo">
                <div className="bg-success py-3"></div>.
                <div className="bg-white text-center">
                    {/* 這邊放圖 */}
                    <Image src={logo} alt="Subway" width={400} height={80}></Image>
                </div>
            </div>
        </>
    )
}

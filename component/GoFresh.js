import Image from 'next/image'
import burger from '../public/img/burger.png'
import note from '../public/img/note.png'
import qrCode from '../public/img/QR.png'

export default function GoFresh() {
    return (
        <>
            <div className="goFresh ">
                <div className="container-xl container-subway  d-flex py-5">
                    <div className="textPart d-flex flex-column d-md-block">
                        <p className="go textLarge text-white mb-3">GO!</p>
                        <p className="fresh textLarge text-white mb-3">FRESH</p>
                        {/* <span className="ms-3">
                            <Image src={note} />
                        </span> */}
                        <div className="burgerPart d-flex d-xl-none align-items-center justify-content-end mb-3">
                            <div className="md-burgerImg">
                                <Image src={burger} draggable="false" />
                            </div>
                        </div>
                        <p className="textLarge text-white text-end text-xl-start mb-2">潛艇堡音樂DJ</p>
                        <p className="textMiddle text-white text-end text-xl-start mb-2">新鮮現做你的潛艇堡單曲</p>
                        <div className="qrCodePart d-none d-xl-flex justify-content-xl-around">
                            <div style={{ width: '30%' }}>
                                <Image src={qrCode} quality={100} layout="intrinsic" draggable="false" />
                            </div>
                            <div className="d-flex flex-column align-items-center justify-content-evenly">
                                <Image
                                    src={note}
                                    layout="fixed"
                                    quality={100}
                                    draggable="false"
                                    width={42.5}
                                    height={50}
                                />

                                <p className="textSmall text-white">到ig創造你的歌曲</p>
                            </div>
                        </div>
                    </div>
                    <div className="burgerPart d-none d-xl-flex flex-column align-items-center justify-content-evenly">
                        <Image src={note} layout="fixed" draggable="false" width={42.5} height={50} />
                        <Image src={burger} draggable="false" />
                    </div>
                </div>
            </div>
        </>
    )
}

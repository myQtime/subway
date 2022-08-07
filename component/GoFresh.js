import Image from 'next/image'
import burger from 'public/img/burger.png'
import note from 'public/img/note.png'

export default function GoFresh() {
    return (
        <>
            <div className="goFresh ">
                <div className="container-xl d-flex">
                    <div className="textPart">
                        <h2 className="textLarge text-white">
                            GO!
                            <br />
                            FRESH{' '}
                            <span>
                                <Image src={note} />
                            </span>
                        </h2>
                        <h2 className="textLarge text-white">潛艇堡音樂DJ</h2>
                        <h4 className="textMiddle text-white">新鮮現做你的潛艇堡單曲</h4>
                        <div className="qrCodePart d-none d-md-flex">
                            <div>
                                <Image src={note} layout="fixed" />
                            </div>
                            <div className="d-flex flex-column align-items-center justify-content-evenly">
                                <Image src={note} layout="fixed" width={42.5} height={50} />

                                <p className="textSmall text-white">到ig創造你的歌曲</p>
                            </div>
                        </div>
                    </div>
                    <div className="burgerPart d-flex flex-column align-items-center justify-content-evenly">
                        <Image src={note} layout="fixed" width={42.5} height={50} />
                        <Image src={burger} />
                    </div>
                </div>
            </div>
        </>
    )
}

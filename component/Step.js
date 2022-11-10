import Image from 'next/image'
import tri from '/public/img/triangle.png'

export default function Step() {
    return (
        <>
            <div className="step container-xl container-subway bg-white">
                <div className="stepLine d-flex flex-column align-items-xl-center py-5">
                    <div className="stepTitle textMiddle text-xl-center ps-5 me-3">
                        <p>秀出自己風格～創造你的SUBWAY獨特口味 </p>
                        <p>有機會獲得Line Point 2000點</p>
                    </div>

                    <div className="triGroup d-flex justify-content-start justify-content-xl-center mt-3 ms-5 me-3">
                        <Image src={tri} width={15} height={21} quality={100} draggable="false" />
                        <Image src={tri} width={15} height={21} quality={100} hidden draggable="false" />
                        <Image src={tri} width={15} height={21} quality={100} draggable="false" />
                        <Image src={tri} width={15} height={21} quality={100} hidden draggable="false" />
                        <Image src={tri} width={15} height={21} quality={100} draggable="false" />
                    </div>

                    <ul className="step123 d-xl-flex justify-content-xl-around text-xl-center mt-5">
                        <li className="d-flex d-xl-block align-items-center mb-4 mb-xl-0">
                            <span className="number ms-5 me-4 mx-xl-3">1</span>
                            <div className="stepText d-flex align-items-xl-center">
                                <p>
                                    依據你的想法搭配音效，
                                    <br />
                                    做出自己的音樂。
                                </p>
                            </div>
                        </li>
                        <li className="d-flex d-xl-block align-items-center mb-4 mb-xl-0">
                            <span className="number ms-5 me-4 mx-xl-3">2</span>
                            <div className="stepText d-flex align-items-center">
                                <p>
                                    點選<span>『拍攝Reels』</span>按鈕
                                    <br />
                                    到IG開始創作你的風格。
                                </p>
                            </div>
                        </li>
                        <li className="d-flex d-xl-block align-items-center mb-4 mb-xl-0">
                            <span className="number ms-5 me-4 mx-xl-3">3</span>
                            <div className="stepText d-flex align-items-center">
                                <p>
                                    創作內容與長度不限，
                                    <br />
                                    需有對嘴說出
                                    <br />『
                                    <span>
                                        This is SUBWAY！
                                        <br className="d-none d-xl-block" />
                                        新鮮現做你的
                                        <br className="d-block d-xl-none" />
                                        獨特風味
                                    </span>
                                    』
                                </p>
                            </div>
                        </li>
                        <li className="d-flex d-xl-block align-items-center mb-4 mb-xl-0">
                            <span className="number ms-5 me-4 mx-xl-3">4</span>
                            <div className="stepText d-flex align-items-center">
                                <p>
                                    <span>影片標記@subwaytw</span>，<br />
                                    文案
                                    <span>
                                        hashtag #GoFresh
                                        <br />
                                        #最新鮮的聲音在SUBWAY
                                        <br />
                                        #SUBWAY現做你的新鮮
                                    </span>
                                    。<br />
                                    發佈Reels後，
                                    <br />將<span>帳號及貼文都設成公開</span>。
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

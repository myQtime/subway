import Image from 'next/image'
import tri from '../public/img/triangle.png'

export default function Step() {
    return (
        <>
            <div className="step container-xl bg-white d-flex flex-column align-items-center py-5">
                <div className="stepTitle textMiddle text-center">
                    <p className="stepTitle">每個食材都是你的創作基礎</p>
                    <p className="stepTitle">打造屬於你的堡、你的歌</p>
                </div>

                <div className="triGroup d-flex justify-content-between mt-3">
                    <Image src={tri} width={15} height={21} quality={100} />
                    <Image src={tri} width={15} height={21} quality={100} hidden />
                    <Image src={tri} width={15} height={21} quality={100} />
                    <Image src={tri} width={15} height={21} quality={100} hidden />
                    <Image src={tri} width={15} height={21} quality={100} />
                </div>

                <ul className="step123 d-flex justify-content-around text-center mt-5">
                    <li>
                        <span className="number">1</span>
                        <div className="stepText d-flex align-items-center">
                            <p>
                                在活動網站
                                <br />
                                依據你的想法搭配音效，
                                <br />
                                做出自己的音樂。
                            </p>
                        </div>
                    </li>
                    <li>
                        <span className="number">2</span>
                        <div className="stepText d-flex align-items-center">
                            <p>將您創作的音樂下載</p>
                        </div>
                    </li>
                    <li>
                        <span className="number">3</span>
                        <div className="stepText d-flex align-items-center">
                            <p>
                                在<span>instagram</span> <br />用<span>Reels</span>上傳你的創作歌曲 <br />並
                                <span>@SUBWAYTW</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

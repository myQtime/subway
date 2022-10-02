import Image from 'next/image'
import logo from '../public/img/logo.png'
import linePoint from '../public/img/linePoint.png'

import { Button, ButtonGroup, Stack, HStack, VStack } from '@chakra-ui/react'

export default function Description() {
    return (
        <>
            <div className="description">
                <div className="container-xl container-subway py-5 d-flex flex-column align-items-center">
                    <div className="descripTitle text-white">GO FRESH 潛艇堡音樂DJ</div>
                    <div className="descripSubTitle">不只好吃 還能朗朗上口</div>
                    <div className="topPart eventTime d-flex flex-column align-items-center mt-4">
                        <div className="tag rounded-pill text-center text-white">活動時間</div>
                        <p className="text-center">即日起至2022/10/31(一) 23:59截止</p>
                    </div>
                    <div className="topPart eventDescrip d-flex flex-column align-items-center mt-4">
                        <div className="tag rounded-pill text-center text-white">活動辦法</div>
                        <p className="text-center">
                            在SUBWAY活動網站創作音樂，
                            <br />
                            並在instagram上船指定的音樂與創作內容影片， 將帳號及貼文都設成公開，
                            <br />並<span>@SUBWAY</span>，標注指定hashtag
                            <span> #GoFresh #最新鮮的聲音在SUBWAY #SUMWAY現做你的新鮮</span>
                            <br />
                            *品牌及參與門市保留最終解釋權及隨時不經通知終止本活動的權利。
                            <br />
                            *SUBWAY®保有解釋及說明之權利。
                        </p>
                    </div>
                    <div className="belowPart d-flex flex-column flex-xl-row align-items-center align-items-xl-stretch">
                        <div className="eventAward position-relative d-flex flex-column align-items-center mt-4">
                            <div className="innerBlock bg-white rounded-3 py-4">
                                <div className="tag rounded-pill text-center text-white position-absolute top-0 start-50 translate-middle">
                                    活動獎品
                                </div>
                                <p className="innerText text-center ">
                                    REELS影片愛心最高前15位
                                    <br />
                                    (不包含SUBWAY邀請創作者)
                                    <br />
                                    可獲得<span>Line Points 2000點</span>
                                    <br />
                                    ※一個帳號擁有一次獲獎機會，共兩項獎金可並存
                                </p>
                                <div className="container-xl d-flex justify-content-center align-items-center py-3 w-50">
                                    {/* 這邊放圖 */}
                                    <Image src={linePoint} alt="Subway" draggable="false" quality={100}></Image>
                                </div>
                            </div>
                        </div>
                        <div className="winningNotice position-relative d-flex flex-column align-items-center mt-4">
                            <div className="innerBlock bg-white rounded-3 py-4">
                                <div className="tag rounded-pill text-center text-white position-absolute top-0 start-50 translate-middle">
                                    中獎名單公告
                                </div>
                                <p className="innerText text-center">
                                    預計於2022/11/15(三)中午12:00前公告於
                                    <br />「<span>SUBWAY Taiwan</span> 」Facebook臉書粉絲團，
                                    <br />
                                    活動小編亦會於Instagramx聯繫中獎者通知中獎
                                </p>
                                <div className="container-xl d-flex justify-content-center align-items-center py-3 px-5">
                                    {/* 這邊放圖 */}
                                    <Image src={logo} alt="Subway" width={400} height={80} draggable="false"></Image>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

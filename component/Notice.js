import Image from 'next/image'
import logoW from '../public/img/logo-w.png'

import { Button, ButtonGroup, Stack, HStack, VStack } from '@chakra-ui/react'

export default function Notice() {
    const makeMusic = () => {
        alert('製作')
    }
    return (
        <>
            <div className="notice">
                <div className="container-xl">
                    <div className="logo-w text-center border-bottom border-5 border-white">
                        {/* 這邊放圖 */}
                        <Image src={logoW} alt="Subway" width={400} height={80}></Image>
                    </div>
                    <div className="noticeTitle text-center text-white">利用SUBWAY 音樂創作 IG REELS</div>
                    <div className="makeMusic d-flex justify-content-center">
                        {' '}
                        <Button className="makeMusic-Btn" size="md" px={20} onClick={makeMusic}>
                            開始製作
                        </Button>
                    </div>
                    <div className="noticeText text-center text-white">
                        <p>活動注意事項:</p>
                        <p>1.此網站提供的音樂皆為SUBWAY Taiwan所有。</p>
                        <p>2.音樂僅開放非商業使用，並需標註SUBWAY Taiwan。</p>
                        <p>3.SUBWAY Taiwan無監督IG REELS影片內容之責任。</p>
                        <p>4.拍攝影片題材若有觸犯法律或違反社會善良風俗之之行為，須由拍攝者承擔法律責任。</p>
                        <p>5.品牌及參與餐廳保留最終解釋權，及隨時不經通知終止本活動的權利。</p>
                        <p>6.圖片僅供參考，餐點依餐廳內實際提供為主，SUBWAY®保有解釋及說明之權利。</p>
                        <p>
                            7.SUBWAY® is a Registered Trademark of SUBWAY IP LLC. © 2022 SUBWAY IP LLC. All Rights
                            Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

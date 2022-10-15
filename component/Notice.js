import { Button, Link } from '@chakra-ui/react'

export default function Notice() {
    return (
        <>
            <div className="notice">
                <div className="container-xl container-subway py-5">
                    <div className="logo-w text-center border-bottom border-5 border-white pb-2"></div>
                    <div className="noticeTitle text-center text-white py-4">
                        利用SUBWAY 音樂
                        <br className="d-md-none" />
                        創作 IG Reels
                    </div>
                    <div className="makeMusic d-flex justify-content-center mt-3 mb-5">
                        <Link href="#DJ" _hover={{ color: 'none' }}>
                            <Button className="makeMusic-Btn" size="md" px={20}>
                                開始製作{' '}
                            </Button>
                        </Link>
                    </div>
                    <div className="noticeText text-center text-white">
                        <p>活動注意事項:</p>
                        <p>1.此網站提供的音樂皆為SUBWAY Taiwan所有。</p>
                        <p>2.音樂僅開放非商業使用，並需標註SUBWAY Taiwan。</p>
                        <p>3.SUBWAY Taiwan無監督IG Reels影片內容之責任。</p>
                        <p>
                            4.拍攝影片題材若有觸犯法律或違反社會善良風俗之行為， <br className="d-md-none" />
                            須由拍攝者承擔法律責任。
                        </p>
                        <p>
                            5.品牌及參與餐廳保留最終解釋權， <br className="d-md-none" />
                            及隨時不經通知終止本活動的權利。
                        </p>
                        <p>
                            6.圖片僅供參考，餐點依餐廳內實際提供為主， <br className="d-md-none" />
                            SUBWAY®保有解釋及說明之權利。
                        </p>
                        <p>
                            7.SUBWAY® is a Registered Trademark of SUBWAY IP LLC. <br className="d-md-none" />© 2022
                            SUBWAY IP LLC. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

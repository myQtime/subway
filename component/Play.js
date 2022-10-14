import Image from 'next/image'

import { useContext } from 'react'
import globalContext from '../provider/GlobalProvider'

import Controller from '/component/Buttons/controller'
import Food from './Buttons/food'
import AlertSideBox from './Buttons/alertSideBox'
import AlertBreadBox from './Buttons/alertBreadBox'
import AlertDownloadBox from './Buttons/alertDownloadBox'

import disk from '/public/img/gif/disk.gif'
import burger from '/public/img/burger.png'
import soundEffect from '/public/img/gif/soundEffect.gif'
import knob from '/public/img/knob.png'
import bread1 from '/public/img/food/bread-1.png'
import bread2 from '/public/img/food/bread-2.png'
import bread3 from '/public/img/food/bread-3.png'
import bread4 from '/public/img/food/bread-4.png'

import main1 from '/public/img/food/main-1.png'
import main2 from '/public/img/food/main-2.png'
import main3 from '/public/img/food/main-3.png'
import main4 from '/public/img/food/main-4.png'

import veg1 from '/public/img/food/veg-1.png'
import veg2 from '/public/img/food/veg-2.png'
import veg3 from '/public/img/food/veg-3.png'
import veg4 from '/public/img/food/veg-4.png'

import sauce1 from '/public/img/food/sauce-1.png'
import sauce2 from '/public/img/food/sauce-2.png'
import sauce3 from '/public/img/food/sauce-3.png'
import sauce4 from '/public/img/food/sauce-4.png'
export default function play() {
    const { melody, BGM, BS, DR, AlertSide, AlertBread, AlertDownload } = useContext(globalContext)

    const breadData = [
        { src: bread1, name: '蜂蜜燕麥', id: 'Honey Oatmeal', audioTrack: 'melody', melody: 'EDM' },
        { src: bread2, name: '小麥麵包', id: 'Wheat', audioTrack: 'melody', melody: 'HipHop' },
        { src: bread3, name: '巴馬乾酪麵包', id: 'Parmesan Oregano', audioTrack: 'melody', melody: 'JazzFunk' },
        { src: bread4, name: '白麵包', id: 'White', audioTrack: 'melody', melody: 'Rock' },
    ]
    const meatData = [
        { src: main1, name: '厚切嫩牛', id: 'beef', audioTrack: 'BGM', Beat: 'BGM1' },
        { src: main2, name: '鮮嫩雞柳', id: 'chicken', audioTrack: 'BGM', Beat: 'BGM2' },
        { src: main3, name: '義大利牛肉丸', id: 'meat ball', audioTrack: 'BGM', Beat: 'BGM3' },
        { src: main4, name: '火腿', id: 'ham', audioTrack: 'BGM', Beat: 'BGM4' },
    ]
    const vegeData = [
        { src: veg1, name: '生菜', id: 'lettuce', audioTrack: 'BS', Beat: 'BS1' },
        { src: veg2, name: '番茄', id: 'tomato', audioTrack: 'BS', Beat: 'BS2' },
        { src: veg3, name: '洋蔥', id: 'onion', audioTrack: 'BS', Beat: 'BS3' },
        { src: veg4, name: '墨西科辣椒', id: 'pickled', audioTrack: 'BS', Beat: 'BS4' },
    ]
    const sauceData = [
        { src: sauce1, name: '甜蔥醬', id: 'Sweet Onion', audioTrack: 'DR', Beat: 'DR1' },
        { src: sauce2, name: '蜂蜜芥末醬', id: 'honey mustard', audioTrack: 'DR', Beat: 'DR2' },
        { src: sauce3, name: '黃芥末醬', id: 'yellow mustard', audioTrack: 'DR', Beat: 'DR3' },
        { src: sauce4, name: '千島醬', id: 'Thousand Island dressing', audioTrack: 'DR', Beat: 'DR4' },
    ]

    return (
        <>
            <div className="play">
                <div className="container-xl container-subway py-5">
                    <div className="playTitle" id="DJ">
                        <div className="upper d-md-flex">
                            <div>
                                <p className="firstText">秀出自己的風格</p>
                            </div>
                            <div className="lineDeco ms-3"></div>
                        </div>
                        <div className="lower">
                            <p className="secondText ms-5 ps-4">創造獨特口味</p>
                        </div>
                    </div>
                    <div className="d-flex flex-wrap  flex-xl-nowrap">
                        <div className="leftPart d-flex flex-column container-fluid">
                            <div className="disk-ham d-flex  mb-4 mb-xl-0">
                                <div className="range-vertical d-flex d-xl-none justify-content-center">
                                    <input
                                        className="rangeBtn"
                                        type="range"
                                        min="0"
                                        max="10"
                                        step="1"
                                        defaultValue="1"
                                        orient="vertical"
                                    />
                                </div>
                                <div className="disk">
                                    <Image src={disk} layout="intrinsic" quality={100} draggable="false" />
                                </div>
                                <div className="ham">
                                    <Image src={burger} layout="intrinsic" quality={100} draggable="false" />
                                </div>
                            </div>
                            <div className="soundEffect w-100 d-flex">
                                <div className="knob d-xl-none">
                                    <Image src={knob} layout="intrinsic" quality={100} draggable="false" />
                                </div>
                                <div className="mx-3 mx-xl-0">
                                    <Image src={soundEffect} quality={100} draggable="false" height={100} />
                                </div>
                                <div className="knob d-xl-none">
                                    <Image src={knob} layout="intrinsic" quality={100} draggable="false" />
                                </div>
                            </div>

                            <Controller />
                            {/* <PlayType /> */}
                            <div className="range w-100 d-xl-flex d-none d-xl-block justify-content-between align-items-center mt-4">
                                <input className="rangeBtn" type="range" min="0" max="10" step="1" defaultValue="1" />
                                <div className="knob">
                                    <Image src={knob} layout="intrinsic" quality={100} draggable="false" />
                                </div>
                                <div className="knob">
                                    <Image src={knob} layout="intrinsic" quality={100} draggable="false" />
                                </div>
                            </div>
                            <div id="player">
                                <audio id="playAll" preload="auto"></audio>
                                <audio id="preview" preload="auto"></audio>
                            </div>
                        </div>
                        <div className="rightPart container-fluid p-0">
                            {AlertSide ? <AlertSideBox /> : null}
                            {AlertBread ? <AlertBreadBox /> : null}
                            {AlertDownload ? <AlertDownloadBox /> : null}
                            <div className="d-flex justify-content-between">
                                <Food data={breadData} group="麵包" groupClass="bread" />
                                <Food data={meatData} group="主食" groupClass="meat" />
                                <Food data={vegeData} group="生菜" groupClass="vege" />
                                <Food data={sauceData} group="醬汁" groupClass="sauce" />
                            </div>
                            {/* <div className="px-3">
                                開啟IG Reels拍攝介面後，在左下角上傳下載的音樂影片，即可直接使用音訊拍攝
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

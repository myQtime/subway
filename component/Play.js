import Image from 'next/image'
import { useState, useEffect } from 'react'

import Controller from '../component/Buttons/controller'
import PlayType from './Buttons/playType'
import Food from './Buttons/food'
import disk from '../public/img/disk.png'
import ham from '../public/img/ham.png'
import soundEffect from '../public/img/soundEffect.png'
import YupYup from '../public/img/people/YupYup.png'
import Mories from '../public/img/people/Mories.png'
import oneFloor from '../public/img/people/oneFloor.png'
import mayo from '../public/img/food/mayo.png'
import knob from '../public/img/knob.png'
import bread1 from '../public/img/food/bread-1.png'
import bread2 from '../public/img/food/bread-2.png'
import bread3 from '../public/img/food/bread-3.png'
import bread4 from '../public/img/food/bread-4.png'

import main1 from '../public/img/food/main-1.png'
import main2 from '../public/img/food/main-2.png'
import main3 from '../public/img/food/main-3.png'
import main4 from '../public/img/food/main-4.png'

import veg1 from '../public/img/food/veg-1.png'
import veg2 from '../public/img/food/veg-2.png'
import veg3 from '../public/img/food/veg-3.png'
import veg4 from '../public/img/food/veg-4.png'

import sauce1 from '../public/img/food/sauce-1.png'
import sauce2 from '../public/img/food/sauce-2.png'
import sauce3 from '../public/img/food/sauce-3.png'
import sauce4 from '../public/img/food/sauce-4.png'
export default function play() {
    const breadData = [
        { src: bread1, name: '蜂蜜燕麥', id: 'Honey Oatmeal' },
        { src: bread2, name: '小麥麵包', id: 'Wheat' },
        { src: bread3, name: '巴馬乾酪麵包', id: 'Parmesan Oregano' },
        { src: bread4, name: '白麵包', id: 'White' },
    ]
    const meatData = [
        { src: main1, name: '嫩切牛肉', id: 'beed' },
        { src: main2, name: '香烤雞肉', id: 'chicken' },
        { src: main3, name: '義大利牛肉丸', id: 'meat ball' },
        { src: main4, name: '火腿', id: 'ham' },
    ]
    const vegeData = [
        { src: veg1, name: '生菜', id: 'lettuce' },
        { src: veg2, name: '番茄', id: 'tomato' },
        { src: veg3, name: '洋蔥', id: 'onion' },
        { src: veg4, name: '醃製物', id: 'pickled' },
    ]
    const sauceData = [
        { src: sauce1, name: '紅酒醬', id: 'red wine' },
        { src: sauce2, name: '蜂蜜芥末醬', id: 'honey mustard' },
        { src: sauce3, name: '黃芥末醬', id: 'yellow mustard' },
        { src: sauce4, name: '千島醬', id: 'Thousand Island dressing' },
    ]

    return (
        <>
            <div className="play">
                <div className="container-xl container-subway py-5">
                    <div className="playTitle ">
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
                                    <Image src={ham} layout="intrinsic" quality={100} draggable="false" />
                                </div>
                            </div>
                            <div className="soundEffect w-100 d-flex">
                                <div className="knob d-xl-none">
                                    <Image src={knob} layout="intrinsic" quality={100} draggable="false" />
                                </div>
                                <div className="mx-3 mx-xl-0">
                                    <Image src={soundEffect} quality={100} draggable="false" />
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
                        </div>
                        <div className="rightPart container-fluid">
                            {/* <ul className="d-flex peopleList justify-content-center justify-content-md-center mt-3">
                                <li className="mx-2">
                                    <div className="d-flex flex-column align-items-center">
                                        <Image src={YupYup} draggable="false" />
                                        <p>牙牙</p>
                                    </div>
                                </li>
                                <li className="mx-2">
                                    <div className="d-flex flex-column align-items-center">
                                        <Image src={Mories} draggable="false" />
                                        <p>Mories</p>
                                    </div>
                                </li>
                                <li className="mx-2">
                                    <div className="d-flex flex-column align-items-center">
                                        <Image src={oneFloor} draggable="false" />
                                        <p>一樓</p>
                                    </div>
                                </li>
                            </ul>
                            <div className="intro text-center text-white rounded-pill mt-4">
                                點選你愛的KOL，可以套用專屬於他的曲風音樂，由你進行改造。
                            </div> */}
                            <div className="d-flex justify-content-between">
                                <Food data={breadData} group="麵包" groupClass="bread" />
                                <Food data={meatData} group="主食" groupClass="meat" />
                                <Food data={vegeData} group="生菜" groupClass="vege" />
                                <Food data={sauceData} group="醬汁" groupClass="sauce" />
                            </div>
                        </div>
                    </div>
                    <div className="moreChoice text-center">更多選擇請洽SUBWAY各大餐廳</div>
                </div>
            </div>
        </>
    )
}

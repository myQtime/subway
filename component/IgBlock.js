import { useState } from 'react'
import Image from 'next/image'
import phone from '../public/img/phone.png'
import YupYup from '../public/img/people/YupYup.png'
import Mories from '../public/img/people/Mories.png'
import oneFloor from '../public/img/people/oneFloor.png'
import { Button, ButtonGroup, Stack, HStack, VStack } from '@chakra-ui/react'

export default function IgBlock() {
    const [musicType, setMusicType] = useState('EDM')
    return (
        <>
            <div className="IgBlock">
                <div className="container-xl container-subway py-5 d-flex justify-content-between flex-column flex-xl-row">
                    <div className="leftPart d-flex justify-content-xl-end ">
                        <div className="phone d-flex justify-content-end align-items-center px-2 px-sm-3">
                            <div>
                                <Image src={phone} width={300} height={590} draggable="false" />
                            </div>
                        </div>
                        <div className="typeSelectMd d-block d-xl-none w-50 px-2 px-sm-3">
                            <p className="text-white IgBlockTitle mt-2">新鮮現做</p>
                            <p className="IgBlockSubTitle mt-2">
                                不只好吃
                                <br />
                                還能朗朗上口
                            </p>
                            <p className="IgBlockText my-2">
                                由我示範給你看，
                                <br />
                                請選擇你喜歡的曲風
                            </p>
                            <Stack spacing={2} direction="column" align="start" w="90%" className="mt-2">
                                <Button
                                    className={musicType === 'EDM' ? 'musicBtn-active' : 'musicBtn'}
                                    size="sm"
                                    onMouseOver={() => {
                                        setMusicType('EDM')
                                    }}
                                >
                                    EDN
                                </Button>
                                <Button
                                    className={musicType === 'LIP HOP' ? 'musicBtn-active' : 'musicBtn'}
                                    size="sm"
                                    onMouseOver={() => {
                                        setMusicType('LIP HOP')
                                    }}
                                >
                                    LIP HOP
                                </Button>
                                <Button
                                    className={musicType === 'JAZZ' ? 'musicBtn-active' : 'musicBtn'}
                                    size="sm"
                                    onMouseOver={() => {
                                        setMusicType('JAZZ')
                                    }}
                                >
                                    JAZZ
                                </Button>
                                <Button
                                    className={musicType === 'ROCK' ? 'musicBtn-active' : 'musicBtn'}
                                    size="sm"
                                    onMouseOver={() => {
                                        setMusicType('ROCK')
                                    }}
                                >
                                    ROCK
                                </Button>
                            </Stack>
                        </div>
                    </div>
                    <div className="rightPart d-flex flex-column align-items-xl-start ">
                        <div className="typeSelectPC d-none d-xl-block w-100">
                            <p className="text-white IgBlockTitle mt-3">新鮮現做</p>
                            <p className="IgBlockSubTitle mt-3">不只好吃 還能朗朗上口</p>
                            <p className="IgBlockText mt-3">由我示範給你看，請選擇你喜歡的曲風</p>
                            <Stack spacing={4} direction="row" align="center" w="90%" className="mt-3">
                                <Button
                                    className={musicType === 'EDM' ? 'musicBtn-active' : 'musicBtn'}
                                    size="md"
                                    onMouseOver={() => {
                                        setMusicType('EDM')
                                    }}
                                >
                                    EDN
                                </Button>
                                <Button
                                    className={musicType === 'LIP HOP' ? 'musicBtn-active' : 'musicBtn'}
                                    size="md"
                                    onMouseOver={() => {
                                        setMusicType('LIP HOP')
                                    }}
                                >
                                    LIP HOP
                                </Button>
                                <Button
                                    className={musicType === 'JAZZ' ? 'musicBtn-active' : 'musicBtn'}
                                    size="md"
                                    onMouseOver={() => {
                                        setMusicType('JAZZ')
                                    }}
                                >
                                    JAZZ
                                </Button>
                                <Button
                                    className={musicType === 'ROCK' ? 'musicBtn-active' : 'musicBtn'}
                                    size="md"
                                    onMouseOver={() => {
                                        setMusicType('ROCK')
                                    }}
                                >
                                    ROCK
                                </Button>
                            </Stack>
                        </div>
                        <p className="musicText text-center text-xl-start mt-4">選擇 {musicType} 曲風 代表人物</p>
                        <ul className="d-flex peopleIGList justify-content-center justify-content-xl-start mt-3">
                            <li hidden={musicType === 'LIP HOP' || musicType === 'ROCK'}>
                                <div className="d-flex flex-column align-items-center mx-3">
                                    <Image src={YupYup} width={145} height={145} draggable="false" />
                                    <p>牙牙</p>
                                </div>
                            </li>
                            <li hidden={musicType === 'JAZZ' || musicType === 'ROCK'}>
                                <div className="d-flex flex-column align-items-center mx-3">
                                    <Image src={Mories} width={145} height={145} draggable="false" />
                                    <p>Mories</p>
                                </div>
                            </li>
                            <li hidden={musicType === 'JAZZ'}>
                                <div className="d-flex flex-column align-items-center mx-3">
                                    <Image src={oneFloor} width={145} height={145} draggable="false" />
                                    <p>一樓</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

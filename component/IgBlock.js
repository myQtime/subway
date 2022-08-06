import { useState } from 'react'
import Image from 'next/image'
import phone from '../img/phone.png'
import YupYup from '../img/people/YupYup.png'
import Mories from '../img/people/Mories.png'
import oneFloor from '../img/people/oneFloor.png'
import { Button, ButtonGroup, Stack, HStack, VStack } from '@chakra-ui/react'

export default function IgBlock() {
    const [musicType, setMusicType] = useState('EDM')
    return (
        <>
            <div className="IgBlock">
                <div className="container-xl py-5 d-flex justify-content-between flex-column flex-md-row">
                    <div className="leftPart d-flex justify-content-md-end ">
                        <div className="phone me-3">
                            <Image src={phone} width={300} height={590} />
                        </div>
                        <div className="typeSelectMd d-block d-md-none w-50">
                            <p className="text-white IgBlockTitle mt-2">新鮮現做</p>
                            <p className="IgBlockSubTitle mt-2">
                                不只好吃
                                <br />
                                還能朗朗上口
                            </p>
                            <p className="IgBlockText mt-2">
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
                    <div className="rightPart d-flex flex-column align-items-md-start ">
                        <div className="typeSelectPC d-none d-md-block w-100">
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
                        <p className="musicText text-center text-md-start mt-4">選擇{musicType}曲風 代表人物</p>
                        <ul className="d-flex peopleList justify-content-center justify-content-md-start mt-3">
                            <li hidden={musicType === 'LIP HOP' || musicType === 'ROCK'}>
                                <div className="d-flex flex-column align-items-center">
                                    <Image src={YupYup} width={145} height={145} />
                                    <p>牙牙</p>
                                </div>
                            </li>
                            <li hidden={musicType === 'JAZZ' || musicType === 'ROCK'}>
                                <div className="d-flex flex-column align-items-center">
                                    <Image src={Mories} width={145} height={145} />
                                    <p>Mories</p>
                                </div>
                            </li>
                            <li hidden={musicType === 'JAZZ'}>
                                <div className="d-flex flex-column align-items-center">
                                    <Image src={oneFloor} width={145} height={145} />
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

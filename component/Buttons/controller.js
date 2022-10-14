import { Button, Stack, Link } from '@chakra-ui/react'
import { useEffect, useState, useContext } from 'react'
import globalContext from '../../provider/GlobalProvider'

export default function controller() {
    const { melody, BGM, BS, DR } = useContext(globalContext)
    const [isPlaySame, setIsPlaySame] = useState('')
    const [instagramHref, setInstagramHref] = useState('https://www.instagram.com/')

    useEffect(() => {
        if (BGM !== null && BS !== null && DR !== null) {
            const download = document.querySelector('#download')
            download.setAttribute('href', `./audios/${melody}/Mp4/${melody}_${BGM}+${BS}+${DR}.mp4`)
        }
    }, [BGM, BS, DR])

    useEffect(() => {
        switch (melody) {
            case 'EDM':
                setInstagramHref('https://www.instagram.com/reels/audio/1230301450895993')
                break
            case 'HipHop':
                setInstagramHref('https://www.instagram.com/reels/audio/477672694333842')
                break
            case 'JazzFunk':
                setInstagramHref('https://www.instagram.com/reels/audio/573568137857954')
                break
            case 'Rock':
                setInstagramHref('https://www.instagram.com/reels/audio/1050173549002300')
                break
        }
    }, [melody])

    const play = () => {
        const playAll = document.querySelector('#playAll')
        const preview = document.querySelector('#preview')

        playAll.play()
        preview.load()
        console.log(melody, BGM, BS, DR)
    }

    const setPlay = () => {
        const playAll = document.querySelector('#playAll')
        const preview = document.querySelector('#preview')
        const download = document.querySelector('#download')

        if (BGM === null || BS === null || DR === null) {
            alert('配料也要喔')
            return
        } else if (BGM !== null && BS !== null && DR !== null) {
            if (isPlaySame === melody + BGM + BS + DR) {
                play()
                return
            } else if (isPlaySame !== melody + BGM + BS + DR) {
                playAll.setAttribute('src', `./audios/${melody}/Wav/${melody}_${BGM}+${BS}+${DR}.wav`)
                download.setAttribute('href', `./audios/${melody}/Mp4/${melody}_${BGM}+${BS}+${DR}.mp4`)

                setIsPlaySame(melody + BGM + BS + DR)

                playAll.load()
                preview.load()
            }
        }
        play()
    }

    const pause = () => {
        const playAll = document.querySelector('#playAll')
        const preview = document.querySelector('#preview')

        playAll.pause()
        preview.load()
    }

    const stop = () => {
        const playAll = document.querySelector('#playAll')
        const preview = document.querySelector('#preview')

        playAll.load()
        preview.load()
    }

    return (
        <>
            <div className="controller">
                <Stack
                    spacing={4}
                    direction="row"
                    align="center"
                    w="100%"
                    className="mt-3 justify-content-around justify-content-xl-between px-0 px-sm-3 px-xl-0"
                >
                    <Button
                        className="rounded-circle playBtn"
                        size="md"
                        onClick={() => {
                            setPlay()
                        }}
                    ></Button>
                    <Button
                        className="rounded-circle pauseBtn"
                        size="md"
                        onClick={() => {
                            pause()
                        }}
                    ></Button>
                    <Button
                        className="rounded-circle stopBtn"
                        size="md"
                        onClick={() => {
                            stop()
                        }}
                    ></Button>
                    {BGM === null || BS === null || DR === null ? (
                        <Link
                            id="download"
                            download="subwayTW"
                            onClick={(e) => {
                                e.preventDefault()
                                alert('現做你的音樂')
                            }}
                        >
                            <Button
                                className="rounded-circle downloadBtn"
                                size="md"
                                onClick={() => {
                                    stop()
                                }}
                            ></Button>
                        </Link>
                    ) : (
                        <Link id="download" download="subwayTW">
                            <Button
                                className="rounded-circle downloadBtn"
                                size="md"
                                onClick={() => {
                                    stop()
                                }}
                            ></Button>
                        </Link>
                    )}
                    <Link className="link" href={instagramHref} isExternal>
                        <Button className="rounded-pill linkBtn text-white" size="md">
                            拍攝Reels
                        </Button>
                    </Link>
                </Stack>
            </div>
        </>
    )
}

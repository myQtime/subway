import { Button, ButtonGroup, Stack, HStack, VStack } from '@chakra-ui/react'
import { useEffect, useState, useContext } from 'react'
import globalContext from '../../provider/GlobalProvider'

export default function controller() {
    const { melody, BGM, BS, DR } = useContext(globalContext)
    const [isPlaySame, setIsPlaySame] = useState('')

    const play = () => {
        const play1 = document.querySelector('#play1')
        const play2 = document.querySelector('#play2')
        const play3 = document.querySelector('#play3')
        const play4 = document.querySelector('#play4')
        const preview = document.querySelector('#preview')

        play1.play()
        play2.play()
        play3.play()
        play4.play()
        preview.load()

        console.log(melody, BGM, BS, DR)
    }

    const setPlay = () => {
        // const play1 = document.querySelector('#play1')
        // const play2 = document.querySelector('#play2')
        // const play3 = document.querySelector('#play3')
        // const play4 = document.querySelector('#play4')
        // const preview = document.querySelector('#preview')
        if (BGM === null || BS === null || DR === null) {
            alert('配料也要喔')
            return
        } else if (BGM !== null && BS !== null && DR !== null) {
            if (isPlaySame === melody + BGM + BS + DR) {
                play()
                return
            } else if (isPlaySame !== melody + BGM + BS + DR) {
                play1.setAttribute('src', `/audios/${melody}/Melody.wav`)
                play2.setAttribute('src', `/audios/${melody}/${BGM} BGM.wav`)
                play3.setAttribute('src', `/audios/${melody}/${BS} BS.wav`)
                play4.setAttribute('src', `/audios/${melody}/${DR} DR.wav`)

                setIsPlaySame(melody + BGM + BS + DR)

                play1.load()
                play2.load()
                play3.load()
                play4.load()
                preview.load()
            }
        }
        setTimeout(play, 1500)
    }

    const pause = () => {
        const play1 = document.querySelector('#play1')
        const play2 = document.querySelector('#play2')
        const play3 = document.querySelector('#play3')
        const play4 = document.querySelector('#play4')
        const preview = document.querySelector('#preview')

        play1.pause()
        play2.pause()
        play3.pause()
        play4.pause()
        preview.load()
    }

    const stop = () => {
        const play1 = document.querySelector('#play1')
        const play2 = document.querySelector('#play2')
        const play3 = document.querySelector('#play3')
        const play4 = document.querySelector('#play4')
        const preview = document.querySelector('#preview')

        play1.load()
        play2.load()
        play3.load()
        play4.load()
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
                        className="rounded-circle downloadBtn"
                        size="md"
                        onClick={() => {
                            stop()
                        }}
                    ></Button>
                    <Button
                        className="rounded-pill redoBtn text-white"
                        size="md"
                        onClick={() => {
                            alert('用此音樂拍攝Reels')
                        }}
                    >
                        用此音樂拍攝Reels
                    </Button>
                </Stack>
            </div>
        </>
    )
}

import Image from 'next/image'
import { useContext, useState, useEffect } from 'react'
import globalContext from '../../provider/GlobalProvider'

export default function food(props) {
    const { melody, setMelody, BGM, setBGM, BS, setBS, DR, setDR, AlertBread, setAlertBread, setAlertDownload } =
        useContext(globalContext)
    const className = `foodName text-white text-center pe-none ${props.groupClass}`

    const setActive = (e) => {
        if (e.target.nodeName !== 'IMG') {
            return
        } else if (props.groupClass === 'bread') {
            setAlertBread(false)
            setAlertDownload(false)
            const allFoods = document.querySelectorAll('.foodName')
            for (let i = 0; i < allFoods.length; i++) {
                allFoods[i].classList.remove('actived')
            }
        } else if (props.groupClass !== 'bread') {
            setAlertDownload(false)
            if (melody === null) {
                setAlertBread(true)
                // alert('請先選擇麵包喔')
                return
            }
            const foodNames = document.querySelectorAll(`.${props.groupClass}`)
            for (let i = 0; i < foodNames.length; i++) {
                foodNames[i].classList.remove('actived')
            }
        }

        e.target.parentElement.nextElementSibling.classList.add('actived')
    }

    const setBeat = (e) => {
        if (e.audioTrack === 'melody') {
            setMelody(e.melody)
            setBGM(null)
            setBS(null)
            setDR(null)
        } else if (e.audioTrack !== 'melody') {
            switch (e.audioTrack) {
                case 'BGM':
                    setBGM(e.Beat)
                    break
                case 'BS':
                    setBS(e.Beat)
                    break
                case 'DR':
                    setDR(e.Beat)
                    break
            }
        }
    }

    const prePlay = (e) => {
        const playAll = document.querySelector('#playAll')
        const preview = document.querySelector('#preview')

        if (e.audioTrack === 'melody') {
            preview.setAttribute('src', `./audios/${e.melody}/Melody.wav`)
        } else if (melody === null && e.audioTrack !== 'melody') {
            return
        } else if (e.audioTrack !== 'melody') {
            preview.setAttribute('src', `./audios/${melody}/${e.Beat}.wav`)
        }
        playAll.load()
        preview.play()
    }

    return (
        <>
            <div className="foodGroup rounded-4  d-flex flex-column pb-3 mt-3" style={{ width: '24%' }}>
                <div className="rounded-pill foodGroupText text-center text-white">{props.group}</div>
                <div>
                    {/* ▼▼▼▼渲染範例▼▼▼▼ */}
                    {/* <div
                        className="test mt-2 mx-2"
                        onClick={(e) => {
                            setActive(e)
                        }}
                    >
                        <Image src={mayo} quality={100} className="rounded-4" />
                        <div className="testbox pe-none">美乃滋</div>
                    </div> */}

                    {props.data
                        ? props.data.map((item) => (
                              <div
                                  className="food mt-2 mx-1 mx-md-2 pe-auto"
                                  key={item.id}
                                  onClick={(e) => {
                                      setActive(e), setBeat(item), prePlay(item)
                                  }}
                              >
                                  <Image src={item.src} quality={100} className="rounded-4" draggable="false" />
                                  <div className={className}>{item.name}</div>
                              </div>
                          ))
                        : null}
                </div>
            </div>
        </>
    )
}

import Image from 'next/image'
import knob from 'public/img/knob.png'

export default function range() {
    return (
        <>
            <div className="range w-100 d-flex justify-content-between align-items-center mt-4">
                <input className="rangeBtn" type="range" min="0" max="10" step="1" defaultValue="1" />
                <div className="knob">
                    <Image src={knob} layout="intrinsic" quality={100} />
                </div>
                <div className="knob">
                    <Image src={knob} layout="intrinsic" quality={100} />
                </div>
            </div>
        </>
    )
}

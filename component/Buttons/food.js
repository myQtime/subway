import Image from 'next/image'

export default function food(props) {
    const className = `foodName text-white text-center pe-none ${props.groupClass}`

    const setActive = (e) => {
        if (e.target.nodeName !== 'IMG') {
            return
        }
        const foodNames = document.querySelectorAll(`.${props.groupClass}`)

        for (let i = 0; i < foodNames.length; i++) {
            foodNames[i].classList.remove('actived')
        }

        e.target.parentElement.nextElementSibling.classList.add('actived')
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
                                      setActive(e)
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

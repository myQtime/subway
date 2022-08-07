import Image from 'next/image'
import mayo from '/img/food/mayo.png'

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
            <div className="foodGroup rounded-4  d-flex flex-column pb-3 mt-3" style={{ width: '23%' }}>
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
                                  className="food mt-2 mx-2 pe-auto"
                                  key={item.id}
                                  onClick={(e) => {
                                      setActive(e)
                                  }}
                              >
                                  <Image src={item.src} quality={100} className="rounded-4" />
                                  <div className={className}>{item.name}</div>
                              </div>
                          ))
                        : null}
                </div>
            </div>
        </>
    )
}

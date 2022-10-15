import { useState } from 'react'

export default function Footer() {
    const [languageActive, setLanguageActive] = useState('CN')

    return (
        <>
            <div className="footer py-1">
                <div className="container-xl d-flex justify-content-between align-items-center ">
                    <div className="law d-flex align-items-center my-2">
                        <a
                            className="bg-transparent px-2 border-end border-dark"
                            href="https://subway.com.tw/GoWeb2/include/terms.html"
                            target="_blank"
                        >
                            使用 <br className="d-sm-none" />
                            條款
                        </a>

                        <a
                            className="bg-transparent px-2"
                            href="https://subway.com.tw/GoWeb2/include/privacyPolicy.html"
                            target="_blank"
                        >
                            隱私權 <br className="d-sm-none" />
                            策略
                        </a>
                    </div>
                    <div>
                        <p className="copyRight">
                            Copyright © 2022 Dcard Holdings Ltd. <br className="d-md-none" />
                            All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

import { useState } from 'react'

export default function Footer() {
    const [languageActive, setLanguageActive] = useState('CN')

    return (
        <>
            <div className="footer py-1">
                <div className="container-xl d-flex justify-content-between align-items-center ">
                    <div className="law d-flex align-items-center my-2">
                        <a className="bg-transparent px-2 border-end border-dark">使用條款</a>

                        <a className="bg-transparent px-2">隱私權策略</a>
                    </div>
                    <div>
                        <p className="copyRight">Copyright © 2022 Dcard Holdings Ltd. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

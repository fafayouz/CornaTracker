import React, { useState } from 'react'
import { ConseilsData } from './ConseilsData'
import './PageSym.css'



const PageSym = () => {
    
    const [count , setCount] = useState (0)

    const Next = () => {
        setCount(count < "6" ? count + 1 : count + 0 )
    }
    const Back = () => {
        setCount(count > '0' ? count - 1 : count - 0)
    }
    return (
        <>
            <div className="PageSym-Container">
            <div className="PageSym-Title">
                    <h2> {ConseilsData[count].T} </h2>
                </div>
                <div className="PageSym-P">
                    <p>
                        {ConseilsData[count].P}
                    </p>
                </div>
                <div className="Box-arrows">
                    <div onClick={Back} className="Box-arrow">
                        <span>Back</span>
                    </div>
                    <div onClick={Next} className="Box-arrow">
                        <span>Next</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageSym

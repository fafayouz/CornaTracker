import React, { useState } from 'react'
import { DataQuiz } from './DataQuiz'
import './StartPage.css'


const StartPage = () => {
    const [ClickPoints, setClickPoints] = useState(0)
    const [Result , setResult] = useState(0)
    const [QuizPage , setPageQuiz] = useState(true)
    const Oui = () => {
        setClickPoints(ClickPoints < 6 ? ClickPoints + 1 : setPageQuiz(false))
        setResult( Result + 14.02 )
    }
    const Non = () => {
        setClickPoints(ClickPoints < 6 ? ClickPoints + 1 : setPageQuiz(false))
    }
    return (
        <>
            <div className="Start-Page-Container">
                {QuizPage ? (
                    <>
                        <div className={"Box-ask"}>
                            <span> {DataQuiz[ClickPoints].Q1} </span>
                        </div>
                        <div className="Box-Reply">
                             <div onClick={Oui}>
                                 <span>Oui</span>
                            </div>
                            <div onClick={Non}>
                                 <span>Non</span>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                    /
                    {Result <= '40' && (
                        <div className="Result-Container">
                            <h1 className="Safe-Message">
                            {`${'Vous êtes contaminé a '}${Result}${'%'}`}
                            </h1>
                            <div className='Safe-box'>
                                <span>
                                Vous devez vous protéger, rester à l'écart des zones surpeuplées et toujours vous laver les mains
                                </span>
                            </div>

                        </div> 
                    )}
                    {Result > '40' && Result <= '70' && (
                        <div className="Result-Container">
                        <h1 className="Moyenne-Message">
                            {`${'Vous êtes contaminé a '}${Result}${'%'}`}
                        </h1>
                        <div className='Moyenne-box'>
                        <span>
                        Vous devez rester à la maison et vous isoler autant que possible des autres à la maison. Cette procédure est connue sous le nom d'isolement à domicile.
                        </span>
                        </div>
                    </div> 
                    )}
                     {Result > '70' && (
                        <div className="Result-Container">
                        <h1 className="Danger-Message">
                        {`${'Vous êtes contaminé a '}${Result}${'%'}`}
                        </h1>
                        <div className='Danger-box'>
                        <span>
                        Vous devriez consulter un médecin 
                        </span>
                        </div>
                    </div> 
                    )}
                     
                       
                    </>
                ) }
            </div>
            
        </>
    )
}

export default StartPage

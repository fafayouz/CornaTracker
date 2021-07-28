import React from 'react'
import { JournalData } from './JournalData'
import './PageJournal.css'

const PageJournal = () => {

/*
<div className="Video-Box">
                <iframe width="100%" height="100%"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1">
                </iframe>
                </div>
*/
    return (
        <>
        <div className="Journal-Page">
            <div className="Journal-Title">
                <h1>News</h1>
            </div>
            <div className="Journal-Container">
            {JournalData.map((Videos) => (
                 <div className="Video-Box">
                 <iframe key={Videos.key} frameBorder="0" allowFullScreen="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy" width="100%" height="100%" src={Videos.lien} title="YouTube video player" >
                 </iframe>
                 </div>
                 ))}
            </div>
        </div>
            
        </>
    )
}

export default PageJournal

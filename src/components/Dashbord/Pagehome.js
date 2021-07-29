import React, { useEffect, useState } from 'react'
import './Pagehome.css'
import axios from 'axios'
import SyncLoader from "react-spinners/ClipLoader";

const Pagehome = () => {
    const [Data, setData] = useState()
    const [Loading , setLoading] = useState(true)
const Searching = (x) => {
    return x.countryCode === 'DZ';
  };
useEffect(() => {
        axios.get('https://api.coronatracker.com/v3/stats/worldometer/country').then(async(res) => {
            const alldata = await res.data.filter(Searching) 
            if(alldata){
                setLoading(false)
                setData(alldata[0])
            }else{
                setLoading()
                
            }
           
        })
}, [])
console.log(Data)


    return (
        <>
            <div className="Home-Container">
                <div className="Home-Title">
                    <h1>Covid-19</h1>
                    <span>Algeria Trend</span>
                    <div className='Live-btn'>
                        <h2>Live</h2>
                        <span className='Loading-live'></span>
                    </div>  
                </div>
                <div className="List-Box">
                    <div className="Box">
                        <h1>Population</h1>
                        <span className="Population-c">44,695,120</span>
                    </div>
                    <div className="Box">
                        <h1>New Cases</h1>
                        {Loading ? (
                            <>
                            <SyncLoader/>
                            </>
                        ):(
                            <>
                             <span className="NewCases-c"> {Data && Data.dailyConfirmed === 0 ? <SyncLoader/> : Data && Data.dailyConfirmed} </span>
                            </>
                        )}
                    </div>
                    <div className="Box">
                    <h1>Total Recovered</h1>
                    {Loading ? (
                            <>
                            <SyncLoader/>
                            </>
                        ):(
                            <>
                             <span className="NewCases-c"> {Data && Data.totalRecovered} </span>
                            </>
                        )}
                    </div>
                    <div className="Box">
                     <h1>New Deaths</h1>
                     {Loading ? (
                            <>
                            <SyncLoader/>
                            </>
                        ):(
                            <>
                             <span className="NewCases-c"> {Data && Data.dailyDeaths === 0 ? <SyncLoader/> : Data && Data.dailyDeaths} </span>
                            </>
                        )}
                    </div>
                    <div className="Box">
                    <h1>Total Deaths</h1>
                    {Loading ? (
                            <>
                            <SyncLoader/>
                            </>
                        ):(
                            <>
                             <span className="NewCases-c"> {Data && Data.totalDeaths} </span>
                            </>
                        )}
                    </div>
                    <div className="Box">
                    <h1>Total</h1>
                    {Loading ? (
                            <>
                            <SyncLoader/>
                            </>
                        ):(
                            <>
                             <span className="NewCases-c"> {Data && Data.totalConfirmed} </span>
                            </>
                        )}
                    </div>   
                </div>
            </div>
        </>
    )
}

export default Pagehome

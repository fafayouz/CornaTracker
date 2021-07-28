import React, { useState } from 'react'
import './Pagehome.css'


const Pagehome = () => {
    const [Popultaion, setPopultaion] = useState()
    const [NewCases, setNewCases] = useState()
    const [Trecovered, setTrecovered] = useState()
    const [NewDeaths, setNewDeaths] = useState()
    const [TotalDeaths, setTotalDeaths] = useState()
    const [Total, setTotal] = useState()

    var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://covid-193.p.rapidapi.com/statistics',
  params : {country : 'Algeria'},
  headers: {
    'x-rapidapi-key': '1cdf1e1a8dmsha124c5802ebd4b6p101483jsncadc050a56e8',
    'x-rapidapi-host': 'covid-193.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
    const DATA = response.data.response[0]
    setPopultaion(DATA.population)
    setNewCases(DATA.cases.new)
    setTrecovered(DATA.cases.recovered)
    setNewDeaths(DATA.deaths.new)
    setTotalDeaths(DATA.deaths.total)
    setTotal(DATA.cases.total)
}).catch(function (error) {
	console.error(error);
});
const internationalNumberFormat = new Intl.NumberFormat('en-US')
const populationNumber = internationalNumberFormat.format(Popultaion)
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
                        <span className="Population-c">{populationNumber}</span>
                    </div>
                    <div className="Box">
                        <h1>New Cases</h1>
                        <span className="NewCases-c"> {NewCases} </span>
                    </div>
                    <div className="Box">
                    <h1>Total Recovered</h1>
                        <span className="TotalRecovered-c"> {Trecovered} </span>
                    </div>
                    <div className="Box">
                     <h1>New Deaths</h1>
                        <span className="NewDeaths-c"> {NewDeaths} </span>
                    </div>
                    <div className="Box">
                    <h1>Total Deaths</h1>
                        <span className="Rank-c"> {TotalDeaths} </span>
                    </div>
                    <div className="Box">
                    <h1>Total</h1>
                        <span className="Total-c"> {Total} </span>
                    </div>
                   
                   
                    
                </div>
            </div>
        </>
    )
}

export default Pagehome

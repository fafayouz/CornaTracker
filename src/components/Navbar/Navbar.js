import React, { useState } from 'react'
import AccessibilityRoundedIcon from '@material-ui/icons/AccessibilityRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import LocalHospitalRoundedIcon from '@material-ui/icons/LocalHospitalRounded';
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded';
import './Navbar.css'
import covid from './covid.png'
import home from './navimage/home.png'
import sym from './navimage/sym.png'
import Pagehome from '../Dashbord/Pagehome';
import PageSym from '../Dashbord/PageSym';
import TestYourself from '../Dashbord/TestYourself';
import PageJournal from '../Dashbord/PageJournal';
const Navbar = () => {

    const [Home, setHome] = useState(true)
    const [Symptoms , setSymptoms] = useState(false)
    const [Testyourself ,setTestYourself] = useState(false)
    const [Journal , setJournal] = useState(false)

    const Pageone = () => {
        setHome(true)
        setSymptoms(false)
        setTestYourself(false)
        setJournal(false)

    }
    const Pagetwo = () => {
        setHome(false)
        setSymptoms(true)
        setTestYourself(false)
        setJournal(false)

    }
    const PageThree = () => {
        setHome(false)
        setSymptoms(false)
        setTestYourself(true)
        setJournal(false)
    }
    const PageFour = () => {
        setHome(false)
        setSymptoms(false)
        setTestYourself(false)
        setJournal(true)
    }
    return (
        <>
            <div className="Nav-Container">
                <div className="Nav-Logo">
                    <img src={covid} alt="Covid19" />
                </div>
                <div className="Navbar">
                  <div onClick={Pageone} className={Home ? "list" : "list1"}>
                         <span className="icon-img"> <HomeRoundedIcon fontSize="large"/> </span>
                         <span className="list-title">Home</span>
                  </div>
                  <div onClick={Pagetwo} className={Symptoms ? "list" : "list1"}>
                         <span className="icon-img"> <AccessibilityRoundedIcon fontSize="large"/> </span>
                         <span className="list-title">Conseils</span>
                  </div>
                  <div onClick={PageThree} className={Testyourself ? "list" : "list1"}>
                         <span className="icon-img"> <LocalHospitalRoundedIcon fontSize="large"/> </span>
                         <span className="list-title">Test Yourself</span>
                  </div>
                  <div onClick={PageFour} className={Journal ? "list" : "list1"}>
                         <span className="icon-img"> <MenuBookRoundedIcon fontSize="large"/> </span>
                         <span className="list-title">Journal</span>
                  </div>
                            
                </div>
                
            </div>
            <div className="Dashbord-Container">
                {Home && <Pagehome/>}
                {Symptoms && <PageSym/>}
                {Testyourself && <TestYourself/>}
                {Journal && <PageJournal/>}
            </div>
        </>
    )
}

export default Navbar

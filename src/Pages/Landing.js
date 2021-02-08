import React from 'react'
import NavBar from '../Components/Navbar/NavBar'
import './Landing.css'
import home from '../images/home.png'
function Landing() {
    return (
        <div className='land'>
        <NavBar className="fixed-navbar"/>
        <div className='main-container'>
        <div className='content-container'>
            <h2 className="heading">Lorieum Ipsum</h2>
            <p className="subheading">Vivamus eleifend enim sed sem gravida, quis viverra nisi vestibulum.</p>
            <button className='button'>Register</button>
        </div>
        <img src={home} />
        </div>
        </div>
    )
}

export default Landing

import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

function Outcome() {
    return (
        <div>
            <Header></Header>
            <Footer></Footer>
            <Outlet></Outlet>
        </div>
    )
}

export default Outcome

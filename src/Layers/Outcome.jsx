import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

function Outcome() {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer />
        </div>
    )
}

export default Outcome

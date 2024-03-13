import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping as faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faSquareBehance } from '@fortawesome/free-brands-svg-icons';
import { faBars as faBars } from '@fortawesome/free-solid-svg-icons'
import Logo from '../img/Labiba.png'
import { Button, Container, Card, Navbar, Col, Form, Row, Nav, NavDropdown, Modal, FormControl, Offcanvas, InputGroup } from 'react-bootstrap';

function Header() {
    const [expanded, setExpanded] = useState(false);
    const [navbarHeight, setNavbarHeight] = useState('70px');

    const handleToggle = () => {
        setExpanded(!expanded);
        if (!expanded) {
            setNavbarHeight('200px'); // Update Navbar height when expanding
        } else {
            setNavbarHeight('70px'); // Reset Navbar height when collapsing
        }
    };


    return (
        <div>
            <Navbar collapseOnSelect expand="lg" fixed="top" style={{ color: '#232124', background: 'linear-gradient(126deg, rgba(223,168,255,1) 0%, rgba(183,200,218,1) 29%, rgba(191,208,214,1) 39%, rgba(221,178,220,1) 54%, rgba(221,214,243,1) 100%)', height: navbarHeight }} className={`rounded-pill shadow mt-3 p-3 mb-5 rounded custom-navbar ${expanded ? 'expanded-navbar' : ''}`}>
                <Container fluid>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" variant='none' onClick={handleToggle} style={{ border: 'none' }}>
                        <FontAwesomeIcon icon={faBars} style={{ color: "#FFFFFF", fontSize: '25px', border: 'none' }} />
                    </Navbar.Toggle>
                    <Link to='/Portfolio/'>
                        <Navbar.Brand>
                            <img
                                className="mr-3"
                                style={{ width: '180px', maxWidth: '500px', marginLeft: '80px', }}
                                src={Logo}
                                alt="Logo"
                            />
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Collapse id="responsive-navbar-nav" className={`justify-content-center ${expanded ? 'show' : ''}`}>
                        <Nav className="d-flex flex-grow-1 ">
                            <div className="d-flex flex-grow-1 align-items-center justify-content-center">
                                <Link to='/Portfolio/' className='nav-link text-decoration-none m-3' style={{ color: '#232124', fontWeight: '600' }}>Home</Link>
                                <Link to='/about' className='nav-link  text-decoration-none m-3' style={{ color: '#232124', fontWeight: '600' }}>About</Link>
                                <Link to='/resume' className='nav-link  text-decoration-none m-3' style={{ color: '#232124', fontWeight: '600' }}>Resume</Link>
                                <Link to='/contact' className='nav-link  text-decoration-none m-3' style={{ color: '#232124', fontWeight: '600' }}>Contact</Link>
                                <div className="dropdown">
                                    <button className="btn text-decoration-none border-0 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: '#232124', fontWeight: '600' }}>
                                        All Categories
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <Link to='./products' className="dropdown-item" href="">All Categories</Link>
                                        <Link to='./products' className="dropdown-item" href="#">Laptops</Link>
                                        <Link to='./products' className="dropdown-item" href="#">Phones</Link>
                                        {/* ... other items ... */}
                                    </div>
                                </div>
                            </div>
                        </Nav>
                        <Nav>
                            <div className="d-flex align-items-center ml-md-auto">
                                <div className="ml-md-3">
                                    <Button variant='none' style={{ position: 'relative', border: 'none' }}>
                                        <Link to='https://www.linkedin.com/in/-labiba/' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} style={{ color: '#0a202d', fontSize: '25px' }} /></Link>
                                    </Button>
                                </div>
                                <div className="ml-md-3">
                                    <Button variant='none' style={{ position: 'relative', border: 'none' }}>
                                        <Link to='https://github.com/IfritJahin' target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={faGithub} style={{ color: '#0a202d', fontSize: '25px' }} />
                                        </Link>
                                    </Button>
                                </div>
                                <div className="ml-md-3">
                                    <Button variant='none' style={{ position: 'relative', border: 'none' }}>
                                        <Link to='https://www.behance.net/labibaifrit' target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={faSquareBehance} style={{ color: '#0a202d', fontSize: '25px' }} />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default Header;

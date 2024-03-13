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
import { Button, Container, Card, Navbar, Col, Form, Row, Nav, NavDropdown, NavLink, DropdownButton, Dropdown, Modal, FormControl, Offcanvas, InputGroup } from 'react-bootstrap';

function Header() {

    return (
        <div>
            <Navbar expand="md" fixed="top" style={{ color: '#232124', background: 'linear-gradient(126deg, rgba(223,168,255,1) 0%, rgba(183,200,218,1) 29%, rgba(191,208,214,1) 39%, rgba(221,178,220,1) 54%, rgba(221,214,243,1) 100%)', maxHeight: '80px' }} className={`rounded-pill shadow mt-3 p-3 mb-5 `}>
                <Container fluid>
                    <Navbar.Brand>
                        <img
                            className="mr-3"
                            style={{ width: '180px', maxWidth: '100%', marginLeft: '10px', }} // Adjusted margin-left for the brand logo
                            src={Logo}
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={``} variant='none' style={{ border: 'none' }}>
                        <FontAwesomeIcon icon={faBars} style={{ color: "#FFFFFF", fontSize: '25px', border: 'none' }} />
                    </Navbar.Toggle>

                    <Navbar.Offcanvas
                        style={{ background: "#C0D0D6" }}
                        placement="start" className={`justify-content-cente `}
                        aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title >
                                Navbar
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-center flex-grow-1 pe-3">
                                <Nav.Link as={Link} to='/Portfolio/' className='nav-link text-decoration-none m-3' style={{ color: '#232124', fontWeight: '600' }}>Home</Nav.Link>
                                <Nav.Link as={Link} to='/about' className='nav-link text-decoration-none m-3' style={{ color: '#232124', fontWeight: '600' }}>About</Nav.Link>
                                <Nav.Link as={Link} to='/resume' className='nav-link  text-decoration-none m-3' style={{ color: '#232124', fontWeight: '600' }}>Resume</Nav.Link>
                                <Nav.Link as={Link} to='/contact' className='nav-link  text-decoration-none m-3' style={{ color: '#232124', fontWeight: '600' }}>Contact</Nav.Link>
                                <Nav.Link className='nav-link  text-decoration-none' style={{ color: '#232124', fontWeight: '600' }}>
                                    <NavDropdown
                                        title="All Catagories"
                                        style={{ color: '#232124', fontWeight: '600' }}
                                        className="btn text-decoration-none border-0 " type="button"
                                    >
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item className="dropdown-item" href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item className="dropdown-item" href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown></Nav.Link>
                            </Nav>
                            <Nav>
                                <div className="ustify-content-end flex-grow-1 pe-3 d-flex align-items-center ml-md-auto">
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
                        </Offcanvas.Body>

                    </Navbar.Offcanvas>


                </Container>
            </Navbar>

        </div>
    )
}

export default Header;

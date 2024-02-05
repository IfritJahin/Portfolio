import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/home.css'
import me from '../img/dp_demo.png'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Card, Image, OverlayTrigger, Tooltip, Button, Tab, Tabs, Form, Row, Col, Nav, Container, Badge } from 'react-bootstrap';
function Home() {
    return (
        <div className='mt-5'>
            <Container fluid className='cont p-4'>
                <div className='d-flex flex-column flex-md-row'>
                    <div className='part text-align-left position-relative' id='part' style={{ width: '100%' }}>
                        <h3>Hey there! I'm </h3>
                        <h2 style={{ fontSize: '3rem', fontWeight: 'bold', whiteSpace: 'nowrap' }}><span className='name'><span style={{ color: '#ad21ff' }}>Labiba </span>Ifrit Jahin</span></h2>
                        <p className='para'>A fresh graduate looking to pursue an accurate utilization of my learnings</p>
                        <div className='d-flex justify-content-space-between'>
                            <Button type='button' size="sm" variant='none' className='btn-box d-flex justify-content-center mt-3 mb-3 rounded-pill' style={{ border: '2px solid #b7c8da', background: '#F3A19e', width: '130px' }}>
                                <a href="https://drive.google.com/file/d/1Aq6qTLcimLeKVwYRfUtTCzYJmBf1hjyb/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', fontWeight: 'bold', color: 'white' }}>Hire Me</a>
                            </Button>
                            <Button type='button' size="sm" variant='none' className='btn-box d-flex justify-content-start mt-3 mb-3 m-3 rounded-pill' style={{ border: '2px solid #b7c8da', background: 'white' }}>
                                <a href="https://drive.google.com/file/d/1Aq6qTLcimLeKVwYRfUtTCzYJmBf1hjyb/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', fontWeight: 'bold', width: '130px' }}>Download CV <FontAwesomeIcon icon={faDownload} /></a>
                            </Button>
                        </div>
                    </div>
                    <div id='pic' className='column2 position-relative'>
                        <Image src={me} alt='' className='pic' style={{ width: '450px', height: 'auto', zIndex: 3, position: 'relative' }} />
                    </div>
                </div>
            </Container >
        </div >
    );
};


export default Home

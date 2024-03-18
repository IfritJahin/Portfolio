import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/home.css'
import me from '../img/dp_demo.png'
import bgv from '../img/Bgv.mp4'
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBorderNone, faDownload } from '@fortawesome/free-solid-svg-icons';
import { Card, Image, OverlayTrigger, Tooltip, Button, Tab, Tabs, Form, Row, Col, Nav, Container, Badge } from 'react-bootstrap';
import { color } from 'framer-motion';






export default Home
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/home.css'
import me from '../img/dp_demo.png'
import bgv from '../img/Bgv.mp4'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBorderNone, faDownload } from '@fortawesome/free-solid-svg-icons';
import { Card, Image, OverlayTrigger, Tooltip, Button, Tab, Tabs, Form, Row, Col, Nav, Container, Badge } from 'react-bootstrap';
import { color } from 'framer-motion';



function Home() {
    const slider = document.querySelector('circular-slider');
    const image = document.querySelector('.slider .img');
    const indicator = document.querySelector('.indicator');
    const skillItem = document.querySelectorAll('.skill span');
    const description = document.querySelectorAll('.text');

    const rotateValues = [-38, 0, 0];

    const colors = [
        "radial-gradient(circle, rgba(237,234,208,1) 0%, rgba(134,186,161,1) 100%)",
        "radial-gradient(circle, rgba(173,202,214,1) 0%, rgba(222,219,216,1) 70%)",
        "radial-gradient(circle, rgba(231,177,188,1) 0%, rgba(203,82,108,1) 100%);"
    ]

    const images = [
        'front', 'graphic', 'ui'
    ]

    let itemIndex = 2;

    function rotate(rotatioValues) {
        image.style.transform = `rotate(${rotateValues}deg)`;
        indicator.style.transform = `translate(-50%,-50%) rotate(${rotateValues}deg)`;
    }

    skillItem.forEach((skillItem, i) => {

        skillItem.addEventListener('click', () => {
            image.style.backgroundImage = "url(img/" + images[i] + ".png)";
            slider.style.background = colors[i];

            if (i > itemIndex) {
                rotate(rotateValues[itemIndex] - 10);
            }
            else if (i < itemIndex) {
                rotate(rotateValues[itemIndex] + 10);
            }
            else {
                return "";
            }
            setTimeout(() => {
                rotate(rotateValues[i]);
            }, 300);

            description.forEach(text => {
                text.style.display = "none";
            });
            description[i].style.display = 'block';
            itemIndex = i;
        });

    });
    return (
        <div className=''>
            <Container fluid className='mt-5 cont p-4'>
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
                        <Image src={me} alt='' className='pic' style={{ maxWidth: '420px', height: 'auto', zIndex: 3, position: 'relative' }} />
                    </div>
                </div>
            </Container >
            {/*
            < Container fluid className='mt-5 mb-5 cont p-4' style={{ background: 'linear-gradient(120deg, rgba(218,208,250,1) 0%, rgba(200,165,201,1) 100%)', margin: 0 }}>
            <Row className='d-flex flex-column flex-md-row'>
                <Col xs={12} md={6} className='p-md-3'>
                    <h1 style={{ fontSize: '4rem', fontWeight: 'bold' }}>Skills & <span style={{ color: '#ad21ff' }}>Experience</span></h1>
                </Col>
                <Col xs={12} md={6} className='p-md-3'>
                    <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Experience</h1>
                    <Col xs={6} lg="1" className='mt-4'>
                        <div className="vl"></div>
                    </Col>
                    <Row className="mt-5">
                        <Col xs="auto" className="pr-3 mt-1">
                            <p style={{ fontSize: '10px', fontWeight: 'bold', margin: 0 }}>September 2023- January 2024</p>
                        </Col>
                        <Col xs="auto" className='mt-0'>
                            <h4 style={{ fontSize: '22px', fontWeight: 'bold', margin: 0, color: '#ad21ff' }}>Front End Developer Intern</h4>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    */}
            <section className='circular-slider mb-3'>
                <Container className='container-slider'>
                    <div className='text-slider'>
                        <h2>Front End Delevloper</h2>
                        <p>A front-end developer creates websites and applications using web languages
                            such as HTML, CSS, and JavaScript that allow users to access and interact with the site or app.
                            When you visit a website, the design elements you see were created by a front-end developer.
                        </p>
                        <h2>Graphic Design</h2>
                        <p>Graphic designers are creative professionals who use
                            their artistic skills to create visual content for various mediums.
                            They work on projects such as designing logos, brochures, websites, and advertisements.
                        </p>
                        <h2>UI/UX</h2>
                        <p>UX vs. UI design. UX design refers to the term “user experience design”,
                            while UI stands for “user interface design”. Both elements are crucial
                            to a product and work closely together.
                        </p>

                    </div>
                    <div className='slider'>
                        <div className='indicator'></div>
                        <div className='skills'>
                            <div>
                                <span>Front End Developer</span>
                            </div>
                            <div>
                                <span>Graphic Designer</span>
                            </div>
                            <div>
                                <span>UI/UX</span>
                            </div>
                        </div>
                        <div className='img'></div>

                    </div>
                </Container>

            </section>

        </div >
    );
};


export default Home

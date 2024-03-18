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
import frontImage from '../img/front.png'; // Import your images
import graphicImage from '../img/graphic.png';
import uiImage from '../img/ui.png';


function Home() {
    const [activeSkillIndex, setActiveSkillIndex] = useState(0);
    const rotateValues = [
        { image: -58, indicator: 0 }, // Rotation values for the first skill
        { image: 58, indicator: 58 },    // Rotation values for the second skill
        { image: 0, indicator: -58 }     // Rotation values for the third skill
    ];
    const colors = [
        "radial-gradient(circle, rgba(233,225,255,1) 0%, rgba(203,182,253,1) 100%)",
        "radial-gradient(circle, rgba(237,234,208,1) 0%, rgba(134,186,161,1) 100%)",
        "radial-gradient(circle, rgba(255,205,167,1) 2%, rgba(253,190,144,1) 42%, rgba(255,186,116,1) 61%, rgba(255,162,104,1) 100%)",


    ];

    const images = [frontImage, graphicImage, uiImage]; // Use imported images

    const skills = [
        {
            name: "Front End Developer",
            description: " I actively engaged in both front-end and back-end development, specializing in React, Bootstrap, and Javascript. I sharpened my problem-solving skills, deepened my website development insight, and actively contributed to user-friendly web pages using React, HTML, CSS, JavaScript, BootStrap, MySql, and other tools."
        },
        {
            name: "Graphic Designer",
            description: "I have worked on creating digital content for social media platforms, managing public relations and marketing efforts, and designing promotional materials such as posters, brochures, and certificates. I developed proficiency in Adobe Illustrator, Photoshop, and Canva. I came up with unique ideas and confidently presented that."
        },
        {
            name: "UI/UX",
            description: "UX design refers to the term “user experience design”, while UI stands for “user interface design”. Both elements are crucial to a product and work closely together.  I developed proficiency in  figma"
        },

    ];

    const handleSkillClick = (index) => {
        setActiveSkillIndex(index);
        rotate(index); // Rotate based on the clicked index

        // Show the description corresponding to the clicked skill and hide others
        const descriptionRefs = document.querySelectorAll('.text-slider > div');
        descriptionRefs.forEach((description, i) => {
            description.style.display = index === i ? 'block' : 'none';
        });
    };


    function rotate(index) {
        const imageRef = document.querySelector('.img');
        const indicatorRef = document.querySelector('.indicator');

        if (imageRef && indicatorRef) {
            imageRef.style.backgroundImage = `url(${images[index]})`; // Set background image dynamically
            indicatorRef.style.transform = `translate(-50%, -50%) rotate(${rotateValues[index].indicator}deg)`;
        }
    }

    useEffect(() => {
        const descriptionRefs = Array.from(document.querySelectorAll('.text'));

        descriptionRefs.forEach((text, index) => {
            text.style.display = index === activeSkillIndex ? 'block' : 'none';
        });
    }, [activeSkillIndex]);


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
            </Container>
            <section className='circular-slider mb-3' style={{ background: colors[activeSkillIndex] }}>
                <Container className='container-slider'>
                    <div className='text-slider'>
                        {skills.map((skill, index) => (
                            <div key={index} style={{ display: activeSkillIndex === index ? 'block' : 'none' }}>
                                <h2>{skill.name}</h2>
                                <p>{skill.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className='slider ' >
                        <div className='indicator'></div>
                        <div className='skills'>
                            {skills.map((skill, index) => (
                                <div key={index}>
                                    <span onClick={() => handleSkillClick(index)}>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                        <div className='img'></div>
                    </div>
                </Container>
            </section>
        </div>
    );
}

export default Home;


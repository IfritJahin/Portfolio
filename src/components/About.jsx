import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/home.css'
import me from '../img/me.png'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Image, OverlayTrigger, Tooltip, Button, Tab, Tabs, Form, Row, Col, Nav, Container, Badge } from 'react-bootstrap';
function About() {
    return (
        <div>
            <Container >
                <Row >
                    <Col className='overflow-hidden'>
                        <div className='part text-align-left position-relative' id='part'>
                            <span>Hello!</span><br />
                            <span>I'm</span><span className='name'>Labiba</span><br />An undergraduate student
                            <p className='para'>looking to pursue an accurate utilization of my learnings</p>

                            <Link to='./About'><button className='btn'>Read more</button></Link>

                        </div></Col>
                    <Col className='overflow-hidden'>
                        <div id='pic position-relative' className='column2'>
                            <img src={me} alt='' className='pic' style={{ width: '200px', height: '200px' }}></img>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default About

import React from 'react';
import { Col, Row } from 'react-bootstrap';
import pic from '../../images/sr-3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './Home.css'
const Home = () => {
    return (
        <div>
            <Row> 
                <Col md={{span: 8, offset: 2 }}> 
                    <div className=" text-center home-section mt-5 text-white"> 
                        <div className="my-img m-auto"> 
                            <img src={pic} alt=""/>
                        </div>
                        <div className="my-info mt-5"> 
                            <h2>Hi,I'm <span className="text-success">SR Sohan</span></h2>
                            <p>I'm fornt-end developer</p>
                        </div>
                        <div className="contact-me d-flex align-items-center justify-content-center mt-5"> 
                            <a href="https://github.com/SR-Sohan" target="_blank" rel="noreferrer">Github</a>
                            <a href="https://www.linkedin.com/in/sr-sohan/" target="_blank" rel="noreferrer">Linkdin</a>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Home;
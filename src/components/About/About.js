import React from 'react';
import { Col, Row } from 'react-bootstrap';
import pic from '../../images/sr-3.png'
import './About.css'
const About = () => {
    return (
        <div className="pt-5">
            <Row> 
                <Col md={6}> 
                    <div className="about-left text-white"> 
                        <div className="img-box mb-5"> 
                            <img src={pic} alt=""/>
                        </div>
                        <h2 > <span style={{color:  '#64ffda'}}>I'm</span> SR Sohan</h2>
                        <p>A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</p>
                    </div>
                </Col>
                <Col md={{ span: 5, offset: 1 }}> 
                    <div className="about-right text-white"> 
                        <h4 className="comon-title mb-4">My Skills</h4>
                        <div className="skills-area "> 
                            <span>JavaScript</span>
                            <span>React.js</span>
                            <span>ES6</span>
                            <span>Node.js</span>
                            <span>Express.js</span>
                            <span>MongoDB</span>
                            <span>Redux.js</span>
                            <span>Firebase</span>
                            <span>Heroku</span>
                            <span>VS code</span>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default About;
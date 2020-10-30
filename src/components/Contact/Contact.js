import React from 'react';
import { Col, Row } from 'react-bootstrap';
import emailjs from 'emailjs-com';
let style = {
	backgroundColor: "rgb(23, 42, 69)"
}

const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('sr_sohan@22', 'template_ufacunl', e.target, 'user_9ufoY6H7TMASIZ2DFsq2G')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          alert('Done! send information')
          e.target.reset();
    };
    return (
        <div>
             <Row> 
                <Col md={{ span: 7, offset: 2 }}> 
                <form onSubmit={sendEmail} className="mt-5 p-4" style={style}>

                    <div className="form-group"> 
                        <input name="name"  placeholder="Your Name" className="form-control" />
                       
                    </div>
                    <div className="form-group"> 
                        <input name="email"  placeholder="Your Email" className="form-control" />
                    </div>
                    <div className="form-group"> 
                        <textarea name="message" placeholder="Your Message" className="form-control"   cols="30" rows="5"></textarea>
                    </div>
                    
                    <div className="form-group"> 
                        <input type="submit" className="btn btn-success btn-block" value="Send"/>
                    </div>
                </form>
                </Col>
            </Row>
        </div>
    );
};

export default Contact;
import React from "react";
import { Container, Nav, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Section = (props) => {
  return (
    <div>
      <p className="navbar-brand">{props.tag}</p>
      <Nav.Link id="Link" href="#fd"><small>{props.link}</small></Nav.Link>
      <Nav.Link id="Link" href="#fsd"><small>{props.link2}</small></Nav.Link>
      <Nav.Link id="Link" href="#fsdsd"><small>{props.link3}</small></Nav.Link>
    </div>
  )
};


const Footer = () => {
  return (
    <>
      <div id="footer">
        <div className="Footer" style={{ padding: "100pt 0" }}>
          <Container>
            <Row>

              <Col md="3" className="">
                <h1>Shreya Jha</h1>
                <small>
                  <p><b>Address:</b><br/>Sector 34, Noida, UP, 201307</p>
                  <p><b>Phone:</b><br />+91 93956 92041</p>
                </small>
              </Col>

              <Col md="2" className="">
                <Section link="Events" link2="Contact" link3="Mentors" tag="Services" />
              </Col>

              <Col md="2" className="">
                <Section link="Events" link2="Contact" link3="Mentors" tag="Products" />
              </Col>

              <Col md="3" className="">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14324.45703376788!2d91.7830984!3d26.160408099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1646733825938!5m2!1sen!2sin" title="myFrame" width="500" height="250" style={{border:'0'}} allowfullscreen="" loading="lazy"></iframe>
              </Col>


            </Row>
          </Container>
        </div>
        
        <div className="footer_nav">
          <a className="footerLink text-white" href="#Footer">Copyright 2020</a>
        </div>
      </div>

    </>

  );
}

export default Footer;
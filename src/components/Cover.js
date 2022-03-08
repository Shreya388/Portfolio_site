import React from 'react';
import { Container, Nav, Navbar, Row, Button } from 'react-bootstrap';
import "./Cover.css";

const Topbar = () => {
  return (
    <Navbar expand="lg" variant="dark" className="topbar p-3 fixed-top">
      <Container>
        <Navbar.Brand href="#home">Shreya Jha</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default function Cover() {
  return (
    <>
      <Topbar />
      <Container fluid>
        <Row>
          

          <div className="cover-content col-md-5 text-white">
            <Container>
              <div style={{margin: "0 100pt"}}>
                <h1 className="display-4">SHREYA JHA</h1>
                <p>Hi, my name is Shreya jha and I'm a Front End Devloper. I know languages like HTML, CSS, SCSS, Javascript,JQuery and ReactJS.</p>
              </div>
            </Container>
          </div>

          <div className="cover col-md-7">
            <Container>
              <div style={{margin:"50pt"}}>
              <Button className="m-1" href="https://twitter.com/"><i className="fa fa-twitter"></i></Button>
              <Button className="m-1 btn-dark" href="https://github.com/Shreya388"><i className="fa fa-github"></i></Button>
              <Button className="m-1" href="https://www.linkedin.com/in/shreya-jha-6043aa1a3/"><i className="fa fa-linkedin"></i></Button>
              <Button className="m-1 btn-danger" href="https://google.com/"><i className="fa fa-google"></i></Button>
              </div>
            </Container>
          </div>
        </Row>
      </Container>
    </>
  )
}

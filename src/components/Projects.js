import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import "./Projects.css";
import a from "./images/projects/a.png";
import b from "./images/projects/b.png";
import c from "./images/projects/c.png";


const Items = (props) => {
    return ( 
        <div className="item_list col-md-12 text-white">
            <Container>
            <Row>
            <Col md={6}>
            <Container>
                <a href={props.link}><Card.Img variant="top" src={props.img} /></a>
            </Container>
            </Col>

            <Col md={6}>
            <Container>
                <div style={{margin:"50pt"}}>
                <h1>{props.name}</h1>
                <p>{props.content}</p>
                </div>
            </Container>
            </Col>
            </Row>
            </Container>
        </div>
     );
}


export default function Projects() {
  return (
      <>
    <Container>
        <Row>
        <Col md={7}></Col>
        <Col md={4}>
        <div style={{textAlign:"left", marginTop: "80pt"}}>
            <h1 className="display-6">Projects</h1>
            <p> magni dolores eos qui ratione voluptatem sequi nesciunt.<br /> Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur</p>
        </div>
        </Col>
        </Row>
    </Container><br /><br /><br />

    <Items name="Sample Site" link="https://shreya388.github.io/Sample_site/" img={a} content="emo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione" />
    <Items name="Food_Delivery" link="https://shreya388.github.io/Food-delivery/" img={b} content="emo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione" />
    <Items name="Technology" link="https://shreya388.github.io/technology/" img={c} content="emo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione" />
    </>
  )
}

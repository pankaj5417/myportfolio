import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./Project.css"
import faasosimg from "../../assets/Home/faasosimg.png";
import koovsimg from "../../assets/Home/koovsimg.png";

import Particle from "./Particle";
import ProjectCards from "./ProjectCards";


function Projects() {
  return (
    <div className="home-container" id="project">

    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
        <Col md={4} className="project-card">
            <ProjectCards
              imgPath={koovsimg}
              isBlog={false}
              title="Koovs.com Clone"
              description={<div><h5>This is the Clone of Koovs.com an online fashion and clothing store.
                We were a team of four members and made this project in 5 days during the Unit-2 construct week 
                at Masai School.This website have cool features like user authentication,sorting ,filtering ,
                360 degree view of product,coupons and many more.This website is also made responsive. </h5>
                <h2>Tech Stack:</h2><p>HTML5, CSS, JAVASCRIPT</p></div>}
              link=" https://pankaj5417.github.io/koovs/"
              link2="https://github.com/pankaj5417/koovs.git"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={faasosimg}
              isBlog={false}
              title="Faasos.com Clone"
              description={<div><h5>This is the Clone of Faasos.com an online food delivery web app.
                We were a team of 7 members and made this web app in 7 days during the Unit-3 construct
                 week at Masai School.This website consists of many cool functalities like filtering ,
                  search with debouncing,api,location based address,coupon and many more.  </h5>
                  <h2>Tech Stack:</h2> <p>HTML5,CSS,JAVASCRIPT,API,MOCK SERVER</p></div>}
              link="https://pankaj5417.github.io/Faasos-clone/"
              link2="https://github.com/pankaj5417/Faasos-clone.git"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={faasosimg}
              isBlog={false}
              title="Faasos.com Clone"
              description=""
              link="https://pankaj5417.github.io/Faasos-clone/"
              link2="https://github.com/pankaj5417/FaasosClone2.git"

            />
          </Col>
        </Row>
      </Container>
    </Container>
    </div>
  );
}

export default Projects;

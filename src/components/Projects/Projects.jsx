import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./Project.css"
import faasosimg from "../../assets/Home/faasosimg.png";
import koovsimg from "../../assets/Home/koovsimg.png";
import policyimg from "../../assets/Home/policybaazarfront.png"

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
          
        <Col md={6} className="project-card">
            <ProjectCards
              imgPath={koovsimg}
              isBlog={false}
              title="Koovs.com Clone"
              description={<div className="project-card-text"><p>This is the Clone of Koovs.com an online fashion and clothing store.
                We were a team of four members and made this project in 5 days during the Unit-2 construct week 
                at Masai School.This website have cool features like user authentication,sorting ,filtering ,
                360 degree view of product,coupons and many more.This website is also made responsive. </p>
                <h3>Tech Stack:</h3><p>HTML5, CSS, JAVASCRIPT</p></div>}
              link=" https://pankaj5417.github.io/koovs/" target="_blank"
              link2="https://github.com/pankaj5417/koovs.git" target="_blank"

            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath={faasosimg}
              isBlog={false}
              title="Faasos.com Clone"
              description={<div  className="project-card-text"><p>This is the Clone of Faasos.com an online food delivery web app.
                We were a team of 7 members and made this web app in 7 days during the Unit-3 construct
                 week at Masai School.This website consists of many cool functalities like filtering ,
                  search with debouncing,api,location based address,coupon and many more.  </p>
                  <h3>Tech Stack:</h3> <p>HTML5,CSS,JAVASCRIPT,API,MOCK SERVER</p></div>}
              link="https://pankaj5417.github.io/Faasos-clone/" target="_blank"
              link2="https://github.com/pankaj5417/Faasos-clone.git" target="_blank"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath={faasosimg}
              isBlog={false}
              title="Faasos.com Clone"
              description={<div  className="project-card-text"><p>This is the Clone of Faasos.com an online food delivery web app.
                We were a team of 7 members and made this web app in 5 days during the Unit-4 construct
                 week at Masai School.This website is made with backend integration.This website consists of many cool functalities like filtering ,
                  search with debouncing,api,location based address,coupon and many more.  </p>
                  <h3>Tech Stack:</h3> <p>HTML5,CSS,JAVASCRIPT,MONGODB,EXPRESS, NODEJS </p></div>}
              link="https://faasosclone2.herokuapp.com/" target="_blank"
              link2="https://github.com/pankaj5417/FaasosClone2.git" target="_blank"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath={policyimg}
              isBlog={false}
              title="Policybaazar.com Clone"
              description={<div  className="project-card-text"><p>This is the Clone of Policybaazar.com an online food delivery web app.
                We were a team of 5 members and made this web app in 5 days during the Unit-5 construct
                 week at Masai School.This website is made using React, redux, Material UI and json-server as backend. One can buy the insurance policy 
                 of their choice,filter the policy of their choice and many more.  </p>
                  <h3>Tech Stack:</h3> <p>HTML5,CSS, REACTJS, REDUX, MATERIAL UI, JSON SERVER </p></div>}
              link="https://policybaazar.herokuapp.com/" target="_blank"
              link2="https://github.com/pankaj5417/policy-bazaar-clone.git" target="_blank"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
    </div>
  );
}

export default Projects;

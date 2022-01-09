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
      <Particle />
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
              description=""
              link=" https://pankaj5417.github.io/koovs/"
              link2="https://github.com/pankaj5417/koovs.git"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={faasosimg}
              isBlog={false}
              title="Faasos.com Clone"
              description=""
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

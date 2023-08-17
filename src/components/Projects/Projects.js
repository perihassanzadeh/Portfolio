import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Rubixprototype from "../../Assets/Projects/Rubixprototype.PNG";
import car from "../../Assets/Projects/car.png";
import bopit from "../../Assets/Projects/gerber.png";
import pi from "../../Assets/Projects/pi.png";
import hpc from "../../Assets/Projects/hpc.png";
import pitt from "../../Assets/Projects/pitt.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Reach out to me for more information!
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={car}
              isBlog={false}
              title="Formula SAE SAPS Breakout Board"
              description="Designed and led development of custom surface air pressure sensor PCB to facilitate verification, testing and improvement of aerodynamic subsystem design resulting in the first place innovation prize at competition. This project contributes to the University of Pittsburgh's Formula SAE team."
              ghLink="https://github.com/perihassanzadeh"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Rubixprototype}
              isBlog={false}
              title="Rubik's Cube Solver Prototype"
              description="Directly responsible for capturing the color state of the Rubik's cube using computer vision. Utilized OpenCV and common image transformation techniques to detect all contours, sorted for square contours and identified each color using RGB to HSV color thresholds. Optimized three ways to capture color state using dynamic, static and corner capture in less than one second."
              ghLink="https://github.com/perihassanzadeh/SrDesign"
              demoLink="https://drive.google.com/drive/folders/1ZskKCrPhbzcLm0-_QzgIokOSf2mxInGp?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bopit}
              isBlog={false}
              title="Disarm-It!"
              description="Created a functional game similar to Bop-it using C++ and Arduino for custom input sensors and controls (Keypad, Capacitive Touch Sensor and Microphone). Programmed a state machine for the game using a AtMega328p microcontroller."
              ghLink="https://github.com/shaneraible/bopit"
              demoLink="https://www.youtube.com/watch?v=G1TUeg5arFM"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pi}
              isBlog={false}
              title="Raspberry-Pi Security Camera at the Edge"
              description="Created a security camera with object detection using a common machine learning algorithm pre-trained on the COCO dataset. I then communicated a live video stream over the network using OpenCV frames and ImageZMQ from the Raspberry Pi to a remote server to offload complex computation of the object detection."
              ghLink="https://github.com/perihassanzadeh/pi_securitycam"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hpc}
              isBlog={false}
              title="HPC Research"
              description="I've been involved with research related to high performace computing and big data in both undergraduate and graduate school. If you'd like to see some of my reports and proposals related to my ongoing and previous research click the link below. "
              ghLink="https://drive.google.com/drive/folders/1_u9XfVqG2YsYI0sF4y3fM3srllSRCpPU?usp=sharing"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pitt}
              isBlog={false}
              title="Train Control System Simulation"
              description="Developed a simulation of Pittsburgh's North Shore Extension with a group of engineering students using C++ design patterns, Git, Jira and Qt Designer. Primarily responsible for calculating train routes and displaying all updated information on main control page which tracked train location, manual dispatching controls and running an input csv file schedule."
              //ghLink="https://github.com/perihassanzadeh"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

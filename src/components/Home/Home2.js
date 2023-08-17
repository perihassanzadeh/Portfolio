import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/memoji.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ALLOW ME TO <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I have a strong passion for technology, robotics and innovation!
              <br />
              <br />I am most comfortable programming in 
              <i>
                <b className="purple"> C++ and Python. </b>
              </i>
              <br />
              <br />
              My fields of Interest are &nbsp;
              <i>
                <b className="purple">Space Technology </b> and
                areas related to{" "}
                <b className="purple">
                  Embedded Systems.
                </b>
              </i>
              <br />
              <br />
              When I'm not at work or school, I like to work on 
                <b className="purple"> Formula SAE Projects</b> and
              <i>
                <b className="purple">
                  {" "}
                  stay active
                </b>
              </i>
              &nbsp; as well as
              <i>
                <b className="purple"> read books!</b>
              </i>
            </p>
          </Col>
          <Col md={3} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/perihassanzadeh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:perihassanzadeh@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/perihassanzadeh/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

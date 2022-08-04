import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
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
              I have a strong passion for technology, space and innovation!
              <br />
              <br />I am most comfortable programming with
              <i>
                <b className="purple"> C++, Python and Java. </b>
              </i>
              <br />
              <br />
              My experience is primarily in &nbsp;
              <i>
                <b className="purple">Backend Development </b> and
                but my interests also include{" "}
                <b className="purple">
                  High Performance Computing and Embedded Processors.
                </b>
              </i>
              <br />
              <br />
              When I'm not at work or school, I like to 
              <b className="purple"> expand my knowledge </b> by trying new things! 
              <br />
              <br />
              Some new technologies I've been exposed to are
                <b className="purple"> AWS</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Frontend Libraries and Frameworks
                </b>
              </i>
              &nbsp; such as
              <i>
                <b className="purple"> React.js</b>
              </i>
            </p>
          </Col>
 {/*          <Col md={4} className="myAvtar">
            <Tilt> 
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col> */}
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

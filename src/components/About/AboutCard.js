import React from "react";
import Card from "react-bootstrap/Card";
import { BiTennisBall, BiWorld } from "react-icons/bi";
import { BsSpotify, BsLightbulb } from "react-icons/bs";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center" }}>
            I'm <span className="purple">Peri Hassanzadeh </span> and I'm
            from <span className="purple"> Pittsburgh, Pennsylvania.</span>
            <br />I am a senior computer engineering student at the University of Pittsburgh.
            <br />
            <br />
            Apart from coding, I also enjoy...
          </p>
          <ul>
            <li className="about-activity">
              <BiTennisBall /> Playing Tennis
            </li>
            <li className="about-activity">
              <BsSpotify /> Music/Concerts
            </li>
            <li className="about-activity">
              <BiWorld /> Traveling
            </li>
            <li className="about-activity">
              <BsLightbulb /> Learning
            </li>
          </ul>

{/*           <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Peri Hassanzadeh</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

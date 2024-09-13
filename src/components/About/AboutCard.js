import React from "react";
import Card from "react-bootstrap/Card";
import { BiTennisBall, BiWorld } from "react-icons/bi";
import { BsSpotify, BsLightbulb } from "react-icons/bs";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Peri Hassanzadeh </span>
            from <span className="purple"> Pittsburgh, Pennsylvania.</span>
            <br /> I am a first year graduate student at the University of Pittsburgh
            studying Electrical and Computer Engineering.
            <br />
            Currently, I am an engineering intern at SpaceX!
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
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

          <p style={{ color: "rgb(155 126 172)" }}>
            "The greater the difficulty, the more the glory in surmounting it."{" "}
          </p>
          <footer className="blockquote-footer">Epicurus</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

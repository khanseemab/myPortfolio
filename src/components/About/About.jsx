/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import Fade from "react-reveal/Fade";
import "./About.css";
import MainProgressBar from "./MainProgressBar/MainProgressBar";
import Heading from "../../utils/Heading";

const skillsa = [
  {
    name: "HTML",
    percentage: 70, 
  },
  {
    name: "JavaScript",
    percentage: 50,
  },
  {
    name: "ReactJs",
    percentage: 70,
  },
];

const skillsb = [
  {
    name: "CSS",
    percentage: 75,
  },
  {
    name: "C++",
    percentage: 60,
  },
  {
    name: "Wordpress",
    percentage: 70,
  },
  
];

const About = () => {
  return (
    <React.Fragment>
      <section id="about" className="about">
        <Fade bottom cascade>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="text-center mx-auto about-title">
                 
                  <Heading firstname="About" lastname="Me" />
                  <div className="about-maintext">
                    Myself Seemab Akhtar Khan, I am a BCA (Bachelor of Computer Application) student at
                    Guru Gobind Singh Indraprastha University. I am a Front-end Web Developer and also have
                    interest in Competitive Programming.  Apart from programming
                    you will find me playing Football and Basketball.
                    <span role="img">⚽🏀</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4 pt-4">
              <div className="col-lg-12 about-detail text-center mx-auto mt-3">
                <ul className="mb-0 list-inline text-center about-work">
                  <li className="list-inline-item mr-2 ">WEB DEVELOPER</li>
                  <li className="list-inline-item mr-2 text-white">--</li>
                  <li className="list-inline-item mr-2 ">PROGRAMMER</li>
                  <li className="list-inline-item mr-2 text-white">--</li>
                  <li className="list-inline-item mr-2 ">Problem Solver</li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 text-center mx-auto mt-5 pt-5">
                <Heading firstname="Skills" />
              </div>
              <div className="col-lg-6 col-sm-12 col-md-12">
                {skillsa.map((skill) => (
                  <MainProgressBar
                    key={skill.name}
                    name={skill.name}
                    percentage={skill.percentage}
                  />
                ))}
              </div>
              <div className="col-lg-6 col-sm-12 col-md-12">
                {skillsb.map((skill) => (
                  <MainProgressBar
                    key={skill.name}
                    name={skill.name}
                    percentage={skill.percentage}
                  />
                ))}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    </React.Fragment>
  );
};

export default About;

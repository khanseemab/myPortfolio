import React from "react";
import "./Experience.css";
import { Fade } from "react-reveal";
import Heading from "../../utils/Heading";
import Card from "../../utils/Card/Card";

const edu = [
  {
    name: "Guru Gobind Singh Indraprastha University",
    year: "2020-2023",
    text:
      "Bachelor's of Computer Application(BCA)",
  },
  {
    name: "Senior Secondary at Hamdard Public School",
    year: "2018-2020",
    text:
      "Completed Senior Secondary Education from Hamdard Public School, New Delhi, India",
  },
  {
    name: "Higher Education at Hamdard Public School",
    year: "2016-2018",
    text:
      "Completed Higher Education from Hamdard Public School, New Delhi, India",
  }
];

const exp = [
  {
    name: "Spark AR",
    year: "December 2021",
    text:
      "Created AR effect and published on Social Media",
  },
  // {
  //   name: "The Sparks Foundation",
  //   year: "Jan 2021-Feb 2021",
  //   text:
  //     "Integrated Payment Gateway on Donation Website",
  // },
];
const Experience = () => {
  return (
    <section id="experience" className="Experience">
      <Fade bottom cascade>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="text-center mx-auto">
                <Heading firstname="Experience" classes="experience-head" />
                <div className="text-white pt-4 prog-font">
                  My Education and experience till date.
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3 pt-3 ">
            <div className="col-lg-6 col-md-6 col-sm-12" >
              {edu.map((edu) => (
                <Card
                  key={edu.name}
                  year={edu.year}
                  title={edu.name}
                  text={edu.text}
                />
              ))}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              {exp.map((exp) => (
                <Card
                  key={exp.name}
                  year={exp.year}
                  title={exp.name}
                  text={exp.text}
                />
              ))}
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Experience;

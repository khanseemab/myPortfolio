import React from "react";
import { Fade } from "react-reveal";
import Heading from "../../utils/Heading";
import "./Work.css";
import WorkCard from "../../utils/WorkCard/WorkCard";
import clock from "../../assests/clock.png";
import calculator from "../../assests/calculator.png";
import paymentform from "../../assests/paymentform.png";
import Contactform from "../../assests/contactform.png";

const Work = () => {
  const workList = [
    {
      title: "Clock Using JAVASCRIPT",
      description:
        "A Web Application to show the current date and time to the user.",
      image: clock,
      techlist: ["HTML", "JavaScript","Bootstrap"],
      githubLink: "https://khanseemab.github.io/Clock-Using-Javascript/",
    },
    {
      title: "GUI-Calculator",
      description:
        "A Graphical User Interface Calculator to solve mathematical questions",
      image: calculator,
      techlist: ["HTML","JavaScript", "CSS"],
      githubLink: "https://khanseemab.github.io/GUI-Calculator/",
    },
    {
      title: "Payment Form",
      description:
        "Payment Form to capture the details of the user",
      image: paymentform,
      techlist: ["HTML", "CSS"],
      githubLink: "https://khanseemab.github.io/payment-form/",
    },
    {
      title: "Contact Form",
      description:
        "Contact Form to capture the details of the user",
      image: Contactform,
      techlist: ["HTML", "CSS"],
      githubLink: "https://khanseemab.github.io/Contact-form-/",
    },
  ];
  return (
    <section id="work" className="Work">
      <Fade bottom cascade>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="text-center mx-auto mt-4">
                <Heading firstname="My" lastname="Work" />
                <div className="text-white pt-4">
                  Some of my projects and work.
                </div>
              </div>
            </div>
          </div>
        
          {workList.map((work, index) => (
            <WorkCard
              key={index}
              index={index}
              title={work.title}
              image={work.image}
              techlist={work.techlist}
              githubLink={work.githubLink}
              description={work.description}
            />
          ))}
        
          <div className="row justify-content-center pt-5 text-white">
            For more projects checkout my    &nbsp;
            <a
              href="https://github.com/khanseemab"
              className="ml-1 github_link"
            >
              {" "}
              GitHub Profile
            </a>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Work;

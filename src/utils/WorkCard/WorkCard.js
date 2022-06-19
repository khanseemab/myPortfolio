import React from "react";
import { Fade } from "react-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./WorkCard.css";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const WorkCard = (props) => {
  return (
    <Fade bottom cascade>
      <div className="row work-main">
        <div className="col-12 work-main__3">
          <div
            className={`work-card ${
              props.index % 2 === 0 ? "text-right" : "text-left"
            }`}
            style={{
              background: `linear-gradient(to right, rgba(13, 6, 32, 0.9), rgba(13, 6, 32, .9)), url(${props.image})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          >
            {/* <div>Featured Project</div> */}
            <div className="work-card-title mb-5">{props.title}</div>
            <div className="work-card-description mb-5">
              {props.description}
            </div>
            <div className="work-card-tech-names">
              {props.techlist.map((tech) => (
                <span>
                  <span>&bull;</span> {tech}
                </span>
              ))}
            </div>
            <div className="mt-2">
              <a href={props.githubLink} target="_blank" rel="noopener noreferrer" className="work-content-link">
                <FontAwesomeIcon icon={faCode} />
              </a>
            </div>
          </div>
        </div>
        <div className={`col-lg-7 col-md-7 work-main__1`}>
          <div className="work-image_container">
            <img src={props.image} className="work-image" alt="nine" />
          </div>
        </div>
        <div className={`col-lg-6 col-md-6 work-content work-main__2`}>
          <div className="text-right">
            {/* <div>Featured Project</div> */}
            <div className="work-content-title">{props.title}</div>
          </div>
          <div className="mt-2 work-content-description">
            {props.description}
            <div className="mt-2 text-right">
              <a href={props.githubLink} target="_blank" rel="noopener noreferrer" className="work-content-link">
                <FontAwesomeIcon icon={faCode} />
                <span className="ml-2">Project Link</span>
              </a>
            </div>
          </div>
          <div className="mt-2 tech-names text-right">
            {props.techlist.map((tech) => (
              <span>
                <span>&bull;</span> {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default WorkCard;

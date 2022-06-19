import React from "react";
import "./Home.css";
import Fade from "react-reveal/Fade";
import avatar from "../../assests/profileimage.jpg";
import Typewriter from "typewriter-effect";
import Resume from "../../assests/Seemab_Resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookF,faGithub,faLinkedinIn,} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <section id="home" className="home mt-5 pt-5">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-4 position-relative">
            <div className="image-container w-75 h-75">
              <img className="home-image" alt="not loading" src={avatar}></img>
            </div>
          </div>
          <div className="col-lg-8 position-relative">
            <Fade cascade right>
              <div className="home-text-container">
                <div className="row custom-row">Hi!</div>
                <div className="row custom-row">
                  <div className="home-iams">I am</div>
                  <div className="animationtexts">
                    <Typewriter
                      options={{
                        strings: ["Seemab . . .", "Web Developer . . ."],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </div>
                </div>
                <div className="row custom-row icons">
                 
                  <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/seemab-akhtar-khan-b1447021b/">
                      <FontAwesomeIcon
                        icon={faLinkedinIn}
                        className="icon1 linkedin"
                      />
                    </a>
                  </li>
                  <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/khanseemab">
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="icon1 github"
                      />
                    </a>
                  </li>
                  <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/khanseemab07">
                      <FontAwesomeIcon
                        icon={faFacebookF}
                        className="icon1 facebook"
                      />
                    </a>
                  </li>
                </div>
                <div className="row custom-row">
                  <a
                    href={Resume} target="_blank" rel="noopener noreferrer"
                    className="home-button"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    RESUME
                  </a>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Home;

import React from "react";
import { Link } from "react-router-dom";
import Typical from "react-typical" 
import "./Profile.css"

export default function Profile() {
  return (
    <div className="profile-container" id="profile">
      <div className="profile-parent">
        <div className="profile-details">
            
          <div className="colz">
          <div className="colz-icon">
            <Link to="#">
              <i className="fa fa-twitter-square"></i>
              </Link>
              
              <a href="https://www.linkedin.com/in/pk-pankajkumar">
              <i className="fa fa-linkedin-square"></i>
              </a><a href="https://github.com/pankaj5417">
              <i className="fa fa-github-square"></i>
              </a>

          </div>
            
          </div>
          <div className="profile-name">
              <span className="primary-text">
                  {" "}
                  Hello, I'M <span className="highlighted-text">Pankaj Kumar</span>
              </span>
          </div>

          <div className="profile-role">
              <span className="primary-text">
                  {" "}
                  <h1>
                      {" "}
                      <Typical loop={Infinity}
                      steps={[
                          "Enthusiastic Dev",1000,
                          "Full Stack Developer",1000,
                          "MERN Stack Dev",1000,
                          "React/Redux Dev",1000,
                      ]}  />

                  </h1>
                  <span className="profile-role-tagline">
                      Knack of building application with frontend and backend operations.
                  </span>
              </span>
          </div>
          <div className="profile-options">
              <button className="btn primary-btn">
                  {""}
                  Hire Me{" "}
              </button>
              <a href="fw12_032_Pankaj_kumar.pdf">
                  <button className="btn highlighted-btn">Get Resume</button>
              </a>
          </div>
        </div>
        <div className="profile-picture">
            <div className="profile-picture-background">

            </div>
        </div>
      </div>
    </div>
  );
}

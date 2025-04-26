import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  const click = (path) => {
    navigate(path);
  };

  return (
    <>
      <div class="container">
        <div class="card">
          <div class="left">
            <h1 class="name">
              Jigar Modi <br />
              <span></span>
            </h1>
            <p class="role">A Bit About Me</p>
            <p class="desc">
              I’m Jigar, your tech guru by day and a dedicated husband all the
              time! I’ve been coding up a storm, but my latest project?
              Mastering husband life! I’ve gone from tackling complex algorithms
              to solving the mystery of “what’s for dinner.” I bring my
              signature brilliance to both the office and home. Known for my
              sharp tech skills and smooth moves in keeping the Wi-Fi and my
              partner’s patience running smoothly, I’m now juggling the roles of
              innovator and world-class husband.
            </p>
            <p class="desc">
              With my charm and humor, there’s no bug I can’t fix or chore I
              can’t “debug”!
            </p>
            <div className="button-group">
          <span onClick={() => click("/resume")}>
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">My Resume</span>
            </button>
          </span>
          <span onClick={() => click("/projects")}>
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">My Projects</span>
            </button>
          </span>
        </div>
           
          </div>

          <div class="right">
            {/* <div class="heading">INTERIOR DESIGN</div> */}
            <div class="img-wrapper">
              <div className="bg-div"></div>
              <img src="/img/profile.jpg" alt="Olivia Wilson" />
            </div>
            <div class="pattern"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

import React from "react";
import "../pages/Styles/Resume.css";
import ResumeDoc from "../assets/images/Matt_Resume.pdf";
import { Icon } from "@iconify/react";

export default function Resume() {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <h2 className="skills-header">Skills</h2>
      <ul className="skills">
        <li>
          <div className="skill-name">HTML</div>
          <Icon className="skill-icon" icon="vscode-icons:file-type-html" />
        </li>
        <li>
          <div className="skill-name">CSS</div>
          <Icon className="skill-icon" icon="vscode-icons:file-type-css" />
        </li>
        <li>
          <div className="skill-name">JavaScript</div>
          <Icon className="skill-icon" icon="logos:javascript" />
        </li>
        <li>
          <div className="skill-name">ExpressJS</div>
          <Icon className="skill-icon" icon="skill-icons:expressjs-light" />
        </li>
        <li>
          <div className="skill-name">NodeJS</div>
          <Icon className="skill-icon" icon="devicon:nodejs" />
        </li>
        <li>
          <div className="skill-name">ReactJS</div>
          <Icon className="skill-icon" icon="vscode-icons:file-type-reactjs" />
        </li>
        <li>
          <div className="skill-name">Mongoose</div>
          <Icon className="skill-icon" icon="devicon:mongoose" />
        </li>
        <li>
          <div className="skill-name">MySQL</div>
          <Icon className="skill-icon" icon="skill-icons:mysql-dark" />
        </li>
        <li>
          <div className="skill-name">RESTful APIs</div>
          <Icon className="skill-icon" icon="eos-icons:api-outlined" />
        </li>
      </ul>
      <h5 className="more-skills-header">
        Other skills I have been exposed to already:
      </h5>
      <ul className="more-skills-list">
        <li>Agile Development</li>
        <li>Model View Controller(MVC)</li>
        <li>AJAX</li>
      </ul>
      <div className="learn-container">
        <h5 className="learning">
          What I am currently learning:
          <ul>
            <li>Python</li>
            <li>Flask</li>
          </ul>
        </h5>
        <h5 className="to-learn">
          What will I learn next?
          <ul>
            <li>Java</li>
            <li>C#</li>
          </ul>
        </h5>
      </div>
      <p className="resume-p">
        I have graduated from the Part-time Full-Stack Coding Boot Camp with
        Columbia University and am currently engaging in self-study to improve
        my coding skills. If you are interested, please feel free to download my
        resume below!
      </p>
      {/* Link to download Resume file */}
      <div className="resumeLink">
        <button className="resBtn">
          <a href={ResumeDoc} download="Matt_Resume.pdf">
            Download Here!{" "}
          </a>
        </button>
      </div>
    </div>
  );
}

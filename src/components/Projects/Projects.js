import "../Style/Projects.css";
import { projectData } from "./ProjectList";

function Project(props) {
  // Maps through object data imported from ProjectList.js and saves to constant variable arrayDataItems
  const arrayDataItems = projectData.map((projectData) => (
    <li className="project-list-item" key={projectData.id}>
      <h2 className="projectName">{`${projectData.name}`} </h2>
      {
        <img
          className="image"
          key={projectData.id}
          src={projectData.image}
          alt={projectData.name}
        />
      }{" "}
      <div className="btn-container">
        <button className="btn demo-btn">
          <a href={projectData.link}>TAKE A PEAK!</a>
        </button>{" "}
        <button className="btn repo-btn">
          <a href={projectData.repoLink}>REPOSITORY</a>
        </button>
      </div>
    </li>
  ));
  return (
    <div className="container">
      <div>
        <h1>My Work</h1>
      </div>
      {/* Renders projects saved into variable arrayDataItems in an unordered list */}
      <ul className="project-ul">{arrayDataItems}</ul>
    </div>
  );
}

export default Project;

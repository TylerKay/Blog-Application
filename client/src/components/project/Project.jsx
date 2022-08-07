import "./project.css";
import hardCodedProjectImg from "./Spotify.jpg";

export default function Project() {
  return (
    <>
      <span className="webpageTitle">Projects</span>
      <div className="project">
        {/* <img src={hardCodedProjectImg} alt="" className="projectImg" />
      <img src={hardCodedProjectImg} alt="" className="projectImg" />
      <img src={hardCodedProjectImg} alt="" className="projectImg" /> */}

        <img src={hardCodedProjectImg} alt="" className="projectImg" />
        <div className="projectInfo">
          <span className="projectTitle">Test title</span>
          <p className="projectDesc">Test description 123</p>
          <div className="projectCats">
            <span className="projectCat">Link</span>
          </div>
        </div>
      </div>
    </>
  );
}

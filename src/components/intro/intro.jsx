import "./intro.css";
import Me from "../../img/mypicture3.png";

function Intro() {
  return (
    <div className="real-bg">
      <div className="i">
        <div className="i-left">
          <div className="i-left-wrapper">
            <h2 className="i-intro">Welcome! My name is</h2>
            <h1 className="i-name">Rocío Tapia López</h1>
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">Computer Science degree</div>
                <div className="i-title-item">Software Development student</div>
              </div>
            </div>
            <p className="i-desc">Here I will be including my new projects.</p>
            <p className="i-desc">
              For now it is a bit empty, but great things take time!
            </p>
          </div>
        </div>
        <div className="i-right">
          <div className="i-bg">
            <svg viewBox="0 5 200 200" xmlns="http://www.w3.org/2000/svg" height={"170%"}>
              <path
                fill="#FF0066"
                d="M62.5,-25.9C68.7,-1.2,52.9,24.9,30.5,41C8.1,57.1,-21,63,-37.8,51C-54.7,39.1,-59.2,9.2,-50.9,-18.5C-42.5,-46.2,-21.3,-71.6,3.4,-72.7C28.1,-73.8,56.3,-50.6,62.5,-25.9Z"
                transform="translate(100 80)"
              />
            </svg>
            <img src={Me} alt="" className="i-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;

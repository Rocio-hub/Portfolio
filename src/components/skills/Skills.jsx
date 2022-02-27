import "./skills.css";
import Angular from "../../img/angular.png";
import Bootstrap from "../../img/bootstrap.png";
import Csharp from "../../img/csharp.png";
import Css from "../../img/css.png";
import Html from "../../img/html.png";
import Javascript from "../../img/javascript.png";
import Javafx from "../../img/javafx.png";
import Kotlin from "../../img/kotlin.png";
import React from "../../img/react.png";
import Sql from "../../img/sql.png";
import Uml from "../../img/uml.png";
import Scrumwise from "../../img/scrumwise.png";
import Trello from "../../img/trello.png";
import Agile from "../../img/agile.png";
import Github from "../../img/github.png";

function Skills() {
  return (
    <div className="s">

        <h1 className="s-title"> Skills </h1>
        <p className="s-desc">
          During my studies of the Computer Science AP, I was able to learn and
          practice the following:
        </p>


      <div className="s-logos">
        <div className="s-languages">
          <h2 className="s-title1">Languages:</h2>
          <div className="s-img-wrapped">
            <img src={Angular} alt="" className="s-img" />
            <img src={Bootstrap} alt="" className="s-img" />
            <img src={Csharp} alt="" className="s-img" />
            <img src={Css} alt="" className="s-img" />
            <img src={Html} alt="" className="s-img" />
            <img src={Javascript} alt="" className="s-img" />
            <img src={Javafx} alt="" className="s-img" />
            <img src={Kotlin} alt="" className="s-img" />
            <img src={React} alt="" className="s-img" />
            <img src={Sql} alt="" className="s-img" />
            <img src={Uml} alt="" className="s-img" />
          </div>
        </div>

        <div className="s-pm">
          <h2 className="s-title2">Project Management:</h2>
          <img src={Scrumwise} alt="" className="s-img" />
          <img src={Agile} alt="" className="s-img" />
          <img src={Trello} alt="" className="s-img" />
          <img src={Github} alt="" className="s-img" />
        </div>
      </div>
    </div>
  );
}

export default Skills;

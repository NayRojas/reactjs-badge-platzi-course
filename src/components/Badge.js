import React from "react";
import confLogo from "../images/badge-header.svg";
import BadgeCss from "./styles/BadgeCss.css";
class Badge extends React.Component {
  render() {
    const { firstName, lastName, twitter, jobTitle, avatar } = this.props;
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la PlatziConf" />
        </div>

        <div className="Badge__section-name">
          <img className="Badge__avatar" src={avatar} alt="avatar" />
          <h1>
            {firstName} <br /> {lastName}
          </h1>
        </div>

        <div className="Badge__section-info">
          <p>{jobTitle}</p>
          <p>{twitter}</p>
        </div>
        <div className="Badge__footer">#PlatziConf</div>
      </div>
    );
  }
}

export default Badge;

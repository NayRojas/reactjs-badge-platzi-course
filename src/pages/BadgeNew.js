import React from "react";
import NavBar from "../components/Navbar";
import header from "../images/badge-header.svg";
import Badge from "../components/Badge";
import avatar from "../images/avatar.png";
import BadgeForm from "../components/BadgeForm";
class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="BadgeNew__hero">
          <img src={header} alt="logo" className="img-fluid" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName="Nay"
                lastName="Rojas"
                jobtTitle="Frontend Engineer"
                twitter="@nayrojas_"
                avatar={avatar}
              ></Badge>
            </div>
            <div className="col">
              <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;

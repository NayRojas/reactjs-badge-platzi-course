import React from "react";
import header from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import avatar from "../images/avatar.png";
import BadgeForm from "../components/BadgeForm";

import api from "../api";

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      twitter: "",
      email: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img
            src={header}
            alt="logo"
            className="img-fluid BadgeNew__hero-image"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={this.state.form.firstName || "FIRST_NAME"}
                lastName={this.state.form.lastName || "FIRST_NAME"}
                jobTitle={this.state.form.jobTitle || "FIRST_NAME"}
                twitter={this.state.form.twitter || "FIRST_NAME"}
                email={this.state.form.email || "FIRST_NAME"}
                avatar={avatar}
              ></Badge>
            </div>
            <div className="col">
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;

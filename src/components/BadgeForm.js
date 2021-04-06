import React from "react";

class BadgeForm extends React.Component {
  handleChange = (e) => {
    console.log({
      name: e,
      value: e.target.value,
    });
  };

  handleClick = (e) => {
    console.log("button was clicked");
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.onHandleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.handleChange}
              type="text"
              className="form-control"
            />
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;

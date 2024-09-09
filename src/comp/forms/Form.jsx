import React from "react";
import "./forms.css";
export default class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "",
    favColor: "",
    submittedData: [], // To store multiple submitted forms
  };

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // this.setState({
    //   submittedData: {
    //     firstName: this.state.firstName,
    //     lastName: this.state.lastName,
    //     email: this.state.email,
    //     comments: this.state.comments,
    //     isFriendly: this.state.isFriendly ? "Yes" : "No",
    //     employment: this.state.employment,
    //     favColor: this.state.favColor,
    //   },
    // });
    const newEntry = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      comments: this.state.comments,
      isFriendly: this.state.isFriendly ? "Yes" : "No",
      employment: this.state.employment,
      favColor: this.state.favColor,
    };

    this.setState((prevState) => ({
      submittedData: [...prevState.submittedData, newEntry],
      // Clear form fields after submission
      firstName: "",
      lastName: "",
      email: "",
      comments: "",
      isFriendly: true,
      employment: "",
      favColor: "",
    }));
    console.log(this.state);
  };
  render() {
    return (
      <>
        <section className="form--component">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={this.handleChange}
              value={this.state.firstName}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={this.handleChange}
              value={this.state.lastName}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
            <textarea
              placeholder="Comments"
              name="comments"
              value={this.state.comments}
              onChange={this.handleChange}
            />
            <input
              type="checkbox"
              name="isFriendly"
              id="isFriendly"
              onChange={this.handleChange}
              checked={this.state.isFriendly}
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br />
            <br />
            <fieldset>
              <legend>Current employment status</legend>
              <input
                type="radio"
                name="employment"
                value="part-time"
                id="part-time"
                checked={this.state.employment === "part-time"}
                onChange={this.handleChange}
              />
              <label htmlFor="part-time">Part-time</label>
              <br />

              <input
                type="radio"
                id="full-time"
                name="employment"
                value="full-time"
                checked={this.state.employment === "full-time"}
                onChange={this.handleChange}
              />
              <label htmlFor="full-time">Full-time</label>
              <br />
              <input
                type="radio"
                id="unemployed"
                name="employment"
                value="unemployed"
                checked={this.state.employment === "unemployed"}
                onChange={this.handleChange}
              />
              <label htmlFor="unemployed">Unemployed</label>
              <br />
            </fieldset>
            <br />
            <select
              id="favColor"
              name="favColor"
              value={this.state.favColor}
              onChange={this.handleChange}
            >
              <option value="red">Red</option>
              <option value="orange">Orange</option>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
              <option value="indigo">Indigo</option>
              <option value="violet">Violet</option>
            </select>
            <br />
            <br />
            <button type="submit">Submit</button>
          </form>
        </section>
        <br /> <br />
        <div>
          {this.state.submittedData.length > 0 && (
            <div>
              <h2>Submitted Data:</h2>
              <table border="1" cellPadding="5">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Comments</th>
                    <th>Are you friendly?</th>
                    <th>Employment Status</th>
                    <th>Favorite Color</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.submittedData.map((entry, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{entry.firstName}</td>
                      <td>{entry.lastName}</td>
                      <td>{entry.email}</td>
                      <td>{entry.comments}</td>
                      <td>{entry.isFriendly}</td>
                      <td>{entry.employment}</td>
                      <td>{entry.favColor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </>
    );
  }
}

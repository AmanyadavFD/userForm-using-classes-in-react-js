import React from "react";
import "./Profile.css";
import UserImage from "../images/user.png";
import StarFilled from "../images/star-filled.png";
import StarEmpty from "../images/star-empty.png";

export default class Profile extends React.Component {
  state = {
    name: "Jhon",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  };

  toggleFavorite = () => {
    this.setState((prevContact) => ({
      isFavorite: !prevContact.isFavorite,
    }));
  };

  render() {
    let starIcon = this.state.isFavorite ? StarFilled : StarEmpty;
    return (
      <main>
        <article className="card">
          <img src={UserImage} className="card--image" alt="userImage" />
          <div className="card--info">
            <img
              src={starIcon}
              alt="favorite"
              className="card--favorite"
              onClick={this.toggleFavorite}
            />
            <h2 className="card--name">
              {this.state.name} {this.state.lastName}
            </h2>
            <p className="card--contact">{this.state.email}</p>
            <p className="card--contact">{this.state.phone}</p>
          </div>
        </article>
      </main>
    );
  }
}

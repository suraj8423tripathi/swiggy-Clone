import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, location } = this.props;
    return (
      <div className="user-card">
        <h2>Name : {name}</h2>
        <h3>Locations : {location}</h3>
        <h4>Contact : st172486</h4>
      </div>
    );
  }
}

export default UserClass;

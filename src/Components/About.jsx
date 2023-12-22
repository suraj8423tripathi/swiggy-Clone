import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>Swiggy Clone Project</h2>
        <UserClass name={"First Child (class)"} location={"varanasi (class)"} />
      </div>
    );
  }
}

export default About;

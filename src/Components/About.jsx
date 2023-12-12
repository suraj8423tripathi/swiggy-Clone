import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor is called");
  }
  componentDidMount() {
    console.log("Parent Component Did Mount");
  }
  render() {
    console.log("Parent render is called");
    return (
      <div>
        <h1>About</h1>
        <h2>Swiggy Clone Project</h2>
        <UserClass name={"First Child (class)"} location={"varanasi (class)"} />
        <UserClass
          name={"Second Child (class)"}
          location={"varanasi (class)"}
        />
        <User name={"User (class)"} location={"varanasi (class)"} />
      </div>
    );
  }
}

export default About;

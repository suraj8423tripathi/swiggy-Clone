import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>Swiggy Clone Project</h2>
      <User name={"Suraj Tripathi (function)"} />
      <UserClass
        name={"Suraj Tripathi (class)"}
        location={"varanasi (class)"}
      />
    </div>
  );
};

export default About;

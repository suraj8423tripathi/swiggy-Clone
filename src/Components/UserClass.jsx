import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Dummy Location",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/suraj8423tripathi");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    console.log("When state changes..it is called");
  }
  componentWillUnmount() {
    console.log("Called when component will go from this page");
  }

  render() {
    const { name, location } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : st172486</h4>
      </div>
    );
  }
}

export default UserClass;

/***
 *
 * ---- Mounting ----
 *
 * Constructor (dummy)
 * Render(dummy)
 *      < HTML Dummy >
 *
 * Component Did Mount
 *      <API Call>
 *      <this.setState > -> State variable is updated
 *
 *
 * -----UPDATE
 *
 *       render(API data)
 *       <HTML (new API data>)
 *
 * ComponentDidUpdate
 *
 *
 *
 *
 *
 */

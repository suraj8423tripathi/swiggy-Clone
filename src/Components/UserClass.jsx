import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    console.log(this.props.name + "constructor is called");
  }
  componentDidMount() {
    console.log(this.props.name + "Component Did Mount");
    //componentDidMount is called once the component is mounted
  }
  render() {
    console.log(this.props.name + "render is called");
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Click
        </button>
        <h1>Count = {count}</h1>

        <h2>Name : {name}</h2>
        <h3>Locations : {location}</h3>
        <h4>Contact : st172486</h4>
      </div>
    );
  }
}

export default UserClass;

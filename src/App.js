import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Usercontext from "./utils/UserContext";

function App() {
  const [userName, setUserName] = React.useState();
  // authentication
  React.useEffect(() => {
    // Make API call and send username and password
    const data = {
      name: "Suraj Tripathi",
    };

    setUserName(data.name);
  });
  return (
    <Usercontext.Provider value={{ loggedInUser: userName }}>
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </Usercontext.Provider>
  );
}

export default App;

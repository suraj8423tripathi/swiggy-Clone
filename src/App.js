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
    // Default values
    <Usercontext.Provider value={{ loggedInUser: userName }}>
      {/* //Suraj Tripathi */}
      <div className="App">
        <Usercontext.Provider value={{ loggedInUser: "Elon Musk" }}>
          {/* Only in Header It will Show Elon Musk */}
          <Header />
        </Usercontext.Provider>
        <Outlet />
      </div>
    </Usercontext.Provider>
  );
}

export default App;

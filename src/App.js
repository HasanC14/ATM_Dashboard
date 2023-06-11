// App.js
import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import RightSidebar from "./components/RightSidebar";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Div>
      {loggedIn ? (
        <>
          <Sidebar />
          <Dashboard />
          <RightSidebar />
        </>
      ) : (
        <Login setLoggedIn={setLoggedIn} />
      )}
    </Div>
  );
}

export default App;

const Div = styled.div`
  position: relative;
`;

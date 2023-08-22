import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Routes from "./Routes/Routes";
import UserContextProvider from "./Context/UserContext";

const App = () => {
  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  );
};

export default App;

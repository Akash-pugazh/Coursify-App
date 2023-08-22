import React, { useState } from "react";

export const UserContext = React.createContext();
export const UserUpdateContext = React.createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  function setAsUser() {
    setUser("user");
  }
  function setAsAdmin() {
    setUser("admin");
  }
  const updateUserFunctions = {
    setAsUser,
    setAsAdmin,
  };
  return (
    <UserContext.Provider value={user}>
      <UserUpdateContext.Provider value={updateUserFunctions}>
        {children}
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  );
}

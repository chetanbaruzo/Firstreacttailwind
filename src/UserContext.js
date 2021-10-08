import React, { createContext, useState } from "react";

// create the context object using the createContext API
export const UserContext = createContext();

// This context provider is passed to any component requiring the context
export const UserProvider = ({ children }) => {
  // useState React hook was used to hold the state variables of name
  const [name, setName] = useState("");

  return (
    <UserContext.Provider
      value={{
        name,
        setName
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

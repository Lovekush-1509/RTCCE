import React, { createContext, useState } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [output, setoutput] = useState("output will be shown here");

  return (
    <StateContext.Provider value={{ output, setoutput }}>
      {children}
    </StateContext.Provider>
  );
};

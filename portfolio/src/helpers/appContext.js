import React from "react";
export const AppContext = React.createContext({
    theme: "light",
    toggleTheme: () => {},
  });
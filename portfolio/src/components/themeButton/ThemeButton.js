import React from "react";
import { AppContext } from "../../helpers/appContext";
import "./ThemeButton.scss";

function ThemeButton() {
  return (
    <>
      <AppContext.Consumer>
        {({ theme, toggleTheme }) => (
          <button onClick={() => toggleTheme()}>
            {theme === "dark" ? (
              <i className="gg-moon"></i>
            ) : (
              <i className="gg-sun"></i>
            )}
          </button>
        )}
      </AppContext.Consumer>
    </>
  );
}

export default ThemeButton;

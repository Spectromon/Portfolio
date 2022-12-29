import React from "react";
import "./App.css";
import { AppContext } from "./helpers/appContext";
import Navbar from "./components/navBar/Navbar";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.checkStoredTheme = () => {
      switch (window.localStorage.getItem("theme")) {
        case "light":
          return "light";
        case "dark":
          return "dark";
        default:
          window.localStorage.setItem("theme", "light");
          return "light";
      }
    };

    this.toggleTheme = () => {
      window.localStorage.setItem(
        "theme",
        this.state.theme === "dark" ? "light" : "dark"
      );
      this.setState((state) => ({
        theme: state.theme === "dark" ? "light" : "dark",
      }));
    };
    this.state = {
      theme: this.checkStoredTheme(),
      toggleTheme: this.toggleTheme,
    };
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <div className="app" data-theme={this.state.theme}>
          <Navbar />
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;

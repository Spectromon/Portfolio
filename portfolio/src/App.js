import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/nav/Navbar";

function App() {
  const [theme, setTheme] = useState(window.localStorage.getItem("theme"));

  function changeTheme() {
    console.log(theme);
    switch(theme) {
      case "light":
        setTheme("dark")
        break;
      case "dark":
        setTheme("light")
        break;
      default:
        setTheme("light")
        // code block
    }
  }

  const ButtonIcon = () =>{
    switch(theme) {
      case "light":
        return(<i className="gg-sun"></i>);
      case "dark":
        return(<i className="gg-moon"></i>);
      default:
        return(<i className="gg-sun"></i>);
    }
  }

  useEffect(() => {
    if (theme !== "dark" && theme !== "light") {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="app" data-theme={theme}>
    <Navbar />
    <button onClick ={changeTheme}><ButtonIcon/></button>
    </div>
  )
}

export default App;

import React, { useEffect, useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

const App = () => {
  const [color, setcolor] = useState("light");
  const [alert, setalert] = useState(null);

  const showalert = (msg, type) => {
    setalert({
      msg: msg,
      type: type,
    });
  };
  setTimeout(() => {
    setalert(null);
  }, 2000);
  const handle = () => {
    if (color === "light") {
      setcolor("dark");
      showalert("dark mode has enable", "success");
    } else {
      setcolor("light");
      showalert("light mode has enable", "success");
    }
  };

  useEffect(() => {}, []);

  return (
    <div
      style={{
        background: color === "dark" ? "gray" : "white",
        height: "100vh",
      }}
      className="my-10"
    >
      <Navbar color={color} handle={handle} showalert={setalert} />
      <Alert alert={alert} />
      <TextForm color={color} />
    </div>
  );
};

export default App;

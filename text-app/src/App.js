import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Alert from "./components/Alert";
import Contact from "./components/Contact";
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
    <BrowserRouter>
      <div
        style={{
          background: color === "dark" ? "gray" : "white",
          height: "100vh",
        }}
        className="my-10"
      >
        <Navbar color={color} handle={handle} showalert={setalert} />

        <Alert alert={alert} />
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<TextForm color={color} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

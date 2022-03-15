import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

const App = () => {
  const [color, setcolor] = useState("light");

  const handle = () => {
    if (color === "light") setcolor("dark");
    else setcolor("light");
  };
  console.log(color);

  return (
    <div
      style={{
        background: color === "dark" ? "gray" : "white",
        height: "100vh",
      }}
      className="my-10"
    >
      <Navbar color={color} handle={handle} />

      <TextForm color={color} />
    </div>
  );
};

export default App;

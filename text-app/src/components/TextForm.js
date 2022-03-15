import React, { useState } from "react";

const TextForm = (props) => {
  const [text, settext] = useState("");
  console.log(text);
  const Uphandler = () => {
    const up = text.slice();

    console.log(up.toUpperCase());
    settext(up.toUpperCase());
  };
  const Oghandler = () => {
    settext(text.toLowerCase());
    console.log(text);
  };
  const Correct = () => {
    const b = text.split(".");

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const c = [];
    b.forEach((e, index) => {
      c.push(capitalizeFirstLetter(b[index]));
    });
    const e = c.join(".");
    settext(e);
  };
  const changehandler = (event) => {
    settext(event.target.value);
    localStorage.setItem("mohe", text);
  };

  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.color === "dark" ? "white" : "black" }}
      >
        <h1>Enter the text to Aanalyze</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            rows="12"
            value={text || localStorage.getItem("mohe")}
            onChange={changehandler}
            style={{
              backgroundColor: props.color === "dark" ? "gray" : "white",
              color: props.color === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button onClick={Correct} className="btn btn-primary mx-2">
          Best format
        </button>
        <button onClick={Uphandler} className="btn btn-primary mx-2">
          Convert to Upper Case
        </button>
        <button onClick={Oghandler} className="btn btn-danger">
          Orginal
        </button>
      </div>
      <div
        className="container my-2"
        style={{ color: props.color === "dark" ? "white" : "black" }}
      >
        <h1>Your text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.replace(/\s/g, "").length}{" "}
          charcters
        </p>
        <p>Readin {0.008 * text.split(" ").length.toFixed(2)} Minutes</p>
        <h2>preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
};

export default TextForm;

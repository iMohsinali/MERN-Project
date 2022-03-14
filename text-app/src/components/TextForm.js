import React, { useState } from "react";

const TextForm = () => {
  const [text, settext] = useState("this is mohsin");
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
  const changehandler = (event) => {
    settext(event.target.value);
  };
  return (
    <div className="container my-3">
      <h1>Enter the text to Aanalyze</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="mybox"
          rows="12"
          value={text}
          onChange={changehandler}
        ></textarea>
      </div>
      <button onClick={Uphandler} className="btn btn-primary">
        Convert to Upper Case
      </button>
      <button onClick={Oghandler} className="btn btn-danger">
        Orginal
      </button>
    </div>
  );
};

export default TextForm;

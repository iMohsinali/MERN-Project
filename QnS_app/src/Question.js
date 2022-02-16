import { AddCircleRounded, RemoveCircle } from "@material-ui/icons";
import React, { useState } from "react";

const Question = ({ title, info }) => {
  const [show, setshow] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setshow(!show)}>
          {show ? (
            <RemoveCircle className="minus" />
          ) : (
            <AddCircleRounded className="plus" />
          )}
        </button>
      </header>
      {show && <p> {info}</p>}
    </article>
  );
};

export default Question;

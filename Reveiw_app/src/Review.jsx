import React from "react";
import people from "./data";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
export const Review = () => {
  const [index, setindex] = useState(0);
  const { id, name, job, image, text } = people[index];
  const check = (n) => {
    if (n < 0) {
      n = people.length - 1;
      return n;
    }
    if (n > people.length - 1) {
      n = 0;
      return n;
    } else {
      return n;
    }
  };
  const right = () => {
    setindex((index) => {
      let newindex = index + 1;
      return check(newindex);
    });
  };
  const left = () => {
    setindex((index) => {
      let newindex = index - 1;
      return check(newindex);
    });
  };
  const random = () => {
    let newindex = Math.random() * people.length;
    newindex = Math.floor(newindex);
    if (newindex === index) {
      newindex = index + 1;
    }
    setindex(check(newindex));
  };
  return (
    <article>
      <div className="image-container">
        <img src={image} alt={name} className="person-image" />
      </div>
      <div className=" btn">
        <button className="arrow-btn">
          <IoIosArrowBack onClick={left} />
        </button>
        <span>
          <button className="arrow-btn">
            <IoIosArrowForward onClick={right} />
          </button>
        </span>
      </div>
      <div className="random" onClick={random}>
        <button>random</button>
      </div>
    </article>
  );
};

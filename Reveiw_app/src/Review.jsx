import React from "react";
import people from "./data";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
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
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={left}>
          <FaChevronLeft />
        </button>

        <button className="next-btn" onClick={right}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={random}>
        surprise me
      </button>
    </article>
  );
};

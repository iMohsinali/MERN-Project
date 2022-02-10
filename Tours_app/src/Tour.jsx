import React from "react";

export const Tour = ({ id, image, name, price, info }) => {
  return (
    <div>
      <img src={image} alt={name} />
    </div>
  );
};

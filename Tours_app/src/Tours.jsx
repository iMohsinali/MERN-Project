import React from "react";
import { Tour } from "./Tour";
export const Tours = ({ tour }) => {
  return (
    <div>
      {tour.map((t) => {
        return <Tour key={t.id} {...t} />;
      })}
    </div>
  );
};

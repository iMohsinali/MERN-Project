import { Clear, Remove } from "@material-ui/icons";
import React from "react";

const List = ({ id, age, name, image, removepeople }) => {
  return (
    <div className="remove">
      <article className="person">
        <img src={image} alt={name} />

        <div>
          <h4>{name}</h4>
          <p>{age} Years</p>
        </div>
      </article>
      <button onClick={() => removepeople(id)} className="remove-btn">
        <Clear className="clear" />
      </button>
    </div>
  );
};

export default List;

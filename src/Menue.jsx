import React from "react";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <div>
      <h1>Choose one</h1>
      <Link to="./Guess">
        <div className="choices">
          <img
            className="imgess"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyE9b8Nmt7KUgUt5Koh_958eozvB6vJjeOzg&usqp=CAU"
            alt="Guess the Flag"
          />
          <h2>Guess right flag</h2>
        </div>
      </Link>

      <Link to="./Name">
        <div className="choices">
          <img
            className="imgess"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGqv8Ror7miwKvxnM88eubZJ1GWfvwqY2f076JYQ9yo4uscRmPJQp3LhgYmHjhlcVzGB4&usqp=CAU"
            alt="Guess Country Name"
          />
          <h2>Guess Country name</h2>
        </div>
      </Link>
    </div>
  );
};

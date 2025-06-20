import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

function BookList() {
  let books = [
    "Think and grow rich",
    "Coffee can investing",
    "Rework",
    "MBA",
    "Atomic Habits",
  ];
  //   books=[];

  const [showList, setShowList] = useState(false);
  const [count, setCount] = useState(-1);
  const toggleList = () => {
    setShowList(!showList);
  };
  const counter = () => {
    setCount(count + 1);
  };
  return (
    <Fragment>
      <h1>My List</h1>
      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <button onClick={counter} className="btn btn-primary">
          Count : {count}
        </button>
        <button onClick={toggleList} className="btn btn-primary">
          {showList ? "Hide List" : "Show List"}
        </button>
      </div>
      {showList && (
        <ul className="list-group">
          {books.map((book) => (
            <li className="list-group-item" key={book}>
              {book}
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  );
}
export default BookList;

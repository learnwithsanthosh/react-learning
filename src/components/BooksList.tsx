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
  const toggleList = () => {
    setShowList(!showList);
  };
  return (
    <Fragment>
      <h1>My List</h1>
      <button onClick={toggleList} className="btn btn-primary">
        {showList ? "Hide List" : "Show List"}
      </button>
      {showList && (
        <ul className="list-group">
          {books.map((book) => (
            <li className="list-group-item">{book}</li>
          ))}
        </ul>
      )}
    </Fragment>
  );
}
export default BookList;

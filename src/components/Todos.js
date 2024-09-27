import React, { useState } from "react";
import ReactDOM from "react-DOM";

const items = [];

export default function Todo() {
  const [activeItem, setActiveItem] = useState(null);
  const [itemsList, setItemsList] = useState(items);

  const changeItem = function (e) {
    setActiveItem(e.target.value);
  };

  const postItem = function () {
    if (activeItem === null) return;
    items.push(activeItem);
    console.log(activeItem);
    console.log(items);
    // setItemsList(items);
    setActiveItem(null);

    return null;
  };

  const remove = function (e) {
    console.log(e.target.dataset.item);
    const itemNum = e.target.dataset.item;
    // items.splice(itemNum - 1, 1);
    setItemsList(items.splice(itemNum - 1, 1));
    console.log(items);
  };

  const style = {
    display: "inline",
    margin: "20px",
  };

  return (
    <div className="container">
      <h2>To-Do List</h2>
      <div id="content">
        <div className="list">
          <ol>
            {items.map((cur, i) => (
              <div>
                <li className="toDoItem" style={style}>
                  {i + 1}: {cur}
                </li>
                <button data-item={i + 1} onClick={remove}>
                  remove
                </button>
              </div>
            ))}
          </ol>
        </div>
        <input onChange={changeItem} value={activeItem}></input>
        <button onClick={postItem}>Submit</button>
      </div>
    </div>
  );
}

import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const selectHandler = (e) => {
    // console.log(e.target.value);
    props.onExpensesFilter(e.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={selectHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2023'>2023</option>
          <option value='2024'>2024</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

// 1 - listen to changes here

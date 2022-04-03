import { useState } from "react";
import Select from "react-select";

const options = [
  { value: "All", label: "All" },
  { value: "completed", label: "completed" },
  { value: "unCompleted", label: "unCompleted" },
];

const NavBar = ({
  upCompletedTodos,
  filterTodos,
  onChange,
  selectsedOptions,
}) => {
  if (!upCompletedTodos) return <h2>set your todos</h2>;
  return (
    <header>
      <span>{upCompletedTodos}</span> <h2> is not completed</h2>
      <Select
        value={selectsedOptions.value}
        onChange={onChange}
        options={options}
        className="selected"
      />
      {/* <select onChange={onChange} value={Status}>
        <option value="All">All</option>
        <option value="completed">completed</option>
        <option value="unCompleted">unCompleted</option>
      </select> */}
    </header>
  );
};

export default NavBar;

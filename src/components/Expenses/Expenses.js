import React, { useState } from "react";


import Card from "../Utils/Card";
import "./Expenses.css";
import { ExpensesChart } from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import { ExpensesList } from "./ExpensesList";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangedHandler = (selectYear) => {
    setFilteredYear(selectYear);
  };

  const filteredExpense = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangedHandler}
        />
        <ExpensesChart expenses={filteredExpense} />
        <ExpensesList items={filteredExpense} />
      </Card>
    </li>
  );
}

export default Expenses;

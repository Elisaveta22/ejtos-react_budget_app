import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, expenses, currency } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const [newBudget, setNewBudget] = useState(budget);
  const handleBudgetChange = (event) => {
    setNewBudget(event.target.value);

    if (event.target.value > 20000) {
      alert("Budget cannot be more than 20,000");
      setNewBudget(20000);
    }

    if (event.target.value < totalExpenses) {
      alert("You cannot reduce the budget lower than the spending");
      setNewBudget(totalExpenses);
    }
  };
  return (
    <div className="alert alert-secondary">
      <span>Budget: {currency}</span>
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};
export default Budget;

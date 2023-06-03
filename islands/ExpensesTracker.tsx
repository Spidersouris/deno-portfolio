//? Import from Preact to be able to change state
import { useState } from "preact/hooks";
//? Import IndividualExpenses component to display expenses
import { IndividualExpense } from "../components/expenses-tracker/IndividualExpense.tsx";
//? Import expense creation form
import AddNewExpense from "./AddNewExpense.tsx";
//? Import the Expense type for casting
import type { Expense } from "../types/Expense.ts";
import ExpensesYearSelect from "./ExpensesYearSelect.tsx";
import ExpenseChart from "../components/expenses-tracker/ExpensesChart.tsx";

export default function ExpensesTracker(
  { expenses: savedExpenses }: { expenses: Expense[] },
) {
  //? Manages currently displayed expenses for the chosen year
  const [expenses, updateExpenses] = useState(savedExpenses);
  //? Tracks what year's expenses are being displayed
  const [expensesYear, setExpensesYear] = useState("2020");

  return (
    <div style="width: 100%;">
      <ExpenseChart year={expensesYear} />
      <ExpensesYearSelect
        selectedYear={expensesYear}
        expensesFilter={(year) => {
          //? Update expensesYear on value change
          setExpensesYear(year);
          //? Set displayed Expenses to current selected year only
          updateExpenses(savedExpenses.filter((expense) =>
            new Date(expense.date).getFullYear() === Number(year)
          ));
        }}
      />
      <AddNewExpense
        //? Add new expense to the database
        addNewExpenseFunction={(newExpense) => {
          updateExpenses((currentState) => {
            return [...currentState, newExpense];
          });
        }}
      />
      <div class="expenses-group">
        {/* Display all expenses filtered */}
        {expenses.map((expense) => (
          <IndividualExpense
            date={expense.date}
            description={expense.description}
            cost={expense.cost}
          />
        ))}
      </div>
    </div>
  );
}

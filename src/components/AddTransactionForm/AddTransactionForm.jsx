import clsx from "clsx";
import { useState } from "react";

import Income from "./Income/Income";
import Expense from "./Expense/Expense";

import s from "./AddTransactionForm.module.css";

const AddTransactionForm = ({ closeModal }) => {
  const [transactionType, setTransactionType] = useState("+");

  const handleChange = (event) => {
    setTransactionType(event.target.checked ? "-" : "+");
  };

  return (
    <div className={s.addTransactionForm}>
      <h2 className={s.title}>Add transaction</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span className={clsx(transactionType === "+" && s.income, s.opt)}>
          Income
        </span>
        <div className={s.toggle_switch}>
          <input
            id="toggle"
            className={s.toggle_input}
            type="checkbox"
            checked={transactionType === "-"}
            onChange={handleChange}
          />
          <label className={s.toggle_label} htmlFor="toggle"></label>
        </div>
        <span className={clsx(transactionType === "-" && s.expense, s.opt)}>
          Expense
        </span>
      </div>
      {transactionType === "+" && <Income closeModal={closeModal} />}
      {transactionType === "-" && <Expense closeModal={closeModal} />}
    </div>
  );
};

export default AddTransactionForm;

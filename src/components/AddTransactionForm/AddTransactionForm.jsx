import clsx from "clsx";
import { useState } from "react";

import Income from "./Income/Income";
import Expense from "./Expense/Expense";

import s from "./AddTransactionForm.module.css";

const AddTransactionForm = ({ title, closeModal, editedItem, buttonText }) => {
  const [transactionType, setTransactionType] = useState(() => {
    if (!editedItem || editedItem.type === "INCOME") {
      return "+";
    } else {
      return "-";
    }
  });

  const handleChange = (event) => {
    setTransactionType(event.target.checked ? "-" : "+");
  };

  return (
    <div className={s.addTransactionForm}>
      <h2 className={s.title}>{title}</h2>
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
      {transactionType === "+" && (
        <Income
          closeModal={closeModal}
          editedItem={editedItem}
          buttonText={buttonText}
        />
      )}
      {transactionType === "-" && (
        <Expense
          closeModal={closeModal}
          editedItem={editedItem}
          buttonText={buttonText}
        />
      )}
    </div>
  );
};

export default AddTransactionForm;

import { Field, Form, Formik } from "formik";
import Select from "react-select";
import { useState } from "react";
import clsx from "clsx";
import s from "./Expense.module.css";

const categories = [
  { value: "food", label: "Food" },
  { value: "transport", label: "Transport" },
  { value: "entertainment", label: "Entertainment" },
  { value: "utilities", label: "Utilities" },
];

const Expense = () => {
  const todayDate = new Date().toISOString().split("T")[0];
  const [selectedCategory, setSelectedCategory] = useState(null);

  const initialValues = {
    amount: "",
    date: todayDate,
    comment: "",
    category: "",
  };

  const handleExpensSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className={clsx(s.formBox)}>
      <Formik initialValues={initialValues} onSubmit={handleExpensSubmit}>
        {({ setFieldValue }) => (
          <Form className={clsx(s.expenseForm)}>
            <div className={clsx(s.fieldContainer)}>
              <label htmlFor="category" className={clsx(s.label)}></label>
              <Select
                className={clsx(s.expenseSelect)}
                id="category"
                name="category"
                options={categories}
                value={selectedCategory}
                onChange={(option) => {
                  setSelectedCategory(option);
                  setFieldValue("category", option ? option.value : "");
                }}
                placeholder="Select a category"
              />
            </div>
            <div className={clsx(s.fieldContainer)}>
              <Field
                name="amount"
                type="number"
                placeholder="0.00"
                className={clsx(s.expenseSum)}
              />
              <Field
                name="date"
                type="date"
                placeholder={new Date(todayDate)
                  .toLocaleDateString("en-GB")
                  .replace(/\//g, ".")}
                className={clsx(s.expenseDate)}
              />
            </div>
            <div className={clsx(s.fieldContainer)}>
              <Field
                name="comment"
                type="text"
                placeholder="Comment"
                className={clsx(s.expenseComment)}
              />
            </div>
            <div className={clsx(s.buttonContainer)}>
              <button type="submit" className={clsx(s.expenseAddBtn)}>
                Add
              </button>
              <button type="button" className={clsx(s.expenseCnclBtn)}>
                Cancel
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Expense;

import { Field, Form, Formik } from "formik";
import Select from "react-select";
import { useState } from "react";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";

import MyDatePicker from "../DatePicker/DatePicker";

import { selectCategories } from "../../../redux/transactions/selector";
import { addTrnThunk } from "../../../redux/transactions/operations";
import s from "./Expense.module.css";

const Expense = ({ closeModal }) => {
  const todayDate = new Date().toISOString().split("T")[0];
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categoriesArr = useSelector(selectCategories);
  const dispatch = useDispatch();

  const categoryOptions = categoriesArr.map((category) => ({
    value: category.id,
    label: category.name,
  }));

  const initialValues = {
    transactionDate: todayDate,
    type: "EXPENSE",
    categoryId: "",
    comment: "",
    amount: "",
  };

  const handleExpenseSubmit = (values) => {
    console.log(values);
    dispatch(addTrnThunk(values));
    closeModal();
  };

  return (
    <div className={clsx(s.formBox)}>
      <Formik initialValues={initialValues} onSubmit={handleExpenseSubmit}>
        {({ setFieldValue }) => (
          <Form className={clsx(s.expenseForm)}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className={clsx(s.selectWrapper)}>
                <Select
                  className={clsx(s.expenseSelect)}
                  id="category"
                  name="category"
                  options={categoryOptions}
                  value={selectedCategory}
                  onChange={(option) => {
                    setSelectedCategory(option);
                    setFieldValue("categoryId", option ? option.value : "");
                  }}
                  placeholder="Select a category"
                />
              </div>
            </div>
            <div className={clsx(s.sumDateContainer)}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div className={clsx(s.sdWrapper)}>
                  <Field
                    name="amount"
                    type="text"
                    placeholder="0.00"
                    className={clsx(s.expenseSum)}
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div className={clsx(s.sdWrapper)}>
                  <MyDatePicker name="transactionDate" />
                </div>
              </div>
            </div>
            <div className={clsx(s.commentContainer)}>
              <div className={clsx(s.commentWrapper)}>
                <Field
                  name="comment"
                  type="text"
                  placeholder="Comment"
                  className={clsx(s.expenseComment)}
                />
              </div>
            </div>
            <div className={clsx(s.buttonContainer)}>
              <button type="submit" className={clsx(s.expenseAddBtn)}>
                Add
              </button>
              <button
                type="button"
                className={clsx(s.expenseCnclBtn)}
                onClick={closeModal}
              >
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

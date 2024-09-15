import { ErrorMessage, Field, Form, Formik } from "formik";
import Select from "react-select";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectCategories } from "../../../redux/transactions/selector";
import {
  addTrnThunk,
  evoEditTrnThunk,
} from "../../../redux/transactions/operations";
import MyDatePicker from "../DatePicker/DatePicker";

import expenseValidationSchema from "../../../helpers/expenseValidationSchema";
import s from "./Expense.module.css";

const Expense = ({ closeModal, editedItem, buttonText }) => {
  const todayDate = new Date().toISOString().split("T")[0];
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categoriesArr = useSelector(selectCategories);
  const dispatch = useDispatch();

  const categoryOptions = categoriesArr.slice(0, -1).map((category) => ({
    value: category.id,
    label: category.name,
  }));

  const initialValues = editedItem
    ? {
        amount: Math.abs(editedItem.amount),
        categoryId: editedItem.type === "INCOME" ? null : editedItem.categoryId,
        comment: editedItem.comment,
        transactionDate: editedItem.transactionDate,
        type: "EXPENSE",
      }
    : {
        transactionDate: todayDate,
        type: "EXPENSE",
        categoryId: "",
        comment: "",
        amount: "",
      };

  const handleExpenseSubmit = (values) => {
    values.amount = Math.abs(values.amount) * -1;
    if (editedItem) {
      dispatch(evoEditTrnThunk({ transaction: values, id: editedItem.id }));
    } else {
      dispatch(addTrnThunk(values));
    }
    closeModal();
  };

  const validateAmountInput = (e) => {
    const value = e.target.value;

    if (
      e.key === "Backspace" ||
      e.key === "Delete" ||
      e.key === "ArrowLeft" ||
      e.key === "ArrowRight"
    ) {
      return;
    }

    if (
      !/[\d.-]/.test(e.key) ||
      (e.key === "-" && value.includes("-")) ||
      (e.key === "-" && value.length > 0) ||
      (e.key === "." && value.includes(".")) ||
      (e.key === "." && value.length === 0) ||
      (value.includes(".") &&
        value.includes("-") &&
        value.indexOf("-") > value.indexOf("."))
    ) {
      e.preventDefault();
    }
  };

  const defCat = categoryOptions.find(
    (e) => e.value === initialValues.categoryId
  );
  const i = categoryOptions.indexOf(defCat);

  return (
    <div className={s.formBox}>
      <Formik
        initialValues={initialValues}
        validationSchema={expenseValidationSchema}
        onSubmit={handleExpenseSubmit}
      >
        {({ setFieldValue }) => (
          <Form className={s.expenseForm}>
            <div className={s.selectContainer}>
              <div className={s.selectWrapper}>
                <Select
                  unstyled
                  className={s.customSelect}
                  classNamePrefix="react-select"
                  id="category"
                  name="category"
                  options={categoryOptions}
                  value={selectedCategory || categoryOptions[i]}
                  onChange={(option) => {
                    setSelectedCategory(option);
                    setFieldValue("categoryId", option ? option.value : "");
                  }}
                  placeholder="Select a category"
                />
              </div>
              <ErrorMessage
                name="categoryId"
                component="span"
                className={s.errorText}
              />
            </div>

            <div className={s.sumDateContainer}>
              <div className={s.sumContainer}>
                <div className={s.sdWrapper}>
                  <Field
                    name="amount"
                    type="number"
                    placeholder="0.00"
                    className={s.expenseSum}
                    onKeyDown={validateAmountInput}
                  />
                </div>
                <ErrorMessage
                  name="amount"
                  component="span"
                  className={s.errorText}
                />
              </div>
              <div className={s.dateContainer}>
                <div className={s.sdWrapper}>
                  <MyDatePicker name="transactionDate" />
                </div>
                <ErrorMessage
                  name="transactionDate"
                  component="span"
                  className={s.errorText}
                />
              </div>
            </div>
            <div className={s.commentContainer}>
              <div className={s.commentWrapper}>
                <Field
                  name="comment"
                  type="text"
                  placeholder="Comment"
                  className={s.expenseComment}
                />
              </div>
              <ErrorMessage
                name="comment"
                component="span"
                className={s.errorText}
              />
            </div>
            <div className={s.buttonContainer}>
              <button type="submit" className={s.expenseAddBtn}>
                {buttonText}
              </button>
              <button
                type="button"
                className={s.expenseCnclBtn}
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

import { ErrorMessage, Field, Form, Formik } from "formik";
import Select from "react-select";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectCategories } from "../../../redux/transactions/selector";
import { addTrnThunk } from "../../../redux/transactions/operations";
import MyDatePicker from "../DatePicker/DatePicker";

import s from "./Expense.module.css";
import expenseValidationSchema from "../../../helpers/expenseValidationSchema";

const Expense = ({ closeModal }) => {
  const todayDate = new Date().toISOString().split("T")[0];
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categoriesArr = useSelector(selectCategories);
  const dispatch = useDispatch();

  const categoryOptions = categoriesArr.slice(0, -1).map((category) => ({
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

  const customStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      fontWeight: "400",
      fontSize: "16px",
      padding: "4px 20px",
      color: state.isSelected ? "#FF868D" : "#fff",
      backgroundColor: state.isSelected
        ? "rgba(255, 255, 255, 0.1)"
        : "#5a438c00",
    }),

    control: (defaultStyles) => ({
      ...defaultStyles,
      minHeight: "none",
      // Notice how these are all CSS properties
      backgroundColor: "transparent",
      border: "none",
      padding: "2px 20px",
      boxShadow: "none",
      display: "flex",
      width: "100%",
      fontSize: "16px",
    }),

    menuList: (defaultStyles) => ({
      ...defaultStyles,
      marginTop: "11px",

      height: "157px",
      borderRadius: "8px",
      "::-webkit-scrollbar": {
        width: "0",
        height: "0",
      },
      background: "linear-gradient(180deg, #513d85, #4b39a4)",
    }),
    dropdownIndicator: (defaultStyles) => console.log(defaultStyles),
  };

  const handleExpenseSubmit = (values) => {
    const formattedValues = {
      ...values,
      amount: values.amount > 0 ? -values.amount : values.amount,
    };

    dispatch(addTrnThunk(formattedValues));
    closeModal();
  };

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
                  styles={customStyles}
                  unstyled
                  // className={s.expenseSelect}
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
                Add
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

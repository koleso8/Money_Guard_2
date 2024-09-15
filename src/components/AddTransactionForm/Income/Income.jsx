import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";

import {
  addTrnThunk,
  evoEditTrnThunk,
} from "../../../redux/transactions/operations";
import MyDatePicker from "../DatePicker/DatePicker";

import s from "./Income.module.css";
import incomeValidationSchema from "../../../helpers/incomeValidationSchema";

const Income = ({ closeModal, editedItem, buttonText }) => {
  const dispatch = useDispatch();
  const todayDate = new Date().toISOString().split("T")[0];

  const initialValues = editedItem
    ? {
        amount: Math.abs(editedItem.amount),
        categoryId: "063f1132-ba5d-42b4-951d-44011ca46262",
        comment: editedItem.comment,
        transactionDate: editedItem.transactionDate,
        type: "INCOME",
      }
    : {
        transactionDate: todayDate,
        type: "INCOME",
        categoryId: "063f1132-ba5d-42b4-951d-44011ca46262",
        comment: "",
        amount: "",
      };

  const handleIncomeSubmit = (values) => {
    values.amount = Math.abs(values.amount);
    if (editedItem) {
      dispatch(evoEditTrnThunk({ ...values, id: editedItem.id }));
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

  return (
    <div className={s.formBox}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleIncomeSubmit}
        validationSchema={incomeValidationSchema}
      >
        {() => (
          <Form className={s.incomeForm}>
            <div className={s.sumDateContainer}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div className={s.sdWrapper}>
                  <Field
                    name="amount"
                    type="number"
                    placeholder="0.00"
                    className={s.incomeSum}
                    onKeyDown={validateAmountInput}
                  />
                </div>
                <ErrorMessage
                  name="amount"
                  component="span"
                  className={s.error}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div className={s.sdWrapper}>
                  <MyDatePicker name="transactionDate" />
                </div>
                <ErrorMessage
                  name="transactionDate"
                  component="span"
                  className={s.error}
                />
              </div>
            </div>
            <div className={s.commentContainer}>
              <div className={s.commentWrapper}>
                <Field
                  name="comment"
                  type="text"
                  placeholder="Comment"
                  className={s.incomeComment}
                />
              </div>
              <ErrorMessage
                name="comment"
                component="span"
                className={s.error}
              />
            </div>
            <div className={s.buttonContainer}>
              <button type="submit" className={s.incomeAddBtn}>
                {buttonText}
              </button>
              <button
                type="button"
                className={s.incomeCnclBtn}
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

export default Income;

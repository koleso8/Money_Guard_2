import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";

import { addTrnThunk } from "../../../redux/transactions/operations";
import MyDatePicker from "../DatePicker/DatePicker";

import s from "./Income.module.css";
import incomeValidationSchema from "../../../helpers/incomeValidationSchema";

const Income = ({ closeModal, editedItem }) => {
  const dispatch = useDispatch();
  const todayDate = new Date().toISOString().split("T")[0];

  const initialValues = editedItem || {
    transactionDate: todayDate,
    type: "INCOME",
    categoryId: "063f1132-ba5d-42b4-951d-44011ca46262",
    comment: "",
    amount: "",
  };
  console.log("editedItem", editedItem);
  console.log("initialValues", initialValues);

  const handleIncomeSubmit = (values) => {
    dispatch(addTrnThunk(values));
    closeModal();
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
                Add
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

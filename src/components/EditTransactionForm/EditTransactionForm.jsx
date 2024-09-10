import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";

import { selectCategories } from "../../redux/transactions/selector";
import { editTrnThunk } from "../../redux/transactions/operations";
import MyDatePicker from "../AddTransactionForm/DatePicker/DatePicker";

import s from "./EditTransactionForm.module.css";
import editTransactionValidationSchema from "../../helpers/editTransactionValidationSchema";

const EditTransactionForm = ({
  closeModal,
  transactionDate,
  type,
  categoryId,
  comment,
  amount,
  id,
}) => {
  console.log(type);
  const dispatch = useDispatch();
  const categoriesArr = useSelector(selectCategories);

  const categoryOptions = categoriesArr.map((category) => ({
    value: category.id,
    label: category.name,
  }));

  const categoryLabel =
    categoryOptions.find((option) => option.value === categoryId)?.label ||
    "Unknown category";

  const handleSubmit = (values) => {
    console.log(values.amount);

    dispatch(editTrnThunk({ ...values, id }));
    closeModal();
  };

  return (
    <div className={s.editFormBox}>
      <h2 className={s.editFormTitle}>Edit transaction</h2>
      <Formik
        initialValues={{
          transactionDate,
          type,
          categoryId,
          comment,
          amount,
        }}
        validationSchema={editTransactionValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleBlur, setFieldValue }) => (
          <Form className={s.editForm}>
            <h3 className={s.editTypeTitle}>
              <span
                className={clsx({
                  [s.editIncomeHighlight]: values.type === "INCOME",
                  [s.editType]: true,
                })}
              >
                Income
              </span>
              {" / "}
              <span
                className={clsx({
                  [s.editExpenseHighlight]: values.type === "EXPENSE",
                  [s.editType]: true,
                })}
              >
                Expense
              </span>
            </h3>

            <div className={s.inputsContainer}>
              <div className={s.editCategoryWrapper}>
                <Field
                  type="text"
                  name="categoryId"
                  className={s.editCategory}
                  value={categoryLabel}
                  readOnly
                />
              </div>
              <div className={s.editSumDate}>
                <div className={s.editSumContainer}>
                  <div className={s.editSumWrapper}>
                    <Field
                      type="number"
                      name="amount"
                      className={s.editAmount}
                      onChange={(e) => {
                        let value = e.target.value.replace(/[^0-9.-]/g, "");
                        const parts = value.split(".");
                        if (parts.length > 2) {
                          value = `${parts[0]}.${parts.slice(1).join("")}`;
                        }
                        if (value.indexOf("-") > 0) {
                          value = value.replace(/-/g, "");
                        }
                        const numericValue = value ? +value : "";
                        setFieldValue("amount", numericValue);
                      }}
                      onBlur={handleBlur}
                      value={values.amount}
                      placeholder="0.00"
                    />
                  </div>
                  <div>
                    <ErrorMessage
                      name="amount"
                      component="span"
                      className={s.error}
                    />
                  </div>
                </div>
                <div className={s.editDateContainer}>
                  <div className={s.editDateWrapper}>
                    <MyDatePicker name="transactionDate" />
                  </div>
                  <div>
                    <ErrorMessage
                      name="transactionDate"
                      component="span"
                      className={s.error}
                    />
                  </div>
                </div>
              </div>
              <div className={s.editCommentContainer}>
                <div className={s.editCommentWrapper}>
                  <Field
                    type="text"
                    name="comment"
                    className={s.editComment}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.comment}
                    placeholder="Comment"
                  />
                </div>
                <ErrorMessage
                  name="comment"
                  component="span"
                  className={s.error}
                />
              </div>
            </div>
            <div className={s.editBtnBox}>
              <button type="submit" className={s.editSubmitBtn}>
                Save
              </button>
              <button
                type="button"
                className={s.editCancelBtn}
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

export default EditTransactionForm;

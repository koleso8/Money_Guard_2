import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";

import MyDatePicker from "../AddTransactionForm/DatePicker/DatePicker";

import { selectCategories } from "../../redux/transactions/selector";
import { editTrnThunk } from "../../redux/transactions/operations";
import editTransactionValidationSchema from "../../helpers/editTransactionValidationSchema";
import s from "./EditTransactionForm.module.css";

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
    <div className={clsx(s.editFormBox)}>
      <h2 className={clsx(s.editFormTitle)}>Edit transaction</h2>
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
          <Form className={clsx(s.editForm)}>
            <h3 className={clsx(s.editTypeTitle)}>
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

            <div className={clsx(s.editCategoryWrapper)}>
              <Field
                type="text"
                name="categoryId"
                className={clsx(s.editCategory)}
                value={categoryLabel}
                readOnly
              />
            </div>

            <div className={clsx(s.editSumDate)}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div className={clsx(s.editSumWrapper)}>
                  <Field
                    type="text"
                    name="amount"
                    className={clsx(s.editAmount)}
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
                    className={clsx(s.error)}
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div className={clsx(s.editDateWrapper)}>
                  <MyDatePicker name="transactionDate" />
                </div>
                <div>
                  <ErrorMessage
                    name="transactionDate"
                    component="span"
                    className={clsx(s.error)}
                  />
                </div>
              </div>
            </div>

            <div className={clsx(s.editCommentContainer)}>
              <div className={clsx(s.editCommentWrapper)}>
                <Field
                  type="text"
                  name="comment"
                  className={clsx(s.editComment)}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.comment}
                  placeholder="Comment"
                />
              </div>
              <ErrorMessage
                name="comment"
                component="span"
                className={clsx(s.error)}
              />
            </div>
            <div className={clsx(s.editBtnBox)}>
              <button type="submit" className={clsx(s.editSubmitBtn)}>
                Save
              </button>
              <button
                type="button"
                className={clsx(s.editCancelBtn)}
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

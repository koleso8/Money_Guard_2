import * as yup from "yup";

const editTransactionValidationSchema = yup.object().shape({
  transactionDate: yup
    .date()
    .required("Date is required")
    .max(new Date(), "Date cannot be in the future"),
  comment: yup
    .string()
    .min(3, "Comment must be at least 3 characters")
    .max(20, "Comment cannot exceed 20 characters")
    .required("Comment is required"),
  amount: yup
    .number()
    .typeError("Please enter a valid amount")
    .required("Amount is required")
    .test(
      "is-correct-amount",
      "Amount must be positive for income and non-positive for expenses",
      function (value) {
        const { type } = this.parent;
        if (type === "EXPENSE") {
          return value <= 0;
        }
        if (type === "INCOME") {
          return value > 0;
        }
        return true;
      }
    ),
});

export default editTransactionValidationSchema;

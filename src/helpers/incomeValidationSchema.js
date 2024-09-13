import * as yup from "yup";

const incomeValidationSchema = yup.object().shape({
  amount: yup
    .number()
    .typeError("Please enter a valid amount")
    .min(0.01, "Amount must be at least 0.01")
    .required("Valid amount is required"),
  transactionDate: yup
    .date()
    .required("Date is required")
    .max(new Date(), "Date cannot be in the future"),
  comment: yup
    .string()
    .min(3, "Comment must be at least 3 characters")
    .max(25, "Comment cannot exceed 25 characters")
    .required("Comment is required"),
});

export default incomeValidationSchema;

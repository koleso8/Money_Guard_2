import * as yup from "yup";

const expenseValidationSchema = yup.object().shape({
  amount: yup
    .number()
    .typeError("Please enter a valid amount")
    .min(1, "Amount must be at least 1")
    .required("Amount is required"),
  transactionDate: yup
    .date()
    .required("Date is required")
    .max(new Date(), "Date cannot be in the future"),
  comment: yup
    .string()
    .min(3, "Comment must be at least 3 characters")
    .max(20, "Comment cannot exceed 20 characters")
    .required("Comment is required"),
  categoryId: yup.string().required("Category is required"),
});

export default expenseValidationSchema;

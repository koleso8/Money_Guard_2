import { ErrorMessage, Field, Form, Formik } from 'formik';
import clsx from 'clsx';
import s from './Income.module.css';
import incomeValidationSchema from '../../../helpers/incomeValidationSchema';
import { useDispatch } from 'react-redux';
import { addTrnThunk } from '../../../redux/transactions/operations';
import MyDatePicker from '../DatePicker/DatePicker';

const Income = ({ closeModal }) => {
  const dispatch = useDispatch();
  const todayDate = new Date().toISOString().split('T')[0];

  const initialValues = {
    transactionDate: todayDate,
    type: 'INCOME',
    categoryId: '063f1132-ba5d-42b4-951d-44011ca46262',
    comment: '',
    amount: '',
  };

  const handleIncomeSubmit = values => {
    console.log(values);
    dispatch(addTrnThunk(values));
    closeModal();
  };

  return (
    <div className={clsx(s.formBox)}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleIncomeSubmit}
        validationSchema={incomeValidationSchema}
      >
        {() => (
          <Form className={clsx(s.incomeForm)}>
            <div className={clsx(s.sumDateContainer)}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div className={clsx(s.sdWrapper)}>
                  <Field
                    name="amount"
                    type="number"
                    placeholder="0.00"
                    className={clsx(s.incomeSum)}
                  />
                </div>
                <ErrorMessage
                  name="amount"
                  component="span"
                  className={clsx(s.error)}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div className={clsx(s.sdWrapper)}>
                  <MyDatePicker name="transactionDate" />
                </div>
                <ErrorMessage
                  name="transactionDate"
                  component="span"
                  className={clsx(s.error)}
                />
              </div>
            </div>
            <div className={clsx(s.commentContainer)}>
              <div className={clsx(s.commentWrapper)}>
                <Field
                  name="comment"
                  type="text"
                  placeholder="Comment"
                  className={clsx(s.incomeComment)}
                />
              </div>
              <ErrorMessage
                name="comment"
                component="span"
                className={clsx(s.error)}
              />
            </div>
            <div className={clsx(s.buttonContainer)}>
              <button type="submit" className={clsx(s.incomeAddBtn)}>
                Add
              </button>
              <button
                type="button"
                className={clsx(s.incomeCnclBtn)}
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

import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerThunk } from '../../redux/auth/operations';
import s from './RegistrationForm.module.css';
import PasswordStrengthBar from 'react-password-strength-bar';
import Icon from '../Icon/Icon';
import { Toaster } from 'react-hot-toast';
import * as Yup from 'yup';

export const RegistrationForm = () => {
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, 'To short text')
      .max(15, 'To long text')
      .required('Enter Text'),
    email: Yup.string()
      .min(3, 'To short text')
      .max(15, 'To long text')
      .required('Enter Text'),
    password: Yup.string()
      .min(6, 'To short text')
      .max(12, 'To long text')
      .required('Enter Text'),
    confirmPass: Yup.string()
      .oneOf([Yup.ref('password')], 'passwords don`t match')
      .required('Enter Text'),
  });
  const dispath = useDispatch();
  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPass: '',
  };

  const handleSubmit = (values, options) => {
    console.log(values);
    delete values.confirmPass;
    dispath(registerThunk(values));
    options.resetForm();
  };

  return (
    <div className={s.fon}>
      <Toaster position="top-right" />
      <div className={s.iner}>
        <div className={s.wrap}>
          <div className={s.wrap_logo}>
            <Icon width={36} height={36} name="icon--Money-Guard-2" />
            <h1 className={s.title}>Money Guard</h1>
          </div>
          <div className={s.iner_form}>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              {({ values }) => (
                <Form className={s.form}>
                  <div className={s.wrap_form}>
                    <div className={s.wrap_input}>
                      <Icon
                        width={24}
                        height={24}
                        className={s.svg_form_name}
                        name="icon-userFrom"
                      />
                      <Field
                        name="username"
                        placeholder="Name"
                        className={s.input}
                      />
                      <ErrorMessage
                        name="username"
                        component="span"
                        className={s.error}
                      />
                      <div className={s.line}></div>
                    </div>
                    <div className={s.wrap_input}>
                      <Icon
                        width={20}
                        height={16}
                        className={s.svg_form_first}
                        name="icon-emailForm"
                      />
                      <Field
                        name="email"
                        type="email"
                        placeholder="E-mail"
                        className={s.input}
                      />
                      <ErrorMessage
                        name="email"
                        component="span"
                        className={s.error}
                      />
                      <div className={s.line}></div>
                    </div>
                    <div className={s.wrap_input}>
                      <Icon
                        width={16}
                        height={21}
                        className={s.svg_form_third}
                        name="icon-passwordForm"
                      />
                      <Field
                        name="password"
                        type="password"
                        placeholder="Password"
                        className={s.input}
                      />
                      <ErrorMessage
                        name="password"
                        component="span"
                        className={s.error}
                      />
                      <div className={s.line}></div>
                    </div>
                    <div className={s.wrap_input}>
                      <Icon
                        width={16}
                        height={21}
                        className={s.svg_form_third}
                        name="icon-passwordForm"
                      />
                      <Field
                        name="confirmPass"
                        type="password"
                        placeholder="ConfirmPass"
                        className={s.input}
                      />
                      <ErrorMessage
                        name="confirmPass"
                        component="span"
                        className={s.error_second}
                      />
                      <div className={s.line}></div>
                      <PasswordStrengthBar
                        password={values.confirmPass}
                        scoreWords={['', '', '', '', '']}
                        shortScoreWord={['']}
                        barColors={[
                          '#FFC727',
                          '#ef4836',
                          '#f6b44d',
                          '#2b90ef',
                          '#25c281',
                        ]}
                        minLength={6}
                      />
                    </div>
                  </div>
                  <div>
                    <button className={s.btn_first}>Register</button>
                    <label>
                      <Link to="/login" className={s.btn_second}>
                        Log in
                      </Link>
                    </label>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegistrationForm;

import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerThunk } from '../../redux/auth/operations';
import s from './RegistrationForm.module.css';
import PasswordStrengthBar from 'react-password-strength-bar';
import Icon from '../Icon/Icon';
import { Toaster } from 'react-hot-toast';
import validationSchema from '../../helpers/registrationSchema';
import { useState } from 'react';
import clsx from 'clsx';

export const RegistrationForm = () => {
  const dispath = useDispatch();
  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPass: '',
  };

  const [pass, setPass] = useState('password');

  const iconColor = clsx({
    [s.PassClose]: pass === 'password',
    [s.PassOpen]: pass === 'text',
  });

  const [coPass, setCoPass] = useState('password');

  const iconPassColor = clsx({
    [s.PassClose]: coPass === 'password',
    [s.PassOpen]: coPass === 'text',
  });

  const handleClick = () => {
    setPass(prevState => (prevState == 'password' ? 'text' : 'password'));
  };

  const handlePassClick = () => {
    setCoPass(prevState => (prevState == 'password' ? 'text' : 'password'));
  };

  const handleSubmit = (values, options) => {
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
                        autoComplete="username"
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
                        autoComplete="email"
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
                        autoComplete="new-password"
                        name="password"
                        type={pass}
                        placeholder="Password"
                        className={s.input}
                      />
                      <Icon
                        onClick={handleClick}
                        width={27}
                        height={27}
                        className={iconColor}
                        name="icon-eye"
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
                        autoComplete="new-password"
                        name="confirmPass"
                        type={coPass}
                        placeholder="ConfirmPass"
                        className={s.input}
                      />
                      <Icon
                        onClick={handlePassClick}
                        width={27}
                        height={27}
                        className={iconPassColor}
                        name="icon-eye"
                      />
                      <ErrorMessage
                        name="confirmPass"
                        component="span"
                        className={s.error_second}
                      />
                      <div className={s.line}></div>
                      <PasswordStrengthBar
                        className={s.bar}
                        password={values.password}
                        scoreWords={['', '', '', '', '']}
                        shortScoreWord={['']}
                        barColors={[
                          '#FFC727',
                          '#ef4836',
                          '#91c4f5',
                          '#2b90ef',
                          '#25c281',
                        ]}
                        minLength={3}
                      />
                    </div>
                  </div>
                  <div>
                    <button type="submit" className={s.btn_first}>
                      Register
                    </button>
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

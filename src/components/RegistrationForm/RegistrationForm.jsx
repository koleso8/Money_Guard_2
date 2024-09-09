import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerThunk } from '../../redux/auth/operations';
import s from './RegistrationForm.module.css';
import PasswordStrengthBar from 'react-password-strength-bar';
import Icon from '../Icon/Icon';
import { Toaster } from 'react-hot-toast';

export const RegistrationForm = () => {
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
          <div>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              {({ values }) => (
                <Form className={s.form}>
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
                  </div>
                  <div className={s.wrap_input}>
                    <Icon
                      width={16}
                      height={21}
                      className={s.svg_form_first}
                      name="icon-passwordForm"
                    />
                    <Field
                      name="password"
                      type="password"
                      placeholder="Password"
                      className={s.input}
                    />
                    <PasswordStrengthBar password={values.password} />
                  </div>
                  <div className={s.wrap_button}>
                    <button className={s.btn_first}>Rgister</button>
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

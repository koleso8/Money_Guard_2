import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerThunk } from '../../redux/auth/operations';
import s from './RegistrationForm.module.css';

export const RegistrationForm = () => {
  const dispath = useDispatch();
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, options) => {
    console.log(values);
    dispath(registerThunk(values));
    options.resetForm();
  };

  return (
    <div className={s.fon}>
      <div className={s.iner}>
        <div className={s.wrap}>
          <div className={s.wrap_logo}>
            <svg className={s.logo} width={36} height={36}>
              <use href="./src/images/icons.svg#icon--Money-Guard-2"></use>
            </svg>
            <h1 className={s.title}>Money Guard</h1>
          </div>
          <div>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              <Form className={s.form}>
                <div className={s.wrap_input}>
                  <svg width={24} height={24} className={s.svg_form_name}>
                    <use href="./src/images/icons.svg#icon-userFrom"></use>
                  </svg>
                  <Field
                    name="username"
                    placeholder="Name"
                    className={s.input}
                  />
                </div>
                <div className={s.wrap_input}>
                  <svg width={20} height={16} className={s.svg_form_first}>
                    <use href="./src/images/icons.svg#icon-emailForm"></use>
                  </svg>
                  <Field
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    className={s.input}
                  />
                </div>
                <div className={s.wrap_input}>
                  <svg width={16} height={21} className={s.svg_form_second}>
                    <use href="./src/images/icons.svg#icon-passwordForm"></use>
                  </svg>
                  <Field
                    name="password"
                    type="password"
                    placeholder="Password"
                    className={s.input}
                  />
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
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegistrationForm;

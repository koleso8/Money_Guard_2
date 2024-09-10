import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";
import s from "./LoginForm.module.css";
import Icon from "../Icon/Icon";
import { Toaster } from "react-hot-toast";
import validationSchema from "../../helpers/loginSchema";

export const LoginForm = () => {
  const dispath = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    dispath(loginThunk(values));
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
              <Form className={s.form}>
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
                <div className={s.wrap_button}>
                  <button className={s.btn_first}>Log in</button>
                  <label>
                    <Link to="/register" className={s.btn_second}>
                      Register
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
export default LoginForm;

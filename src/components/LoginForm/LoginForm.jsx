import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";
export const LoginForm = () => {
  const dispath = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    console.log(values);
    dispath(loginThunk(values));
    options.resetForm();
  };

  return (
    <div>
      <div>
        <div>
          <h1>Money Guard</h1>
        </div>
        <div>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
              <div>
                <label>
                  <span>Email</span>
                </label>
                <Field name="email" type="email" placeholder="email" />
              </div>
              <div className="form-control">
                <label>
                  <span>Password</span>
                </label>
                <Field name="password" type="password" placeholder="password" />
              </div>
              <div>
                <button>Log in</button>
                <label>
                  <Link to="/register">Register</Link>
                </label>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;

import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerThunk } from "../../redux/auth/operations";

export const RegistrationForm = () => {
  const dispath = useDispatch();
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };


  const handleSubmit = (values, options) => {
    console.log(values);
    dispath(registerThunk(values));
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
                  <span>Name</span>
                </label>
                <Field name="username" placeholder="name" />
              </div>
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
                <button>Rgister</button>
                <label>
                  <Link to="/login">Log in</Link>
                </label>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default RegistrationForm;

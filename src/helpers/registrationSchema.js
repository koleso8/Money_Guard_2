import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .max(25, 'A maximum of 25 characters is allowed')
    .required('Mandatory field'),
  email: Yup.string()
    .min(3, 'E-mail must be at least 3 characters')
    .max(50, 'A maximum of 50 characters is allowed')
    .required('Mandatory field'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .max(12, 'A maximum of 12 characters is allowed')
    .required('Mandatory field'),
  confirmPass: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords don`t match')
    .required('Mandatory field'),
});

export default validationSchema;

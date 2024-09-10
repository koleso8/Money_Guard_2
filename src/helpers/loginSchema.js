import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .min(3, 'E-mail must be at least 3 characters')
    .max(25, 'A maximum of 25 characters is allowed')
    .required('Mandatory field'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .max(12, 'A maximum of 12 characters is allowed')
    .required('Mandatory field'),
});

export default validationSchema;

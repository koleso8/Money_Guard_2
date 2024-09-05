import * as Yup from 'yup';

export const registrationSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, 'Must be at least 3 characters')
    .max(20, 'Must be less  than 20 characters')
    .required('Name is required'),
  email: Yup.string().trim().email().required('Email is required'),
  password: Yup.string()
    .trim()
    .min(3, 'Must be at least 3 characters')
    .max(20, 'Must be less  than 20 characters')
    .required('Password is required'),
});

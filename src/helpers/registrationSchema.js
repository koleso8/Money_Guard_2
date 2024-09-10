import * as Yup from 'yup';

export const registrationSchema = Yup.object().shape({
  username: Yup.string()
    .trim()
    .min(3, 'Must be at least 3 characters')
    .max(20, 'Must be less  than 20 characters')
    .required('Name is required'),
  email: Yup.string().trim().email().required('Email is required'),
  password: Yup.string()
    .trim()
    .min(6, 'Must be at least 6 characters')
    .max(12, 'Must be less  than 12 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Password is required')
    .min(6, 'Must be at least 6 characters long')
    .max(12, 'Must be less  than 12 characters'),
});

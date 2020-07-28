import * as yup from 'yup'

const formSchema = yup.object().shape({
    username: yup
        .string()
        .min(3, 'Username must be at least 3 letters long')
        .max(15, 'Username is too long')
        .required('Username is required'),
    primaryemail: yup
        .string()
        .email('Email must be valid')
        .max(300, 'Email is too long')
        .required('Email is required'),
    password: yup
        .string()
        .max(15, 'Password is too long')
        .required('Password is required'),
})

export default formSchema;
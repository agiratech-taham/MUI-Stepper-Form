import * as yup from "yup"

const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

export const loginSchema = yup.object().shape({
    firstName: yup.string().min(4).required("First Name must be minimum 4 characters"),
    lastName: yup.string().required("First Name must be minimum 4 characters"),
    dob: yup.string().nullable().required("Please enter your age"),
    gender:yup.string().required("A radio option is required"),
    email: yup
      .string()
      .matches(emailRegex, "must be a valid email")
      .required("Email Id is required"),
    phoneNumber: yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(10)
    .required('A phone number is required'),
    alternatePhone: yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(10)
    .required('A phone number is required'),
    address1: yup.string().min(6).required("Address should be minimum 6 characters"),
    address2: yup.string().min(6).required("Address should be minimum 6 characters"),
    country: yup.string().required("Country Name required"),
    cardNumber: yup.number().required("Card number required"),
    cardMonth: yup.string().required("Card month required"),
    cardYear: yup.number().required("Card Year required"),
})
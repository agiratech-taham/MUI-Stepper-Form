import * as yup from "yup"

const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const phoneRegExp =/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
const cardRegex=/^\(?([0-9]{4})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/
const cvvRegex=/^\(?([0-9]{3})\)?[-. ]?([0-9]{0})$/
export const formValidationSchema = [
  yup.object().shape({
    
    firstName: yup.string().required("First Name is required*").min(3),
    lastName: yup.string().required("Last Name is required*"),
    dob: yup.string().nullable().required("Age is required*"),
    gender:yup.string().required("Please select your gender*"),
  }),
  yup.object().shape({
  
    email: yup
      .string()
      .required("Email Id is required")
      .matches(emailRegex, "must be a valid email"),
    phoneNumber: yup.string()
    .required('A phone number is required')
    .matches(phoneRegExp, 'Phone number is not valid'),
    // .positive("A phone number can't start with a minus")
    // .integer("A phone number can't include a decimal point")
    // .typeError("That doesn't look like a phone number"),
    alternatePhone: yup.string()
    .required('A phone number is required')
    .matches(phoneRegExp, 'Phone number is not valid'),
    // .positive("A phone number can't start with a minus")
    // .integer("A phone number can't include a decimal point")
    // .typeError("That doesn't look like a phone number"),
    address1: yup.string().min(6).required("Address should be minimum 6 characters"),
    address2: yup.string().required("Address-2 is required"),
    country: yup.string().required("Country Name required"),
  }),
  yup.object().shape({
    cardName: yup.string().required("Card Name is required*").min(3),
    cardNumber: yup.string()
    .required("Card Number is required")
    .matches(cardRegex, 'Card number is not valid'),
    cardMonth: yup.string().required("Card month required"),
    cardYear: yup.string().nullable().required("Please enter the year"),
    cvv: yup.string()
    .matches(cvvRegex, 'cvv is not valid (eg: 399)')
    .required('cvv is required(eg: 399)'),
}),

]

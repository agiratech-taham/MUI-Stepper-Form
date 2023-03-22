import * as yup from "yup"

const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

export const formValidationSchema = [
  yup.object().shape({
    firstName: yup.string().required("First Name is required*").min(4),
    lastName: yup.string().required("Last Name is required*"),
    dob: yup.string().nullable().required("Age is required*"),
    gender:yup.string().required("Please select your gender*"),
  }),
  yup.object().shape({
  
    email: yup
      .string()
      .required("Email Id is required")
      .matches(emailRegex, "must be a valid email"),
    phoneNumber: yup.number()
    .required('A phone number is required')
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point"),
    // .typeError("That doesn't look like a phone number"),
    alternatePhone: yup.number()
    .required('A phone number is required')
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point"),
    // .typeError("That doesn't look like a phone number"),
    address1: yup.string().min(6).required("Address should be minimum 6 characters"),
    address2: yup.string().required("Address-2 is required"),
    country: yup.string().required("Country Name required"),
  }),
  yup.object().shape({

    cardNumber: yup.number().required("Card number required"),
    cardMonth: yup.string().required("Card month required"),
    cardYear: yup.string().nullable().required("Please enter the year"),
}),

]

import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import { useForm, FormProvider, useFormContext, Controller  } from "react-hook-form"

function getSteps() {
  return [
    "Basic Information",
    "Contact Information",
    "Personal Information",
    "Payment",
  ];
}

const BasicInformation = ()=>{
  const {control, formState: {errors}} = useFormContext();
  return (
    <>
    <Controller
        control={control}
        name="firstName"
        rules={{required: "First name is required.",}}
        render={({ field }) => (
          <TextField
            id="first-name"
            label="First Name"
            variant="outlined"
            placeholder="Enter Your First Name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors.firstName)}
            helperText={errors.firstName?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="lastName"
        rules={{required: "Last name is required.",}}
        render={({ field }) => (
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors.lastName)}
            helperText={errors.lastName?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="nickName"
        render={({ field }) => (
          <TextField
            id="nick-name"
            label="Nick Name"
            variant="outlined"
            placeholder="Enter Your Nick Name"
            fullWidth
            margin="normal"
            {...field}
            
          />
        )}
      />
    </>
  );
};
const ContactInformation = ()=>{
  const {control, formState: {errors}} = useFormContext();
  return (
    <>
       <Controller
        control={control}
        name="emailAddress"
        rules={{required: "E-mail Address is required.",}}
        render={({ field }) => (
          <TextField
            id="email"
            label="E-mail"
            variant="outlined"
            placeholder="Enter Your E-mail Address"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors.emailAddress)}
            helperText={errors.emailAddress?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="phoneNumber"
        rules={{required: "Phone Number is required.",}}
        render={({ field }) => (
          <TextField
            id="phone-number"
            label="Phone Number"
            variant="outlined"
            placeholder="Enter Your Phone Number"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors.phoneNumber)}
            helperText={errors.phoneNumber?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="alternatePhone"
        rules={{required: "Alternate Phone is required.",}}
        render={({ field }) => (
          <TextField
            id="alternate-phone"
            label="Alternate Phone"
            variant="outlined"
            placeholder="Enter Your Alternate Phone"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors.alternatePhone)}
            helperText={errors.alternatePhone?.message}
          />
        )}
      />
    </>
  );
};
const PersonalInformation = ()=>{
  const {control, formState: {errors}} = useFormContext();
  return (
    <>
       <Controller
        control={control}
        name="address1"
        rules={{required: "Address 1 is required.",}}
        render={({ field }) => (
          <TextField
            id="address1"
            label="Address 1"
            variant="outlined"
            placeholder="Enter Your Address 1"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors.address1)}
            helperText={errors.address1?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="address2"
        rules={{required: "Address 2 is required.",}}
        render={({ field }) => (
          <TextField
            id="address2"
            label="Address 2"
            variant="outlined"
            placeholder="Enter Your Address 2"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors.address2)}
            helperText={errors.address2?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="country"
        rules={{required: "Country Name is required.",}}
        render={({ field }) => (
          <TextField
            id="country"
            label="Country"
            variant="outlined"
            placeholder="Enter Your Country Name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors.country)}
            helperText={errors.country?.message}
          />
        )}
      />
    </>
  );
};
const PaymentInformation = ()=>{  
  const {control, formState: {errors}} = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="cardNumber"
        rules={{required: "Card Number is required.",}}
        render={({ field }) => (
          <TextField
            id="cardNumber"
            label="Card Number"
            variant="outlined"
            placeholder="Enter Your Card Number"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors.cardNumber)}
            helperText={errors.cardNumber?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="cardMonth"
        rules={{required: "Card Month is required.",}}
        render={({ field }) => (
          <TextField
            id="cardMonth"
            label="Card Month"
            variant="outlined"
            placeholder="Enter Your Card Month"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors.cardMonth)}
            helperText={errors.cardMonth?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="cardYear"
        rules={{required: "Card Year is required.",}}
        render={({ field }) => (
          <TextField
            id="cardYear"
            label="Card Year"
            variant="outlined"
            placeholder="Enter Your Card Year"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors.cardYear)}
            helperText={errors.cardYear?.message}
          />
        )}
      />
    </>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
     return <BasicInformation/>;

    case 1:
     return <ContactInformation/>;

    case 2:
     return <PersonalInformation/>;

    case 3:
     return <PaymentInformation/>;

    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  // const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      nickName: "",
      emailAddress: "",
      phoneNumber: "",
      alternatePhone: "",
      address1: "",
      address2: "",
      country: "",
      cardNumber: "",
      cardMonth: "",
      cardYear: "",
    }
  });
  const isStepFailed =()=>{
    // console.log(methods.formState.errors);
    return Boolean(Object.keys(methods.formState.errors).length)
  }
  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  // const handleNext = (data) => {
  //   console.log(data)
  //   setActiveStep(activeStep + 1);
  //   setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  // };

  isStepFailed();
  const handleNext = (data) => {
    console.log(data);
    if (activeStep == steps.length - 1) {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((data) => data.json())
        .then((res) => {
          console.log(res);
          setActiveStep(activeStep + 1);
        });
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };
  // const onSubmit = (data)=>{
  //   console.log(data)
  // }
  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                optional
              </Typography>
            );
          }
          if (isStepFailed() && activeStep == index) {
            labelProps.error=true;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
        <FormProvider {...methods}>
         <form onSubmit={methods.handleSubmit(handleNext)}>{getStepContent(activeStep)}
         <Button
            // className={classes.button}
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            back
          </Button>
          {isStepOptional(activeStep) && (
            <Button
              // className={classes.button}
              variant="contained"
              color="primary"
              onClick={handleSkip}
              sx={{ mr: 1 }}
            >
              skip
            </Button>
          )}
          <Button
            // className={classes.button}
            variant="contained"
            color="primary"
            // onClick={handleNext}
            type="submit"
            sx={{ mr: 1 }}
          >
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
         </form>
        </FormProvider>
          
        </>
      )}
    </div>
  );
};

export default LinaerStepper;

import * as React from "react";
import { Controller, Control, Path, FieldValues } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { FormControl, FormControlLabel, RadioGroup ,FormHelperText} from "@mui/material";
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import { Box } from "@mui/system";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import './FormInput.css';

// export const AutocompleteField = (props) => {
//   const { control, options, name, multiple } = props;
//   return (
//     <Controller
//       name={name}
//       control={control}
//       rules={{
//         required: "This field is requried*"
//       }}
//       render={({ field:{ onChange, ref ,...field}, fieldState: { error } }) => {
//         return (
//           <>
//             <Autocomplete
//             // multiple = { multiple}
//               getOptionLabel={(option) => {
//                 return option.label
//               }}
//               // renderOption= {(props, option, { selected }) => (
//               //   <li {...props} style={{ color: 'red' }}> {option.label} </li> 
//               // )}
//               onChange={(event, newValue) => {
                
//                 onChange(newValue );
//               }}
//               id="controllable-states-demo"
//               options={options}
//               renderInput={(params) => (
//                 <TextField
//                   {...params}
//                   {...field}
//                   label={name}
//                   inputRef={ref}
                  
//                 />
//               )}
//             />
//             {error ? (
//       <FormHelperText style={{color:'#d32f2f',marginLeft:'1rem'}}>{error.message}</FormHelperText>
             
//             ) : null}
//           </>
//         );
//       }}
//     />
//   );
// };
export const AutocompleteField = (props) => {
  const { control, options, name, multiple } = props;
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: "This field is requried*"
      }}
      render={({ field, fieldState: { error } }) => {
        const { onChange, value, ref } = field;
        return (
          <>
            <Autocomplete

            // multiple = { multiple}
              // value={
              //   value
              //     ? options.find((option) => {
              //   return value === option.code;
              //       }) ?? null
              //     : null
              // }
              getOptionLabel={(option) => {
                return option.label
              }}
              renderOption= {(props, option, { selected }) => (
                <li {...props} style={{ color: 'red' }}> {option.label} </li> 
              )}
              onChange={(event, newValue) => {
                console.log('newValue', newValue);
                onChange(newValue ? newValue.code : null);
              }}
              id="controllable-states-demo"
              options={options}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={props.placeholder}
                  inputRef={ref}
                />
              )}
            />
            {error ? (
      <FormHelperText style={{color:'#d32f2f',marginLeft:'1rem'}}>{error.message}</FormHelperText>

            ) : null}
          </>
        );
      }}
    />
  );
};
export const InputTextField = (props) => {
  const { control, name, errors, rules } = props;
  return (
    <Controller
      name={name}
      control={control}
      rules= {rules}
      render={({ field }) => (
        <TextField
          {...props}
          {...field}
          error={errors}
          helperText={errors?.message}
        />
      )}
      />
  )
};

// const DATE_FORMAT = format('DD/MM/YYYY');
export const DatePickerField = (props) => {
  const { name,defaultValue, control, errors, label } = props
  return (
    
    <Controller
    name={name}
    control={control}
    render={
        ({ field }) =>
        <LocalizationProvider 
       
        dateAdapter={AdapterDayjs}>
            <DatePicker
                label={label}
                // defaultValue={dayjs('2019-01-25').format('DD/MM/YYYY')}
                {...props}
                defaultValue={defaultValue}
                {...field}
                error={errors}
            />
          <FormHelperText style={{color:'#d32f2f',marginLeft:'1rem'}}>{errors?.message}</FormHelperText>
        </LocalizationProvider>
       }
   /> 
  );
        
      

};

export const InputRadioField = (props) => {
  const { control, name, errors,options, rules } = props;
  return (
    <Controller
    control={control}
    name={name}
    rules={rules}
    render={({ field,fieldState: { error }  }) => (
      
      <Box>

      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      
      <RadioGroup
      row
      {...props}
      {...field}
      // error={errors}
      // helperText={errors[name]?.message}
      >
        {options.map((item)=> {
          return (
            <FormControlLabel
            key={item}
            value={item}
            control={<Radio/>}
            label={item}
            />
            )
          })}
        {/* <FormControlLabel
        value="Male"
        control={<Radio/>}
        label="Male"
        />
        <FormControlLabel
        value="Female"
        control={<Radio/>}
        label="Female"
        />
        <FormControlLabel
        value="Others"
        control={<Radio/>}
        label="Others"
      /> */}
      </RadioGroup>
      <FormHelperText style={{color:'#d32f2f',marginLeft:'1rem'}}>{errors?.message}</FormHelperText>
      </Box>
        
    )}

    />
  )
};

// working
// export const AutocompleteFieldMultiple = (props) => {
//   const { control, options, name, multiple } = props;
//   return (
//     <Controller
//       name={name}
//       control={control}
//       rules={{
//         required: "This field is requried*"
//       }}
//       defaultValue = {[]}
//       render={({ field, fieldState: { error } }) => {
//         const { onChange, value, ref } = field;
//         return (
//           <>
//             <Autocomplete
//               // value={
//               //   value
//               //     ? options.find((option) => {
//               //   return value === option.code;
//               //       }) ?? null
//               //     : null
//               // }
//               multiple
//              defaultValue = {[]}

//               getOptionLabel={(option) => {
//                 return option.label
//               }}
//               renderOption= {(props, option, { selected }) => (
//                 <li {...props} style={{ color: 'red' }}> {option.label} </li> 
//               )}
//               onChange={(event, newValue) => {
//                 console.log('newValue', newValue);
//                 onChange(newValue ? newValue.code : []);
//               }}
//               id="controllable-states-demo"
//               options={options}
//               renderInput={(params) => (
//                 <TextField
//                   {...params}
//                   label={props.placeholder}
//                   inputRef={ref}
//                 />
//               )}
//             />
//             {error ? (
//       <FormHelperText style={{color:'#d32f2f',marginLeft:'1rem'}}>{error.message}</FormHelperText>
             
//             ) : null}
//           </>
//         );
//       }}
//     />
//   );
// };

// ** Text-field Imports

import { TextField, TextFieldProps } from "@mui/material";

const CustomTextField = (props: TextFieldProps) => {
  const {
    size = "small",
    variant = "filled",
    InputLabelProps,
    ...rests
  } = props;
  return (
    <TextField
      size={size}
      InputLabelProps={{ ...InputLabelProps }}
      variant={variant}
      {...rests}
    />
  );
};

export default CustomTextField;

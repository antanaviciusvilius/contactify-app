import TextField, { TextFieldProps } from '@mui/material/TextField';
import { FunctionComponent } from 'react';
import './FilterTextField.scss';

const FilterTextField: FunctionComponent<TextFieldProps> = (props) => {
  return (
    <TextField
      {...props}
      className="filter-input"
      size='small'
    >
      {props.children}
    </TextField>
  );
};

export default FilterTextField;
